<template>
<div class="content">
  <h1 class="title">Tab组件</h1>
  <div class="box">
    <h3>常规用法</h3>
    <Tab class="cpn" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue"
export default {
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
