<template>
<div class="content">
  <h1 class="title">Button组件</h1>
  <div class="box">
    <h3>基础用法</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button level="primary">主要按钮</Button>
      <Button theme="text">文本按钮</Button>
      <Button round>圆角按钮</Button>
      <Button size="mini">小型按钮</Button>
      <Button disabled>禁用按钮</Button>
      <Button loading>加载中</Button>
    </div>
  </div>
  <div class="box">
    <h3>主题按钮</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button theme="text">文本按钮</Button>
      <Button theme="link">链接按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>尺寸按钮</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button size="large">大型按钮</Button>
      <Button size="mini">小型按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>级别按钮</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button level="primary">主要按钮</Button>
      <Button level="info">信息按钮</Button>
      <Button level="success">成功按钮</Button>
      <Button level="warning">警示按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>圆角按钮</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button level="primary" round>主要按钮</Button>
      <Button level="info" round>信息按钮</Button>
      <Button level="success" round>成功按钮</Button>
      <Button level="warning" round>警示按钮</Button>
      <Button level="danger" round>危险按钮</Button>
    </div>
  </div>
  <div class="box">
    <h3>加载按钮</h3>
    <div class="cpn">
      <Button>默认按钮</Button>
      <Button loading>加载中</Button>
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
      align-items: center;
      background-color: #fff;
    }
  }
}
</style>
