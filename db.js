const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'barebonesuser',
  password: 'barebones',
  database: 'barebones-db'
})

connection.connect()

connection.query('SELECT * from usuario', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  })

connection.end()