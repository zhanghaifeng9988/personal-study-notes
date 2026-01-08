<template>
  <div style="text-align: center;">
    <div><ETagDemo/></div>
</div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';//使用类风格的语法来定义 Vue 组件
import ETagDemo from '@/components/ETagDemo.vue';//导入自定义标签组件
@Options({
  name: 'Ele_test', // 当前组件名称
  components: { //注册自定义标签组件
    ETagDemo
  }
})
export default class Ele_test extends Vue {} //导出组件
</script>
