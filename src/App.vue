<template>
<router-view />
</template>

<script lang="ts">
import {
  provide,
  ref
} from "vue"
export default {
  // vue3新增setup函数
  setup() {
    // 根据设备屏幕宽度决定显示/隐藏
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    // 使用 provide set变量，所有子组件都可以使用这个变量
    provide("asideVisible", asideVisible)
  },
  name: "App",
  components: {

  },
};
</script>
