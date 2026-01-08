<template>
  <div style="text-align: center;">
    <div style="margin:10px;"><el-tag>这是模板的内容：{{count}}次单击</el-tag></div>
    <div><el-button type="primary" @click="handleClick"><el-icon><Search /></el-icon>单击</el-button></div>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="large">大型按钮</el-button>
      <el-button type="small">小型按钮</el-button>
      <el-button type="text">文字按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="link">链接按钮</el-button>
    </div>
    <div>
      <el-button type="primary" round>圆角按钮</el-button>
      <el-button type="primary" circle>圆形按钮</el-button>
    </div>
    <div>
      <el-button type="primary" color="#f50" icon="Share">分项</el-button>
      <el-button type="primary" icon="Delete">删除</el-button>
      <el-button type="primary" icon="Edit">编辑</el-button>
      <el-button type="primary" icon="Search">图标在前</el-button>
      <el-button type="primary">图标在后<el-icon class="el-icon-right"><Upload />
      </el-icon></el-button>
    </div>
    <div>
      <el-tag>普通标签</el-tag>
      <el-tag type="success">成功标签</el-tag>
      <el-tag type="info">信息标签</el-tag>
      <el-tag hit="true">描边标签</el-tag>
      <el-tag color="#f50">自定义颜色标签</el-tag>
    </div>
    <div>
      <el-empty description="暂无数据" image-size="100px">
        <el-button type="failure" color="red">看看其他内容</el-button>
      </el-empty>
      <el-empty>
      <template v-slot:image>
        <div> <!-- 插入本地图片 -->
          <img src="../assets/logo.png" alt="测试图片" style="max-width: 100%; height: auto;" />
          <p style="text-align: center;">测试图片</p>
        </div>
      </template>
      <template v-slot:description>
        <div>这里是自定义描述的位置</div>
      </template>
    </el-empty>
    </div>
    <!-- <div>
      <el-skeleton :rows="10"  :animated="true"></el-skeleton>
    </div> -->
  <div>
    <!-- 注意，el-image的src ，只能对应互联网上，或者public目录下的文件，不能是本地文件 -->
  <el-image type="circle" src="favicon.ico"></el-image><br/>
  <el-radio v-model="radio1" label="0">male</el-radio>
  <el-radio v-model="radio1" label="1">female</el-radio>
  <el-radio-group v-model="radio2">
    <el-radio label="0">a</el-radio>
    <el-radio label="1">b</el-radio>
    <el-radio label="2">c</el-radio>
  </el-radio-group>
  </div>
  <div>
    <el-radio-group v-model="city">
      <el-radio-button label="shanghai">上海</el-radio-button>
      <el-radio-button label="beijing">北京</el-radio-button>
      <el-radio-button label="guangzhou">广州</el-radio-button>
    </el-radio-group>
  </div>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="1">选项1</el-checkbox>
      <el-checkbox label="2">选项2</el-checkbox>
      <el-checkbox label="3">选项3</el-checkbox>
    </el-checkbox-group>
  </div>
  <div>
    <el-input v-model="inputValue" placeholder="请输入内容"
    :disabled="false"
    :show-password="true"
    :clearable="true"
    prefix-icon="Search"
    type="text"/>
  </div>
  <div>
    <el-autocomplete v-model="inputValue1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容或选择内容"
      @select="selected"
      highlight-first-item="true">
    </el-autocomplete>
  </div>
  <div>
    <el-input-number :min="1" :max="10" :step="1"
      v-model="inputValue2">  </el-input-number>
  </div>
  <div>
    <el-select multiple="true" clearable="true"
    placeholder="请选择" v-model="selectedValue">
    <el-option v-for="item in options"
      :value="item.value"
      :key="item.value"
      :label="item.label">
    </el-option>
  </el-select>
  </div>
  <div>
    <el-cascader :options="options1"
    v-model="cascaderValue1" clearable="true"
    placeholder="请选择" :props="{expandTrigger: 'hover'}"
    ></el-cascader>
  </div>
  <div>
    <el-switch v-model="switchValue"
      active-text="会员"
      inactive-text="非会员"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
  </div>
  <div>
    <el-switch v-model="switchValue1"
      active-text="加载中"
      loading="true"
      ></el-switch>
  </div>
  <div>
    <el-switch v-model="switchValue2"
      inactive-text="禁用"
      disabled="true"
      ></el-switch>
  </div>
  <div>
    <el-slider v-model="sliderValue" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div>
    <el-time-picker is-range="true" v-model="timeValue"
      placeholder="选择时间范围" range-separator="至"
      start-placeholder="开始时间" end-placeholder="结束时间"
      arrow-control="true" ></el-time-picker>
  </div>
  <div>
    <el-date-picker type="daterange" v-model="dateValue"
      placeholder="选择日期范围" range-separator="至"
      start-placeholder="开始日期" end-placeholder="结束日期"
      arrow-control="true" ></el-date-picker>
  </div>
  <div>
    <el-color-picker v-model="colorValue"
      show-alpha="true"></el-color-picker>
  </div>
  <div>
    <el-alert title="成功提示" type="success" description="内容详情，可根据实际需要进行填充。"></el-alert>
    <el-alert title="信息提示" type="info" description="内容详情，可根据实际需要进行填充。"></el-alert>
    <el-alert title="警告提示" type="warning" description="内容详情，可根据实际需要进行填充。"></el-alert>
    <el-alert title="错误提示" type="error" description="内容详情，可根据实际需要进行填充。"></el-alert>
  </div>
  <div>
    <el-button type="primary" @click="popTip">弹出信息提示</el-button>
    <el-button type="primary" @click="popAlert">弹出告警提示</el-button>
    <el-button type="primary" @click="notify">弹出通知提示</el-button>
  </div>
  <el-container>
    <el-header>顶部导航区域</el-header>
    <el-aside>侧边栏区域</el-aside>
    <el-main>内容区域</el-main>
    <el-footer>页脚区域</el-footer>
  </el-container>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'; // 导入想要使用的图标
