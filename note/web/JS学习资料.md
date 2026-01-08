# JavaScript
web 开发人员必须学习的 3 门语言中的一门：
- HTML 定义了网页的内容;
- CSS 描述了网页的布局;
- JavaScript 控制了网页的行为;
# JavaScript能用来做什么？
1. 直接写入 HTML 输出流：document.write("<h1>这是一个标题</h1>");
2. 对事件的反应：<button type="button" onclick="alert('欢迎!')">点我!</button>
alert() 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。
onclick 事件只是您即将在本教程中学到的众多事件之一。
3. 改变 HTML 内容：
<body>
<h1>我的第一段 JavaScript</h1>
<p id="demo">
JavaScript 能改变 HTML 元素的内容。
</p>
<script>
function myFunction()
{
	x=document.getElementById("demo");  // 找到元素
	x.innerHTML="Hello JavaScript!";    // 改变内容
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
</body>

4. 改变 HTML 图像：
<body>
<script>
function changeImage()
{
	element=document.getElementById('myimage')
	if (element.src.match("bulbon"))
	{
		element.src="/images/pic_bulboff.gif";
	}
	else
	{
		element.src="/images/pic_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
</body>

4.  改变 HTML 样式
<body>
<h1>我的第一段 JavaScript</h1>
<p id="demo" >
JavaScript 能改变 HTML 元素的样式。
</p>
<script>
function myFunction()
{
	x=document.getElementById("demo") // 找到元素
	x.style.color="red";          // 改变样式
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
</body>

5. 验证输入
<body>
	
<h1>我的第一段 JavaScript</h1>
<p>请输入数字。如果输入值不是数字，浏览器会弹出提示框。</p>
<input id="demo" type="text">
<script>
function myFunction()
{
	var x=document.getElementById("demo").value;
	if(x==""||isNaN(x))
	{
		alert("不是数字");
	}
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
	
</body>

# JavaScript 用法
HTML 中的 Javascript 脚本代码必须位于 <script> 与 </script> 标签之间。
Javascript 脚本代码可被放置在 HTML 页面的 <body> 和 <head> 部分中。

## 向 HTML 文档写入内容
<body>
	
<p>
JavaScript 能够直接写入 HTML 输出流中：
</p>
<script>
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
</script>
<p>
您只能在 HTML 输出流中使用 <strong>document.write</strong>。
通常，我们需要在某个事件发生时执行代码，比如当用户点击按钮时。
如果在文档完成加载后调用 document.write，它会清除整个文档的内容，导致之前的内容消失。因此，一般推荐在文档加载过程中使用此方法。
</p>
</body>

## js脚本放置位置
可以在 HTML 文档中放入不限数量的脚本。
脚本可位于 HTML 的 <body> 或 <head> 部分中，或者同时存在于两个部分中。
通常的做法是把函数放入 <head> 部分中，或者放在<body>部分底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容。
## 外部的js
也可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码。
外部 JavaScript 文件的文件扩展名是 .js。
如需使用外部文件，请在 <script> 标签的 "src" 属性中设置该 .js 文件
<body>
<script src="myScript.js"></script>
</body>

# JavaScript 输出
**JavaScript 没有任何打印或者输出的函数**
**所有输出都必须通过 HTML 元素来完成**
## JavaScript 显示数据
JavaScript 可以通过不同的方式来输出数据：
- 使用 **window.alert()** 弹出警告框。
- 使用 **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 属性将内容写入到 HTML 元素中。
举例：
 <body>
<h1>我的第一个 Web 页面</h1>
<p id="demo">我的第一个段落。</p>
<script>
document.getElementById("demo").innerHTML="段落已修改。";
</script>
</body> 
- 使用 console.log() 写入到浏览器的控制台。

# JavaScript 语法
JavaScript 是一个脚本语言。
它是一个轻量级，但功能强大的编程语言。
## JavaScript 字面量
一般固定值称为字面量
JavaScript 字面量是指直接表示值的表达式。
JavaScript 有以下几种字面量：
- 字符串字面量
"John Doe"
'John Doe'
- 数字字面量
3.14
1001
123e5
- 布尔字面量
true
false
- 数组字面量
[1, 2, 3, 4, 5]
- null 字面量
null
- undefined 字面量
undefined
- 对象字面量
{name: "John Doe", age: 30, city: "New York"}
- 函数字面量
function myFunction() {
  return "Hello World";
}

## JavaScript 变量
变量是存储数据的容器。
变量的名称通常用小写字母、数字和下划线组成。
变量的声明语法：
var variableName = value;

## JavaScript 操作符
JavaScript 有以下几种操作符：
- 自增运算符
    ++variableName
- 自减运算符
    --variableName
- 关系运算符
     大于运算符 >
     小于运算符 <
     大于等于运算符 >=
    <= 小于等于运算符
    == 等于运算符
    === 全等运算符
    != 不等于运算符
    !== 不全等运算符
- 逻辑运算符
    && 逻辑与运算符
    || 逻辑或运算符
    ! 逻辑非运算符
- 条件运算符
    condition? expressionIfTrue : expressionIfFalse
- 赋值运算符
    简单的赋值运算符    =
    加法赋值运算符    +
    减法赋值运算符    -
    乘法赋值运算符    *
    除法赋值运算符    /
    取模赋值运算符    %
- 逗号运算符
    var x = 1, y = 2, z = 3;
- 字符串连接运算符
    "Hello " + "World"
- 位运算符
    & 按位与运算符
    | 按位或运算符
    ^ 按位异或运算符
    ~ 按位取反运算符
    左移运算符         << 
    右移运算符  >> 
     无符号右移运算符  >>>

## JavaScript 字符集
JavaScript 使用 Unicode 字符集。
Unicode 联盟（Unicode Consortium）开发了 Unicode 标准（Unicode Standard）。他们的目标是使用标准的 Unicode 转换格式（即 UTF，全称 Unicode Transformation Format）取代现有的字符集。
Unicode 标准是一个成功的创举，在 HTML、XML、Java、JavaScript、E-mail、ASP、PHP 中都得到实现。Unicode 标准也得到许多操作系统和所有现代浏览器的支持。
UTF-8	UTF8 中的字符可以是 1 到 4 字节长。UTF-8 可以代表 Unicode 标准中的任何字符。UTF-8 向后兼容 ASCII。UTF-8 是电子邮件和网页的首选编码。

# JavaScript 语句
- JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。
- 分号 ;
分号用于分隔 JavaScript 语句。
通常我们在每条可执行的语句结尾添加分号。
使用分号的另一用处是在一行中编写多条语句。
## 代码块
代码块以左花括号开始，以右花括号结束。
代码块的作用是一并地执行语句序列。

# JavaScript 注释
JavaScript 注释是用来解释代码的文字。
注释不会被执行。
JavaScript 有三种注释语法：
- 单行注释
// 注释内容
- 多行注释
/* 注释内容 */
- 文档注释
/**
 * 注释内容
 */

# JavaScript 变量
变量名必须以字母开头

# JavaScript 常量
 const 关键字来定义一个常量，使用 let 关键字定义的限定范围内作用域的变量。

# JavaScript 数据类型
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，
还有两个特殊的对象：正则（RegExp）和日期（Date）。

# JavaScript 拥有动态类型
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串

变量的数据类型可以使用 **typeof** 操作符来查看
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object

## JavaScript 字符串
字符串可以是引号中的任意文本。您可以使用单引号或双引号：
您可以在字符串中使用引号，只要不匹配包围字符串的引号即可：
-  实例
var answer="It's alright";
var answer="He is called 'Johnny'";
var answer='He is called "Johnny"';

## JavaScript 数组
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
或者 (condensed array):
var cars=new Array("Saab","Volvo","BMW");

## JavaScript 对象
对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔
var person={firstname:"John", lastname:"Doe", id:5566};


对象属性有两种寻址方式：
- 实例
name=person.lastname;
name=person["lastname"];
## Undefined 和 Null
Undefined 这个值表示变量不含有值。
可以通过将变量的值设置为 null 来清空变量。
- 实例
cars=null;
person=null;

## 声明变量类型
当您声明新变量时，可以使用关键词 "new" 来声明其类型：
- 实例
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;

# 函数
JavaScript 函数语法
函数就是包裹在花括号中的代码块，前面使用了关键词 function：
function functionname()
{
    // 执行代码
}

function myFunction(var1,var2)
{
代码
}

function myFunction()
{
    var x=5;
    return x;
}

# var 和 let 的区别
// 使用 let 关键字，只能在块{}中使用
let text1 = `He's often called "Runoob"`;
console.log(text1); // 输出: He's often called "Runoob"

if (true) {
  let text2 = `He's often called "Runoob"`;
  console.log(text2); // 输出: He's often called "Runoob"
  console.log(typeof text2); // 输出: string
}
// console.log(text2); // ReferenceError: text2 is not defined here

// 使用 var 关键字 
var text3 = `He's often called "Runoob"`;
console.log(text3); // 输出: He's often called "Runoob"

if (true) {
  var text4 = `He's often called "Runoob"`;
  console.log(text4); // 输出: He's often called "Runoob"
  console.log(typeof text4); // 输出: string
}
console.log(typeof text4); // 输出: string，即使在 if 块外也能访问
1. 变量声明关键字：
第一行使用了 let 关键字，这是在 ES6（ECMAScript 2015）中引入的新的变量声明关键字，用于块级作用域的变量声明。
第二行使用了 var 关键字，这是 ES5 及之前版本中用于函数作用域或全局作用域的变量声明。

1. 作用域：
let 关键字声明的变量 text 具有块级作用域，这意味着它只在声明它的代码块（例如 if 语句、for 循环、函数等）内部可见。
var 关键字声明的变量 text 具有函数作用域或全局作用域，这意味着它在整个函数内部或全局范围内可见，而不是在块级范围内。
- var的全局变量
var carName = " Volvo";
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}
- var的局部变量(在函数内部就是局部变量)
function myFunction() {	
    var carName = " Volvo";
    // 此处可调用 carName 变量
}
// 函数外不可调用 carName 变量

***注意：***
在现代 JavaScript 开发中，推荐使用 let 和 const 来代替 var，因为它们提供了更好的作用域控制和更少的意外行为。

# 字符串模板/模板字符串
JavaScript 中的模板字符串是一种方便的字符串语法，允许你在字符串中嵌入表达式和变量。
模板字符串使用反引号 `` 作为字符串的定界符分隔的字面量。
模板字面量是用反引号（`）分隔的字面量，允许多行字符串、带嵌入表达式的字符串插值和一种叫带标签的模板的特殊结构。
1. 语法
`string text`
`string text line 1`
`string text line 2`
`string text ${expression} string text\`

tagFunction `string text ${expression} string text`
参数
string text：将成为模板字面量的一部分的字符串文本。几乎允许所有字符，包括换行符和其他空白字符。但是，除非使用了标签函数，否则无效的转义序列将导致语法错误。
expression：要插入当前位置的表达式，其值被转换为字符串或传递给 tagFunction。
tagFunction：如果指定，将使用模板字符串数组和替换表达式调用它，返回值将成为模板字面量的值。

2. 实例
<p id="demo"></p>

<p>Internet Explorer 不支持模板字面量。</p>

<script>
const name = 'Runoob';
const age = 30;
const message = `My name is ${name} and I'm ${age} years old.`;
document.getElementById("demo").innerHTML = message;
</script>

<p>模板字面量使用反引号 (``) 来定义一个字符串:</p>

<div id="demo"></div>
_____________________________________
<p>Internet Explorer 不支持模板字面量。</p>
<script>
let header = "";
let tags = ["RUNOOB", "GOOGLE", "TAOBAO"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>


# for循环
1. for...of：
用于迭代可迭代对象（如数组、字符串、集合等）中的值。
语法：for (const value of iterable) { ... }
2. for...in：
用于遍历对象的可枚举属性，通常用于遍历对象的键（属性名）。
语法：for (const key in object) { ... }
3、条件判断用法
for (var i=0; i<5; i++)
{
      x=x + "该数字为 " + i + "<br>";
}

# typeof 操作符
你可以使用 typeof 操作符来检测变量的数据类型。
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object

# undefined 和 null 的区别
1. 在 JavaScript 中 null 表示 "什么都没有"。
null是一个只有一个值的特殊类型。表示一个空对象引用。
2. 在 JavaScript 中, undefined 是一个没有设置值的变量的类型。
var person = null;           // 值为 null(空), 但类型为对象
var person = undefined;     // 值为 undefined, 类型为 undefined
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true

# constructor 属性
constructor 属性返回所有 JavaScript 变量的构造函数。
- 实例
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }

# JavaScript 类型转换
Number() 转换为数字， String() 转换为字符串， Boolean() 转换为布尔值。

## JavaScript 数据类型
1. 在 JavaScript 中有 6 种不同的数据类型：
string
number
boolean
object
function
symbol
2. 3 种对象类型：
Object
Date
Array
3. 2 个不包含任何值的数据类型：
null
undefined

## 将数字转换为字符串
- 实例
String(x)         // 将变量 x 转换为字符串并返回
String(123)       // 将数字 123 转换为字符串并返回
String(100 + 23)  // 将数字表达式转换为字符串并返回

## 将字符串转换为数字
- 实例
Number("3.14")    // 返回 3.14
Number(" ")       // 返回 0
Number("")        // 返回 0
Number("99 88")   // 返回 NaN

## 将布尔值转换为字符串
- 实例  
String(true)      // 将布尔值 true 转换为字符串 "true"
String(false)     // 将布尔值 false 转换为字符串 "false"

## 将字符串转换为布尔值
- 实例
Boolean(x)        // 将变量 x 转换为布尔值并返回
Boolean("")       // 将空字符串转换为布尔值 false
Boolean("0")      // 将字符串 "0" 转换为布尔值 true
Boolean("false")  // 将字符串 "false" 转换为布尔值 true

## 将日期转换为字符串
Date()      // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

## 将日期转换为数字
Date.parse()      // 返回 1405686299000

## 自动转换为字符串
当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：

# JavaScript 正则表达式
正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。
搜索模式可用于文本搜索和文本替换。

## 使用字符串方法
在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。
search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
replace() 方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串。

1. 实例
使用正则表达式搜索 "Runoob" 字符串，且不区分大小写：
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
2. 实例
检索字符串中 "Runoob" 的子串：
var str = "Visit Runoob!"; 
var n = str.search("Runoob");
3. replace() 方法使用正则表达式
replace() 方法将接收字符串作为参数：
var str = document.getElementById("demo").innerHTML; 
var txt = str.replace("Microsoft","Runoob");

## 正则表达式修饰符
正则表达式可以包含一些修饰符来控制匹配模式，修饰符在正则表达式的最尾部，并用一个冒号 : 隔开。

修饰符	描述
i	执行对大小写不敏感的匹配
g	全局匹配模式，在整个字符串中查找匹配，而非在找到第一个匹配后停止
m	多行匹配模式，在每一行中查找匹配

## 正则表达式模式
模式	描述
/pattern/	匹配 pattern
/pattern/flags	匹配 pattern，带有标志 flags

表达式	描述
[abc]	查找方括号之间的任何字符。
[0-9]	查找任何从 0 至 9 的数字。
(x|y)	查找任何以 | 分隔的选项。

元字符	描述
\d	查找数字。
\s	查找空白字符。
\b	匹配单词边界。
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。

量词	描述
n+	匹配任何包含至少一个 n 的字符串。
n*	匹配任何包含零个或多个 n 的字符串。
n?	匹配任何包含零个或一个 n 的字符串。


1. 实例
使用正则表达式模式匹配字符串：
var str = "Hello, World!"; 
var pattern = /World/; 
var result = str.match(pattern); 
console.log(result); // Output: ["World"]
2. 实例
使用正则表达式模式匹配字符串，且不区分大小写：
var str = "Hello, World!"; 
var pattern = /world/i; 
var result = str.match(pattern); 
console.log(result); // Output: ["World"]
3. 实例
使用正则表达式模式匹配字符串，且全局匹配模式：
var str = "Hello, World! Hello, Runoob!"; 
var pattern = /Hello/g; 
var result = str.match(pattern); 
console.log(result); // Output: ["Hello", "Hello"]
4. 实例
使用正则表达式模式匹配字符串，且多行匹配模式：
var str = "Hello, \nWorld!"; 
var pattern = /World/m; 
var result = str.match(pattern); 
console.log(result); // Output: ["World"]

## 使用 RegExp 对象
RegExp 对象用于创建正则表达式。

## 创建 RegExp 对象
- 实例
var re = new RegExp("Hello, World!"); 
console.log(re); // Output: /Hello, World!/

## 正则表达式方法
- test() 方法
test() 方法用于检测字符串是否匹配正则表达式。
- exec() 方法
exec() 方法用于检索字符串中与正则表达式相匹配的子串，并返回一个数组。
- match() 方法
match() 方法用于检索字符串中与正则表达式相匹配的子串，并返回一个数组。
- replace() 方法
replace() 方法用于替换与正则表达式匹配的子串。
- search() 方法
search() 方法用于检索字符串中与正则表达式相匹配的子串，并返回子串的起始位置。
- split() 方法
split() 方法用于分割字符串，将字符串分割为子串数组。
## 实例
- 实例
使用 test() 方法检测字符串是否匹配正则表达式：
var str = "Hello, World!"; 
var pattern = /World/; 
var result = str.test(pattern); 
console.log(result); // Output: true
- 实例
使用 exec() 方法检索字符串中与正则表达式相匹配的子串：
var str = "Hello, World!"; 
var pattern = /World/; 
var result = str.exec(pattern); 
console.log(result); // Output: ["World"]
- 实例
使用 match() 方法检索字符串中与正则表达式相匹配的子串：
var str = "Hello, World!"; 
var pattern = /World/; 
var result = str.match(pattern); 
console.log(result); // Output: ["World"]
- 实例
使用 replace() 方法替换与正则表达式匹配的子串：
var str = "Hello, World!"; 
var pattern = /World/g; 
var result = str.replace(pattern, "Runoob"); 
console.log(result); // Output: "Hello, Runoob!"
- 实例
使用 search() 方法检索字符串中与正则表达式相匹配的子串：
var str = "Hello, World!"; 
var pattern = /World/; 
var result = str.search(pattern); 
console.log(result); // Output: 7
- 实例
使用 split() 方法分割字符串：
var str = "Hello, World!"; 
var pattern = /,/; 
var result = str.split(pattern); 
console.log(result); // Output: ["Hello", " World!"] 

# JavaScript 错误 - throw、try 和 catch
- try 语句：测试代码块的错误。
- catch 语句：处理错误。
- throw 语句：创建自定义错误。
- finally 语句：在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。

## JavaScript 错误
当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误。
可能是语法错误，通常是程序员造成的编码错误或错别字。
可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
可能是由于来自服务器或用户的错误输出而导致的错误。
当然，也可能是由于许多其他不可预知的因素。

## JavaScript 抛出（throw）错误
当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。
描述这种情况的技术术语是：JavaScript 将抛出一个错误。

## JavaScript try 和 catch
try 语句允许我们定义在执行时进行错误测试的代码块。
catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
JavaScript 语句 try 和 catch 是成对出现的。
- 语法
try {
    ...    //异常的抛出
} catch(e) {
    ...    //异常的捕获与处理
} finally {
    ...    //结束处理
}

## 实例
var txt=""; 
function message() 
{ 
    try { 
        addalert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
}

## 实例2
finally 语句
finally 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。
实例
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}

# JavaScript 变量提升
JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
以下两个实例将获得相同的结果：
1. 实例 1
x = 5; // 变量 x 设置为 5
elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x;                     // 在元素中显示 x
var x; // 声明 x

2. 实例 2
var x; // 声明 x
x = 5; // 变量 x 设置为 5
elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x;                     // 在元素中显示 x
- 要理解以上实例就需要理解 "hoisting(声明提升)"。
- 声明提升：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。

## JavaScript 初始化不会提升
JavaScript 初始化不会提升，JavaScript 只有声明的变量部分会提升，初始化部分不会。
- 实例1
var x = 5; // 初始化 x
var y = 7; // 初始化 y
elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = x + " " + y;           // 显示 5 7
- 实例2（用作比较）
var x = 5; // 初始化 x
elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = "x 为：" + x + "，y 为：" + y;   //显示 x 为：5，y 为：undefined
var y = 7; // 初始化 y

# JavaScript 严格模式(use strict)
JavaScript 严格模式（strict mode）即在严格的条件下运行。
严格模式下你不能使用未声明的变量。
"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。
它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。
## 严格模式的限制
1. 不允许使用未声明的变量;
2. 不允许删除变量或对象属性;
3. 不允许删除函数。
4. 不允许变量重名:
5. 不允许使用八进制:
6. 不允许使用转义字符:
7. 不允许对只读属性赋值:
8. 不允许对一个使用getter方法读取的属性进行赋值
9. 不允许删除一个不允许删除的属性：
10. 变量名不能使用 "eval" 字符串:
11. 变量名不能使用 "arguments" 字符串:
12. 禁止this关键字指向全局对象。

# JavaScript 字符串分行
- 实例 1
var x =
"Hello World!";
console.log(x); // Output: Hello World!
- 实例 2
var x = "Hello\nWorld!";
console.log(x); // Output: Hello World!
- 实例 3
var x = "Hello\rWorld!";
console.log(x); // Output: Hello World!
- 实例 4
var x = "Hello\r\nWorld!";
console.log(x); // Output: Hello World!
- 实例 5
var x = "Hello \
World!";
console.log(x); // Output: Hello World!

# JavaScript 表单
## JavaScript 表单验证
- 实例 1
以下实例代码用于判断表单字段(fname)值是否存在， 如果不存在，就弹出信息，阻止表单提交：
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
</script>
<body>
<form name="myForm" action="demo_form.php"
onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
</body>

- 实例 2 HTML 表单自动验证
如果表单字段 (fname) 的值为空, required 属性会阻止表单提交：
<body>
<form action="demo_form.php" method="post">
  <input type="text" name="fname" required="required">
  <input type="submit" value="提交">
</form>
<p>点击提交按钮，如果输入框是空的，浏览器会提示错误信息。</p>
</body>

## 数据验证
典型的数据验证有：
- 必需字段是否有输入?
- 用户是否输入了合法的数据?
- 在数字字段是否输入了文本?
## 约束验证
HTML 约束验证基于：
- HTML 输入属性
| 属性      | 描述                   |
|-----------|-----------------------|
| disabled  | 规定输入的元素不可用   |
| max       | 规定输入元素的最大值   |
| min       | 规定输入元素的最小值   |
| pattern   | 规定输入元素值的模式   |
| required  | 规定输入元素字段是必需的 |
| type      | 规定输入元素的类型     |

- CSS 伪类选择器
| 选择器    | 描述                           |
|-----------|---------------------------------|
| :disabled | 选取属性为 "disabled" 的 input 元素 |
| :invalid  | 选取无效的 input 元素           |
| :optional | 选择没有 "optional" 属性的 input 元素 |
| :required | 选择有 "required" 属性的 input 元素 |
| :valid    | 选取有效值的 input 元素         |

- DOM 属性和方法
| 属性                   | 描述                           |
| --------------        | ------------------------------ |
| validity              | 布尔属性值，返回 input 输入值是否合法 |
| validationMessage     | 浏览器错误提示信息           |
| willValidate          | 指定 input 是否需要验证        |
|checkValidity()	    | 如果 input 元素中的数据是合法的返回 true，否则返回 false。|
|setCustomValidity()	| 设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成 true，checkValidity 总是会返回 false。如果要重新判断需要取消自定义提示，方式如下：
setCustomValidity('') 
setCustomValidity(null) 
setCustomValidity(undefined) |

- Validity 属性
| 属性          | 描述                                            |
|---------------|-------------------------------------------------|
| customError   | 设置为 true, 如果设置了自定义的 validity 信息。 |
| patternMismatch| 设置为 true, 如果元素的值不匹配它的模式属性。  |
| rangeOverflow  | 设置为 true, 如果元素的值大于设置的最大值。    |
| rangeUnderflow | 设置为 true, 如果元素的值小于它的最小值。      |
| stepMismatch   | 设置为 true, 如果元素的值不是按照规定的 step 属性设置。 |
| tooLong       | 设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。 |
| typeMismatch  | 设置为 true, 如果元素的值不是预期相匹配的类型。  |
| valueMissing  | 设置为 true，如果元素 (required 属性) 没有值。  |
| valid         | 设置为 true，如果元素的值是合法的。              |

- 举例  约束验证 DOM 方法
<body>

<p>输入数字并点击验证按钮:</p>

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">验证</button>

<p>如果输入的数字小于 100 或大于300，会提示错误信息。</p>

<p id="demo"></p>

<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML 
			= inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "输入正确";
    }
}
</script>

</body>

# JavaScript this 关键字
面向对象语言中 this 表示当前对象的一个引用。
但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

# JavaScript JSON
JSON 英文全称 JavaScript Object Notation
个人的一个理解：字典里面有列表，列表里面又可以套字典
## JSON 语法规则
- 数据为 键/值 对
- 数据由逗号分隔
- 大括号保存对象
- 方括号保存数组
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
## 相关函数
JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

## JSON 字符串转换为 JavaScript 对象
var text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
    
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;

# javascript:void(0)
## 含义
javascript:void(0) 中最关键的是 void 关键字， void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
## 举例
- 以下实例中，在用户点击链接后显示警告信息：
<p>点击以下链接查看结果：</p>
<a href="javascript:void(alert('Warning!!!'))">点我!</a>

- 下面的代码创建了一个超级链接，当用户点击以后不会发生任何事。
<a href="javascript:void(0)">单击此处什么也不会发生</a>

## href="#"与href="javascript:void(0)"的区别
<a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a>
<br>
...
<br>
<p id="pos">尾部定位点</p>

# JavaScript 异步编程
## 异步概念
JavaScript 是单线程的，这意味着同一时刻只能执行一个任务。
程序的运行是同步的（同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行）。
而异步的概念则是不保证同步的概念，也就是说，一个异步过程的执行将不再与原有的序列有顺序关系。
简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。
## 什么时候用异步编程
JavaScript 中的异步操作函数往往通过回调函数来实现异步任务的结果处理。
## 回调函数 -它就是个异步任务
回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：
等你完成了这个任务之后要干什么。这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。
1.常规写法
<body>
<p>回调函数等待 3 秒后执行。</p>
<p id="demo"></p>
<script>
function print() {
    document.getElementById("demo").innerHTML="RUNOOB!";
}
setTimeout(print, 3000);
</script>
</body>

2. js的写法
setTimeout(function () {
    document.getElementById("demo").innerHTML="RUNOOB!";
}, 3000);

## 异步 AJAX
1. 除了 setTimeout 函数以外，异步回调广泛应用于 AJAX 编程。有关于 AJAX 详细请参见：https://www.runoob.com/ajax/ajax-tutorial.html
2. XMLHttpRequest 常常用于请求来自远程服务器上的 XML 或 JSON 数据。一个标准的 XMLHttpRequest 对象往往包含多个回调：
3. XMLHttpRequest 的 onload 和 onerror 属性都是函数，分别在它请求成功和请求失败时被调用。
  **** 这段代码通过 XMLHttpRequest 向服务器发送一个异步 GET 请求，并在收到响应后更新页面中的内容。如果请求出错，则会显示错误信息。

var xhr = new XMLHttpRequest();
xhr.onload = function () {
// 输出接收到的文字数据
    document.getElementById("demo").innerHTML=xhr.responseText;
}
xhr.onerror = function () {
    document.getElementById("demo").innerHTML="请求出错";
}

// 发送异步 GET 请求
xhr.open("GET", "https://www.runoob.com/try/ajax/ajax_info.txt", true);

调用 xhr 对象的 open 方法，初始化一个请求。
第一个参数 "GET" 指定请求方法是 GET（从服务器获取数据）。
第二个参数是请求的 URL，这里是 "https://www.runoob.com/try/ajax/ajax_info.txt"，这是将要请求的资源地址。
第三个参数 true 表示这是一个异步请求。如果设置为 false，则是同步请求（等待请求完成）。

xhr.send();
调用 xhr 对象的 send 方法，发送请求到指定的 URL。由于是 GET 请求，所以此方法没有参数（不需要发送请求体）。

# JavaScript Promise
- Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写**复杂的异步任务**，它是异步编程的一种解决方案。
## Promise 的构造函数
1. 概念
Promise 构造函数是 JavaScript 中用于创建 Promise 对象的内置构造函数。
Promise 构造函数接受一个函数作为参数，该函数是同步的并且会被立即执行，所以我们称之为起始函数。起始函数包含两个参数 resolve 和 reject，分别表示 Promise 成功和失败的状态。
起始函数执行成功时，它应该调用 resolve 函数并传递成功的结果。当起始函数执行失败时，它应该调用 reject 函数并传递失败的原因。
2. 语法
new Promise(function (resolve, reject) {
    // 起始函数的代码
    // 异步操作的代码
    // 成功时调用 resolve(result)
    // 失败时调用 reject(error)
});

Promise 构造函数返回一个 Promise 对象，该对象具有以下几个方法：
- then：用于处理 Promise 成功状态的回调函数。
- catch：用于处理 Promise 失败状态的回调函数。
- finally：无论 Promise 是成功还是失败，都会执行的回调函数。


- 实例1
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 1000);
});
 
