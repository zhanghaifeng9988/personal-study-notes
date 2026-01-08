<template>
  <div style="text-align: center;">
    <div><FirstProject/></div>
    <div><AoxisTest/></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FirstProject from '@/components/FirstProject.vue';
import AoxisTest from '@/components/Aoxis_Test.vue';
export default defineComponent({
  name: 'firstProject', //注册组件名
  components: {//注册组件
    FirstProject,
    AoxisTest
  },
})
</script>
