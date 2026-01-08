- 本篇学习资料开始阅读之前，可以先看一下study_html_1.html这个文件，
- 里面有一些基础的HTML语法和解释。
# 0、头部
##  1、HTML <head> 元素
- <head> 元素包含了所有的头部标签元素。在 <head>元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。
- 可以添加在头部区域的元素标签为: 
  \<title>, \<style>, \<meta>, \<link>, \<script>, \<noscript> 和 \<base>。

## 2、头部的各类元素介绍
1. HTML \<title> 元素
- \<title> 元素定义了文档的标题，显示在浏览器的标题栏或标签页上。
2. HTML  \<base> 元素
- \<base> 元素定义了页面链接标签的默认链接地址。
- 举例：\<base href="http://www.runoob.com/images/" target="_blank">
3. HTML  \<meta> 元素
- \<meta> 元素提供元信息，比如针对搜索引擎和浏览器的描述和关键词,文件的最后修改时间，作者，和其他元数据。
- 举例：
- 为搜索引擎定义关键词:\<meta name="keywords" content="HTML, CSS, JavaScript">
- 为网页定义描述内容:\<meta name="description" content="免费 Web & 编程 教程">
- 定义网页作者:\<meta name="author" content="Runoob">
- 定义网页最后修改时间:\<meta name="last-modified" content="2019-01-01">
- 每30秒钟刷新当前页面:\<meta http-equiv="refresh" content="30">
4. HTML  \<link> 元素
- \<link> 元素定义文档与外部资源的关系。标签通常用于链接到样式表.
- 举例： \<link rel="stylesheet" type="text/css" href="mystyle.css">
5. HTML  \<style> 元素
- \<style> 元素定义了文档的样式。也可以直接添加样式来渲染 HTML 文档.
- 举例： \<style>body {background-color: lightblue;}</style>
6. HTML  \<script> 元素
- \<script> 元素定义了客户端脚本。用于加载脚本文件，如： JavaScript。
- 举例：
7. HTML  \<noscript> 元素
- \<noscript> 元素定义了脚本不支持时的替代内容。

# 1、HTML 标题
- HTML 标题（Heading）是通过 h1 到 h6 标签来定义的。
- \<h1> 定义最大的标题。 \<h6> 定义最小的标题。
- 举例：
<h1 id="标题">这是一级标题</h1>
\<h2>这是二级标题\</h2>
\<h3>这是三级标题\</h3>
\<h4>这是四级标题\</h4>
\<h5>这是五级标题\</h5>
\<h6>这是六级标题\</h6>
- 注意：请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。

# 2、HTML 水平线
\<hr> 标签在 HTML 页面中创建水平线。

# HTML 段落
- HTML 段落（Paragraph）是通过 p 标签来定义的。
- 举例：
\<p>这是一段文本，这段文本包含了一些文字，这些文字将会显示在浏览器中。\</p>
\<p>这是另外一个段落。\</p>

# 3、HTML 折行
如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 \<br> 标签
<p>这个<br>段落<br>演示了分行的效果</p>

# 4、HTML 链接
## 文字作为链接
- HTML 链接（Link）是通过 a 标签来定义的。
- href：指定链接目标的URL，这是链接的最重要属性。可以是另一个网页的URL、文件的URL或其他资源的URL。
- target（可选）：指定链接如何在浏览器中打开。常见的值包括 _blank（在新标签或窗口中打开链接）和 _self（在当前标签或窗口中打开链接）。
- title（可选）：提供链接的额外信息，通常在鼠标悬停在链接上时显示为工具提示。
- rel（可选）：指定与链接目标的关系，如 nofollow、noopener 等。
<a href="https://www.baidu.com" target="_blank" title="百度首页" rel="noopener">百度</a>

##  图片或其他 HTML 元素都可以成为链接
<a href="https://www.baidu.com">
  <img src="https://www.baidu.com/img/bd_logo1.png" title="百度首页" alt="示例图片">
</a>

##  锚点链接
1. 除了链接到其他网页外，您还可以在同一页面内创建内部链接，这称为锚点链接。
2. 首先创建锚点，例如：本页第8行，在开始标签增加id属性，其值为：标题，这就是锚点。
3. 其次创建锚点链接，需要在目标位置使用 \<a> 元素定义一个标记，并使用#符号引用该标记。
<a href="#标题">跳转到标题部分</a>

