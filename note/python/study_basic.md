vscode中的编码

--行注释   #
--块注释   Alt+Shift+A

执行某行：shift+enter

布尔值：Ture  False

单引号和双引号都是用来表示字符串，在一般情况下两者没有任何差别，下面两句输出的结果都是 今天天气真好！

message1='今天天气真好！'
message2="今天天气真好！"

单引号双引号可以相互内嵌。

message1='江江说："今天天气真好！"'
message2="江江说：'今天天气真好！'"


江江说："今天天气真好！"
江江说：'今天天气真好！'


三引号有以下两种用法：

 （1）最常见的就是进行注释，可以对单行文本进行注释，也可以对多行文本进行注释。

 （2）可以将文本格式保留之后再进行输出。

--单字符转义符：\

--多字符转义： r' '  作用是除去' '里面转义字符

--换行符：\n
--单引号：\'
--双引号:\"
--制表符：\t
--反斜杠:\\

--字符串包含多个换行符：Python允许用'''...'''进行显示输出
>>> print('''line1
line2
line3''')



常见格式问题：
python是没有{}的，所以它的程序是要严格对齐的，要不然就会出错。
while True:
（四个空格）num=input()
（四个空格）if():
（八个空格）break
（四个空格）elif :
（八个空格）continue

if跟num要对齐的，你没有对齐,if是不可以跟while同齐的，if是while里的一部分，所以if要退出来，
退4空格，不能跟while平齐的。4个空格是python的对齐要求。

只能在while 和 for 循环中使用continue 和 break 

range(起始值,最大值,步长)

python的内置函数就是“标准库”，或者叫模块

import 库名/模块

python的格式化输出关键字：%s %d %f 


-- %s （其中s表示string） 表示字符
举例：
HH = "hello python!"
print( "%s" %HH)
hello  python!

--%d  （其中d表示digit）表示数字

--%f  （其中f表示float）表示浮点小数，也称小数　


--print 函数中 end sep
end:指定在参数末尾输出什么
sep:在参数之间输出什么来隔开他们

print('a','b','c',sep=',')
a,b,c

print('a','b','c',end='!')
a b c!

--变量
  --局部变量不能在全局作用域内使用

举例： 
def spam():
	eggs=12345
    return eggs
print(spam())
print(eggs)


12345
Traceback (most recent call last):
  File "c:/Users/Administrator/Desktop/python源文件/linshi.py", line 13, in <module>
    print(eggs)
NameError: name 'eggs' is not defined


  --局部作用域不能使用其他局部作用域内的变量
  一个函数中的局部变量要完全与其他函数中的局部变量分隔开来。
def spam():
    eggs=99
    bacon()
    print(eggs)

def bacon():
    ham=101
    eggs=0

spam()

99
  
  --全局变量可以在局部作用域中使用
eggs=42
def spam():
    print(eggs)
spam()
print(eggs) 

42
42

  
--global
  global作用，一个是在函数内部使用，可以告诉python这个是全局变量，不要将局部变量的
名字等同于全局变量；


举例：  
  def spam():
    global eggs
    eggs='spam'
eggs='global'
spam()
print(eggs)

  spam
  
注意：如果全局变量在函数中使用，建议使用global语句声明，首先是防止局部变量与全局变量重名导致
潜在的引用混乱问题，其次是为了防止，如果全局变量和局部变量重名后，且局部变量已经被赋值，
函数内引用该重名的变量就会报错，如下：
  
  def spam():
    print(eggs)
    eggs=99

eggs=88
spam()
  
  
  Traceback (most recent call last):
  File "c:/Users/Administrator/Desktop/python源文件/linshi.py", line 51, in <module>
    spam()
  File "c:/Users/Administrator/Desktop/python源文件/linshi.py", line 47, in spam
    print(eggs)
UnboundLocalError: local variable 'eggs' referenced before assignment





                              列表（个人理解 就是：数组）
	举例：个人认为可以叫做二维数组
	列表的索引是整数
