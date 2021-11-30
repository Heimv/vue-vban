<template>
  <AntButton
    size="large"
    :class="['vban-button audio-controller', shape, state ? 'on' : 'off' ]"
    onClick={onClickHandler}
  >
  <span :class="['app-title', 'audio-controller']">title</span>
  </AntButton>
</template>

<script>
import { Button as AntButton } from 'ant-design-vue';

export default {
  name: 'Button',
  components: {
    AntButton,
  },
  props: [
    'shape',
    'state',
    'title',
  ],
};
</script>

<style scoped lang="less">
@import '~ant-design-vue/dist/antd.less';

.vban-button {
  min-width: 60px;
  height: 60px;
  border: @text-color 2px solid;
}

.audio-controller {
  align-self: flex-end;
  display: flex;
  justify-content: center;
  margin: 4px;
  background-color: transparent;
  .app-title {
    font-size: 36px;
    align-self: center;
  }
}

.round {
  border-radius: 20px;
}

.circle {
  border-radius: 40px;
}

.on {
  background-color: #DA0B0B;
  border-color: #DA0B0B;
  color: white;
}

.off {
  background-color: transparent;
}
</style>