promise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});
在上面的例子中，我们使用 Promise 构造函数创建了一个 Promise 对象，并使用 setTimeout 模拟了一个异步操作。如果异步操作成功，则调用 resolve 函数并传递成功的结果；如果异步操作失败，则调用 reject 函数并传递失败的原因。然后我们使用 then 方法处理 Promise 成功状态的回调函数，使用 catch 方法处理 Promise 失败状态的回调函数。
这段程序会直接输出 error 或 success。lklkl

- 实列2
new Promise(function (resolve, reject) {
    var a = 0;
    var b = 1;
    if (b == 0) reject("Divide zero");
    else resolve(a / b);
}).then(function (value) {
    console.log("a / b = " + value);
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log("End");
});
这段程序执行结果是:

a / b = 0
End

Promise 类有 .then() .catch() 和 .finally() 三个方法，这三个方法的参数都是一个函数，.then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch() 则是设定 Promise 的异常处理序列，.finally() 是在 Promise 执行的最后一定会执行的序列。 .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列


- 实例3
new Promise(function (resolve, reject) {
    console.log(1111);
    resolve(2222);
}).then(function (value) {
    console.log(value);
    return 3333;
}).then(function (value) {
    console.log(value);
    throw "An error";
}).catch(function (err) {
    console.log(err);
});
执行结果：

