<template>
<img alt="Vue logo" src="./assets/logo.png" />
<h1>
  导航栏
  <hr>
  <router-link to="/">home</router-link> |
  <router-link to="about">about</router-link>
</h1>
<router-view />
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    About
  },
};
</script>