>>> spam=[[1,2,3,4,5],['a','b','c','d','e']]
>>> spam[0]
[1, 2, 3, 4, 5]
>>> spam[0][0]
1
>>> spam[0][1]
2
>>> spam[0][2]
3
>>> spam[0][3]
4
>>> spam[0][4]
5
>>> spam[1][0]
'a'
>>> spam[1][1]
'b'
>>> spam[1][2]
'c'
>>> spam[1][3]
'd'
>>> spam[1][4]
'e'

-- spam[0][0]  方括号的数值，叫做列表的索引

>>> spam[-1][-1]  索引值可以为负
'e'
>>> spam[-1][-2] 
'd'
>>> spam[-1][-3] 
'c'
>>> spam[-1][-4]
'b'
>>> spam[-1][-5]
'a'
>>> spam[-2][-1] 
5
>>> spam[-2][-2]
4
>>> spam[-2][-3]
3
>>> spam[-2][-4]
2
>>> spam[-2][-5]
1


-- 利用分号，取得子列表 
   一维列表 冒号前面的参数表示取数的开始位置，冒号后面的数值，表示取数到该数值表示的位数之前
>>> spam=[1,2,3,4,5]
>>> spam[0:4]
[1, 2, 3, 4]
>>> spam[1:3]
[2, 3]
   如果冒号前面的省略，默认从列表的0位开始取数，如果冒号后面的省略，默认是列表的长度
>>> spam[:4]
[1, 2, 3, 4]
>>> spam[2:]
[3, 4, 5]


append（） 和insert（）是列表方法，用于向列表中添加数据，只能再列表上调用，不能再其他值上调用。
 append会把数据追加到序列的末尾，insert需要指定插入数据的位置。
remove（） 该方法将从现有列表中将指定的数据移除，如果该值在列表中出现多次，只有第一次出现的值会被删除。
sort（）该方法用来排序，默认从小到大排序，sort（reverse=True）增加参数reverse能够进行倒序排列。
reverse()  倒序函数，将list现有的数据进行倒序排列
pop() 删除list末尾的元素  要删除指定位置的元素，用pop(i)方法
classmates[1] = 'Sarah'  要把某个元素替换成别的元素，可以直接赋值给对应的索引位置

                                  
								  元组tuple
								  
   什么是元组，简单的理解就是将一堆数据存放到一个容器中，但这个容器有一个特点，就是很固执，
一旦定义了之后就不可改变，从某种意义上来说元组就是不可以改变的列表，功能和列表类似，
同样可以进行切片、修改等操作。
   可以用元组告诉所有读代码的人，你不打算改变这个序列的值。如果需要一个永远不变值的序列，就使用元组。								  
因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

tuple的陷阱：当你定义一个tuple时，在定义的时候，tuple的元素就必须被确定下来
	
	
meta_dat=(1,2,3,"4","5")
print(meta_dat)

(1, 2, 3, '4', '5')

   值得注意的是如果元组中只有一个元素的话，需要在元素的后面加上一个逗号
meta_dat=(1,)
meta_dat1=(1)

(1,)
1


二维元组：
  meta_dat=((1,2,3),(4,5,6))
print(meta_dat)
for i in meta_dat:
    print(i)
	
((1, 2, 3), (4, 5, 6))
(1, 2, 3)
(4, 5, 6)


meta_dat=((1,2,3),(4,5,6))
for i in meta_dat:
   for p in i:
    print(p)

1
2
3
4
5
6
   

meta_dat=((1,2,3),(4,5,6))
print(meta_dat[1])                                
(4, 5, 6)								  

print(meta_dat[1][0])
4

>>> t = ('a', 'b', ['A', 'B'])
>>> t[2][0] = 'X'
>>> t[2][1] = 'Y'
>>> t
('a', 'b', ['X', 'Y'])


			                    字典和结构化数据
								
    像列表一样，字典是许多值的集合；
	字典的索引被称为“键”，键及其关联的值成为“键-值对”；
	字典的索引可以使用许多不同的数据类型；
--举例：将字典赋给变量myCat
    myCat={'size':'fat','color':'gray','disposition':'loud'}
	print(myCat['size'])

	fat
	
	字典是不排序的，不能像列表那样切片。
