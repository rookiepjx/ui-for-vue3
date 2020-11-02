<template>
<div>
  <TopNav />
  <div class="content">
    <aside>侧边栏</aside>
    <main>内容区</main>
  </div>
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
aside {
  color: red;
}
</style>
