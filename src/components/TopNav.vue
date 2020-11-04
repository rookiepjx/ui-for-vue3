<template>
<div class="nav">
  <div class="logo" @click="toggleAside">
    <img class="avatar" src="../assets/img/avatar.png" alt="" />
  </div>
  <ul class="menu">
    <li><a href="https://github.com/rookiepjx/ui-for-vue3">GitHub</a></li>
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  // vue3新增setup函数
  setup() {
    // inject get父组件中provide的变量asideVisible
    const asideVisible = inject < Ref < boolean >> ("asideVisible");
    console.log("aside的值为" + asideVisible.value);
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }

    // return出去模板中才能使用这个变量
    return {
      asideVisible,
      toggleAside
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  z-index: 10;
  background-color: skyblue;
  display: flex;
  align-items: center;
  padding: 16px;

  >.logo {
    max-width: 6em;
    margin-right: auto;

    .avatar {
      margin-left: 10px;
      width: 3em;
      height: 3em;
    }
  }

  >.menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li a {
      margin: 0 1em;
      padding: 0.4em 1em;
      border-radius: 10px;
      background-color: #eee;
      color: #000;
      transition: .2s linear;
    }

    >li a:hover {
      color: #fff;
      background-color: #000;
    }
  }
}
</style>
