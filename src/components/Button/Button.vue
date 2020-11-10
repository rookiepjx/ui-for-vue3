<template>
<div class="content">
  <button class="star-btn" :class="[
        classes,
        { 'star-btn-round': round }
      ]" :disabled="disabled">
    <span v-if="loading" class="star-btn-loading"></span>
    <slot />
  </button>
</div>
</template>

<script lang="ts">
// 声明规定props类型和值
declare const props: {
  theme ? : "button" | "text" | "link";
  size ? : "normal" | "mini" | "large";
  level ? : "default" | "info" | "success" | "warning" | "danger";
  disabled: boolean;
  loading: boolean;
  round: boolean;
};

export default {
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
    round: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return `star-btn-${this.theme} star-btn-${this.size} star-btn-${this.level}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$max:999px;
$height: 40px;
$height-large:52px;
$height-mini: 28px;
$white: #fff;
$black: #606266;
$grey:#c8c9cc;
$blue:#409eff;
$border-radius: 4px;
$border: 1px #ddd solid;
$border1: 1px #c6e2ff solid;
$default-text: #606266;
$default-text1: #40a9ff;
// 主题背景色
$default-bgc: #fff;
$default-bgc1: #ecf5ff;
$primary-bgc: #409eff;
$primary-bgc1: #66b1ff;
$success-bgc: #67c23a;
$success-bgc1: #85ce61;
$info-bgc: #909399;
$info-bgc1: #a6a9ad;
$warning-bgc: #e6a23c;
$warning-bgc1: #ebb563;
$danger-bgc: #f56c6c;
$danger-bgc1: #f78989;

.content {

  // 默认按钮
  >.star-btn {
    min-width: 100px;
    height: $height;
    padding: 10px;
    background-color: #fff;
    color: $black;
    border-radius: $border-radius;
    border: $border;
    cursor: pointer;
    white-space: nowrap;

    &:focus,
    &:hover {
      border: $border1;
      background-color: $default-bgc;
      color: $default-text1;
    }

    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  // 文字主题按钮
  >.star-btn-text {
    color: #409eff;
    background-color: $white;
    border: none;

    &:focus,
    &:hover {
      border: none;
      background-color: $white;
    }
  }

  // 超链接主题按钮
  >.star-btn-link {
    text-decoration: underline;
  }

  // 主要按钮
  >.star-btn-primary {
    color: $white;
    background-color: $primary-bgc;
    border: 1px solid $primary-bgc;

    &:focus,
    &:hover {
      color: $white;
      background-color: $primary-bgc1;
      border: 1px solid $primary-bgc1;
    }
  }

  // 成功按钮
  >.star-btn-success {
    color: $white;
    background-color: $success-bgc;
    border: 1px solid $success-bgc;

    &:focus,
    &:hover {
      color: $white;
      background-color: $success-bgc1;
      border: 1px solid $success-bgc1;
    }
  }

  // 信息按钮
  >.star-btn-info {
    color: $white;
    background-color: $info-bgc;
    border: 1px solid $info-bgc;

    &:focus,
    &:hover {
      color: $white;
      background-color: $info-bgc1;
      border: 1px solid $info-bgc1;
    }
  }

  // 警告按钮
  >.star-btn-warning {
    color: $white;
    background-color: $warning-bgc;
    border: 1px solid $warning-bgc;

    &:focus,
    &:hover {
      color: $white;
      background-color: $warning-bgc1;
      border: 1px solid $warning-bgc1;
    }
  }

  // 危险按钮
  >.star-btn-danger {
    color: $white;
    background-color: $danger-bgc;
    border: 1px solid $danger-bgc;

    &:focus,
    &:hover {
      color: $white;
      background-color: $danger-bgc1;
      border: 1px solid $danger-bgc1;
    }
  }

  // 大型按钮
  >.star-btn-large {
    font-size: 24px;
    height: $height-large;
    padding: 0 16px;
  }

  // 小型按钮
  >.star-btn-mini {
    font-size: 12px;
    height: $height-mini;
    padding: 0 8px;
  }

  // 圆角按钮
  >.star-btn-round {
    // 为了适合各个尺寸按钮高度50%的圆角，设置为最大值
    border-radius: $max;
  }

  // 加载按钮
  .star-btn-loading {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 6px;
    vertical-align: bottom;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: $blue $blue $blue transparent;
    animation: star-btn-loading 1s infinite linear;
  }

  @keyframes star-btn-loading {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }
}
</style>