1111
2222
3333
An error

这段代码的执行顺序如下：
创建一个新的 Promise 对象，并执行传入的函数。
在 Promise 的构造函数内部，首先执行 console.log(1111);，因此控制台会输出 1111。
接着调用 resolve(2222);，将 Promise 状态从待定（pending）变为成功（fulfilled），并传递值 2222。
然后，执行 then 方法的回调函数，其中 value 为 2222，因此会执行 console.log(value);，控制台输出 2222。
接下来，执行 return 3333;，将 3333 作为下一个 then 的输入。
执行下一个 then 方法的回调函数，此时 value 为 3333，控制台输出 3333。
然后，执行 throw "An error";，这会导致 Promise 进入失败（rejected）状态。
最后，进入到 catch 方法的回调函数，并执行 console.log(err);，控制台输出 An error。

resolve() 中可以放置一个参数用于向下一个 then 传递一个值，then 中的函数也可以返回一个值传递给 then。但是，***如果 then 中返回的是一个 Promise 对象***，那么下一个 then 将相当于对这个返回的 Promise 进行操作。
reject() 参数中一般会传递一个异常给之后的 catch 函数用于处理异常。
**但是请注意以下两点：**
resolve 和 reject 的作用域只有起始函数，不包括 then 以及其他序列；
resolve 和 reject 并不能够使起始函数停止运行，别忘了 return。

