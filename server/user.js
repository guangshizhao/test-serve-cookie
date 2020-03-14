const app = require('express').Router();

app.get('/get',(req,res)=>{
  // console.log(req.headers);
  res.send('userGet')
})
module.exports=app;