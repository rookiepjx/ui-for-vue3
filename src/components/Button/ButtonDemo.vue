<template>
<div class="content">
  <h1 class="title">Button组件</h1>
  <div class="box">
    <h3>常规用法</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>不同主题</h3>
    <div class="cpn">
      <Button>普通按钮</Button>
      <Button theme="text">文本按钮</Button>
      <Button theme="link">链接按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>不同尺寸</h3>
    <div class="cpn">
      <Button>普通按钮</Button>
      <Button size="large">大型按钮</Button>
      <Button size="mini">小型按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>不同级别</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button level="info">信息按钮</Button>
      <Button level="success">成功按钮</Button>
      <Button level="warning">警示按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;

  .box {
    >h3 {
      padding: 10px 0;
    }

    >.cpn {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
    }
  }
}
</style>
