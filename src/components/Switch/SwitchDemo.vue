<template>
<div class="content">
  <h1 class="title">Switch组件</h1>
  <Switch1 :checked="checked" @switch="checked = $event" />
</div>
</template>

<script lang="ts">
import {
  ref
} from 'vue';
import Switch1 from "./Switch1.vue"
export default {
  setup() {
    const checked = ref(false)
    return {
      checked
    }
  },
  components: {
    Switch1
  }
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;
}
</style>