- 实例4
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});

控制台输出的顺序：
First
Second
Third

## 决定 Promise 状态的因素
Promise 的状态是由其内部操作的结果决定的，主要受到以下几个因素的影响：

异步操作的结果：Promise 通常用于处理异步操作。当这些操作完成时，它们将调用 resolve 或 reject 函数，分别改变 Promise 的状态为已成功或已失败。

执行上下文：Promise 的状态转移取决于所传递的执行函数中所定义的逻辑。例如，网络请求成功会调用 resolve，而请求失败通常会调用 reject。

promise 链：当一个 Promise 处理结束时，如果有后续的 then 或 catch 方法，会基于当前 Promise 的状态继续处理结果。每个 then 返回的 Promise 也会有自己的状态，这也是状态转换的一个重要因素。

错误处理机制：如果在 Promise 的执行过程中发生异常，通常会导致状态变为已失败，这要求对异常进行适当的捕获和处理。

总结
Promise 的状态包含待定pending、已成功 fulfilled 和已失败 rejected 三种。
状态转换主要是依赖于异步操作的完成情况，通过调用 resolve 或 reject 来改变状态。
状态的流转可以通过 Promise 链来进行管理和处理。

## Promise 函数
上述的 "计时器" 程序看上去比函数瀑布还要长，所以我们可以将它的核心部分写成一个 Promise 函数：
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

然后我们就可以放心大胆的实现程序功能了：

实例
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});

## 异步函数
异步函数（async function）是 ECMAScript 2017 (ECMA-262) 标准的规范，几乎被所有浏览器所支持，除了 Internet Explorer。
异步函数 async function 中可以使用 await 指令，await 指令后必须跟着一个 Promise，异步函数会在这个 Promise 运行中暂停，直到其运行结束再继续运行。
异步函数实际上原理与 Promise 原生 API 的机制是一模一样的，只不过更便于程序员阅读。
1. 实例
async function myFunction() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}

myFunction();    // 输出结果：First Second Third

2. 解读
- async 关键字：
在 JavaScript 中，使用 async 关键字定义异步函数，表示该函数内部可能会使用 await 关键字来处理异步操作。
- await 关键字：
await 用于等待一个 Promise 对象的解决（resolve）。在等待过程中，函数不会阻塞其他代码的执行，
而是会暂停执行，直到 Promise 被解决。
- 函数的执行顺序：
在这个示例中，myFunction 被调用时，它会依次执行 print 函数，而每个 print 的执行被 await 关键字暂停，直到它完成。
具体执行顺序为：首先调用print(1000, "First")，等待 1000 毫秒（1秒），然后输出 "First"；接着调用 print(4000, "Second")，等待 4000 毫秒（4秒），输出 "Second"；最后调用 print(3000, "Third")，等待 3000 毫秒（3秒），输出 "Third"。



# JavaScript 代码规范
## 变量名
变量名推荐使用驼峰法来命名(camelCase):这是小驼峰命名法，即变量名的第一个单词小写，第二个单词的首字母大写，如 firstName、lastName、totalCount。
## 空格与运算符
通常运算符 ( = + - * / ) 前后需要添加空格:
## 代码缩进
通常使用 4 个空格符号来缩进代码块：
## 语句规则
1. 简单语句的通用规则:
一条语句通常以分号作为结束符。
2. 复杂语句的通用规则:
将左花括号放在第一行的结尾。
左花括号前添加一空格。
将右花括号独立放在一行。
以分号结束一个复杂的声明。
## 对象规则
对象定义的规则:
将左花括号与类名放在同一行。
冒号与属性值间有个空格。
字符串使用双引号，数字不需要。
最后一个属性-值对后面不要添加逗号。
将右花括号独立放在一行，并以分号作为结束符号。
## 每行代码字符小于 80
为了便于阅读每行字符建议小于数 80 个。
如果一个 JavaScript 语句超过了 80 个字符，建议在 运算符或者逗号后换行。
## 命名规则
变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ lowerCamelCase）
全局变量为大写 (UPPERCASE )
常量 (如 PI) 为大写 (UPPERCASE )

# 函数
JavaScript 使用关键字 function 定义函数。
函数可以通过声明定义，也可以是一个表达式。
## 函数声明
函数声明的语法如下：
function 函数名(参数列表) {
    函数体
}
函数声明会在当前作用域中创建一个函数，函数名可以与变量名相同。
## 函数表达式
函数表达式的语法如下：
var 函数名 = function(参数列表) {
    函数体
}
函数表达式会在当前作用域中创建一个函数，函数名可以与变量名不同。
## 构造函数--个人理解：就是函数 这个对象的实例化
构造函数是一种特殊的函数，它用来创建对象的实例。
构造函数的语法如下：
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);

## lambda 函数
lambda 函数是一种匿名函数，它没有函数名，只能在函数调用时使用。
lambda 函数的语法如下：
(参数列表) => { 函数体 }


## 函数提升（Hoisting）
在之前的教程中我们已经了解了 "hoisting(提升)"。
提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的行为。
提升（Hoisting）应用在变量的声明与函数的声明。
因此，函数可以在声明之前调用：
myFunction(5);
function myFunction(y) {
    return y * y;
}
使用表达式定义函数时无法提升。

##  自调用函数--我理解就是函数自己自动执行，不需要通过其他方式调用
函数表达式可以 "自调用"。自调用表达式会自动调用。
如果表达式后面紧跟 () ，则会自动调用。
不能自调用声明的函数。
通过添加括号，来说明它是一个函数表达式：
实例
(function () {
    var x = "Hello!!";      // 我将调用自己
})();

## 函数可作为一个值使用
1.实例1
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3);
2. JavaScript 函数可作为表达式使用：
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;

## 函数是对象
在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
但是JavaScript 函数描述为一个对象更加准确。
JavaScript 函数有 属性 和 方法。
arguments.length 属性返回函数调用过程接收到的参数个数：
实例
function myFunction(a, b) {
    return arguments.length;
}

# JavaScript 函数参数
## 函数显式参数(Parameters)与隐式参数(Arguments)
1. 函数显式参数(Parameters)
函数显式参数(Parameters)是函数定义时定义的变量。
函数调用时必须按照定义的参数顺序提供参数值。
functionName(parameter1, parameter2, parameter3) {
    // 要执行的代码……
}
2. 函数隐式参数(Arguments)
函数隐式参数(Arguments)是函数调用时传递的变量。
函数调用时可以按照任意顺序提供参数值。
functionName(argument1, argument2, argument3) {
    // 要执行的代码……
}

2. 参数规则
参数名必须是有效的标识符。
参数名不能与 JavaScript 关键字相同。
参数名不能以数字开头。
参数名不能包含空格。
参数名不能包含特殊字符。
JavaScript 函数定义显式参数时没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。

## arguments 对象
JavaScript 函数有个内置的对象 arguments 对象。
arguments 对象包含了函数调用的参数数组。
通过这种方式你可以很方便的找到最大的一个参数的值：
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

# JavaScript 函数调用
JavaScript 函数有 4 种调用方式。
每种方式的不同在于 this 的初始化。
## 1 作为一个函数调用
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // myFunction(10, 2) 返回 20
以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。
在 HTML 中默认的全局对象是 HTML 页面本身，所以函数是属于 HTML 页面。
在浏览器中的页面对象是浏览器窗口(window 对象)。以上函数会自动变为 window 对象的函数。
myFunction() 和 window.myFunction() 是一样的：
function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2);    // window.myFunction(10, 2) 返回 20
## 2 全局对象
当函数没有被自身的对象调用时 this 的值就会变成全局对象。
在 web 浏览器中全局对象是浏览器窗口（window 对象）。
该实例返回 this 的值是 window 对象:
function myFunction() {
    return this;
}
myFunction();                // 返回 window 对象

## 3 作为一个方法调用
以下实例创建了一个对象 (myObject), 对象有两个属性 (firstName 和 lastName), 及一个方法 (fullName):
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // 返回 "John Doe"

## 4 使用构造函数调用函数
如果函数调用前使用了 new 关键字, 则是调用了构造函数。
这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：
实例
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
 
// This    creates a new object
var x = new myFunction("John","Doe");
x.firstName;                             // 返回 "John"

## 5 作为函数方法调用函数
在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。
call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // 返回 20

# JavaScript 闭包
## JavaScript 内嵌函数
所有函数都能访问全局变量。  
实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。
JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。
该实例中，内嵌函数 plus() 可以访问父函数的 counter 变量：
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
// add() 返回 1

## 闭包
闭包是指有权访问另一个函数作用域中的变量的函数。
var add = function () {
    var counter = 0;
    return function () {return counter += 1;}
};
add();
add();
add(); 
// 计数器为 3
解析：
变量 add 指定了函数自我调用的返回值。
自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。
add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
计数器受匿名函数的作用域保护，只能通过 add 方法修改。

# JavaScript 类(class)
## 基本概念
类是用于创建对象的模板。
我们使用 class 关键字来创建一个类，类体在一对大括号 {} 中，我们可以在大括号 {} 中定义类成员的位置，如方法或构造函数。
每个类中包含了一个特殊的方法 constructor()，它是类的构造函数，这种方法用于创建和初始化一个由 class 创建的对象。
## 创建一个类的语法格式如下：
class ClassName {
  constructor() { ... }
}
- 实例
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
以上实例创建了一个类，名为 "Runoob"。
类中初始化了两个属性： "name" 和 "url"。

## 类的实例化
let site = new Runoob("菜鸟教程",  "https://www.runoob.com");
console.log(site.name);    // 输出 "菜鸟教程"
console.log(site.url);     // 输出 "https://www.runoob.com"

