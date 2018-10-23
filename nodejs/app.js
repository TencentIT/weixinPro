//1:加载相应模块
const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
//2:创建express服务器
var app = express();
app.use(express.static(__dirname+"/public"));
//3:绑定监听端口
app.listen(3000);
//4:处理请求分析
//GET /sales   查询销售数据
//商品编号 商品名称  商品销售额
//?参数 没参数
//?sql  多表查询套路
//(1)将查询表名保存FROM 后面 
//   FROM yaopin INNER JOIN xiaoshou
//(2)为表名起一个别名
//   FROM yaopin y INNER JOIN xiaoshou x
//(3)找二个表之间关系(两个列相等 不相等 大于 小于)
//   ON y.id = x.yid
app.get("/sales",(req,res)=>{
var sql = " SELECT y.id,y.name,x.sales";
    sql +=" FROM yaopin y INNER JOIN xiaoshou x";
    sql +=" ON y.id = x.yid";
    pool.query(sql,(err,result)=>{
         if(err)throw err;
         res.send(result);
    });
});

app.get("/salesmonth",(req,res)=>{
    var id = parseInt(req.query.id);
 var sql = " SELECT y.id,y.name,x.sales,x.month";
 sql+=" FROM yaopin y INNER JOIN xiaoshou x";
 sql+=" ON y.id = x.yid";
 sql+=" WHERE x.yid = ?";
 pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      res.send(result);
 })
})

//5:处理请求
//  GET /bank   查询库存数据
//  商品编号 商品名称  库存量

app.get("/salesyear",(req,res)=>{
	var sql = "SELECT year ,sum(sales) as c "
		sql+=" FROM xiaoshou"
		sql+=" Group BY year"
    pool.query(sql,(err,result)=>{
    	if(err) throw err;
    	res.send(result)
    })
})

app.get("/img",(req,res)=>{
  var obj = [
    {id:1,pic:"http://localhost:3000/assets/images/banner-01.png"},
    {id:1,pic:"http://localhost:3000/assets/images/banner1.jpg"},
    {id:1,pic:"http://localhost:3000/assets/images/banner-02.png"},
    {id:1,pic:"http://localhost:3000/assets/images/banner2.jpg"}
  ];
  res.send(obj)

})