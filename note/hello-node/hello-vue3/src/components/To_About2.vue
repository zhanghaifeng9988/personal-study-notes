<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default defineComponent({
    name: 'About_Page2',
    setup() {
        const store = useStore()
        const increment = () => {
          store.commit('increment')
        }
        const count = computed(() => store.state.count)
        return {
            count,
            increment
        }
    }
})
</script>
<template>
  <div>
    <h1>计算器2：{{ count }}</h1>
    <button @click="increment">+</button>
  </div>

</template>