## 类表达式
类也可以使用表达式的形式创建。
类表达式是定义类的另一种方法。类表达式可以命名或不命名。
命名类表达式的名称是该类体的局部名称。
// 未命名/匿名类
let Runoob = class {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
// output: "Runoob"
 
// 命名类
let Runoob = class Runoob2 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
// 输出: "Runoob2"

## 构造方法
构造方法是一种特殊的方法：
- 构造方法名为 constructor()。
- 构造方法在创建新对象时会自动执行。
- 构造方法用于初始化对象属性。
- 如果不定义构造方法，JavaScript 会自动添加一个空的构造方法。
class Runoob {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
 
let runoob = new Runoob("菜鸟教程", 2018);
document.getElementById("demo").innerHTML =
"菜鸟教程 " + runoob.age() + " 岁了。";

# JavaScript 类继承
JavaScript 类继承使用 extends 关键字。
继承允许我们依据另一个类来定义一个类，这使得创建和维护一个应用程序变得更容易。
super() 方法用于调用父类的构造函数。
当创建一个类时，您不需要重新编写新的数据成员和成员函数，只需指定新建的类继承了一个已有的类的成员即可。这个已有的类称为基类（父类），新建的类称为派生类（子类）。
继承代表了 is a 关系。例如，哺乳动物是动物，狗是哺乳动物，因此，狗是动物，等等。

1. 代码
// 基类
class Animal {
    // eat() 函数
    // sleep() 函数
};
 
 
//派生类
class Dog extends Animal {
    // bark() 函数
};

2. 以下实例创建的类 "Runoob" 继承了 "Site" 类:
class Site {
  constructor(name) {
    this.sitename = name;
  }
  present() {
    return '我喜欢' + this.sitename;
  }
}
 
class Runoob extends Site {
  constructor(name, age) {
    super(name); // 调用父类的构造函数
    this.age = age; // 新增属性 age
  }
  show() {
    return this.present() + ', 它创建了 ' + this.age + ' 年。'; // 调用父类的方法
  }
}
let noob = new Runoob("菜鸟教程", 5);
document.getElementById("demo").innerHTML = noob.show();

JavaScript 并没有像其他编程语言一样具有传统的类，而是基于原型的继承模型。
ES6 引入了类和 class 关键字，但底层机制仍然基于原型继承。

## 使用原型链继承
1. 使用原型链继承--个人感觉，就是学习了解以下，不需要太多消耗，理解就好了。
在下面实例中，Animal 是一个基类，Dog 是一个继承自 Animal 的子类，Dog.prototype 使用 Object.create(Animal.prototype) 来创建一个新对象，它继承了 Animal.prototype 的方法和属性，通过将 Dog.prototype.constructor 设置为 Dog，确保继承链上的构造函数正确。

function Animal(name) { // 基类
  this.name = name; // 实例属性
}
 
Animal.prototype.eat = function() { // 实例方法
  console.log(this.name + " is eating.");
};
 
function Dog(name, breed) { // 创建1个子类
  Animal.call(this, name);// 调用父类的构造函数
  this.breed = breed;// 实例属性
}
 
// 建立原型链，让 Dog 继承 Animal
Dog.prototype = Object.create(Animal.prototype);// 继承属性和方法
Dog.prototype.constructor = Dog;// 修正 constructor 属性
 
Dog.prototype.bark = function() {  // 实例方法
  console.log(this.name + " is barking.");  // 方法体
};
 
var dog = new Dog("Buddy", "Labrador");//实例化一个对象
dog.eat();  // 调用从 Animal 继承的方法  // 输出 "Buddy is eating."
dog.bark(); // 调用 Dog 的方法  // 输出 "Buddy is barking."

## 使用 ES6 类继承
ES6 引入了 class 关键字，使得定义类和继承更加清晰，extends 关键字用于建立继承关系，super 关键字用于在子类构造函数中调用父类的构造函数。
class Animal { // 基类
  constructor(name) { // 构造函数
    this.name = name; // 实例属性
  }
 
  eat() {  // 实例方法
    console.log(this.name + " is eating."); // 方法体
  }
}
 
class Dog extends Animal { // 子类
  constructor(name, breed) { // 构造函数
    super(name); // 调用父类的构造函数
    this.breed = breed; // 实例属性 
  }
 
  bark() {  // 实例方法
    console.log(this.name + " is barking.");
  }
}
 
const dog = new Dog("Buddy", "Labrador"); // 实例化一个对象
dog.eat(); // 调用父类的方法  // 输出 "Buddy is eating."
dog.bark(); // 调用子类的方法  // 输出 "Buddy is barking."

## getter 和 setter
类中我们可以使用 getter 和 setter 来获取和设置值，getter 和 setter 都需要在严格模式下执行。
getter 和 setter 可以使得我们对属性的操作变的很灵活。
类中添加 getter 和 setter 使用的是 **get** 和 **set** 关键字。
以下实例为 sitename 属性创建 getter 和 setter：
class Runoob { // 类名
  constructor(name) {// 构造函数
    this.sitename = name;// 实例属性
  }
  get s_name() {// getter 方法
    return this.sitename; // 返回实例属性
  }
  set s_name(x) {// setter 方法
    this.sitename = x;// 设置实例属性
  }
}
let noob = new Runoob("菜鸟教程");// 实例化一个对象
document.getElementById("demo").innerHTML = noob.s_name;// 输出 "菜鸟教程"

**注意**：即使 getter 是一个方法，当你想获取属性值时也不要使用括号。
getter/setter 方法的名称不能与属性的名称相同，在本例中属名为 sitename。
很多开发者在属性名称前使用下划线字符 _ 将 getter/setter 与实际属性分开：
**以下实例使用下划线 _ 来设置属性，并创建对应的 getter/setter 方法**：
class Runoob {
  constructor(name) {
    this._sitename = name;
  }
  get sitename() {
    return this._sitename;
  }
  set sitename(x) {
    this._sitename = x;
  }
}
let noob = new Runoob("菜鸟教程");
document.getElementById("demo").innerHTML = noob.sitename;

# 提升
函数声明和类声明之间的一个重要区别在于, 函数声明会提升，类声明不会。
你首先需要声明你的类，然后再访问它，否则类似以下的代码将抛出 ReferenceError：
// 这里不能这样使用类，因为还没有声明
// noob = new Runoob("菜鸟教程")
// 报错
class Runoob {
  constructor(name) {
    this.sitename = name;
  }
}
// 这里可以使用类了
let noob = new Runoob("菜鸟教程")

# JavaScript 静态方法
静态方法是使用 static 关键字修饰的方法，又叫类方法，属于类的，但不属于对象，在实例化对象之前可以通过 类名.方法名 调用静态方法。
静态方法不能在对象上调用，只能在类中调用。
class Runoob {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}
 
let noob = new Runoob("菜鸟教程");
 
// 可以在类中调用 'hello()' 方法
document.getElementById("demo").innerHTML = Runoob.hello();
 
// 不能通过实例化后的对象调用静态方法
// document.getElementById("demo").innerHTML = noob.hello();
// 以上代码会报错

# JavaScript HTML DOM
通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
## 1. HTML DOM (文档对象模型document object model)
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
HTML DOM 模型被构造为对象的树：
![alt text](tree-1.png)
通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应
## 2. 查找 HTML 元素
通常，通过 JavaScript，您需要操作 HTML 元素。
为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：
- 通过 id 找到 HTML 元素
- 通过标签名找到 HTML 元素
- 通过类名找到 HTML 元素
1. **通过 id 找到 HTML 元素**
在 DOM 中查找 HTML 元素的最简单的方法，是通过使用元素的 id。
本例查找 id="intro" 元素：
- 举例：
var x=document.getElementById("intro");
如果找到该元素，则该方法将以对象（在 x 中）的形式返回该元素。
如果未找到该元素，则 x 将包含 null。
2. **通过标签名找到 HTML 元素**
本例查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素：
- 举例：
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");
如果找到了 id="main" 元素，则该方法将返回包含所有 <p> 元素的数组。
如果未找到 id="main" 元素，则 x 将包含 null，而 y 将包含一个空数组。
3. **通过类名找到 HTML 元素**
本例查找 class="intro" 的元素：
- 举例：
var x=document.getElementsByClassName("intro");
如果找到了 class="intro" 元素，则该方法将返回包含所有该类的元素的数组。
如果未找到 class="intro" 元素，则 x 将包含一个空数组。

## 3. 改变 HTML 元素
HTML DOM 允许 JavaScript 改变 HTML 元素的内容。
1. 改变 HTML 输出流
JavaScript 能够创建动态的 HTML 内容：
今天的日期是： Fri Oct 04 2024 08:54:57 GMT+0800 (中国标准时间)
在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。
- 举例：JavaScript 代码使用 document.write() 方法向 HTML 输出流写了一个当前日期。
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>

2. 改变 HTML 元素内容
修改 HTML 内容的最简单的方法是使用 innerHTML 属性。
如需改变 HTML 元素的内容，请使用这个语法：
document.getElementById(id).innerHTML=新的 HTML
本例改变了 <p>元素的内容：
- 举例：JavaScript 更改此元素的内容 (innerHTML)
<html>
<body>
<p id="p1">Hello World!</p>
<script>
document.getElementById("p1").innerHTML="新文本!";
</script>
</body>
</html>

3. 改变 HTML 元素属性
如需改变 HTML 元素的属性，请使用这个语法：
document.getElementById(id).attribute=新属性值
本例改变了 <img> 元素的 src 属性：
- 举例：JavaScript 更改此元素的属性（把 "smiley.gif" 改为 "landscape.jpg"）
<!DOCTYPE html>
<html>
<body>
<img id="image" src="smiley.gif">
<script>
document.getElementById("image").src="landscape.jpg";
</script>
</body>
</html>

##  4. 改变 CSS 样式
JavaScript 能够改变 HTML 元素的样式。
如需改变 CSS 样式，请使用这个语法：
document.getElementById(id).style.property=新样式值
- 举例：
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
 
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
<p>以上段落通过脚本修改。</p>
 
</body>
</html>

## 5. 事件处理
HTML DOM 允许我们通过触发事件来执行代码。
比如以下事件：
- 元素被点击。
- 页面加载完成。
- 输入框被修改。

- 举例：本例改变了 id="id1" 的 HTML 元素的样式，当用户点击按钮时
<!DOCTYPE html>
<html>
<body>
<h1 id="id1">我的标题 1</h1>
<button type="button"
onclick="document.getElementById('id1').style.color='red'">
点我!</button>
</body>
</html>

HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。
1. 对事件做出反应
我们可以在事件发生时执行 JavaScript，比如当用户在 HTML 元素上点击时。
如需在用户点击某个元素时执行代码，请向一个 HTML 事件属性添加 JavaScript 代码：
onclick=JavaScript
- HTML 事件的例子：
**当用户点击鼠标时**
**当网页已加载时**
**当图像已加载时**
**当鼠标移动到元素上时**
**当输入字段被改变时**
**当提交 HTML 表单时**
**当用户触发按键时**
- 举例1：在本例中，当用户在 <h1> 元素上点击时，会改变其内容
<!DOCTYPE html>
<html>
<body>
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>
</body>
</html>

- 举例2：本例从事件处理器调用一个函数
<!DOCTYPE html>
<html>
<head>
<script>
function changetext(id)
{
    id.innerHTML="Ooops!";
}
</script>
</head>
<body>
<h1 onclick="changetext(this)">点击文本!</h1>
</body>
</html>

## 6.事件属性
如需向HTML元素分配事件，您可以使用事件属性。
- 举例：向 button 元素分配 onclick 事件
<script>
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>
<button onclick="displayDate()">点这里</button>

## 7. 使用 HTML DOM 来分配事件
HTML DOM 允许您使用 JavaScript 来向 HTML 元素分配事件
- 举例：本例向 button 元素分配 onclick 事件
<button id="myBtn">点这里</button>
<script>
document.getElementById("myBtn").onclick=function(){displayDate()};
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
</script>
<p id="demo"></p>

## 7. onload 和 onunload 事件
onload 和 onunload 事件会在用户进入或离开页面时被触发。
onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
onload 和 onunload 事件可用于处理 cookie。
### cookie的概念和理解
1. Cookie 是由 web 服务器在用户的浏览器中存储的小数据片段，用于记录用户在网站上的行为和偏好。可以将其理解为一种在用户与网站之间保持状态的信息，它主要用于以下几种目的：
- 会话管理：Cookie 可以帮助网站记住用户的登录信息、购物车内容等。这意味着用户在访问网站时，无需重新输入信息。
- 个性化设置：通过存储用户的偏好设置，Cookie 使得用户在返回网站时能够享受个性化的体验，比如语言选择、主题样式等。
- 跟踪和分析：许多网站使用 Cookie 来收集用户的行为数据，以便分析网站的访问情况和优化用户体验。这对于广告投放和市场调研也非常重要。
2. Cookie 具备以下几个特点：
- 有效期：每个 Cookie 都可以设置有效期，过期后会自动删除。
- 路径和域：Cookie 可以限制被发送到特定的路径或域名，以增强安全性。
- 安全性：HTTPOnly 和 Secure 属性可以减少 Cookie 被窃取的风险。
总体而言，Cookie 在现代网页应用中起到了重要的作用，但用户也可以通过浏览器设置管理或删除 Cookie，以保护自己的隐私。
3. 举例：
<body onload="checkCookies()">
<script>
function checkCookies(){
	if (navigator.cookieEnabled==true){
		alert("Cookies 可用")
	}
	else{
		alert("Cookies 不可用")
	}
}
</script>
<p>弹窗-提示浏览器 cookie 是否可用。</p>
</body>

## 8. onchange 事件
onchange 事件常结合对输入字段的验证来使用。
下面是一个如何使用 onchange 的例子。当用户改变输入字段的内容时，会调用 upperCase() 函数。
- 举例：
<head>
<script>
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
</script>
</head>
<body>输入你的名字: <input type="text" id="fname" onchange="myFunction()">
<p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>
</body>

## 9. onmouseover 和 onmouseout 事件
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
- 举例：
<body>
<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div> // 鼠标移入时，显示 "Thank You"，鼠标移出时，显示 "Mouse Over Me"
<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>

## 10. onmousedown、onmouseup 以及 onclick 事件
onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。


# JavaScript HTML DOM EventListener
## 1. 事件监听器
- HTML DOM EventListener 是 HTML DOM 中的一个方法，它允许您向元素添加事件处理程序。
- 个人理解：就是把按钮的事件onclick，放到了addEventListener()方法中。
- 语法：addEventListener(事件类型，事件处理程序，是否使用Capture)，element.addEventListener(event, function, useCapture);第一个参数是事件的类型 (如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
- 事件类型：click、mousedown、mouseup、keydown、keyup、keypress、load、unload、error、resize、scroll、focus、blur、change、submit、reset、contextmenu
- 事件处理程序：当事件发生时，执行的函数。
<body>
<p>该实例使用 addEventListener() 方法在按钮中添加点击事件。 </p>
<button id="myBtn">点我</button>
<p id="demo"></p>
<script>
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>
</body>
- addEventListener() 方法用于向指定元素添加事件句柄。
- addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
- 你可以向一个元素添加多个事件句柄。
- 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
- 你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
- addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
- 当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加- 事件监听。
- 你可以使用 removeEventListener() 方法来移除事件的监听。

## 2. 向原元素添加事件句柄

- 举例：
<body>
<p>该实例使用 addEventListener() 方法在按钮中添加点击事件。 </p>
<button id="myBtn">点我</button>
<script>
document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello World!");
});
</script>
</body>

## 3. 向同一个元素中添加多个事件句柄
- 举例：addEventListener() 方法允许向同一个元素添加多个事件，且不会覆盖已存在的事件：点击一次会触发两个函数。两个函数依次执行。
<body>
<p>该实例使用 addEventListener() 方法向同个按钮中添加两个点击事件。</p>
<button id="myBtn">点我</button>
<script>
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);
function myFunction() {
    alert ("Hello World!")
}
function someOtherFunction() {
    alert ("函数已执行!")
}
</script>
</body>

