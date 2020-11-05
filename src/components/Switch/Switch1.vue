<template>
<div class="box">
  <h3 class="title">常规用法</h3>
  <button class="switch" @click="toggleSwitch" :class="{ checked: checked }">
    <span></span>
  </button>
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
export default {
  setup() {
    // 默认关闭
    const checked = ref(true);
    const toggleSwitch = () => {
      checked.value = !checked.value;
    };
    return {
      checked,
      toggleSwitch,
    };
  },
};
</script>

<style lang="scss" scoped>
$h1: 22px;
$h2: $h1 - 4px;

.box {
  padding: 10px;
  background-color: #fff;

  >.title {
    padding: 10px;
  }

  >.switch {
    position: relative;
    left: 10px;
    width: $h1 * 2;
    height: $h1;
    border-radius: $h1 / 2;
    background-color: #3ae374;
    cursor: pointer;

    >span {
      position: absolute;
      top: 2px;
      left: 2px;
      width: $h2;
      height: $h2;
      border-radius: $h2 / 2;
      background-color: #fff;
      transition: all 0.2s linear;
    }

    &.checked {
      background-color: #d3d3d3;

      >span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
  }
}
</style>