--举例：
   序列比较
>>> spam=['a','b','c','d']
>>> bacon=['b','c','d','a']
>>> spam==bacon
False
  字典比较
>>> eggs={'name':'zophie','species':'cat','age':'8'}
>>> ham={'age':'8','name':'zophie','species':'cat'}
>>> eggs==ham
True   


--字典中常用的取值方法：keys(),values(),items(),可以获得字典中的：键、值、键值对。
--注意：items()方法返回的值包含的是键和值的元组。

--列表和字典，都可以使用in 和not in来判断数据是否包含在列表和字典中
--举例：
>>> myCat={'size':'fat','color':'gray','disposition':'loud'}
>>> myCat.keys()
dict_keys(['size', 'color', 'disposition'])
>>> myCat.items()
dict_items([('size', 'fat'), ('color', 'gray'), ('disposition', 'loud')])
>>> myCat.values()
dict_values(['fat', 'gray', 'loud'])
>>> 'color' in myCat.keys()
True
>>> 'gray' not in myCat.values()
False
>>> 'loud' in myCat.keys()
False

--列表：
>>> list(spam)
['a', 'b', 'c', 'd']
>>> 'a' in spam
True
>>> 'z' notin spam
True



--字典中的get()  setdefault() 两种方法
get（）方法用来查找键对应的值
有两个参数：第一个表示要取得其值的键，第二个表示键不存在返回的备用值。
举例：
>>> myCat.get('size',0)
'fat'
>>> myCat.get('size',1)
'fat'
>>> myCat.get('b',1)
1
>>> myCat.get('b',0)
0

setdefault()方法用来为字典中的某个键设置一个默认值，当该键没有任何值时使用它。
有两个参数，第一个参数时要检查的键，第二个参数是当该键不存在时要设置的值。
如果键存在，则返回该键的值。

举例：
>>> myCat
{'size': 'fat', 'color': 'gray', 'disposition': 'loud'}
>>> myCat.setdefault('age',3)
3
>>> myCat
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age': 3}

>>> myCat.setdefault('age',5)
3
>>> myCat
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age': 3}

--使用pprint函数美观打印字典中的数据
import pprint
pprint.pprint(count)



--字典是可以嵌套的
代码举例：
allGuests={'alice' : {'apples':5,'pretzels':12},  #嵌套的字典赋值给变量
           'bob':{'ham sandwiches':3,'apples':2},
           'carol':{'cups':3,'apple pies':1}}
def totalBrought(guests,item):                    #定义一个函数，接收两个参数，1个是字典的名称，一个要遍历的数值
    numBrought=0                                  #定义一个变量，用来统计遍历的数值的总和
    for k,v in guests.items():                    #使用for循环，遍历allGuests字典中三个key对应的所有值
       numBrought=numBrought+v.get(item,0)        #对函数中第二参数进行遍历后的统计
       return numBrought                          #将结果返回

print('number of things being brought:')
print('-- apples ' + str(totalBrought(allGuests,'apples')))
print('-- pretzels ' + str(totalBrought(allGuests,'pretzels')))
print('-- cups ' + str(totalBrought(allGuests,'cups')))
print('-- ham sandwiches' + str(totalBrought(allGuests,'ham sandwiches')))
print('-- apple pies') + str(totalBrought(allGuests,'apple pies'))

--删除一个键值对
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Bob']
75
>>> d.pop('Bob')
75
>>> d['Bob']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Bob'
>>> list(d)
['Michael', 'Tracy']
>>> d
{'Michael': 95, 'Tracy': 85}


--和list比较，dict有以下几个特点：

查找和插入的速度极快，不会随着key的增加而变慢；
需要占用大量的内存，内存浪费多。



                                    字符串
--f字符串格式化输出：
>>> name='zhf'
>>> age=8
>>> f'my name is {name},age is {age}'
'my name is zhf,age is 8'

%字符的格式化输出
>>> 'my name is %s,age is %d' %(name,age)
'my name is zhf,age is 8'

