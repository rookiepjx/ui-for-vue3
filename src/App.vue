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
    const asideVisible = ref(false)
    // 使用 provide set变量，所有子组件都可以使用这个变量
    provide("asideVisible", asideVisible)
  },
  name: "App",
  components: {

  },
};
</script>