##  HTML 链接-id属性
1.id 属性可用于创建一个 HTML 文档书签。
提示: 书签不会以任何特殊方式显示，即在 HTML 页面中是不显示的，所以对于读者来说是隐藏的。
2.举例：与上面的锚点链接其实是一样的，只不过id是定义在链接标签元素上。
<a id="tips">有用的提示部分</a>
<a href="#标题">访问有用的提示部分</a>



# 5、HTML 输出
1. 我们无法确定 HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都可能导致不同的结果。
2. 对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。
3. 当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。
4. 需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。
举例：
<p> 
    春眠不觉晓，
      处处闻啼鸟。
        夜来风雨声，
          花落知多少。
</p>

# 6、HTML 图片
- HTML 图片（Image）是通过 img 标签来定义的。
- 举例：提示:在 src 属性中指定图片的地址。图像的名称和尺寸是以属性的形式提供的。alt 属性可提供图像的文字说明。
<img src="https://www.baidu.com/img/bd_logo1.png" width="258" height="39" alt="百度logo"></img>

# 7、HTML 元素
## 概念：HTML 元素（Element）是 HTML 代码的基本单位。
1. 开始标签常被称为起始标签（opening tag），结束标签常称为闭合标签（closing tag）。
2. 元素的内容是开始标签与结束标签之间的内容。
3. 元素可以嵌套，即一个元素可以包含多个子元素。
4. 元素可以有属性，属性是以名称/值对的形式提供的。
5. 元素可以有属性值，属性值可以是文本、数字、颜色、URL、JavaScript 代码等。
### 举例：
本文档以上内容中的描述，都是HTML元素的一种，以下再补充一些元素。
- **文档结构元素**
\<!DOCTYPE html>: 声明文档类型
\<html>: HTML 文档的根元素
\<head>: 文档的头部，包含元信息
\<title>: 文档标题
\<body>: 文档的主体

- **文本内容元素**
\<h1> 到 <h6>: 标题，表示不同级别的标题
\<p>: 段落
\<br>: 换行
\<hr>: 水平线
\<strong>: 加粗文本
\<em>: 斜体文本
\<mark>: 高亮文本
\<small>: 小号文本
\<blockquote>: 引用内容
\<cite>: 引用来源

- **列表元素**
\<ul>: 无序列表
\<ol>: 有序列表
\<li>: 列表项
\<dl>: 定义列表
\<dt>: 定义列表中术语
\<dd>: 定义列表中术语的描述

- **链接和图像元素**
\<a>: 超链接
\<img>: 图像
\<figure>: 图形及其说明
\<figcaption>: 图形说明

- **表格元素**
\<table>: 表格
\<tr>: 表格行
\<th>: 表头单元格
\<td>: 表格单元格
\<caption>: 表格标题
\<thead>: 表格头部
\<tbody>: 表格主体
\<tfoot>: 表格尾部

- **表单元素**
\<form>: 表单
\<input>: 输入字段
\<textarea>: 多行文本输入框
\<button>: 按钮
\<select>: 下拉选择框
\<option>: 下拉框选项
\<label>: 标签

- **脚本和样式元素**
\<script>: 脚本
\<link>: 外部样式表
\<style>: 内部样式
\<meta>: 元信息

- **区块元素和内联元素**
\<div>: 块级容器
\<span>: 行内容器

### 补充说明：
1. 关闭标签的说明 **在未来的 HTML 版本中，不允许省略结束标签。**
<p>这是一个段落
<p>这是一个段落
以上实例在浏览器中也能正常显示，因为关闭标签是可选的。
但不要依赖这种做法。忘记使用结束标签会产生不可预料的结果或错误。
2. HTML空元素
没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。
在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。
空元素的例子有 <br>、<img>、<input>、<meta> 等。
在开始标签中添加斜杠，比如 <img />，是关闭空元素的正确方法
3. HTML 提示：使用小写标签
HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。
菜鸟教程使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。
4. HTML 注释
HTML 注释是指在 HTML 代码中添加注释，以便于开发者阅读和维护代码。
注释不会被显示在浏览器中。注释的语法是 <!--注释内容-->

