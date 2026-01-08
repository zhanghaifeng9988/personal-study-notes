# Element Plus 库
以下内容，都是zhf在vuecli创建的项目中的，利用项目已有的页面的条件，进行
element plus 库的安装，学习使用。

1. 安装 Element Plus 库
```
npm install element-plus --save
```
2. 引入 Element Plus 库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' //将 Element Plus 组件库的样式导入到你的 Vue 应用中

3. 激活 Element Plus 组件库
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

4. 使用 Element Plus 组件库
在你的 Vue 组件中，你可以直接使用 Element Plus 组件库的组件，比如：
<el-button>按钮</el-button> // 按钮组件
<el-input></el-input>      // 输入框组件
<el-select></el-select>    // 选择框组件
<el-table></el-table>      // 表格组件
<el-pagination></el-pagination> // 分页组件
<el-dialog></el-dialog>    // 对话框组件
<el-tooltip></el-tooltip>   // 文字提示组件
<el-message></el-message>   // 消息提示组件
<el-loading></el-loading>   //       
<el-upload></el-upload>      // 文件上传组件
<el-dropdown></el-dropdown>  // 下拉菜单组件
<el-menu></el-menu>         // 导航菜单组件
<el-submenu></el-submenu>    // 子菜单组件
<el-dropdown-menu></el-dropdown-menu> // 下拉菜单组件
<el-card></el-card>         // 卡片组件
<el-carousel></el-carousel>  // 轮播图组件
<el-collapse></el-collapse>  // 折叠面板组件
<el-collapse-item></el-collapse-item> // 折叠面板子组件
<el-skeleton></el-skeleton>  // 骨架屏组件
<el-slider></el-slider>      // 滑块组件
<el-rate></el-rate>          // 评分组件
<el-steps></el-steps>         // 步骤条组件
<el-radio></el-radio>        // 单选框组件
<el-checkbox></el-checkbox>  // 多选框组件
<el-switch></el-switch>       // 开关组件
<el-date-picker></el-date-picker> // 日期选择器组件
<el-time-picker></el-time-picker> // 时间选择器组件
<el-color-picker></el-color-picker> // 颜色选择器组件
<el-transfer></el-transfer>  // 穿梭框组件
<el-tree></el-tree>           // 树形组件
<el-cascader></el-cascader>  // 级联选择组件
<el-input-number></el-input-number> // 数字输入框组件
<el-rate></el-rate>           // 评分组件
<el-upload></el-upload>       // 文件上传组件
<el-slider></el-slider>       // 滑块组件
<el-scrollbar></el-scrollbar> // 滚动条组件
<el-select-v2></el-select-v2> // 选择器组件
<el-time-select></el-time-select> // 时间选择器组件
<el-date-select></el-date-select> // 日期选择器组件
<el-image></el-image>         // 图片组件
<el-link></el-link>           // 链接组件
<el-divider></el-divider>     // 分割线组件
<el-calendar></el-calendar>   // 日历组件
<el-backtop></el-backtop>      // 回到顶部组件
<el-infinite-scroll></el-infinite-scroll> // 无限滚动组件
<el-skeleton-item></el-skeleton-item> // 骨架屏子组件
<el-carousel-item></el-carousel-item> // 轮播图子组件
<el-collapse-transition></el-collapse-transition>    // 折叠动画组件

5. 常用组件介绍
