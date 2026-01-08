<template>
  <div class="about">
    <h1>This is an about page</h1>
    <About_Page1></About_Page1>
    <About_Page2></About_Page2>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import About_Page1 from '@/components/To_About1.vue'
import About_Page2 from '@/components/To_About2.vue'
export default defineComponent({
  name: 'AboutView',
  components: {
    About_Page1,
    About_Page2
  }
})
</script>
