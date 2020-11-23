const express = require('express')
const app = express();
const exampleCRUD = require('./db/exampleRouter');
const port = 48452

app.listen(port,()=>{
  console.log(`Server on ${port}`);
})
app.use('/exampleCRUD',exampleCRUD);
