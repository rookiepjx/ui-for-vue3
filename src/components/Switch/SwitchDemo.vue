<template>
<div class="content">
  <h1 class="title">Switch组件</h1>
  <div class="box">
    <h3>常规用法</h3>
    <Switch1 class="cpn" v-model:checked="checked1" />
  </div>
  <div class="box">
    <h3>默认关闭</h3>
    <Switch1 class="cpn" v-model:checked="checked2" />
  </div>
</div>
</template>

<script lang="ts">
// @switch接受子组件emit事件，$event是事件传递的值
// vue2 写法 :checked="checked1" @switch = "checked = $event"
// vue3 写法 v-model:checked="checked"
// 会自动监听子组件的emit("update:checked",!props.checked)实现双向绑定
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
