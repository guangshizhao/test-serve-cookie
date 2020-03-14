const express = require('express')
const http = express()
const cors = require('cors');
const user=require('./user');
http.use(express.json())// 解析post发送的数据 //  post 请求头是 json
/* var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  maxAge: '1728000'
  //这一项是为了跨域专门设置的
}
http.use(cors(corsOptions)) */
http.use('*',(req, res, next)=> {
  // console.log(req.headers);
        res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
        res.header('Access-Control-Allow-Headers', 'Content-Type,aa,bb,Authorization')//自定义字段
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
        res.header("Access-Control-Allow-Credentials",true); //带cookies7     res.header("Content-Type", "application/json;charset=utf-8");
        next()
   });
http.use('/a',user)


http.get('/getor',(req,res)=>{
  console.log("gteor");
  res.send('getor')
})
http.get('/getorsssss',(req,res)=>{
  console.log("gteorssss");
  res.send('getors')
})

http.post('/login',(req,res)=>{
  console.log('完美');
  res.send('完美11')
})


http.listen(8888, () => {
  console.log('8888 端口启动成功12')
})
