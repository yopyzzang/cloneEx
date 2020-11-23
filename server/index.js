
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 30044
const path = require('path')
const morgan = require('morgan')
const cookie = require('cookie-parser')
const createError = require('http-errors')
const router = express.Router();


//get request
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//
// const data = [];
//
// app.get('/data', (req, res, next) => {
//   res.json({data});
// })
// app.post('/data', (req, res, next) => {
//   data.push(req.body);
//   res.json({success: true});
// })
// app.put('/data', (req, res, next) => {
//   res.json({data});
// })
// app.delete('/data', (req, res, next) => {
//   res.json({data});
// })
//
//
//
//
// app.get('*.*', (req, res,next) => {
//   res.sendFile(path.join(__dirname, '../dist/ExampleClone', req.url))
// })
//
// app.get('*', (req, res,next) => {
//   res.sendFile(path.join(__dirname, '../dist/ExampleClone', 'index.html'))
//   //res.json({hello: 'wsdfasdf'});
// })
//
//
//
// app.use(cookie());




//-----------------------------------------postgreSQL Connection--------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const {Client} = require('pg');

const client = new Client({
  user: 'yopy',
  host: '127.0.0.1',
  database: 'node',
  password: '020211',
  port: 5432,
});

client.connect()
  .then(()=>console.log('DB CONNECTED'))
  .catch(err=>console.error('DB CONNECTION ERROR',err.stack))

const insertSql = "INSERT INTO testnode (id, pw) VALUES($1, $2) RETURNING *";
app.get('/sql/id/:id',((req, res,next) =>{
  console.log(req.params);
}))

app.get('/sql/id/:id/pw/:pw',((req, res,next) =>{
  console.log(req.params);
}))

const values = ['dmfgalllghjs', '12234534'];

const selectSql = "SELECT * FROM testnode";
let list = []


const insert = client.query(insertSql, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
});

client.query(selectSql,(err,res)=>{
  if(err) throw err
  console.log(res)
  list = res.rows
})
console.log(client.query(selectSql));

app.get('/sql',(req,res,next)=>{
  res.json({list});
})

const selectUser = "SELECT * FROM testnode WHERE ID = $1"

let userID = [];


console.log(userID);

client.query(selectUser, [userID],(err,res)=>{
  if(err) throw err
  console.log(res)
})



