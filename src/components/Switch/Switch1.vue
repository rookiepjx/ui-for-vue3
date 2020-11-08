<template>
<div class="box">
  <button class="switch" @click="toggleSwitch" :class="{ checked: checked }">
    <span></span>
  </button>
  <div class="status">{{ checked ? "已关闭" : "已激活" }}</div>
</div>
</template>

<script lang="ts">
import {
  ref
} from "vue";
export default {
  props: {
    checked: Boolean,
  },
  setup(props, context) {
    // 默认关闭
    // const checked = ref(true);
    const toggleSwitch = () => {
      // 1.内部数据模型实现
      // checked.value = !checked.value;
      // 2.父子数据模型实现
      // context.emit("switch", !props.checked);

      // vue3新写法 v-model双向绑定
      context.emit("update:checked", !props.checked);
    };
    return {
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

  >.status {
    padding: 10px 0;
  }

  >.title {
    padding: 10px 0;
  }

  >.switch {
    position: relative;
    padding: 10px 0;
    border: none;
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

    &:active {
      span {
        width: $h2 + 6px;
      }
    }

    &.checked:active {
      >span {
        width: $h2 + 6px;
        margin-left: -6px;
      }
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
