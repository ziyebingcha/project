DROP DATABASE  IF EXISTS xianhu;
SET NAMES UTF8;
CREATE DATABASE xianhu CHARSET=UTF8;
USE xianhu;
CREATE TABLE xh_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) UNIQUE NOT NULL,
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128) DEFAULT 'img/avatar/default.png',
  user_name VARCHAR(32),
  gender INT
--  #0-女  1-男
);
INSERT INTO xh_user VALUES
(NULL,'qingfei','123456','qing@126.cn','11111','img/avatar/default.png','庆飞',1);

CREATE TABLE xh_manhua(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  sm VARCHAR(32) ,
  //md VARCHAR(32),
  lg VARCHAR(64),
  scene VARCHAR(16),
  boyNO VARCHAR(16),
  girlNO VARCHAR(16),
  story VARCHAR(264)
);
INSERT INTO xh_manhua VALUES(
NULL,'img/product/p2.png','img/product/p2.png','愚公移山','乎闲乎','闲乎闲','闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，最终……'
),
(NULL,'img/product/p3.png','img/product/p1.png','排山蹈海','乎闲乎','闲乎闲','闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，最终……'
),
(NULL,'img/product/p4.png','img/product/p3.png','煮酒论英雄','乎闲乎','闲乎闲','闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，最终……'
),
(NULL,'img/product/p1.png','img/product/p4.png','对酒当歌','乎闲乎','闲乎闲','闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，最终……'
),
(NULL,'img/product/p2.png','img/product/p1.png','梅花三弄','乎闲乎','闲乎闲','闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，闲和乎的一场意外相遇，相互谁都看不上谁，最终……'
)