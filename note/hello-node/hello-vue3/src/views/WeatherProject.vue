<template>
  <Weather_Project></Weather_Project>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Weather_Project from '@/components/Weather.vue';
export default defineComponent({
  name: 'weatherProject', //注册组件名
  components: {//注册组件
    Weather_Project,
  },
})
</script>