## 4. 向 window 对象添加事件句柄
- 举例：addEventListener() 方法可以向 window 对象添加事件句柄。
<body>
<p>实例在 window 对象中使用 addEventListener() 方法。</p>
<p>尝试重置浏览器的窗口触发 "resize" 事件句柄。</p>
<p id="demo"></p>
<script>
window.addEventListener("resize", function(){ //resize表示窗口大小改变事件
    document.getElementById("demo").innerHTML = Math.random();
});
</script>
</body>

## 5. 传递参数
当传递参数值时，使用"匿名函数"调用带参数的函数：
- 举例：
<body>
<p>实例演示了在使用 addEventListener() 方法时如何传递参数。</p>
<p>点击按钮执行计算。</p>
<button id="myBtn">点我</button>
<p id="demo"></p>
<script>
var p1 = 5;
var p2 = 7;
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});
function myFunction(a, b) {
    var result = a * b;
    document.getElementById("demo").innerHTML = result;
}
</script>
</body>

## 6.事件冒泡或事件捕获？
1. 事件传递有两种方式：冒泡与捕获。
- 事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
- 在 **冒泡** 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
- 在 **捕获** 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
<head>
<style>
div {
    background-color: coral;
    border: 1px solid;
    padding: 50px;
}
</style>
</head>
<body>

<p>实例演示了在添加不同事件监听时，冒泡与捕获的不同。</p>
<div id="myDiv">
	<p id="myP">点击段落，我是冒泡。</p>
</div><br>
<div id="myDiv2">
	<p id="myP2">点击段落，我是捕获。 </p>
</div>
<script>
document.getElementById("myP").addEventListener("click", function() {
    alert("你点击了 P 元素!");
}, false);
document.getElementById("myDiv").addEventListener("click", function() {
    alert(" 你点击了 DIV 元素 !");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
    alert("你点击了 P2 元素!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
    alert("你点击了 DIV2 元素 !");
}, true);
</script>
</body>

## 7. 移除事件句柄
- 举例：removeEventListener() 方法用于移除事件句柄。
<head>
<style>
#myDIV { //
    background-color: coral;
    border: 1px solid;
    padding: 50px;
    color: white;
}
</style>
</head>
<body>

<div id="myDIV"> div 元素添加了 onmousemove 事件句柄，鼠标在桔红色的框内移动时会显示随机数。
  <p>点击按钮移除 DIV 的事件句柄。</p>
  <button onclick="removeHandler()" id="myBtn">点我</button>
</div>
<p id="demo"></p>
<script>
document.getElementById("myDIV").addEventListener("mousemove", myFunction);
function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}
function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
</script>
</body>

# JavaScript HTML DOM 元素 (节点)

## 创建新的 HTML 元素 (节点) - appendChild()
要创建新的 HTML 元素 (节点)，需要先创建一个元素，然后在已存在的元素中添加它。
1. 使用appendChild() 方法，它用于添加新元素到尾部。
- 举例：
<body>
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
<script>
var para = document.createElement("p");// 创建一个新的 <p> 元素
var node = document.createTextNode("这是一个新的段落。");// 创建一个文本节点
para.appendChild(node);// 将文本节点添加到 <p> 元素中
var element = document.getElementById("div1");// 获取 div 元素
element.appendChild(para);// 将 <p> 元素添加到 div 元素中
</script>
</body>

2. 将新元素添加到开始位置，可以使用 insertBefore() 方法
- 举例：
<body>
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
<script>
var para = document.createElement("p");// 创建一个新的 <p> 元素
var node = document.createTextNode("这是一个新的段落。");// 创建一个文本节点
para.appendChild(node);// 将文本节点添加到 <p> 元素中
var element = document.getElementById("div1");// 获取 div 元素
var child = document.getElementById("p1");// 获取 div 元素中的第一个 <p> 元素
element.insertBefore(para, child);// 将 <p> 元素添加到 div 元素的开始位置
</script>
</body>

3. 移除已存在的元素
- 举例：
<body>
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
<script>
var parent = document.getElementById("div1");// 获取 div 元素
var child = document.getElementById("p1");// 获取 div 元素中的第一个 <p> 元素
parent.removeChild(child);// 从 div 元素中移除第一个 <p> 元素
</script>
</body>

4. 替换 HTML 元素 - replaceChild()
- 举例：
<body>
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另外一个段落。</p>
</div>
<script>
var para = document.createElement("p");// 创建一个新的 <p> 元素
var node = document.createTextNode("这是一个新的段落。");// 创建一个文本节点
para.appendChild(node);// 将文本节点添加到 <p> 元素中
var parent = document.getElementById("div1");// 获取 div 元素
var child = document.getElementById("p1");// 获取 div 元素中的第一个 <p> 元素
parent.replaceChild(para, child);// 替换 div 元素中的第一个 <p> 元素
</script>
</body>

# JavaScript HTML DOM 集合(Collection)
## 1.HTMLCollection 对象
**getElementsByTagName()** 方法返回 HTMLCollection 对象。
HTMLCollection 对象类似包含 HTML 元素的一个数组。
- 举例：
<body>
<h2>JavaScript HTML DOM</h2>
<p>Hello World!</p>
<p>Hello Runoob!</p>
<p id="demo"></p>
<script>
var myCollection = document.getElementsByTagName("p"); // 获取所有 <p> 元素
document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myCollection[1].innerHTML + '</span>';// 输出第二个 <p> 元素的内容  
</script>
</body>
## 2.HTMLCollection 对象 length 属性
HTMLCollection 对象的 length 属性定义了集合中元素的数量。
- 举例：
<body>
<h2>JavaScript HTML DOM</h2>
<p>Hello World!</p>
<p>Hello Runoob!</p>
<p>点击按钮修改 p 元素的背景颜色。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction() {
    var myCollection = document.getElementsByTagName("p");// 获取所有 <p> 元素
    var i;// 循环变量
    for (i = 0; i < myCollection.length; i++) {// 循环遍历 <p> 元素
        myCollection[i].style.color = "red";//
    }
}
</script>
</body>

**注意** ：HTMLCollection 不是一个数组！
HTMLCollection 看起来可能是一个数组，但其实不是。
你可以像数组一样，使用索引来获取元素。
HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。
HTMLCollection 也没有 forEach() 方法。

