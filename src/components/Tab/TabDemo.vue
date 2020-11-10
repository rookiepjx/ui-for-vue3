<template>
<div class="content">
  <h1 class="title">Tab组件</h1>
  <div class="box">
    <h3>常规用法</h3>
    <Tab v-model:selected="index" :titles="titles" class="cpn" />
  </div>
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
import Tab from "./Tab.vue"
export default {
  setup() {
    const titles = ["用户管理", "角色管理", "订单管理"]
    const index = ref(0)
    return {
      titles,
      index

    }
  },

  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;

  .box {

    >h3 {
      padding: 10px 0;
    }

    >.cpn {
      padding: 20px;
      background-color: #fff;
    }
  }
}
</style>
