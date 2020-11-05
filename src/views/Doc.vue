<template>
<div class="layout">
  <TopNav class="nav" />
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/a">组件a</router-link>
        </li>
        <li>
          <router-link to="/doc/b">组件b</router-link>
        </li>
        <li>
          <router-link to="/doc/c">组件c</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
import TopNav from "../components/TopNav/TopNav.vue";
export default {
  // vue3新增setup函数
  setup() {
    // inject get父组件中provide的变量asideVisible
    const asideVisible = inject < Ref < boolean >> ("asideVisible");

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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.content {
    flex-grow: 1;
    padding-top: 94px;
    padding-left: 192px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
  }
}

aside {
  height: 100%;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 90px;
  background-color: #ffffff;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li a {
      display: block;
      padding: 4px 0;
    }

    >li .router-link-active {
      color: #fff;
      background-color: #66CCFF;
      border-radius: 20px;
    }
  }
}

main {
  overflow: auto;
  background-color: #eee;
}
</style>
