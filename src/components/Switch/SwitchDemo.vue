<template>
<div class="content">
  <h1 class="title">Switch组件</h1>
  <Switch1 />
</div>
</template>

<script lang="ts">
import Switch1 from "./Switch1.vue"
export default {
  components: {
    Switch1
  }
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;
}
</style>
