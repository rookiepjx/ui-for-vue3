<template>
<TopNav />
<div class="content">
  <aside v-if="asideVisible">
    <h2>组件列表</h2>
    <ol>
      <li>
        <router-link to="/1">组件1</router-link>
      </li>
      <li>
        <router-link to="/2">组件2</router-link>
      </li>
      <li>
        <router-link to="/3">组件3</router-link>
      </li>
      <li>
        <router-link to="/4">组件4</router-link>
      </li>
    </ol>
  </aside>
  <main>
    <h2>内容区</h2>
    <router-view />
  </main>
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
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 84px;
  background-color: lightblue;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li {
      padding: 4px 0;
    }
  }
}
</style>
