<template>
<div class="content">
  <button class="star-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="button-loading"></span>
    <slot />
  </button>
</div>
</template>

<script lang="ts">
import {
  computed
} from "vue";
// 声明规定props类型和值
declare const props: {
  theme ? : "button" | "text" | "link";
  size ? : "normal" | "mini" | "large";
  level ? : "default" | "info" | "success" | "warning" | "danger";
  disabled: boolean;
  loading: boolean;
};

export default {
  setup(props, context) {
    const {
      theme,
      size,
      level
    } = props;
    const classes = () => {
      return {
        [`star-theme-${theme}`]: theme,
        [`star-size-${size}`]: size,
        [`star-level-${level}`]: level,
      };
    };
    return {
      theme,
      size,
      level,
      classes
    };
  },
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
// const {
//   theme,
//   size,
//   level
// } = props;
// export const classes = computed(() => {
//   return {
//     [`star-theme-${theme}`]: theme,
//     [`star-size-${size}`]: size,
//     [`star-level-${level}`]: level,
//   };
// });
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$border: 1px #ddd solid;
$border-hover: 1px #c6e2ff solid;
$default-text-hover: #40a9ff;
// 主题背景色
$default: #fff;
$default-hover: #ecf5ff;
$primary: #409eff;
$primary-hover: #66b1ff;
$success: #67c23a;
$success-hover: #85ce61;
$info: #909399;
$info-hover: #a6a9ad;
$warn: #e6a23c;
$warn-hover: #ebb563;
$danger: #f56c6c;
$danger-hover: #f78989;

.content {
  >.star-button {
    padding: 10px;
    background-color: #fff;
    border-radius: $border-radius;
    border: $border;
    cursor: pointer;
    white-space: nowrap;

    &:hover,
    &:focus {
      border: $border-hover;
      background-color: $default-hover;
      color: $default-text-hover;
    }
  }

  >.star-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
}
</style>
