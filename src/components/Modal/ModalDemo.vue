<template>
  <div class="content">
    <h1 class="title">Modal组件</h1>
    <div class="box">
      <h3>常规用法</h3>
      <Button class="btn" level="primary" @click="toggleModal"
        >打开Modal</Button
      >
      <Modal class="cpn" v-model:visible="visible" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
        <template v-slot:title>
          <strong>标题</strong>
        </template>
        <template v-slot:content>
          <div>Hello World</div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { Button } from "../Button/index";
// import { openModal } from "./openModal";
import { ref } from "vue";
export default {
  components: {
    Modal,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggleModal = () => {
      visible.value = !visible.value;
    };
    const f1 = () => true
    const f2 = () => true
    return { toggleModal, visible,f1,f2 };
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;

  .box {
    > .btn {
      padding: 0;
      margin-bottom: 10px;
      display: inline-block;
    }

    > h3 {
      padding: 10px 0;
    }

    > .cpn {
      padding: 20px;
      background-color: #fff;
      z-index: 20;
    }
  }
}
</style>