--字符串操作的相关函数
  --转大写   upper（）
  --转小写   lower（）
  --判断字符串是否都为大写  isupper()
  --判断字符串是否都为小写  islower()
  --如果字符串只包含字母，并且非空，，返回true                                        isalpha()
  --如果字符串只包含字母和数字，并且非空，返回true                                    isalnum()
  --如果字符串只包含数字字符，并且非空，返回true                                      isdecimal()
  --如果字符串只包含空格、制表符和换行符，并且非空，返回true                          isspace()
  --如果字符串仅包含以大写字母开头，后面都是小写字母的单词、数字或空格，返回true       istitle()
  --判断字符串的开头单词和结尾单词             startswith('判断的内容')   endswith('判断的内容') 
  --针对一个列表的调用，返回一个字符串
  将指定的单个字符或者字符串，拼接到列表中的每个元素后面                            '拼接的字符或字符串'.join([列表])
 举例：>>> a=['a','b','c','d']  
  >>> ':'.join(a)
  'a:b:c:d'
  >>> a='abcd'
  >>> ':'.join(a)
  'a:b:c:d'
  --针对一个字符串的调用，返回一个字符串的列表
  以函数传入的参数字符串为分割依据，对字符串进行分割                               split()默认以空格、制表符或换行符分隔，也可以指定分割的参数
举例：
>>> 'a b c d'.split()
['a', 'b', 'c', 'd']

>>> 'aabaad'.split('aa')
['', 'b', 'd']


--右对齐     rjust(此处的数值表示字符串从左往右数最后一个字符距离左边的长度，10表示距离10个字符的长度)
--左对齐     ljust(与上面一条相反)
--居中对齐   center(此处的数值表示字符串在这个数值表示的长度的中间显示)  

--删除空白字符    strip() rstrip() lstrip()
如果没有参数，表示删除空白，如果该方法带参数，那就表示删除字符串中等于参数的内容，参数的顺序没有关系
举例：
>>> spam='123abcdabcdabcd123'
>>> spam.strip('123')
'abcdabcdabcd'
>>> spam.strip('321')
'abcdabcdabcd'
>>> spam
'123abcdabcdabcd123'



GitHub Copilot: 在Python中，`list`、`tuple`、`dict`和`set`是四种常见的数据类型，它们各自有不同的特点和用途。

- `list`（列表）是一种有序的可变序列，可以存储任意类型的元素。
列表使用方括号`[]`来表示，元素之间用逗号`,`分隔。列表支持索引、切片、添加、删除、修改等操作，
是Python中最常用的数据类型之一。

- `tuple`（元组）是一种有序的不可变序列，可以存储任意类型的元素。
元组使用圆括号`()`来表示，元素之间用逗号`,`分隔。
元组支持索引、切片等操作，但不支持添加、删除、修改等操作。
元组通常用于存储不可变的数据，如坐标、颜色等。

- `dict`（字典）是一种无序的键值对集合，可以存储任意类型的键和值。
字典使用花括号`{}`来表示，每个键值对之间用冒号`:`分隔，键值对之间用逗号`,`分隔。
字典支持通过键来访问值，也支持添加、删除、修改等操作。字典通常用于存储具有映射关系的数据，
如姓名和电话号码的对应关系。

- `set`（集合）是一种无序的元素集合，可以存储任意类型的元素。集合使用花括号`{}`来表示，元素之间用逗号`,`分隔。
集合支持添加、删除、交集、并集、差集等操作。集合通常用于去重、交集、并集等操作。

需要注意的是，`list`、`tuple`、`dict`和`set`是不同的数据类型，
它们之间不能直接进行转换。如果需要将它们之间进行转换，需要使用相应的转换函数，
如`list()`、`tuple()`、`dict()`和`set()`。


                                          函数
										  
--位置参数
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s

  当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。
  
--默认参数 
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
   
   多个默认参数
def enroll(name, gender, age=6, city='Beijing'):
    print('name:', name)
    print('gender:', gender)
    print('age:', age)
    print('city:', city)
                                        
enroll('Bob', 'M', 7)，意思是，
除了name，gender这两个参数外，最后1个参数应用在参数age上，city参数由于没有提供，仍然使用默认值。

