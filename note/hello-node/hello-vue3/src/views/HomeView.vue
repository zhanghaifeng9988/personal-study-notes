<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

//局部组件注册，可以在当前组件的template中使用
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

//defineComponent: 这是 Vue 3 提供的一个函数，用于定义和注册组件。
//它可以帮助你更好地利用 TypeScript 的类型检查和代码补全功能。

//先从组件目录conponents中,将组件导入到当前组件HomeView.vue中。
//然后在script中，使用defineComponent函数定义组件，并将组件HelloWorld注册到当前组件HomeView中。
//最后在template中，使用HelloWorld组件，并传入msg属性。
