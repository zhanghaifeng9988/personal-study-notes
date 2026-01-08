<template>
  <el-sub-menu
    class="grid"
    v-if="controlSubView(props.item)"
    :index="props.item.path"
  >
    <template #title>
      <component class="w-[20px] mr-2 ml-1" :is="props.item.icon" />
      <span>{{ props.item.title }}</span>
    </template>
    <SideBarItem v-for="i in props.item.children" :key="i.id" :item="i" />
  </el-sub-menu>
  <el-menu-item
  v-else-if="controlMenuView(props.item)"
    :index="dealRoutePath(props.item.path)"
  >
    <component class="w-[20px] mr-2 ml-1" :is="props.item.icon" />
    <span>{{ props.item.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import type { MenuList } from "@/store/types";
import { dealRoutePath } from "@/utils/routeUtils";
import { defineProps } from 'vue';
type Props = {
  item: MenuList;
};
const props = defineProps<Props>();
  //console.log('Item data:', JSON.stringify(props.item,null,2));
const controlSubView = (item: MenuList) => {
  // return item.status && item.menu_type === 1;
  const result = item.status && item.menu_type === 1;
  //console.log('controlSubView:', item.title, result);
  return result;
};
const controlMenuView = (item: MenuList) => {
  // return !item.status && item.menu_type === 2 && item?.hidden === 0;
  const result = item.status && item.menu_type === 2 ;
  //console.log('controlMenuView:', item.title, result);
  return result;
};
</script>