--学习网址
https://www.cnblogs.com/zhuoss/p/17206279.html

--大小写情况
**大小写不敏感**，保存的列名、表名都是按照输入时的大写或者小写来保存的
举例：
create table T2(ID int,NAME text);  --没问题
 create table t2(ID int,NAME text);  --会报错，表名重复
Parse error: table t2 already exists
  create table t2(ID int,NAME text);
               ^--- error here

**建议定义表名、列名和其他对象名的时候，统一用小写，形成一种个人习惯。**

# SQLite 简介
SQLite 并不支持创建用户（user）的概念，这与许多其他数据库系统（如 MySQL、PostgreSQL 或 SQL Server）不同。SQLite 是一个轻量级的数据库系统，它不提供用户认证或权限管理的功能。以下是一些相关的点：

## 无用户认证：

SQLite 不需要用户名和密码来连接数据库。一旦你有了数据库文件，就可以直接通过 SQLite 命令行工具或在应用程序中使用 SQLite 库来访问它。
权限管理：

SQLite 的权限管理非常简单。基本上，谁拥有数据库文件，谁就有权限读取和写入数据库。没有更细粒度的权限控制。
安全性：

由于缺乏用户认证和权限管理，SQLite 通常不适用于需要严格安全控制的环境。它更适合于小型应用、原型开发或个人项目，其中安全性不是主要考虑因素。
多用户并发访问：

SQLite 支持多用户并发文件级锁定，但它不提供行级锁定或事务级锁定。这意味着在高并发环境下，SQLite 可能不是最佳选择。
使用场景：

尽管 SQLite 不支持用户创建和权限管理，但它在需要快速开发和部署轻量级数据库应用的场景下非常有用。例如，它常用于移动应用、桌面应用和嵌入式系统。


--查看sqllite的版本
sqlite3 version

--连接到数据库
sqlite3 database_name.db

在这里，database_name.db 是你要连接的数据库文件名。如果文件不存在，SQLite 会创建一个新的数据库文件。

--退出 SQLite Shell：


sqlite3 test.db                                                 创建 test.db 文件并进入 sqlite3
sqlite>.database                                           查看数据库文件信息命令 (注意命令前带字符'.')
sqlite>.schema                                             查看所有表的创建语句：
sqlite>.schema table_name                         查看指定表的创建语句：
sqlite>.dump table_name                             以 sql 语句的形式列出表内容：
sqlite>.separator symble                              设置显示信息的分隔符：
sqlite>.separator :                                        设置显示信息以‘：'分隔
sqlite>.mode mode_name                           设置显示模式：
sqlite>.mode column                                    默认为 list，设置为 column，其他模式可通过. help 查看 mode 相关内
sqlite>.help                                                   输出帮助信息：
sqlite>.width width_value                             设置每一列的显示宽度：
sqlite>.width 2                                              设置宽度为 2
sqlite>.show                                                 列出当前显示格式的配置
sqlite>.quit     或   sqlite>.exit                      退出 sqlite 终端命令：


--命令
查看所有表
使用 .tables 命令可以列出数据库中的所有表：

.tables
查看表结构
使用 .schema 命令可以查看指定表的结构，或者不带参数查看所有表的结构：

.schema [表名]
查看索引
使用 .index_list 命令可以列出数据库中的所有索引：

.index_list
查看触发器
使用 .triggers 命令可以列出数据库中的所有触发器：

.triggers
查看视图
使用 .views 命令可以列出数据库中的所有视图：

.views
查看数据库元数据
使用 PRAGMA 命令可以查询数据库的元数据，例如表的数量、索引的数量等：

PRAGMA table_info(表名);
PRAGMA index_info(索引名);
PRAGMA trigger_list;
PRAGMA database_list; -- 列出附加的数据库
查看数据库统计信息
使用 ANALYZE 命令可以收集数据库的统计信息：

ANALYZE

