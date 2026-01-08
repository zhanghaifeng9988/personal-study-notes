# HTML5 简介
1. HTML5的设计目的是为了在移动设备上支持多媒体。
2. HTML5 中的一些有趣的新特性：
- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 article、footer、header、nav、section
- 新的表单控件，比如 calendar、date、time、email、url、search
3. HTML5 还支持离线应用，这意味着用户可以脱机使用应用，其功能也将被保留。
4. HTML5 还支持语音识别、地理定位、拖放操作、 WebGL、websocket 等功能。
5. HTML5 的改进:
- 新元素
- 新属性
- 完全支持 CSS3
- 多媒体：Canvas、Video 和 Audio
- 2D/3D 制图
- 本地存储
- 本地 SQL 数据
- Web 应用
- 使用内联 SVG，使用 CSS3 2D 转换、CSS3 3D 转换。
6. HTML5 标准的制定者是 WHATWG，它是一个开放的、全球性的标准组织。
WHATWG 指 Web Hypertext Application Technology Working Group。
7. HTML5 已经成为 W3C 推荐标准。
8. HTML5 已经成为主流浏览器的标准。

# 已移除元素
以下的 HTML 4.01 元素在HTML5中已经被删除:
- \<acronym>
- \<applet>
- \<basefont>
- \<big>
- \<center>
- \<dir>
- \<font>
- \<frame>
- \<frameset>
- \<noframes>
- \<strike>

# HTML5 SVG
1. 概念
- SVG 定义为可缩放矢量图形。
- HTML5 支持内联 SVG。
- HTML \<svg> 元素是 SVG 图形的容器。
- G 有多种绘制路径、框、圆、文本和图形图像的方法。
2. 什么是SVG？
- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用于定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准
3. SVG优势
与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：
- SVG 图像可通过文本编辑器来创建和修改
- SVG 图像可被搜索、索引、脚本化或压缩
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大
4. SVG 与 Canvas两者间的区别
- SVG 是一种使用 XML 描述 2D 图形的语言。
- Canvas 通过 JavaScript 来绘制 2D 图形。
- SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
- 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

# HTML5 拖放（Drag 和 Drop）
拖放（Drag 和 drop）是 HTML5 标准的组成部分。

# HTML5 Geolocation（地理定位）
HTML5 Geolocation（地理定位）用于定位用户的位置。
HTML5 Geolocation API 用于获得用户的地理位置。
鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。
HTML5 规定了一种通过 video 元素来包含视频的标准方法。
# HTML5 Video(视频)
HTML5 Video(视频)用于在网页上播放视频。
HTML5 Video API 允许网页播放视频，包括视频文件、音频文件、直播视频流等。
# HTML5 Audio(音频)
HTML5 提供了播放音频文件的标准。
# HTML5 新的 Input 类型
HTML5 拥有多个新的表单输入类型。这些新特性提供了更好的输入控制和验证。
- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

# HTML5 Web 存储
1. HTML5 web 存储，一个比 cookie 更好的本地存储方式。
2. 使用HTML5可以在本地存储用户的浏览数据。
3. 早些时候,本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据，而不影响网站的性能.
4. 客户端存储数据的两个对象为：
- localStorage  用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

# HTML5 Web SQL 数据库
Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
如果你是一个 Web 后端程序员，应该很容易理解 SQL 的操作。

# HTML5 Web Workers
web worker 是运行在后台的 JavaScript，不会影响页面的性能。

# HTML5 WebSocket
说到 websocket 我觉得有必要说下跟 socket 的区别。

软件通信有七层结构，下三层结构偏向与数据通信，上三层更偏向于数据处理，中间的传输层则是连接上三层与下三层之间的桥梁，每一层都做不同的工作，上层协议依赖与下层协议。基于这个通信结构的概念。

Socket 其实并不是一个协议，是应用层与 TCP/IP 协议族通信的中间软件抽象层，它是一组接口。当两台主机通信时，让 Socket 去组织数据，以符合指定的协议。TCP 连接则更依靠于底层的 IP 协议，IP 协议的连接则依赖于链路层等更低层次。

WebSocket 则是一个典型的应用层协议。

总的来说：Socket 是传输控制层协议，WebSocket 是应用层协议。