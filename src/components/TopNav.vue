<template>
<div class="nav">
  <img class="toggleBtn" @click="toggleAside" src="../assets/img/menu.png" alt="" />
  <div class="logo">
    <router-link to="/">
      <img class="avatar" src="../assets/img/avatar.png" alt="" />
    </router-link>
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
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };

    // return出去模板中才能使用这个变量
    return {
      asideVisible,
      toggleAside,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: skyblue;
  display: flex;
  align-items: center;
  padding: 16px;

  >.toggleBtn {
    position: absolute;
    display: none;
    width: 28px;
    height: 28px;
  }

  >.logo {
    max-width: 6em;
    margin-left: 54px;
    margin-right: auto;

    .avatar {
      width: 3em;
      height: 3em;
    }
  }

  >.menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;
    padding: 16px;

    >li a {
      margin: 0 1em;
      padding: 0.4em 1em;
      border-radius: 10px;
      background-color: #eee;
      color: #000;
      transition: 0.2s linear;
    }

    >li a:hover {
      color: #fff;
      background-color: #000;
    }
  }

  //手机端 隐藏右边menu logo居中 显示切换aside按钮
  @media (max-width: 500px) {
    >.toggleBtn {
      display: inline-block;
    }

    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }
  }
}
</style>
