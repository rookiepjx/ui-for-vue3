<template>
  <div class="content">
    <h1 class="title">Modal组件</h1>
    <div class="box">
      <h3>常规用法</h3>

      <div class="cpn">
        <Button class="btn" level="primary" @click="toggleModal"
          >打开Modal</Button
        >
        <Modal
          v-model:visible="visible"
          :closeOnClickOverlay="true"
          :ok="f1"
          :cancel="f2"
        >
          <template v-slot:title>
            <strong>标题</strong>
          </template>
          <template v-slot:content>
            <div>Hello World</div>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
    const f1 = () => true;
    const f2 = () => true;
    return { toggleModal, visible, f1, f2 };
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  padding: 20px;

  .box {


    > h3 {
      padding: 10px 0;
    }

    > .cpn {
      padding: 20px;
      background-color: #fff;
          > .btn {
      padding: 0;
      margin-bottom: 10px;
      display: inline-block;
    }
    }
  }
}
</style>
