<template>
  <div>
    <h2>Modal</h2>
    <template v-if="visible">
      <Teleport to="body">
        <div class="star-modal-overlay" @click="onClickOverlay"></div>
        <div class="star-modal-wrapper">
          <div class="star-modal">
            <header>
              <slot name="title" />
              <span @click="close" class="star-modal-close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <Button size="mini" level="primary" @click="onClickOk"
                >确定</Button
              >
              <Button size="mini" level="default" @click="onClickCancel"
                >取消</Button
              >
            </footer>
          </div>
        </div>
      </Teleport>
    </template>
  </div>
</template>
</div>
</template>
<script lang="ts">
import { Button } from "../Button/index";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    // 点击关闭
    const close = () => {
      context.emit("update:visible", false);
    };
    // 点击蒙版
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    // 点击确认
    const onClickOk = () => {
      if (props.ok?.()) {
        close();
      }
    };
    // 点击取消
    const onClickCancel = () => {
      if (props.cancel?.()) {
        close();
      }
    };

    return {
      onClickOverlay,
      close,
      onClickOk,
      onClickCancel,
    };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.star-modal {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 18em;
  max-width: 90%;

  // 背景蒙版
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, .5);
    z-index: 10;
  }
  // modal框
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
    display: flex;
      justify-content: flex-end;
    > * {
      
      margin: 2px;
    }
  }
  // 关闭叉的容器
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    // 关闭叉 2个高度为 1px 的线，分别顺时针和逆时针旋转45度
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