interface  RecommendOBJ{
  value:string
}
export default  defineComponent({
  name: 'ContactView',
  components: {// 注册图标组件,这个组件可以使用另外一个组件替代，里面全是各种icon
    Search
  },

  data() {
    return {
      count: 0,
      radio1:'',
      radio2:'',
      city:'',
      checkList:[],
      inputValue:'',
      inputValue1:'',
      inputValue2:'',
      selectedValue:[],
      cascaderValue1:'',
      switchValue:false,
      switchValue1:false,
      switchValue2:false,
      sliderValue:0,
      timeValue:['', ''],
      dateValue:['', ''],
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' },
        { value: '选项6', label: '蚝油面' },
        { value: '选项7', label: '海苔面' }],
      options1: [
        {
          value: '父1',
          label: '运动',
          children: [
            {
              value: '子1',
              label: '篮球'},
            {
              value: '子2',
              label: '足球'
            }
          ],
        },
        {
          value: '父2',
          label: '音乐',
          children: [
            {
              value: '子3',
              label: '流行'
            },
            {
              value: '子4',
              label: '摇滚'
            }
        ]}
      ]
  }
},
  methods: {
    handleClick() {
      this.count++;
    },
/* queryString: string：这个参数是用户在输入框中输入的字符串。其类型被定义为 string，这表示当用户输入内容时，该参数将包含输入的文本。
callback: (list: RecommendOBJ[]) => void：这是一个回调函数，它接受一个数组作为参数，
数组中的每个元素都是 RecommendOBJ 类型的对象。void 表示该函数没有返回值。
逻辑：
初始化数组：使用 let array = [] 创建一个空数组，用于存储建议结果。
根据输入的字符串长度判断：
如果 queryString 的长度大于 0，说明用户有输入内容，将输入内容封装成一个对象 { value: queryString } 并推入 array 数组中。
添加固定建议：将一些固定的城市名称（上海、北京 和 广州）转成对象并加入到 array 数组中。这里使用了扩展运算符 ...，将数组中的元素展开并添加到 array 中。
调用回调函数：调用 callback(array)，将最终的建议列表传递给 el-autocomplete 组件。这个数组将被用作下拉菜单中的建议项。 */
    querySearch(queryString: string, callback: (list: RecommendOBJ[]) => void) {
      let array = []
      if (queryString.length > 0) {
        array.push({ value: queryString })
      }
      array.push(...[{ value: '上海' }, { value: '北京' }, { value: '广州' }])
      callback(array)
   },
   selected(obj: RecommendOBJ){
    alert(obj.value)
   },
   formatTooltip(value: number) {
    return `${value}%`
   },
   popTip() {
    (this as any).$message.info('这是一条提示信息')
   },
   popAlert() {
    (this as any).$msgbox({
      title: '这是一条消息提示',
      message: '这是一条消息提示的正文部分',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showInput: false,
    })
   },
   notify() {
    (this as any).$notify({
      title: '这是标题',
      message: '这是内容',
      type:'success',
      duration: 3000,
      position: 'top-right'
    })
   }
}
})
</script>
