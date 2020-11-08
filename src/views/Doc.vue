<template>
<div class="layout">
  <TopNav class="nav" />
  <div class="content">
    <aside v-if="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tab">Tab组件</router-link>
        </li>
        <li>
          <router-link to="/doc/modal">Modal组件</router-link>
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
  onMounted,
  onBeforeMount,
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
  z-index: 1;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li a {
      display: block;
      padding: 4px 0;
      margin: 6px 0;
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