因为默认参数L也是一个变量，它指向对象[]，每次调用该函数，如果改变了L的内容，则下次调用时
，默认参数的内容就变了，不再是函数定义时的[]了。										
def add_end(L=[]):
    L.append('END')
    return L
										
	
def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L


--可变参数
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum

在函数内部，参数numbers接收到的是一个tuple

  --如果已经有一个list或者tuple，要调用一个可变参数
  nums = [1, 2, 3]
  >>> calc(*nums)
  14
  
  
--关键字参数
  关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。
  可以只传入必选参数  ，也可以传入任意个数的关键字参数
  def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)
  
>>> extra = {'city': 'Beijing', 'job': 'Engineer'}
>>> person('Jack', 24, **extra)
name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}


--命名关键字参数
如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收city和job作为关键字参数。
def person(name, age, *, city, job):
    print(name, age, city, job)
	
如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符*了：
def person(name, age, *args, city, job):
    print(name, age, args, city, job)

命名关键字参数必须传入参数名，这和位置参数不同。如果没有传入参数名，调用将报错

命名关键字参数可以有缺省值，从而简化调用
def person(name, age, *, city='Beijing', job):
    print(name, age, city, job)

在Python中定义函数，可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，
这5种参数都可以组合使用。
但是请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。  
										
										
--递归
def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)

计算过程如下	
===> fact(5)
===> 5 * fact(4)
===> 5 * (4 * fact(3))
===> 5 * (4 * (3 * fact(2)))
===> 5 * (4 * (3 * (2 * fact(1))))
===> 5 * (4 * (3 * (2 * 1)))
===> 5 * (4 * (3 * 2))
===> 5 * (4 * 6)
===> 5 * 24
===> 120	
										
--尾递归
def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)										

过程如下										
===> fact_iter(5, 1)
===> fact_iter(4, 5)
===> fact_iter(3, 20)
===> fact_iter(2, 60)
===> fact_iter(1, 120)
===> 120


                                       切片(对list  tuple  str)
>>> a=[1,2,3]
>>> a
[1, 2, 3]
>>> a[:3]
[1, 2, 3]
>>> a[:2]
[1, 2]

a[0:3]表示，从索引0开始取，直到索引3为止
如果第一个索引是0，还可以省略
a[:3]

a[-3:]




                                         
										 
										 
										 
										
										模式匹配和正则表达式
										


										
具有特殊含义的字符：.  ^  $   *   +  ?   {}  ()  []  \  |
要检测这些字符的文本模式，需要使用反斜杠对他们进行转义
 
 \d   0-9的任何1个数字
 \D   除0-9的数字以外的任何1个字符
 \w   任何1个字母、数字或下划线字符（可以认为是匹配“单词”字符）
 \W   除字母、数字和下划线以外的任何1个字符
 \s   任何1个空格、制表符或换行符（可以认为是匹配“空白”字符）
 \S   除空格、制表符和换行符以外的任何1个字符

 注意：\d+  加号表示匹配多个数字  上述模式都可以使用+号

										
--re.compile(r'\d\d\d')   \d 表示匹配一位数字
--re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d))   括号表示分组匹配

--group(1) 该方法表示模式匹配中的第1个括号对的分组
--group(2) 该方法表示模式匹配中的第2个括号对的分组
--group(0) 该方法将返回整个匹配的文本

