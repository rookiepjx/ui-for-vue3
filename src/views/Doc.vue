<template>
<TopNav />
<div class="content">
  <aside>侧边栏</aside>
  <main>内容区</main>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  // vue3新增setup函数
  setup() {
    // inject get父组件中provide的变量asideVisible
    const asideVisible = inject < Ref < boolean >> ("asideVisible");
    console.log("aside的值为" + asideVisible.value);

    // return出去模板中才能使用这个变量
    return {
      asideVisible,
    };
  },
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
aside {
  color: red;
}
</style>
