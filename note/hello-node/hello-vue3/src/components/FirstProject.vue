<template>
  <el-container>
    <el-header height="80px" style="padding: 0">
      <div class="header">教务系统学生管理</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="aside"
          @select="selectFunc"
          default-active="1"
          :unique-opened="false"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>七年级</span>
            </template>
            <el-menu-item index="1">1班</el-menu-item>
            <el-menu-item index="2">2班</el-menu-item>
            <el-menu-item index="3">3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>八年级</span>
            </template>
            <el-menu-item index="4">1班</el-menu-item>
            <el-menu-item index="5">2班</el-menu-item>
            <el-menu-item index="6">3班</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>九年级</span>
            </template>
            <el-menu-item index="7">1班</el-menu-item>
            <el-menu-item index="8">2班</el-menu-item>
            <el-menu-item index="9">3班</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="80px" style="padding: 0; margin: 0">
          <el-container class="subHeader">
            <div class="desc">{{ desc }}</div>
            <el-button style="width: 100px; height: 30px; margin: 20px">
              新增记录</el-button
            >
          </el-container>
        </el-header>
        <el-main style="margin: 0; padding: 0">
          <div class="content">
            <el-table :data="filteredStus">
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="age" label="年龄"></el-table-column>
              <el-table-column prop="gender" label="性别"></el-table-column>
              <el-table-column prop="class" label="班级"></el-table-column>
              <el-table-column prop="score" label="分数"></el-table-column>
              <el-table-column prop="date" label="录入日期"></el-table-column>
            </el-table>
          </div>
        </el-main>
        <el-footer class="footer" height="80px" style="padding: 0; margin: 0">
          Vue3 框架搭建， ElementPlus提供组件支持</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.header {
  font-size: 24px;
  line-height: 80px;
  background-color: #f1f1f1;
}
.aside {
  background-color: wheat;
  height: 600px;
}
.subHeader {
  background-color: cornflowerblue;
}
.desc {
  font-size: 25px;
  line-height: 80px;
  color: #f1f1f1;
  width: 800px;
}
.content {
  height: 410px;
}
.footer {
  background-color: dimgrey;
  color: white;
  font-size: 17px;
  line-height: 30px;
}
</style>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
interface Student {
  name: string
  age: number
  gender: string
  class: string
  score: number
  date: string
}

export default defineComponent({
  name: 'First_Project',
  setup(props) {
    const stus = ref<Student[]>([
      {
        name: '张三',
        age: 18,
        gender: '男',
        class: '七年级1班',
        score: 90,
        date: '2021-01-01',
      },
      {
        name: '王五',
        age: 20,
        gender: '男',
        class: '九年级3班',
        score: 70,
        date: '2021-01-03',
      },
      {
        name: '李四',
        age: 19,
        gender: '女',
        class: '八年级2班',
        score: 80,
        date: '2021-01-02',
      },
    ])
    let selectedClass = ref<string>('')
    let desc = ref<string>('当前选择的是七年级1班')
    function selectFunc(index: number) {
      let strs = ['七年级', '八年级', '九年级']
      let rank = strs[Math.floor((index - 1) / 3)]
      desc.value = `当前选择的是${rank}${((index - 1) % 3) + 1}班`
      selectedClass.value = `${rank}${((index - 1) % 3) + 1}班`
    }
    const filteredStus = computed(() => {
      return stus.value.filter((stu) => stu.class === selectedClass.value)
    })
    return {
      stus,
      desc,
      selectFunc,
      filteredStus,
      selectedClass,
    }
  },
})
</script>