# JavaScript HTML DOM 节点列表 NodeList 
## 1. 概念
NodeList 对象是一个从文档中获取的节点列表 (集合) 。
NodeList 对象类似 HTMLCollection 对象。
一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。
所有浏览器的 childNodes 属性返回的是 NodeList 对象。
大部分浏览器的 querySelectorAll() 返回 NodeList 对象。
- 举例：
<body>
<h2>JavaScript HTML DOM!</h2>
<p>Hello World!</p>
<p>Hello Runoob!</p>
<p id="demo"></p>
<script>
var myNodelist = document.querySelectorAll("p");// 获取所有 <p> 元素
document.getElementById("demo").innerHTML = "第二个段落的内容为:<span style='color:red;'> " + myNodelist[1].innerHTML + '</span>';// 输出第二个 <p> 元素的内容    
</script>
</body>
## 2.NodeList 对象 length 属性
NodeList 对象 length 属性定义了节点列表中元素的数量。
<body>
<h2>JavaScript HTML DOM!</h2>
<p>Hello World!</p>
<p>Hello Runoob!</p>
<p id="demo"></p>
<script>
var myNodelist = document.querySelectorAll("p");// 获取所有 <p> 元素
document.getElementById("demo").innerHTML = "文档包含 " + myNodelist.length + " 个段落。";// 输出段落的数量,输出内容为：  文档包含 3 个段落。  
</script>
</body>

## 3. HTMLCollection 与 NodeList 的区别
HTMLCollection 是 HTML 元素的集合。
NodeList 是一个文档节点的集合。
NodeList 与 HTMLCollection 有很多类似的地方。
NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。
NodeList 与 HTMLCollection 都有 length 属性。
HTMLCollection 元素可以通过 name，id 或索引来获取。
NodeList 只能通过索引来获取。
只有 NodeList 对象有包含属性节点和文本节点。

## 在 HTML 中，“节点”和“元素”是两个相关但有区别的概念：

1. 节点（Node）：
节点是文档对象模型（DOM）中的基本单位。每个文档（HTML 文档）都是一个节点，其他部分（如元素、文本、注释等）也是节点。
节点可以分为不同的类型，包括：
元素节点（Element Node）：代表 HTML 标签，比如 <div>、<p> 等。
文本节点（Text Node）：代表元素内的文本内容。
属性节点（Attribute Node）：代表元素的属性。
注释节点（Comment Node）：代表 HTML 注释。

2. 元素（Element）：
元素是 HTML 文档的一部分，通常由开始标签、内容和结束标签组成。比如，<div>内容</div> 是一个元素。
元素节点是节点的一种特定类型，专门用于表示 HTML 元素。
总结：
所有元素都是节点，但并不是所有节点都是元素。节点是一个更广泛的概念，包含了 HTML 文档中的所有组成部分，而元素特指那些代表 HTML 标签的节点。

# JavaScript 对象
## 1. 概念
JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
此外，JavaScript 允许自定义对象。
JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有属性和方法的特殊数据类型。
- 布尔型可以是一个对象。
- 数字型可以是一个对象。
- 字符串也可以是一个对象
- 日期是一个对象
- 数学和正则表达式也是对象
- 数组是一个对象
- 甚至函数也可以是对象
对象只是一种特殊的数据。对象拥有属性和方法。
## 2. 创建 JavaScript 对象
通过 JavaScript，您能够定义并创建自己的对象。
创建新对象有两种不同的方法：
1. 使用 Object 定义并创建对象的实例。
2. 使用函数来定义对象，然后创建新的对象实例。
### 1. 使用 Object 定义并创建对象的实例
Object 是一个内建的构造函数，用于创建新对象。
Object 构造函数可以接受任意数量的参数，并返回一个新对象。
- 举例：
<body>
<h2>JavaScript 对象</h2>
<p id="demo"></p>
<script>
var person = new Object(); // 创建一个新对象
person.name = "John"; // 添加一个属性
person.age = 30; // 添加另一个属性
person.city = "New York"; // 添加一个属性
document.getElementById("demo").innerHTML = "名字：" + person.name + "<br>年龄：" + person.age + "<br>城市：" + person.city; // 输出对象属性
</script>
</body>
### 2. 使用对象构造器
<body>
<script>
function person(firstname,lastname,age,eyecolor){
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
    this.eyecolor=eyecolor;
}
myFather=new person("John","Doe",50,"blue");
document.write(myFather.firstname + " is " + myFather.age + " years old.");
</script>
</body>

### 2.把方法添加到 JavaScript 对象
JavaScript 对象可以包含方法。
方法是与对象相关联的函数。
方法可以访问对象的数据，并对其进行操作。
- 举例：
<body>
<h2>JavaScript 对象</h2>
<p id="demo"></p>
<script>
var person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
  }
};
document.getElementById("demo").innerHTML = person.greet(); // 调用对象的方法
</script>
</body>

# JavaScript Number 对象
JavaScript 只有一种数字类型。
可以使用也可以不使用小数点来书写数字。
1. JavaScript 数字
JavaScript 数字可以使用也可以不使用小数点来书写：
- 实例
var pi=3.14;    // 使用小数点
var x=34;       // 不使用小数点
极大或极小的数字可通过科学（指数）计数法来写：
- 实例
var y=123e5;    // 12300000
var z=123e-5;   // 0.00123
2. 所有 JavaScript 数字均为 64 位
3. JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。
在JavaScript中，数字不分为整数类型和浮点型类型，所有的数字都是由 浮点型类型。JavaScript 采用 IEEE754 标准定义的 64 位浮点格式表示数字，它能表示最大值（Number.MAX_VALUE）为 ±1.7976931348623157e+308，最小值（Number.MIN_VALUE）为 ±5e-324。
此格式用 64 位存储数值，其中 0 到 51 存储数字（片段），52 到 62 存储指数，63 位存储符号
4. 数值范围
JavaScript 能够表示的数值范围比其他编程语言要大得多。
JavaScript 能够表示的数值范围为 ±1.7976931348623157e+308，这是一个十进制的数字，等于 1.7976931348623157 x 10^308。
5. 数值精度
JavaScript 能够表示的数值精度为 17 位小数。
6. 数值类型转换
JavaScript 能够自动转换数字类型。
- 实例
var x=10;
var y=20.5;
var z=x+y; // 30.5
var a=x-y; // -10.5
var b=x*y; // 205
var c=x/y; // 0.42857142857142855
var d=x%y; // 10
8. 无穷大（Infinity）
当数字运算结果超过了JavaScript所能表示的数字上限（溢出），结果为一个特殊的无穷大（infinity）值，在JavaScript中以Infinity表示。同样地，当负数的值超过了JavaScript所能表示的负数范围，结果为负无穷大，在JavaScript中以-Infinity表示。无穷大值的行为特性和我们所期望的是一致的：基于它们的加、减、乘和除运算结果还是无穷大（当然还保留它们的正负号）。
- 实例
myNumber=2;
while (myNumber!=Infinity)
{
    myNumber=myNumber*myNumber; // 重复计算直到 myNumber 等于 Infinity
}
9. NaN - 非数字值
NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值。
你可以使用 isNaN() 全局函数来判断一个值是否是 NaN 值。
- 实例
var x = 1000 / "Apple";
isNaN(x); // 返回 true
var y = 100 / "1000";
isNaN(y); // 返回 false

10. 数字可以是数字或者对象
数字可以私有数据进行初始化，就像 x = 123;
JavaScript 数字对象初始化数据， var y = new Number(123);
- 实例
var x = 123;
var y = new Number(123);
typeof(x) // 返回 Number
typeof(y) // 返回 Object

- 实例
var x = 123;             
var y = new Number(123);
(x === y) // 为 false，因为 x 是一个数字，y 是一个对象

# JavaScript 字符串（String） 对象：https://www.runoob.com/js/js-obj-string.html
String 对象用于处理已有的字符块。
## JavaScript 字符串
一个字符串用于存储一系列字符就像 "John Doe".
一个字符串可以使用单引号或双引号：
- 实例
var carname="Volvo XC60";
var carname='Volvo XC60';

# JavaScript Date（日期） 对象：https://www.runoob.com/js/js-obj-date.html
日期对象用于处理日期和时间。
## 有四种方式初始化日期:
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
## 实例化一个日期的一些例子：
var today = new Date()
var d1 = new Date("October 13, 1975 11:13:00")
var d2 = new Date(79,5,24)
var d3 = new Date(79,5,24,11,33,0)

## 设置日期
通过使用针对日期对象的方法，我们可以很容易地对日期进行操作。
在下面的例子中，我们为日期对象设置了一个特定的日期 (2010 年 1 月 14 日)：
var myDate=new Date();
myDate.setFullYear(2010,0,14);// 第二个参数为月份， 0 到 11 之间的整数值，表示从一月到十二月

# JavaScript Array（数组） 对象：https://www.runoob.com/js/js-obj-array.html
数组是一种特殊的对象，用于存储一系列的值。
## 数组的创建
数组的创建有两种方式：
1. 使用 Array() 构造函数
2. 使用字面量语法
- 实例
var fruits = new Array("Banana", "Orange", "Apple");
var numbers = ["1", "2", "3", "4", "5"];

## 数组的属性和方法
数组有很多属性和方法，下面是一些常用的属性和方法：
- length：返回数组的长度。
- push()：向数组的末尾添加一个或多个元素，并返回新的长度。
- pop()：删除并返回数组的最后一个元素。
- shift()：删除并返回数组的第一个元素。
- unshift()：向数组的开头添加一个或多个元素，并返回新的长度。
- reverse()：颠倒数组元素的顺序。
- sort()：对数组元素进行排序。
- join()：将数组元素转换为字符串。
- indexOf()：返回数组中指定元素的第一个索引。
- lastIndexOf()：返回数组中指定元素的最后一个索引。
- forEach()：对数组的每个元素执行一次指定操作。
- filter()：创建一个新数组，其包含通过所提供的函数实现的测试的所有元素。  
- map()：创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
- some()：测试数组中是否至少有一个元素通过了被提供的函数测试。
- every()：测试数组中是否所有元素都通过了被提供的函数测试。
- reduce()：对数组中的元素进行左右折叠操作，最终计算为单个值。
- reduceRight()：与 reduce() 方法类似，也是对数组中的元素进行左右折叠操作，但是方向是从右到左。

# **JavaScript Boolean（布尔） 对象** https://www.runoob.com/js/js-obj-boolean.html
Boolean（布尔）对象用于将非布尔值转换为布尔值（true 或者 false）。
## 创建 Boolean 对象
Boolean 对象代表两个值:"true" 或者 "false"
下面的代码定义了一个名为 myBoolean 的布尔对象：
var myBoolean=new Boolean();
如果布尔对象无初始值或者其值为:
0
-0
null
""
false
undefined
NaN
那么对象的值为 false。否则，其值为 true（即使当变量值为字符串 "false" 时）！

