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

  connection.query('SELECT id, title, DAY(start_date) AS start_day,MONTH(start_date) AS start_month, YEAR(start_date) AS start_year,DAY(end_date) AS end_day, MONTH(end_date) AS end_month, YEAR(end_date) AS end_year FROM prescriptions WHERE user_id = ?', [id], (err, results) => {
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

  console.log(formData)

  return connection.query('INSERT INTO prescriptions SET ?' , [formData], (err, results) => {
      if(err) {
          return res.status(500).json({
              error: err.message,
              sql: err.sql,
          });
      }
      return connection.query('SELECT * FROM prescriptions WHERE id = ?', results.insertId, (err2, records) => {
          if(err2){
              return res.status(500).json({
                  error: err2.message,
                  sql: err2.sql,
              });
          }
          const InsertedPrescription = records[0];
          return res.status(201)
          .json(InsertedPrescription)
      });
  });
});





module.exports = router;