[HTML 标签参考手册](https://www.runoob.com/tags/html-reference.html)

# 8、HTML 属性
1. HTML 属性（Attribute）是 HTML 元素提供的附加信息。
2. 属性总是以 name="value" 的形式写在标签内，name 是属性的名称，value 是属性的值。
- HTML 元素可以设置属性
- 属性可以在元素中添加附加信息
- 属性一般描述于开始标签
- 属性总是以名称/值对的形式出现，比如：name="value"。
3. 属性举例：
<a href="https://www.baidu.com" target="_blank">百度</a>
href 属性：指定链接的地址；
target 属性：指定链接打开的方式，比如 _blank 值表示在新窗口打开。
4. 属性值
属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。
在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：
name='John "ShotGun" Nelson'
5. 使用小写属性
属性和属性值对大小写不敏感。
不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。
而新版本的 (X)HTML 要求使用小写属性。

- **id**: 给元素一个唯一的标识符，可以用于 CSS 选择器或 JavaScript 操作。
\<div id="header">This is a header</div>

- **class**: 给元素指定一个或多个类名，方便通过 CSS 或 JavaScript 操作。
\<p class="text-muted">This is a paragraph.</p>

- **style**: 直接为元素定义 CSS 样式。
\<span style="color: red;">This text is red.</span>

- **href**: 用于 \<a> 标签，指定链接目标。
\<a href="https://www.example.com">Visit Example</a>

- **src**: 用于 \<img> 和 \<script> 标签，指定资源的路径。
\<img src="image.jpg" alt="Description">

- **alt**: 用于 \<img> 标签，提供图片的替代文本。
\<img src="logo.png" alt="Company Logo">

- **title**: 提供关于元素的额外信息，通常在鼠标悬停时显示。
\<button title="Click me">Submit</button>

- **name**: 在 \<input>, \<form>, \<select> 等表单元素中使用，定义元素的名称。
\<input type="text" name="username">

- **value**: 定义表单元素的值。
\<input type="text" value="Default text">

- **target**: 用于 \<a> 标签，指定链接的打开方式（如 _blank 在新窗口中打开）。
\<a href="https://www.example.com" target="_blank" rel="noopener">Open in new tab</a>

- **type**: 指定表单元素的类型（如 text, password, submit）。
\<input type="password" name="password">

- **placeholder**: 为 \<input> 和 \<textarea> 提供一个占位符文本。
\<input type="text" placeholder="Enter your name">

# 9、HTML 文本格式化

## HTML 文本格式化标签
标签	   描述
\<b>	    定义粗体文本
\<em>	定义着重文字
\<i>	    定义斜体字
\<small>	定义小号字
\<strong>	定义加重语气
\<sub>	定义下标字
\<sup>	定义上标字
\<ins>	定义插入字
\<del>	定义删除字

## HTML "计算机输出" 标签
\<code>	定义计算机代码
\<kbd>	定义键盘码
\<samp>	定义计算机代码样本
\<var>	定义变量
\<pre>	定义预格式文本

## HTML 引文, 引用, 及标签定义
\<abbr>	定义缩写
\<address>	定义地址
\<bdo>	定义文字方向
\<blockquote>	定义长的引用
\<q>	定义短的引用语
\<cite>	定义引用、引证
\<dfn>	定义一个定义项目。

# 10、HTML 表格
HTML 表格由 \<table> 标签来定义。
HTML 表格是一种用于展示结构化数据的标记语言元素。
每个表格均有若干行（由 \<tr> 标签定义），每行被分割为若干单元格（由 \<td> 标签定义），表格可以包含标题行（\<th>）用于定义列的标题。
- 行 tr：tr 是 table row 的缩写，表示表格的一行。
- 列 td：td 是 table data 的缩写，表示表格的数据单元格。
- 字段 th：th 是 table header的缩写，表示表格的表头单元格。
- 数据单元格：可以包含文本、图片、列表、段落、表单、水平线、表格等等。
- \<thead > 用于定义表格的**标题**部分: 在 \<thead> 中，使用 \<th> 元素定义列的标题，以上实例中列标题分别为"列标题1"，"列标题2"和"列标题3"。
- \<tbody > 用于定义表格的**主体**部分: 在 \<tbody> 中，使用 \<tr > 元素定义行，并在每行中使用\<td> 元素定义单元格数据，以上实例中有两行数据，每行包含三个单元格。
- 举例：
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>

# 11、HTML列表
HTML 支持有序、无序和定义列表:
1. 有序列表: 使用 \<ol> 标签定义有序列表，使用 \<li> 标签定义列表项。
- 举例：
<ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
  </ol>
2. 无序列表: 使用 \<ul> 标签定义无序列表，使用 \<li> 标签定义列表项。
- 举例：
<ul>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
</ul> 

3. 定义列表: 使用 \<dl> 标签定义定义列表，使用 \<dt> 标签定义术语，使用 \<dd> 标签定义描述。
- 举例：
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>        
</dl>

# 12、HTML 区块
HTML 区块标签用于定义区块元素，如段落、标题、图像、表格等。
HTML 可以通过 <div> 和 <span>将元素组合起来。
- 块级元素在浏览器显示时，通常会以新行来开始（和结束）。
实例：\<h1>, \<p>, \<ul>, \<table>
- 内联元素在显示时通常不会以新行开始。
实例: \<b>, \<td>, \<a>, \<img>

## HTML \<div> 元素 --定义了文档的区域，块级 (block-level)
HTML \<div> 元素是块级元素，它可用于组合其他 HTML 元素的容器。
\<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。
如果与 CSS 一同使用，\<div> 元素可用于对大的内容块设置样式属性。
\<div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 \<table> 元素进行文档布局不是表格的正确用法。\<table> 元素的作用是显示表格化的数据。

## HTML \<span> 元素 --用来组合文档中的行内元素， 内联元素(inline)
HTML \<span> 元素是内联元素，它可用于组合文本或其他元素。
\<span> 元素没有特定的含义。除此之外，由于它属于内联元素，浏览器会在其前后显示空格。
如果与 CSS 一同使用，\<span> 元素可用于对小的内容片段设置样式属性。

# 13、HTML 布局
HTML 布局是指通过 HTML 元素的组合来控制页面的版式、结构和样式。
网页布局对改善网站的外观非常重要。请慎重设计您的网页布局。
##  网页布局
- 大多数网站会把内容安排到多个列中（就像杂志或报纸那样）。
- 大多数网站可以使用 \<div> 或者 \<table> 元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。
- 虽然我们可以使用HTML table标签来设计出漂亮的布局，但是table标签是不建议作为布局工具使用的--表格不是布局工具。
- 网页布局的三种常见方式：
1. 固定宽度布局：这种布局会把页面内容固定在浏览器窗口的某个宽度，并在页面的左右留有空白。
2. 自适应宽度布局：这种布局会根据浏览器窗口的宽度来调整页面的宽度，并在页面的左右留有空白。
3. 弹性布局：这种布局会根据浏览器窗口的宽度来调整页面的宽度，并在页面的左右留有空白。

- HTML 布局 - 使用\<div> 元素
div 元素是用于分组 HTML 元素的块级元素。
下面的例子使用五个 div 元素来创建多列布局：
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>
<div id="container" style="width:500px">
<div id="header" style="background-color:#FFA500;">
<h1 style="margin-bottom:0;">主要的网页标题</h1></div>
<div id="menu" style="background-color:#FFD700;height:200px;width:100px;float:left;">
<b>菜单</b><br>
HTML<br>
CSS<br>
JavaScript</div>
<div id="content" style="background-color:#EEEEEE;height:200px;width:400px;float:left;">
内容在这里</div>
<div id="footer" style="background-color:#FFA500;clear:both;text-align:center;">
版权 © runoob.com</div>
</div>
</body>
</html>

# 14、HTML 表单
HTML 表单用于收集用户输入，并向服务器提交数据。
HTML 表单由表单元素、属性和方法构成。
HTML 表单通常包含各种输入字段、复选框、单选按钮、下拉列表等元素。
以下是一个简单的HTML表单的例子：
- \<form> 元素用于创建表单，action 属性定义了表单数据提交的目标 URL，method 属性定义了提交数据的 HTTP 方法（这里使用的是 "post"）。
- \<label> 元素用于为表单元素添加标签，提高可访问性。
- \<input> 元素是最常用的表单元素之一，它可以创建文本输入框、密码框、单选按钮、复选框等。type 属性定义了输入框的类型，id 属性用于关联 \<label> 元素，name 属性用于标识表单字段。
- \<select> 元素用于创建下拉列表，而 \<option> 元素用于定义下拉列表中的选项。
- action 属性会对接收到的用户输入数据进行相关的处理，表单的action属性用于定义表单数据提交的目标URL，可以接受几种类型的值：**默认是当前的URL**。
**绝对URL**：指向外部网站的完整URL，例如http://www.example.com/submit。
**相对URL**：指向同一网站内部的路径，例如/submit或submit。
**当前页面**：如果action属性设置为""（空字符串），则表单数据会提交到当前页面。
**脚本文件**：可以指向一个处理表单数据的服务器端脚本文件，如submit.php或process.php。
这些不同的action类型让开发者可以灵活地控制数据提交的目标。
- method属性
**method 属性**定义了提交数据的 HTTP 方法，可以是 "get" 或 "post"。**默认是“get”**
**post**：指的是 HTTP POST 方法，表单数据会包含在表单体内然后发送给服务器，用于提交敏感数据，如用户名与密码等。
**get**：默认值，指的是 HTTP GET 方法，表单数据会附加在 action 属性的 URL 中，并以 ?作为分隔符，一般用于不敏感信息，如分页等。例如：https://www.runoob.com/?page=1，这里的 page=1 就是 get 方法提交的数据。

- **举例**：
  <form action="/" method="post">
    <!-- 文本输入框 -->
    <label for="name">用户名:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <!-- 密码输入框 -->
    <label for="password">密码:</label>
    <input type="password" id="password" name="password" required> 
    <br>
    <!-- 单选按钮 -->
    <label>性别:</label>
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">男</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label>
    <br>
    <!-- 复选框 -->
    <input type="checkbox" id="subscribe" name="subscribe" checked>
    <label for="subscribe">订阅推送信息</label>
    <br>
    <!-- 下拉列表 -->
    <label for="country">国家:</label>
    <select id="country" name="country">
        <option value="cn">CN</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>
    <br>
    <!-- 提交按钮 -->
    <input type="submit" value="提交">
</form>

# 15、HTML iframe
1. \<iframe>（内联框架）是一种在HTML中嵌入其他HTML文档的元素，可以用于多种用途，包括但不限于：
- 嵌入网页：将其他网页内容嵌入到当前网页中，便于展示例如视频、地图或其他网站内容。
- 嵌入文档：可以用来显示PDF文档、幻灯片等文件，使用户无需下载或离开当前页面就能查看。
- 多媒体内容：常用于嵌入音频和视频播放器，如YouTube视频。
- 广告显示：很多网站使用\<iframe>嵌入第三方广告，以便在不影响主页面的情况下显示广告内容。
- 安全隔离：通过设置sandbox属性，可以创建一个独立的执行环境，对嵌入的内容施加安全限制，从而提高网页安全性。
- 单页应用（SPA）中的组件：在单页应用中，\<iframe>可以用来加载和分离一些模块，以实现更好的结构和模块化开发。
- 测试和开发：开发人员可以在\<iframe>中加载不同版本的页面进行测试。
- 使用\<iframe>时需要注意性能和安全性，比如合理使用src属性以及对跨域内容的限制等。
2. 举例：
<iframe src="https://www.runoob.com" width="100%" height="500px"></iframe>
3. 注意：
出于有些网页不希望被嵌套, 响应头中有一选项
X-Frame-Options
他有三个可配置值
- DENY：表示该网站页面不允许被嵌套，即便是在自己的域名的页面中也不能进行嵌套。
- SAMEORIGIN：表示该页面可以在相同域名页面中被嵌套展示。
- ALLOW-FROM uri：表示该页面可以在指定来源页面中进行嵌套展示。

# 16、HTML 事件
HTML 事件是指当用户与 HTML 页面上的元素交互时触发的动作。
HTML 事件可分为以下几类：
- 事件属性：HTML 元素可以设置事件属性，当用户与元素交互时，浏览器会自动调用相应的事件处理程序。
- 事件处理程序：事件处理程序是指当用户与 HTML 元素交互时，执行的 JavaScript 代码。  
- 事件对象：事件对象是指当事件发生时，传递给事件处理程序的对象。

## HTML 事件属性
HTML 事件属性是指 HTML 元素可以设置的属性，当用户与元素交互时，浏览器会自动调用相应的事件处理程序。
HTML 事件属性包括：
- onclick：当用户点击某个元素时触发。
- ondblclick：当用户双击某个元素时触发。
- onmousedown：当用户按下某个元素时触发。
- onmouseup：当用户松开某个元素时触发。
- onmousemove：当用户移动鼠标时触发。
- onmouseover：当鼠标指针移动到某个元素上方时触发。
- onmouseout：当鼠标指针移出某个元素时触发。
- onkeypress：当用户按下某个键盘按键时触发。
- onkeydown：当用户按下某个键盘按键时触发。
- onkeyup：当用户松开某个键盘按键时触发。
- onchange：当元素的值发生变化时触发。
- onfocus：当元素获得焦点时触发。
- onblur：当元素失去焦点时触发。
- onload：当页面完成加载时触发。
- onunload：当页面卸载时触发。
- onsubmit：当用户提交表单时触发。
- onreset：当用户重置表单时触发。
- onselect：当用户选择文本框内容时触发。
- onerror：当发生错误时触发。

## HTML 事件处理程序 
HTML 事件处理程序是指当用户与 HTML 元素交互时，执行的 JavaScript 代码。  
HTML 事件处理程序包括：
- 内联事件处理程序：通过 on-event 属性直接在 HTML 元素上设置 JavaScript 代码。
- 事件监听器：通过 addEventListener() 方法添加事件处理程序。  
- 事件冒泡：当一个事件在元素上触发时，它会向上冒泡到父元素，然后向下冒泡到子元素。

## HTML 事件对象
事件对象是指当事件发生时，传递给事件处理程序的对象。
事件对象包括：
- event.type：事件类型。
- event.target：触发事件的元素。
- event.currentTarget：当前正在处理事件的元素。  
- event.clientX/Y：鼠标指针的坐标。
- event.offsetX/Y：鼠标指针相对于事件源的坐标。
- event.screenX/Y：鼠标指针的屏幕坐标。
- event.which：按下哪个键触发的事件。
- event.keyCode：按下哪个键触发的事件的键码。
- event.preventDefault()：阻止默认行为。
- event.stopPropagation()：阻止事件冒泡。

# 17、HTML 文档类型
HTML 文档类型是指 HTML 文档的类型和版本。
HTML 文档类型包括：
- HTML 4.01 Strict：严格模式，适用于 W3C 标准。
- HTML 4.01 Transitional：过渡模式，适用于 W3C 标准。
- HTML 4.01 Frameset：框架集模式，适用于 W3C 标准。
- XHTML 1.0 Strict：严格模式，适用于 W3C 标准。
- XHTML 1.0 Transitional：过渡模式，适用于 W3C 标准。
- XHTML 1.0 Frameset：框架集模式，适用于 W3C 标准。
- HTML 5：最新版本，适用于 W3C 标准。
- XHTML 1.1：最新版本，适用于 W3C 标准。

# 18、HTML 颜色
HTML 颜色由红色、绿色、蓝色混合而成。
## 颜色值
HTML 颜色由一个十六进制符号来定义，这个符号由红色、绿色和蓝色的值组成（RGB）。
每种颜色的最小值是0（十六进制：#00）。最大值是255（十六进制：#FF）。
十六进制值的写法为 # 号后跟三个或六个十六进制字符。
三位数表示法为：#RGB，转换为6位数表示为：#RRGGBB。
## 1600万种不同颜色
三种颜色 红，绿，蓝的组合从0到255，一共有1600万种不同颜色(256 x 256 x 256)。
## Web安全色
## HTML 颜色名
1. 141个颜色名称是在HTML和CSS颜色规范定义的（17标准颜色，再加124）。下表列出了所有颜色的值，包括十六进制值。
- 提示: 17标准颜色：黑色，蓝色，水，紫红色，灰色，绿色，石灰，栗色，海军，橄榄，橙，紫，红，白，银，蓝绿色，黄色。
2. 按颜色名排序
按十六进制的值排序
# 19、HTML 脚本
JavaScript 使 HTML 页面具有更强的动态和交互性。
## HTML \<script> 标签
\<script> 标签用于定义客户端脚本，比如 JavaScript。
\<script> 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。
JavaScript 最常用于图片操作、表单验证以及内容动态更新。
## HTML \<noscript> 标签
HTML \<noscript> 标签用于定义在浏览器不支持 JavaScript 时所显示的内容。
\<noscript>元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。
当浏览器不支持 JavaScript 时，浏览器会显示 \<noscript> 元素中的内容。

# 20、HTML 字符实体
<table>
  <thead>
    <tr>
      <th style="width:20%">显示结果</th>
      <th style="width:20%">描述</th>
      <th style="width:30%">实体名称</th>
      <th style="width:30%">实体编号</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&nbsp;</td>
      <td>空格</td>
      <td>&amp;nbsp;</td>
      <td>&amp;#160;</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>小于号</td>
      <td>&amp;lt;</td>
      <td>&amp;#60;</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>大于号</td>
      <td>&amp;gt;</td>
      <td>&amp;#62;</td>
    </tr>
    <tr>
      <td>&amp;</td>
      <td>和号</td>
      <td>&amp;amp;</td>
      <td>&amp;#38;</td>
    </tr>
    <tr>
      <td>"</td>
      <td>引号</td>
      <td>&amp;quot;</td>
      <td>&amp;#34;</td>
    </tr>
    <tr>
      <td>'</td>
      <td>撇号</td>
      <td>&amp;apos; (IE不支持)</td>
      <td>&amp;#39;</td>
    </tr>
    <tr>
      <td>￠</td>
      <td>分</td>
      <td>&amp;cent;</td>
      <td>&amp;#162;</td>
    </tr>
    <tr>
      <td>£</td>
      <td>镑</td>
      <td>&amp;pound;</td>
      <td>&amp;#163;</td>
    </tr>
    <tr>
      <td>¥</td>
      <td>人民币/日元</td>
      <td>&amp;yen;</td>
      <td>&amp;#165;</td>
    </tr>
    <tr>
      <td>€</td>
      <td>欧元</td>
      <td>&amp;euro;</td>
      <td>&amp;#8364;</td>
    </tr>
    <tr>
      <td>§</td>
      <td>小节</td>
      <td>&amp;sect;</td>
      <td>&amp;#167;</td>
    </tr>
    <tr>
      <td>©</td>
      <td>版权</td>
      <td>&amp;copy;</td>
      <td>&amp;#169;</td>
    </tr>
    <tr>
      <td>®</td>
      <td>注册商标</td>
      <td>&amp;reg;</td>
      <td>&amp;#174;</td>
    </tr>
    <tr>
      <td>™</td>
      <td>商标</td>
      <td>&amp;trade;</td>
      <td>&amp;#8482;</td>
    </tr>
    <tr>
      <td>×</td>
      <td>乘号</td>
      <td>&amp;times;</td>
      <td>&amp;#215;</td>
    </tr>
    <tr>
      <td>÷</td>
      <td>除号</td>
      <td>&amp;divide;</td>
      <td>&amp;#247;</td>
    </tr>
  </tbody>
</table>

# 21、HTML URL
以下是一些URL scheme：
|Scheme|	访问|	用于...|
| ------ | ------ | ------ |
|http	|超文本传输协议	|以 http:// 开头的普通网页。不加密。|
|https	|安全超文本传输协议	|安全网页，加密所有信息交换。|
|ftp	|文件传输协议	|用于将文件下载或上传至网站。|
|file|	 	|您计算机上的文件。|

# 22、HTML 速查列表
HTML 速查列表：https://www.runoob.com/html/html-quick-list.html

# 23、HTML 标签速查表
<table class="reference">
    <thead>
        <tr>
            <th>标签</th>
            <th>英文全称</th>
            <th>中文说明</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>a</td><td>Anchor</td><td>锚</td></tr>
        <tr><td>abbr</td><td>Abbreviation</td><td>缩写词</td></tr>
        <tr><td>acronym</td><td>Acronym</td><td>取首字母的缩写词</td></tr>
        <tr><td>address</td><td>Address</td><td>地址</td></tr>
        <tr><td>alt</td><td>alter</td><td>替用(一般是图片显示不出的提示)</td></tr>
        <tr><td>b</td><td>Bold</td><td>粗体（文本）</td></tr>
        <tr><td>bdo</td><td>Bi-Directional Override</td><td>文本显示方向</td></tr>
        <tr><td>big</td><td>Big</td><td>变大（文本）</td></tr>
        <tr><td>blockquote</td><td>Block Quotation</td><td>区块引用语</td></tr>
        <tr><td>br</td><td>Break</td><td>换行</td></tr>
        <tr><td>cell</td><td>cell</td><td>巢</td></tr>
        <tr><td>cellpadding</td><td>cellpadding</td><td>巢补白</td></tr>
        <tr><td>cellspacing</td><td>cellspacing</td><td>巢空间</td></tr>
        <tr><td>center</td><td>Centered</td><td>居中（文本）</td></tr>
        <tr><td>cite</td><td>Citation</td><td>引用</td></tr>
        <tr><td>code</td><td>Code</td><td>源代码（文本）</td></tr>
        <tr><td>dd</td><td>Definition Description</td><td>定义描述</td></tr>
        <tr><td>del</td><td>Deleted</td><td>删除（的文本）</td></tr>
        <tr><td>dfn</td><td>Defines a Definition Term</td><td>定义定义条目</td></tr>
        <tr><td>div</td><td>Division</td><td>分隔</td></tr>
        <tr><td>dl</td><td>Definition List</td><td>定义列表</td></tr>
        <tr><td>dt</td><td>Definition Term</td><td>定义术语</td></tr>
        <tr><td>em</td><td>Emphasized</td><td>加重（文本）</td></tr>
        <tr><td>font</td><td>Font</td><td>字体</td></tr>
        <tr><td>h1-h6</td><td>Header 1 to Header 6</td><td>标题1到标题6</td></tr>
        <tr><td>hr</td><td>Horizontal Rule</td><td>水平尺</td></tr>
        <tr><td>href</td><td>hypertext reference</td><td>超文本引用</td></tr>
        <tr><td>i</td><td>Italic</td><td>斜体（文本）</td></tr>
        <tr><td>iframe</td><td>Inline frame</td><td>定义内联框架</td></tr>
        <tr><td>ins</td><td>Inserted</td><td>插入（的文本）</td></tr>
        <tr><td>kbd</td><td>Keyboard</td><td>键盘（文本）</td></tr>
        <tr><td>li</td><td>List Item</td><td>列表项目</td></tr>
        <tr><td>nl</td><td>navigation lists</td><td>导航列表</td></tr>
        <tr><td>ol</td><td>Ordered List</td><td>排序列表</td></tr>
        <tr><td>optgroup</td><td>Option group</td><td>定义选项组</td></tr>
        <tr><td>p</td><td>Paragraph</td><td>段落</td></tr>
        <tr><td>pre</td><td>Preformatted</td><td>预定义格式（文本）</td></tr>
        <tr><td>q</td><td>Quotation</td><td>引用语</td></tr>
        <tr><td>rel</td><td>Reload</td><td>加载</td></tr>
        <tr><td>s/strike</td><td>Strikethrough</td><td>删除线</td></tr>
        <tr><td>samp</td><td>Sample</td><td>示例（文本）</td></tr>
        <tr><td>small</td><td>Small</td><td>变小（文本）</td></tr>
        <tr><td>span</td><td>Span</td><td>范围</td></tr>
        <tr><td>src</td><td>Source</td><td>源文件链接</td></tr>
        <tr><td>strong</td><td>Strong</td><td>加重（文本）</td></tr>
        <tr><td>sub</td><td>Subscripted</td><td>下标（文本）</td></tr>
        <tr><td>sup</td><td>Superscripted</td><td>上标（文本）</td></tr>
        <tr><td>td</td><td>table data cell</td><td>表格中的一个单元格</td></tr>
        <tr><td>th</td><td>table header cell</td><td>表格中的表头</td></tr>
        <tr><td>tr</td><td>table row</td><td>表格中的一行</td></tr>
        <tr><td>tt</td><td>Teletype</td><td>打印机（文本）</td></tr>
        <tr><td>u</td><td>Underlined</td><td>下划线（文本）</td></tr>
        <tr><td>ul</td><td>Unordered List</td><td>不排序列表</td></tr>
        <tr><td>var</td><td>Variable</td><td>变量（文本）</td></tr>
    </tbody>
</table>

