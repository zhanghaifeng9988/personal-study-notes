


CREATE TABLE `books` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `publisher_id` int(11) DEFAULT NULL,
  `publication_year` int(11) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `author_id` (`author_id`),
  KEY `publisher_id` (`publisher_id`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`),
  CONSTRAINT `books_ibfk_2` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`publisher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci




-- 题目1 查询"01"课程比"02"课程成绩高的学生的信息及课程分数
这个写得好
select  a.*,b.s_score as 1_score,c.s_score as 2_score
from Student a
inner join Score b on a.s_id=b.s_id and b.c_id='01'
inner join Score c on a.s_id=c.s_id and c.c_id='02'
where b.s_score > c.s_score;

**先查询学生的01课程和02课程的成绩，然后比较两个成绩**，


-- 题目2
查询"01"课程比"02"课程成绩低的学生的信息及课程分数（题目1是成绩高）
select  a.*,b.s_score as 1_score,c.s_score as 2_score
from Student a
inner join Score b on a.s_id=b.s_id and b.c_id='01'
inner join Score c on a.s_id=c.s_id and c.c_id='02'
where b.s_score < c.s_score;


-- 题目3
查询平均成绩大于等于60分的同学的学生编号和学生姓名和平均成绩
select  a.s_id,a.s_name, avg_score
from (
select  a.s_id,a.s_name,avg(b.s_score) as avg_score
from Student a
inner join Score b on a.s_id=b.s_id
group by a.s_id,a.s_name
) a
where a.avg_score >= 60
order by a.avg_score desc;

  -- 这种写法更优雅和简洁
select 
	b.s_id
	,b.s_name
	,round(avg(a.s_score), 2) as avg_score
from Student b
join Score a
on b.s_id = a.s_id
group by b.s_id   -- 分组之后查询每个人的平均成绩
having round(avg(a.s_score), 2) >= 60
order by avg_score desc;


-- 题目4  
总分超过200分的同学
select a.s_id,a.s_name, sum(b.s_score) as sum_score
from Student a
inner join Score b on a.s_id=b.s_id
group by a.s_id,a.s_name
having sum(b.s_score) > 200;


-- 题目5
查询平均成绩小于60分的同学的学生编号和学生姓名和平均成绩（包括有成绩的和无成绩的）
select 
	b.s_id
	,b.s_name
	,round(avg(a.s_score), 2) as avg_score
from Student b
left join Score a
on b.s_id = a.s_id
group by b.s_id   -- 分组之后查询每个人的平均成绩
having round(avg(a.s_score), 2) <= 60
-- order by avg_score desc
union all
-- 没有成绩的学生
select 
	b.s_id
	,b.s_name
	,0 as avg_score
from Student b
where b.s_id not in (select distinct s_id from Score);


-- 题目6
查询所有同学的学生编号、学生姓名、选课总数、所有课程的总成绩

select 
a.s_id,a.s_name,count(b.c_id) as total_course,sum(b.s_score) as total_score
from Student a
left join Score b on a.s_id = b.s_id
group by a.s_id,a.s_name;


-- 题目7
查询“李”姓老师的数量
select count(t_name) from Teacher where t_name like '李%';


-- 题目8
查询学过张三老师授课的同学的信息
select a.*
from Student a
where a.s_id in (
select s.s_id
from  Score s
where s.c_id in (
select c.c_id
from Course c
where c.t_id in 
(select  t_id
from Teacher
where t_name='张三')));


-- 题目9
查询没学过张三老师授课的同学的信息
select a.*
from Student a
where a.s_id not in (
select s.s_id
from  Score s
where s.c_id not in (
select c.c_id
from Course c
where c.t_id not in 
(select  t_id
from Teacher
where t_name='张三')));


-- 题目10
查询学过编号为01，并且学过编号为02课程的学生信息
select s1.* 
from Student s1
where s1.s_id in (select s_id from Score where c_id='01')   -- 修过01课程，要保留
and s1.s_id  in (select s_id from Score where c_id='02');  -- 哪些人修过02，要保留


-- 题目11
查询学过01课程，但是没有学过02课程的学生信息（注意和上面?题目的区别）
select s1.* 
from Student s1
where s1.s_id in (select s_id from Score where c_id='01')   -- 修过01课程，要保留
and s1.s_id not in (select s_id from Score where c_id='02');  -- 哪些人修过02，需要排除


-- 题目12
查询没有学完全部课程的同学的信息
select a.*
from Student a
where a.s_id not in (
select s1.s_id 
from Student s1
where s1.s_id in (select s_id from Score where c_id='01')   -- 修过01课程，要保留
and s1.s_id  in (select s_id from Score where c_id='02') -- 哪些人修过02，要保留
and s1.s_id  in (select s_id from Score where c_id='03') -- 哪些人修过03，要保留
);


-- 题目13
查询至少有一门课与学号为01的同学所学相同的同学的信息
select distinct s_id
from (
select s.s_id,s.c_id
from Score s 
where s.s_id != '01'
group by s.s_id,s.c_id) a
where a.c_id
in (
select s1.c_id 
from Score s1 
where s1.s_id = '01'
);


-- 题目14
查询和01同学学习的课程完全相同的同学的信息
select 
s.s_id,count(s.c_id) as total
from Score s
where s.s_id != '01'
group by s.s_id
having  COUNT(s.c_id)
= (
select count(s1.c_id)  total
from Score s1 
where s1.s_id = '01') ;


-- 题目15
查询没有修过张三老师讲授的任何一门课程的学生姓名

select a.*
from Student a
where a.s_id not in (
select sc.s_id
from Score sc
where 
sc.c_id =( 
select c.c_id
from Course c
where c.t_id = (
  select t_id
  from Teacher
  where t_name = '张三'
)));



