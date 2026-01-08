<!-- <template>
  <div>1111</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const { params, query } = route;
console.log('params:' + JSON.stringify(params) + ' query:' + JSON.stringify(query));;//打印参数
const { path } = params;
defineOptions({
  name: 'Redirect',
});
onMounted(() => {
  router.replace({ path: '/' + path, query });
});
</script> -->
<template>
  <div>1111</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;

defineOptions({
  name: 'Redirect',
});

onMounted(() => {
  console.log('Component mounted');
  console.log('path:', path);
  if (path) {
    router.push({ path: '/' + path, query });
  } else {
    console.error('Path is undefined');
  }
});

watch(
  () => route.params.path,
  (newPath) => {
    if (newPath) {
      router.push({ path: '/' + newPath, query });
    }
  },
  { immediate: true }
);
</script>