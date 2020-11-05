<template>
<div class="content">
  <h1 class="title">Switch组件</h1>
  <div class="box">
    <h3>常规用法</h3>
    <Switch1 :checked="checked1" @switch="checked1 = $event" />
  </div>
  <div class="box">
    <h3>默认关闭</h3>
    <Switch1 :checked="checked2" @switch="checked2 = $event" />
  </div>
</div>
</template>

<script lang="ts">
// @switch接受子组件emit事件，$event是事件传递的值
import {
  ref
} from "vue";
import Switch1 from "./Switch1.vue";
export default {
  setup() {
    // 可以checked修改默认值
    const checked1 = ref(false);
    const checked2 = ref(true);
    return {
      checked1,
      checked2,
    };
  },
  components: {
    Switch1,
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;

  .box {
    margin-bottom: 10px;
  }
}
</style>