--创建表
create studen_table(Stu_no interger PRIMARY KEY, Name text NOT NULL, Id interger UNIQUE, Age interger CHECK(Age>6), School text DEFAULT 'xx 小学);  --该语句创建一个记录学生信息的数据表。


--sqlite3 存储数据的类型
NULL：标识一个 NULL 值
INTERGER：整数类型
REAL：浮点数
TEXT：字符串
BLOB：二进制数

也支持如下类型
smallint 16 位整数
integer 32 位整数
decimal(p,s) p 是精确值, s 是小数位数
float 32 位实数
double 64 位实数
char(n) n 长度字符串，不能超过 254
varchar(n) 长度不固定最大字符串长度为 n，n 不超过 4000
graphic(n) 和 char(n) 一样，但是单位是两个字符 double-bytes，n 不超过 127(中文字)
vargraphic(n) 可变长度且最大长度为 n
date 包含了年份、月份、日期
time 包含了小时、分钟、秒
timestamp 包含了年、月、日、时、分、秒、千分之一秒

--sqlite3 支持的函数
【1】日期函数
datetime() ： 产生日期和时间
date()： 产生日期
time()：产生时间
strftime()：对以上 3 个函数产生的日期和时间进行格式化

用法实例：
1、SELECT date('2011-9-9','+1 day','+1 year'); 结果是 2010-09-10
2、SELECT datetime('now'); 当前日期和时间
3、SELECT datetime('now', 'start of month'); 本月的第一天零点，也可以设置年和日的第一天
4、SELECT datetime('now','+1 hour','-12 minute'); 当前时间加 48 分钟

strftime() 函数可以将 YYYY-MM-DD HH:MM:SS 格式的日期字符串转换为其它形式的字符串

%d：天数，01-31
%f ：小数形式的秒，SS.SSS
%H：小时
%j ：某一天是该年的第几天，001-366
%m：月份，00-12
%M：分钟，00-59
%s：从 1970 到现在的秒数
%S：秒，00-59
%w：星期，0-6，0 是星期天
%W：某天是该年的第几周，01-53
%Y：年，YYYY
%% 百分号

应用举例：

SELECT strftime('%Y.%m.%d %H:%M:%S','now','localtime');

【2】算术函数
abs(X)：返回绝对值
max(X,Y[,...])：返回最大值
min(X,Y,[,...])：返回最小值
random(*)：返回随机数
round(X[,Y])： 四舍五入

【3】字符串处理函数
length(x) ：返回字符串字符个数
lower(x) ：大写转小写
upper(x)：小写转大写
substr(x,y,Z)：截取子串
like(A,B)：确定给定的字符串与指定的模式是否匹配

【4】条件判断函数、集合函数、其它函数
typeof(x)：返回数据的类型
last_insert_rowid()：返回最后插入的数据的 ID

sqlite3 存储数据的约束条件
Sqlite 常用约束条件如下：

PRIMARY KEY - 主键：
1）主键的值必须唯一，用于标识每一条记录，如学生的学号
2）主键同时也是一个索引，通过主键查找记录速度较快
3）主键如果是整数类型，该列的值可以自动增长（建表时增加 integer PRIMARY KEY autoincrement）

NOT NULL - 非空：
约束列记录不能为空，否则报错

UNIQUE - 唯一：
除主键外，约束其他列的数据的值唯一

CHECK - 条件检查：
约束该列的值必须符合条件才可存入

DEFAULT - 默认值：
列数据中的值基本都是一样的，这样的字段列可设为默认值


                        --常用 sqlite3 指令--
						
0）建立数据表
create table table_name(field1 type1, field2 type1, ...);  
table_name 是要创建数据表名称，
fieldx 是数据表内字段名称，
typex 则是字段类型。

例，建立一个简单的学生信息表，它包含学号与姓名等学生信息：

create table student_info(
    stu_no interger primary key, 
    name text
);
1）修改表 ：ALTER TABLE 目录允许用户重命名或添加新的字段到已有表中，不能从表中删除字段
ALTER TABLE Subscription ADD COLUMN Activation BLOB;
ALTER TABLE TBL1 RENAME TO TBL2  
2）添加数据记录
insert into table_name(field1, field2, ...) values(val1, val2, ...);  
valx 为需要存入字段的值。

例，往学生信息表添加数据：

Insert into student_info(stu_no, name) values(0001, alex);  
3）修改数据记录
update table_name set field1=val1, field2=val2 where expression;  
where 是 sql 语句中用于条件判断的命令，expression 为判断表达式

例，修改学生信息表学号为 0001 的数据记录：

update student_info set stu_no=0001, name=hence where stu_no=0001;  
4）删除数据记录
delete from table_name [where expression];  
不加判断条件则清空表所有数据记录。

例，删除学生信息表学号为 0001 的数据记录：

delete from student_info where stu_no=0001;  
5）查询数据记录
select 指令基本格式：

select columns from table_name [where expression];  
a 查询输出所有数据记录
select * from table_name;  
b 限制输出数据记录数量
select * from table_name limit val;  
c 升序输出数据记录
select * from table_name order by field asc;  
d 降序输出数据记录
select * from table_name order by field desc;  
e 条件查询
select * from table_name where expression;  
select * from table_name where field in ('val1', 'val2', 'val3');  
select * from table_name where field between val1 and val2;  
f 查询记录数目
select count (*) from table_name;  
g 区分列数据
select distinct field from table_name;  
有一些字段的值可能会重复出现，distinct 去掉重复项，将列中各字段值单个列出。

h 多表查询
多表联查

连接查询 INNER JOIN,LEFT JOIN,RIGHT JOIN;

SELECT table_a.id,table_a.name,tanle_a.time as time,Count(tanle_b.time) AS count
 
From table_a
 
LEFT JOIN table_b,
 
ON table_a.tiem=table_b.time
 
Group BY table_b.time;  
6）建立索引
当说数据表存在大量记录，索引有助于加快查找数据表速度。

create index index_name on table_name(field);  
例，针对学生表 stu_no 字段，建立一个索引：

create index student_index on student_table(stu_no);  
建立完成后，sqlite3 在对该字段查询时，会自动使用该索引。

7）删除数据表或索引
drop table table_name;  
drop index index_name;
