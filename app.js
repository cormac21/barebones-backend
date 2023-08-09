const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'barebonesuser',
  password: 'barebones',
  database: 'barebones-db'
})

app.get('/', (req, res) => {
  connection.query('SELECT * from usuario', (err, rows, fields) => {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
    res.send(rows);
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})