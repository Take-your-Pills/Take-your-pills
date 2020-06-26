const express = require('express');
const router = express.Router();
const connection = require('../config');

router.get('/', (req, res) => {

    connection.query('SELECT * FROM prescriptions', (err, results) => {
        if (err) {
            res.status(500).json({
              error: err.message,
              sql: err.sql,
            });
          } else {
            res.json(results);
          }
    })
});

router.get('/:id', (req, res) => {

  const id = req.params.id

  connection.query('SELECT id, title, DAY(start_date) AS start_day,MONTH(start_date) AS start_month, YEAR(start_date) AS start_year,DAY(end_date) AS end_day, MONTH(end_date) AS end_month, YEAR(end_date) AS end_year, days_left FROM prescriptions WHERE user_id = ?', [id], (err, results) => {
      if (err) {
          res.status(500).json({
            error: err.message,
            sql: err.sql,
          });
        } else {
          res.json(results);
        }
  })
});

router.post('/', (req, res) => {

  const formData = req.body;

  const prescriptionObject = formData.shift()

  console.log("prescriptionObject", prescriptionObject)
  console.log("formdata", formData)

  return connection.query('INSERT INTO prescriptions SET ?' ,[prescriptionObject], (err, results) => {
      if(err) {
        console.log("err in pres")
          return res.status(500).json({
              error: err.message,
              sql: err.sql,
          });
      }
      const drugsArr = formData.map(drug => {
        drug.prescription_id = results.insertId
        return drug
      })
      console.log("dugsArr", drugsArr)
      let sql = "INSERT INTO `drugs` (id, prescription_id, name, duration, times_a_day, dose, notes, doses_taken, days_left, doses_supposed) VALUES "
      drugsArr.map( drug => {
        if(drugsArr.indexOf(drug) !== drugsArr.length -1) {
          sql += `("${drug.id}", ${drug.prescription_id}, "${drug.name}", ${drug.duration}, ${drug.times_a_day}, "${drug.dose}", "${drug.notes}", ${drug.doses_taken}, ${drug.days_left}, ${drug.doses_supposed}),`
        } else {
          sql += `("${drug.id}", ${drug.prescription_id}, "${drug.name}", ${drug.duration}, ${drug.times_a_day}, "${drug.dose}", "${drug.notes}", ${drug.doses_taken}, ${drug.days_left}, ${drug.doses_supposed});`
        }
      })
      
      return connection.query(sql, (err2, records) => {
          if(err2){
            console.log(err2.sql)
              return res.status(500).json({
                  error: err2.message,
                  sql: err2.sql,
              });
          }
          //const InsertedPrescription = records[0];
          //return res.status(201)
          //.json(InsertedPrescription)
      });
  });
});





module.exports = router;