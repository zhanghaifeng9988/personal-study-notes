# 1、创建组件的对象switchComponent；
# 2、计划通过父组件中的外部属性，给组件定义样式的值；
所以先在组件中定义外部属性，包括：4个外部属性
开关的类型：'switchStyle'
开关的背景颜色：'backgroundColor'
开关的边框颜色： 'borderColor'
按钮的颜色：'color'
# 3、定义组件的属性
isOpen: false   表示开关默认状态为关
left:'0px'         表示开关的按钮的对齐方式是左对齐，距离左边是0
# 4、通过计算属性中定义新的CSS属性，来定义开关和按钮的CSS，
将外部属性中和CSS有关的属性，和自定义的CSS属性值，赋值给计算属性中的CSS属性；
赋值的前提条件是，判断外部属性中的开关类型的值

计算属性中定义了2个CSS属性：
cssStyleBG，表示开关的背景相关
包含：开关的位置，边框颜色，边框线宽，边框类型，宽度，高度，边框半径，背景色
cssStyleBtn，表示开关的按钮相关
包含：按钮的位置，按钮宽度，按钮的高度，按钮的对齐方式，按钮的半径，按钮的背景色

# 5、定义组件方法，click
如果点击事件发生，isOpen被赋值为true，按钮的left值，变为25px
然后把click函数传递给父组件的switch-change事件的change1和change2方法，参数为isOpen的值

# 6、 定义Vue实例，并处理两个状态值state1和state2，分别代表开关的状态是开还是关
data方法定义state1和state2的默认值；
methods属性，定义state1和state2实时状态值

# 7、编写组件
需要注意外部属性的定义的格式和父组件调用属性的书写格式的对应方式：
'switchStyle', 'backgroundColor', 'borderColor','color'   组件内定义属性的书写方式，小驼峰
switch-style   background-color   border-color  color   HTML中父组件引用属性的名称书写方式，蛇形定义

