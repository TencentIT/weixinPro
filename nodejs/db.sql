 USE web1806;
 #药品yaopin       [id,name,price]
 #库存kucun        [id,yid,bank]
 #销售xiaoshou     [id,yid,sales]
 CREATE TABLE yaopin(
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255),
   price DECIMAL(10,2)
 );
 CREATE TABLE kucun(
   id INT PRIMARY KEY AUTO_INCREMENT,
   yid INT,
   bank INT
 );
 CREATE TABLE xiaoshou(
   id INT PRIMARY KEY AUTO_INCREMENT,
   yid INT,
   sales DECIMAL(10,2)
 );
 INSERT INTO yaopin VALUES(null,'六味地黄丸',100);
 INSERT INTO yaopin VALUES(null,'五味地黄丸',90);
 INSERT INTO yaopin VALUES(null,'999感冒灵',10);
 INSERT INTO yaopin VALUES(null,'阿莫西林',12);
 INSERT INTO kucun VALUES(null,1,900);
 INSERT INTO kucun VALUES(null,2,300);
 INSERT INTO kucun VALUES(null,3,3000);
 INSERT INTO kucun VALUES(null,4,10000);
 INSERT INTO xiaoshou VALUES(null,1,3000.00);
 INSERT INTO xiaoshou VALUES(null,2,3200.00);
 INSERT INTO xiaoshou VALUES(null,3,9000.00);
 INSERT INTO xiaoshou VALUES(null,4,1200.00);
 
