<template>
<TopNav />
<div class="banner">
  <img class="avatar" src="../assets/img/avatar.png" alt="" />
  <h1 class="title">Star UI</h1>
  <h2 class="desc">一个基于Vue3的简洁UI库</h2>
  <p class="actions">
    <a href="https://github.com/rookiepjx/ui-for-vue3">GitHub</a>
    <router-link to="/doc">Start</router-link>
  </p>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 80px;
  min-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .avatar {
    width: 10em;
    height: 10em;
    margin-bottom: 20px;
  }

  .title {
    padding: 10px;
  }

  .desc {
    padding: 10px;
  }

  .actions {
    display: flex;
    justify-content: center;

    >a {
      color: #fff;
      min-width: 50px;
      margin: 1em 1em;
      padding: 0.4em 1em;
      border-radius: 10px;
      background-color: #67c23a;
      transition: .2s linear;
    }

    >a:hover {
      background-color: #94f75b;
    }
  }
}
</style>