--re.compile(r'abc|def')   使用管道符| 来匹配多个分组，注意：第一次出现的匹配文本将作为结果返回
--re.compile(r'zhf(man|mobile|copter|bat))   可以匹配zhfman zhfmobile  zhfcopter  zhfbat中的任意一个

--re.compile(r'zhf(bj)?man')   使用？问号，能够实现括号中内容的可选匹配，即零次或者1次匹配
--re.compile(r'zhf(bj)*man')   使用*号，能够实现括号中内容的零次或者多次匹配

--re.compile(r'zhf(ty)+man')   使用加号，能够实现括号中内容的1次和多次匹配

--re.compile(r'(zhf){3}')      使用{3}匹配特定次数3，将匹配'zhfzhfzhf'

--re.compile(r'(zhf){3,5}')    使用{3,5}匹配特定次数3，4，5，将匹配'zhfzhfzhf' , 'zhfzhfzhfzhf' , 'zhfzhfzhfzhfzhf'

--re.compile(r'(zhf){,5}')     使用{,5}匹配特定次数0,1,2,3,4,5

	python的正则表达式默认是“贪心”的，这表示在有二义的情况下，他们会尽可能匹配最长的字符串。

花括号{}的非贪心版本，尽可能匹配最短的字符串
--re.compile(r'(zhf){3,5}?')   使用非贪心方式，会匹配'zhfzhfzhf'


--search()方法，默认返回一个match对象
举例：
>>> import re
>>> phoneRegex=re.compile(r'\d\d\d-\d\d\d\-\d\d\d\d')
>>> mo=phoneRegex.search('cell:111-222-3333 work:444-555-6666')
>>> mo.group()
'111-222-3333'


--findall()方法，返回一个字符串列表，条件是在正则表达式中没有分组。
列表中的每个字符都是一段被查找的文本，它匹配该正则表达式。
举例：
>>> phoneRG=re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
>>> phoneRG.findall('cell:111-222-3333 work:444-555-6666')
['111-222-3333', '444-555-6666']

如果在正则表达式中有分组，那么fingdall()方法将返回元组的列表。
举例：
>>> phoneRG=re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)')
>>> phoneRG.findall('cell:111-222-3333 work:444-555-6666')
[('111', '222', '3333'), ('444', '555', '6666')]


--  ^ 和 $ 两个符号的作用
  --^  表明匹配必须发生在被查找文本开始处
举例：
>>> beginWithHello=re.compile(r'^hello')
>>> bw=beginWithHello.search('hello world hello')
>>> bw.group()
'hello'
>>> beginWithHello.findall('hello world hello')
['hello']
  
  --$  表明匹配必须发生在被查找文本的结尾处
举例：
>>> endWithHello=re.compile(r'hello$')
>>> ew=endWithHello.search('hello world hello')
>>> ew.group()
'hello'  
>>> endWithHello.findall('hello world hello')
['hello']


  --^ 和 $一起使用  表示匹配开始到结束都是满足条件的字符串
举例：
>>>beWithHello=re.compile(r'^\d+$')
>>>bew=beWithHello.search('123123')
>>>bew.group()
'123123'
>>> beWithHello.findall('123123')
['123123']



 --使用.和*两种通配符
 .     表示匹配任意单个字符，不包括换行符。
举例：
>>> pipeiREG=re.compile(r'.b')
>>> pipeiREG.findall('ab,cb,eb,ee')
['ab', 'cb', 'eb']
 
 .*    表示匹配所有字符
举例：
>>> pipei2REG=re.compile(r'.*b')
>>> pipei2REG.findall('zhfb,asdb,qweb')
['zhfb,asdb,qwe']
 
 
re.compile('.*' ,re.DOTALL)  匹配所有字符包括换行符

re.compile(r'zhf',re.I)   匹配zhf，不区分大小写 


--sub()  方法可以指定新的字符串，替换匹配到的字符串

举例：
>>> match2Reg=re.compile(r'ZHF')
>>> match2Reg.sub('DXP','ZHF is a ZHF')
'DXP is a DXP'


--[]  方括号的使用
  [abc]   表示：匹配方括号内的任意字符
  [^abc]  表示：匹配不在方括号内的任意字符
 


--管理复杂的正则表达式（一个检查文本中电话号码和邮件地址的项目）
测试文本：
  800-420-7240
  415-863-9900
  415-863-9950
  info@nostarch.com
  media@nostarch.com
  academic@nostarch.com
  help@nostarch.com
 
 
--脚本 
import pyperclip ,re
 