# JavaScript Math（算数） 对象
## Math 对象
Math（算数）对象的作用是：执行普通的算数任务。
Math 对象提供多种算数值类型和函数。无需在使用这个对象之前对它进行定义。
使用 Math 的属性/方法的语法：
实例
var x=Math.PI;
var y=Math.sqrt(16);
注意： Math对象无需在使用这个对象之前对它进行定义。
## 算数值
JavaScript 提供 8 种可被 Math 对象访问的算数值：
你可以参考如下 Javascript 常量使用方法：
实例
Math.E
Math.PI
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
## 算数方法
除了可被 Math 对象访问的算数值以外，还有几个函数（方法）可以使用。
下面的例子使用了 Math 对象的 round 方法对一个数进行四舍五入。
1. round() 方法
document.write(Math.round(4.7));
上面的代码输出为：5
2. random()
下面的例子使用了 Math 对象的 random() 方法来返回一个介于 0 和 1 之间的随机数：
document.write(Math.random());
上面的代码输出为：0.8641409243240432
3. floor() 方法
下面的例子使用了 Math 对象的 floor() 方法和 random() 来返回一个介于 0 和 11 之间的随机数：
document.write(Math.floor(Math.random()*11));
上面的代码输出为：6

# **JavaScript Window - 浏览器对象模型**
浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。
## 浏览器对象模型 (BOM)
浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。
由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。
## Window 对象
所有浏览器都支持 window 对象。它表示浏览器窗口。
所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。
甚至 HTML DOM 的 document 也是 window 对象的属性之一：
window.document.getElementById("header");
与此相同：
document.getElementById("header");

# JavaScript Window Screen
window.screen 对象包含有关用户屏幕的信息。

## Window Screen
window.screen对象在编写时可以不使用 window 这个前缀。
一些属性：
screen.availWidth - 可用的屏幕宽度
screen.availHeight - 可用的屏幕高度

## Window Screen 可用宽度
screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
- 实例
返回您的屏幕的可用宽度：
<script>
document.write("可用宽度: " + screen.availWidth);
</script>
以上代码输出为：
可用宽度: 1494

# JavaScript Window Location
window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
## Window Location
window.location 对象在编写时可不使用 window 这个前缀。 一些例子：
一些实例:
location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol 返回所使用的 web 协议（http: 或 https:）
## Window Location href
location.href 属性返回当前页面的 URL。
实例
返回（当前页面的）整个 URL：
<script>
document.write(location.href);
</script>
以上代码输出为：
https://www.runoob.com/js/js-window-location.html

## Window Location pathname
location.pathname 属性返回 URL 的路径名。
- 实例
返回当前 URL 的路径名：
<script>
document.write(location.pathname);
</script>
以上代码输出为：/js/js-window-location.html

## Window Location assign
location.assign() 方法加载新的文档。
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script>
function newDoc(){
    window.location.assign("https://www.runoob.com")
}
</script>
</head>
<body>
<input type="button" value="加载新文档" onclick="newDoc()">
</body>
</html>

# JavaScript Window History
window.history 对象包含有关用户浏览历史的信息。
## Window History
window.history 对象在编写时可不使用 window 这个前缀。
一些属性：
history.length - 浏览历史的数量
history.back() - 加载前一个 URL
history.forward() - 加载后一个 URL
history.go() - 加载某个具体的 URL
## Window History 历史记录
history.length 属性返回用户浏览历史的数量。
- 实例
返回用户浏览历史的数量：
<script>
document.write("历史记录的数量: " + history.length);
</script>
以上代码输出为：
历史记录的数量: 1

## Window History 前进后退
history.back() 方法加载前一个 URL。
history.forward() 方法加载后一个 URL。
- 实例
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script>
function goBack(){
    window.history.back();
}
function goForward(){
    window.history.forward();
}
</script>
</head>
<body>
<input type="button" value="后退" onclick="goBack()">
<input type="button" value="前进" onclick="goForward()">
</body>
</html>

## Window History 跳转
history.go() 方法加载某个具体的 URL。
- 实例
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script>
function goPage(){
    window.history.go(-2);
}
</script>
</head>
<body>
<input type="button" value="前两页" onclick="goPage()">
</body>
</html> 

# JavaScript Window Navigator
window.navigator 对象包含有关访问者浏览器的信息。
## Window Navigator
window.navigator 对象在编写时可不使用 window 这个前缀。
- 实例
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.language + "</p>";
document.getElementById("example").innerHTML=txt;
</script>

# JavaScript 弹窗
可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。
## 警告框
警告框经常用于确保用户可以得到某些信息。
当警告框出现后，用户需要点击确定按钮才能继续进行操作。
- 语法
window.alert("sometext");
- 实例
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    alert("你好，我是一个警告框！");
}
</script>
</head>
<body>

<input type="button" onclick="myFunction()" value="显示警告框">

</body>
</html>

## 确认框
确认框用于确认用户是否真的要进行某项操作。
当确认框出现后，用户需要点击确认按钮（确定）或取消按钮（取消）才能继续进行操作。
- 语法
var r=confirm("sometext");
if (r==true)
{
    // 用户点击确定按钮
}
else
{
    // 用户点击取消按钮
}
- 实例
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    var r=confirm("你确定要删除吗?");
    if (r==true)
    {
        alert("文件已删除！");
    }
    else
    {
        alert("操作已取消！");
    }
}
</script>
</head>
<body>
    <input type="button" onclick="myFunction()" value="删除文件">
</body>
</html>

## 提示框
提示框用于向用户显示一些信息。
当提示框出现后，用户可以选择忽略或关闭提示框。
- 语法
window.prompt("提示信息","默认值");
- 实例
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
    var name=prompt("请输入您的姓名","zhanghaifeng");
    if (name!=null && name!="")
    {
        alert("你好，" + name + "！欢迎访问菜鸟教程！");
    }
}
</script>
</head>
<body>
    <input type="button" onclick="myFunction()" value="显示提示框">
</body>
</html>

# JavaScript 计时事件
通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。
在 JavaScript 中使用计时事件是很容易的，两个关键方法是:
- setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
- setTimeout() - 在指定的毫秒数后执行指定代码。
注意: setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。

## setInterval() 方法
setInterval() 间隔指定的毫秒数不停地执行指定的代码
1. 语法
window.setInterval("javascript function",milliseconds);
window.setInterval() 方法可以不使用 window 前缀，直接使用函数 setInterval()。
setInterval() 第一个参数是函数（function）。
第二个参数间隔的毫秒数,**注意**: 1000 毫秒是一秒。
2. 实例
每三秒弹出 "hello" ：
setInterval(function(){alert("Hello")},3000);
3.每秒钟执行一次代码
var myVar=setInterval(function(){myTimer()},1000);
function myTimer()
{
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}

## clearInterval() 方法用于停止 setInterval() 方法执行的函数代码
语法
window.clearInterval(intervalVariable)
window.clearInterval() 方法可以不使用window前缀，直接使用函数clearInterval()。
要使用 clearInterval() 方法, 在创建计时方法时你必须使用全局变量：
myVar=setInterval("javascript function",milliseconds);
然后你可以使用 clearInterval() 方法来停止执行。
- 实例
以下例子,我们添加了 "停止" 按钮：
<p id="demo"></p>
<button onclick="myStopFunction()">停止</button>
<script>
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
    clearInterval(myVar);
}
</script>

## setTimeout() 方法
setTimeout() 方法在指定的毫秒数后执行指定代码。
1. 语法
window.setTimeout("javascript function",milliseconds);
window.setTimeout() 方法可以不使用 window 前缀，直接使用函数 setTimeout()。
setTimeout() 第一个参数是函数（function）。
第二个参数是等待的毫秒数，**注意**: 1000 毫秒是一秒。
2. 实例
在 5 秒后弹出 "hello" ：
setTimeout(function(){alert("Hello")},5000);
3. 实例
在 5 秒后执行一次代码：
setTimeout(function(){myFunction()},5000);
function myFunction(){
    alert("Hello");
} 

## clearTimeout() 方法用于停止 setTimeout() 方法执行的函数代码
- 语法
window.clearTimeout(timeoutVariable)
window.clearTimeout() 方法可以不使用window前缀，直接使用函数clearTimeout()。
要使用 clearTimeout() 方法, 在创建计时方法时你必须使用全局变量：
myVar=setTimeout("javascript function",milliseconds);
然后你可以使用 clearTimeout() 方法来停止执行。
- 实例
以下例子,我们添加了 "停止" 按钮：
<p id="demo"></p>
<button onclick="myStopFunction()">停止</button>
<script>
var myVar=setTimeout(function(){myTimer()},5000);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
function myStopFunction(){
    clearTimeout(myVar);
}
</script> 

# JavaScript Cookie
## 使用 JavaScript 创建Cookie
JavaScript 可以使用 document.cookie 属性来创建、读取、及删除cookie。
JavaScript 中，创建 cookie 如下所示：
document.cookie="username=John Doe";
您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。
默认情况下，cookie 在浏览器关闭时删除：
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";


# JavaScript 框架（库）
一些广受欢迎的 JavaScript 框架：
jQuery
Prototype
MooTools
所有这些框架都提供针对常见 JavaScript 任务的函数，包括动画、DOM 操作以及 Ajax 处理。
## jQuery
jQuery 是目前最受欢迎的 JavaScript 框架。
它使用 CSS 选择器来访问和操作网页上的 HTML 元素（DOM 对象）。
jQuery 同时提供 companion UI（用户界面）和插件。
许多大公司在网站上使用 jQuery：
Google
Microsoft
IBM
Netflix
## Prototype
Prototype 是一种库，提供用于执行常见 web 任务的简单 API。
API 是应用程序编程接口（Application Programming Interface）的缩写。它是包含属性和方法的库，用于操作 HTML DOM。
Prototype 通过提供类和继承，实现了对 JavaScript 的增强。
## MooTools
MooTools 也是一个框架，提供了可使常见的 JavaScript 编程更为简单的 API。
MooTools 也含有一些轻量级的效果和动画函数。
## CDN -内容分发网络
您总是希望网页可以尽可能地快。您希望页面的容量尽可能地小，同时您希望浏览器尽可能多地进行缓存。
如果许多不同的网站使用相同的 JavaScript 框架，那么把框架库存放在一个通用的位置供每个网页分享就变得很有意义了。
CDN (Content Delivery Network) 解决了这个问题。CDN 是包含可分享代码库的服务器网络。
国内免费的 CDN 资源有：
Staticfile CDN：https://staticfile.net/
海外免费的 CDN 资源有：
cdnjs：https://cdnjs.com/
如需在您的网页中使用 JavaScript 框架库，只需在 <script> 标签中引用该库即可：
引用 jQuery
<script src="https://cdn.staticfile.net/jquery/3.4.0/jquery.min.js">
</script>

