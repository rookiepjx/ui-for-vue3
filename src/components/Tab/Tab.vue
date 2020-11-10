<template>
<div class="content">
  <h2>Tab</h2>
  <div class="titles">
    <div class="title" @click="selectTab(index)" :class="{ selected: selected == index }" v-for="(item, index) in titles" :key="index">
      {{ item }}
    </div>
  </div>
  <div class="main">
    <div v-if="selected == 0">用户管理</div>
    <div v-if="selected == 1">角色管理</div>
    <div v-if="selected == 2">订单管理</div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  setup(props, context) {
    const selectTab = (index) => {
      context.emit("update:selected", index);
    };
    return {
      selectTab,
    };
  },
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #409eff;

.content {
  >.titles {
    display: flex;
    flex-direction: row;

    >.title {
      margin-right: 20px;
      padding: 6px 0;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: $blue;
        border-bottom: 3px solid $blue;
      }
    }

    >.selected {
      color: $blue;
      border-bottom: 3px solid $blue;
    }

  }

  >.main {
    margin-top: 20px;
  }
}
</style>
