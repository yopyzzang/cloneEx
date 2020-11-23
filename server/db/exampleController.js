const {Client} = require("pg");
const { config } = require('./config.json');
const exampleController = {};

const client = new Client({
  user: 'yopy',
  host: '127.0.0.1',
  database: 'node',
  password: '020211',
  port: 5432,
});

client.connect()
  .then(()=>console.log("DB CONNECTED..."))
  .catch(err=>console.error("DB CONNECTION ERROR",err.stack))

exampleController.show = function allUser(){
const allUserSQL = "SELELCT * FROM testnode";
client.query(allUserSQL,(err,res)=>{
  if (err) throw err
  console.log(res)
  res.send(res);
})
}

module.exports = exampleController;

