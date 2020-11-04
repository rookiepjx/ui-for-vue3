<template>
<TopNav />
<div class="banner">
  <h1 class="title">Star UI</h1>
  <h2 class="desc">一个基于Vue3的简洁UI库</h2>
  <p class="actions">
    <a href="https://github.com/">GitHub</a>
    <router-link to="/doc">Get Start</router-link>
  </p>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue"
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
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
    padding: 10px;
  }
}
</style>
