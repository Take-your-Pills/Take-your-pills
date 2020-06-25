const express = require('express');
const router = express.Router();
const connection = require('../config');


router.get('/', (req, res) => {

    connection.query('SELECT * FROM hours', (err, results) => {
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

    let sql = "INSERT INTO `hours` (hour, drug_id) VALUES "
      formData.map( time => {
        if(formData.indexOf(time) !== formData.length -1) {
          sql += `("${time.hour}", "${time.drug_id}"),`
        } else {
          sql += `("${time.hour}", "${time.drug_id}");`
        }
    })
    console.log("hour",formData)
  
    return connection.query(sql , (err, results) => {
        if(err) {
            console.log(err.sql)
            return res.status(500).json({
                error: err.message,
                sql: err.sql,
            });
        }
    });
  });




module.exports = router;