#create phoneumber regex
phoneRegex=re.compile(r'''(
          (\d{3}|\(\d{3}\))?                 # area code
		  (\s|-|\.)?                         # separator
		  (\d{3})                            # first 3 digitals
		  (\s|-|\.)                          # separator
          (\d{4})                            # last 4 digitals
		  (\s*(ext|x|ext.)\s*(\d{2,5}))?     # extension
		   )''' ,re.VERBOSE)                 # re.VERBOSE 表示开启正则表达式中的注释功能
		    
  --compile方法的多个参数(compile方法最多两个参数）
    someRegexValue=re.compile('foo',re.IGNORECASE | re.DOTALL | re.VERBOSE)

  --Pyperclip的
     --安装
       pip install pyperclip
  --用法
     Pyperclip的主要用法有两个：
        1、复制内容到剪贴板
        2、粘贴剪贴板里的内容

           
  #create email regex
    emailRegex=re.compile(r'''(
        [a-zA-Z0-9._%+-]+   #username
		@                   #@  symbol
		[a-zA-Z0-9.-]+      #domain name
		(\.[a-zA-Z]{2,4})   #dot-something 匹配2-4个字符
		)''', re.VERBOSE)
	
        
  #find matches in clipboard text.
     text=str(pyperclip.paste())
	 
	 matches=[]
	 for groups in phoneRegex.findall(text):
	     phoneNumber='-'.join([groups[1],groups[3],groups[5]])
		 
		 
                    
					
					      PyInputPlus 模块 ：用于输入验证
						  
					
--属于第三方库，需要安装
  内置的函数的使用方法，见书第149页，也可以自行查看该库中函数的使用方法
  
--查看库中包含的函数及函数用法的帮助信息

举例：
     >>> import pyinputplus as pyip
	 >>> help(pyip)
Help on package pyinputplus:
NAME
    pyinputplus - PyInputPlus by Al Sweigart al@inventwithpython.com
DESCRIPTION
    A Python 2 and 3 module to provide input()- and raw_input()-like functions with additional validation features.
PACKAGE CONTENTS
CLASSES
    builtins.Exception(builtins.BaseException)
        PyInputPlusException
            ValidationException
        RetryLimitException
        TimeoutException

    class PyInputPlusException(builtins.Exception)
     |  Base class for exceptions raised when PyInputPlus functions
     |  encounter a problem. If PyInputPlus raises an exception that isn't
     |  this class, that indicates a bug in the module.
     |
     |  Method resolution order:
     |      PyInputPlusException
     |      builtins.Exception
     |      builtins.BaseException
     |      builtins.object
     |
     |  Data descriptors defined here:
     |
     |  __weakref__
     |      list of weak references to the object (if defined)
     |
     |  ----------------------------------------------------------------------     |  Methods inherited from builtins.Exception:
     |
     |  __init__(self, /, *args, **kwargs)
     |      Initialize self.  See help(type(self)) for accurate signature.
     |
     |  ----------------------------------------------------------------------     |  Static methods inherited from builtins.Exception:
-- More  --	 
  

--查看库中某个函数的帮助信息

举例：
     >>> import pyinputplus as pyip
     >>> help(pyip.inputDayOfWeek)
Help on function inputDayOfWeek in module pyinputplus:

inputDayOfWeek(prompt='', default=None, blank=False, timeout=None, limit=None, strip=None, allowRegexes=None, blockRegexes=None, applyFunc=None, postValidateApplyFunc=None)
    Prompts the user for a day of the week.
    Returns the day name in titlecase.

    Run ``help(pyinputplus.parameters)`` for an explanation of the common parameters.

    >>> import pyinputplus as pyip
    >>> response = pyip.inputDayOfWeek()
    mon
    >>> response
    'Monday'
    >>> response = pyip.inputDayOfWeek()
    FRIDAY
    >>> response
    'Friday'
	
                          
						  将一个文本中的内容进行过滤
	   
import re
pattern =re.compile( r'zhf',re.I)
file_path=r"c:\test\cba.txt"
filtered_functions = []
with open(file_path,mode='r',encoding='utf-8') as file:
    content = file.readlines()
   # print(content)                           	
for lines in content:
    match = pattern.search(lines)
    if match:
        filtered_functions.append(lines)
        print(match)
    else:
        continue
    
# 打印过滤后的函数
for function in filtered_functions:
    print(function)


                                  	
						   
						   
						

1,2,4,8,16,32