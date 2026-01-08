<template>
  <div>
    <template v-for="(tag, index) in tags" :key="tag">
      <el-tag closable="true" @close="closeTag(index)">{{ tag }}</el-tag>
      <span style="padding: 10px"></span>
    </template>
    <el-input style="width:90px"
        v-if="show"
        v-model="inputValue"
        placeholder="Add a tag"
        @keyup.enter="handleInputConfirm" 按下回车键时触发
        @blur="handleInputConfirm"
        size="small">
    </el-input>
    <el-button size="small" v-else @click="showInput">新建标签+</el-button>
  </div>
</template>

<script lang="ts">
  import {Options, Vue} from 'vue-class-component';//使用类风格的语法来定义 Vue 组件
  //Options 装饰器的作用是将类修饰成vue组件
  @Options({
    name: 'ETagDemo'//组件名称
  })//这是一个装饰器，标记后面的类为一个 Vue 组件。
     //传入的对象是空的 {}，表示没有额外的选项，然而你可以根据需要添加。
  //该装饰器接受一个对象作为参数，这个对象可以包含：组件的名称、生命周期钩子、注册的子组件等例如：
// @Options({
//   props: {
//     // 定义组件的 props
//   },
//   computed: {
//     // 定义计算属性
//   }
// })
  export default class ETagDemo extends Vue {
    tags: string[] = ['男装', '女装', '帽子', '鞋子'];
    show= false;
    inputValue = '';
    closeTag(index: number) {
      this.tags.splice(index, 1);//删除数组中的元素,第一个参数是索引的值，第二个参数是删除的个数
    }
    showInput() {
      this.show = true;
    }
    handleInputConfirm() {
      let inputValue = this.inputValue //获取输入框的值
      if (inputValue) {
        this.tags.push(inputValue);
      }
        this.inputValue = '';
        this.show = false;
      }
    }
</script>

<style scoped>
</style>

