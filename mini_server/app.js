const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3003);

app.get("/imgList",(req,res)=>{
  var obj = [
    {id:1,pic:"http://127.0.0.1:3003/images/banner1.png"},
    {id:1,pic:"http://127.0.0.1:3003/images/banner2.png"},
    {id:1,pic:"http://127.0.0.1:3003/images/banner3.png"},
    {id:1,pic:"http://127.0.0.1:3003/images/banner4.png"}
  ];
  res.send(obj)
})

app.get("/message",(req,res)=>{
  var rows = [];
  rows.push({
      title:"手机大促",date:"2018-11-11",img_url:"http://127.0.0.1:3003/images/banner1.png",des:"越努力,越...",})
  rows.push({
      title:"pad大促",date:"2018-11-11",
      img_url:"http://127.0.0.1:3003/images/banner2.png",des:"越努力,越...",})
  rows.push(
      {title:"洗衣粉大促",date:"2018-11-11",
      img_url:"http://127.0.0.1:3003/images/banner3.png",des:"越努力,越...",})
      rows.push(
        {title:"洗衣粉大促",date:"2018-11-11",
        img_url:"http://127.0.0.1:3003/images/banner4.png",des:"越努力,越...",})     
  res.send(rows);
});