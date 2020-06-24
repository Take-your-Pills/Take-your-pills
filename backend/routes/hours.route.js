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
  
    return connection.query('INSERT INTO hours SET ?' , [formData], (err, results) => {
        if(err) {
            return res.status(500).json({
                error: err.message,
                sql: err.sql,
            });
        }
        return connection.query('SELECT * FROM hours WHERE id = ?', results.insertId, (err2, records) => {
            if(err2){
                return res.status(500).json({
                    error: err2.message,
                    sql: err2.sql,
                });
            }
            const InsertedHours = records[0];
            return res.status(201)
            .json(InsertedHours)
        });
    });
  });




module.exports = router;