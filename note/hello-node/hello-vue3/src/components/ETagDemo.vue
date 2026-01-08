<script lang="ts">
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name: 'ETagDemo_2',
  setup(props, ctx) {
    const tags = ref<string[]>(['tags1','tags2','tags3'])
    const show = ref<boolean>(false)
    const inputValue = ref<string>('')
    function closeTab(index: number) {
      tags.value.splice(index,1)
    }
    function showInput() {
      show.value = true
    }
    function handleInputConfirm() {
      if(inputValue.value){
        tags.value.push(inputValue.value)
        inputValue.value = ''
        show.value = false
      }
    }
    return {
      tags,
      show,
      inputValue,
      closeTab,
      showInput,
      handleInputConfirm
    }
  }
})
</script>

<template>
  <div>
    <span v-for="(tag,index) in tags" :key="tag">
      <el-tag  closeable="true"
        @click="closeTab(index)">{{ tag }}
      </el-tag>
      <span style="padding: 10px;"></span>
  </span>
      <el-input style="width:90px"
        v-if="show"
          v-model="inputValue" placeholder="Add a tag"
          @keyup.enter="handleInputConfirm"  按下回车键时触发
          @blur="handleInputConfirm"
      size="small">添加内容 <!--blur 表示失去焦点时触发的方法 -->
      </el-input>
      <el-button type="primary" v-else @click="showInput">添加标签+</el-button>
  </div>
</template>
