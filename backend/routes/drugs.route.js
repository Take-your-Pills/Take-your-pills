const express = require('express');
const router = express.Router();
const connection = require('../config');

router.get('/', (req, res) => {

    connection.query('SELECT * FROM drugs', (err, results) => {
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
  
    return connection.query('INSERT INTO drugs SET ?' , [formData], (err, results) => {
        if(err) {
            return res.status(500).json({
                error: err.message,
                sql: err.sql,
            });
        }
        return connection.query('SELECT * FROM drugs WHERE id = ?', results.insertId, (err2, records) => {
            if(err2){
                return res.status(500).json({
                    error: err2.message,
                    sql: err2.sql,
                });
            }
            const InsertedDrugs = records[0];
            return res.status(201)
            .json(InsertedDrugs)
        });
    });
  });





module.exports = router;