<template>
<div class="nav">
  <div class="logo">
    <router-link to="/">
      <img class="avatar" src="../assets/img/avatar.png" alt="">
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
export default {};
</script>

<style lang="scss" scoped>
.nav {
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
      padding: .4em 1em;
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
</style>
