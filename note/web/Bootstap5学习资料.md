
# 为什么使用 Bootstrap
- 容易上手：只要对 HTML 和 CSS 有基本了解的人都可以很快速的使用 Bootstrap。
- 响应式设计：Bootstrap 可以根据不同平台（手机、平板电脑和台式机）进行调整。
- 移动优先：在 Bootstrap 中，自适应移动端是框架的核心部分。
- 浏览器兼容性：Bootstrap5 兼容所有主流浏览器（Chrome、Firefox、Edge、Safari 和 Opera）。 如果您需要支持 IE11 及以下版本，请使用 Bootstrap4 或 Bootstrap3。

# Bootstrap5 安装使用
我们可以通过以下两种方式来安装 Bootstrap5：
- 使用 Bootstrap5 CDN。
- 从官网 getbootstrap.com 下载 Bootstrap 5。

1. 使用 Bootstrap5 CDN
我们可以通过以下两种方式来安装 Bootstrap5：
使用 Bootstrap5 CDN。
从官网 getbootstrap.com 下载 Bootstrap 5。

2. 下载 Bootstrap 5
你可以去官网 https://getbootstrap.com/ 下载 Bootstrap5 资源库。
注：此外你还可以通过包的管理工具 npm、 yarn、gem、 composer 等来安装：
npm install bootstrap

# 创建第一个 Bootstrap 5 页面
## 1. 添加 HTML5 doctype
Bootstrap 要求使用 HTML5 文件类型，所以需要添加 HTML5 doctype 声明。
HTML5 doctype 在文档头部声明，并设置对应编码:
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"> 
  </head>
</html>

## 2. 移动设备优先
为了让 Bootstrap 开发的网站对移动设备友好，确保适当的绘制和触屏缩放，需要在网页的 head 之中添加 viewport meta 标签，如下所示：
<meta name="viewport" content="width=device-width, initial-scale=1">
width=device-width 表示宽度是设备屏幕的宽度。
initial-scale=1 表示初始的缩放比例。

## 3. 容器类
Bootstrap 5 需要一个容器元素来包裹网站的内容。
我们可以使用以下两个容器类：
.container 类,用于固定宽度并支持响应式布局的容器。
.container-fluid 类,用于 100% 宽度，占据全部视口（viewport）的容器。
container 和 container-fluid 的区别：
- container 的行为复杂一些：
屏幕小于 768 时，容器宽度是满屏，与 container-fluid 效果一样
屏幕大于 768 小于 992 时，宽度设为 750
屏幕大于 992 小于 1200 时，宽度为 970
屏幕大于 1200，宽度为 1170
margin-left, margin-right 都为 auto，保持 container 容器居中。
container-fluid 的行为就简单：
margin:0   宽度：100%

## 4. 固定宽度
.container 类用于创建固定宽度的响应式页面。
**注意**：宽度 (max-width) 会根据屏幕宽度同比例放大或缩小。
	      超级小屏幕<576px	  小屏幕≥576px	  中等屏幕≥768px 大屏幕≥992px  特大屏幕≥1200px	超级大屏幕≥1400px
max-width	100%	          540px	         720px	       960px	      1140px	     1320px

## 5. 100% 宽度
.container-fluid 类用于创建一个全屏幕尺寸的容器，容器始终跨越整个屏幕宽度（width 始终为 100%）

