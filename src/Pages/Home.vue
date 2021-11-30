<template>
  <Row :class='home-main-row' gutter={8} justify="space-between">
    <Col flex="auto">
      <Row :style='{ flexFlow: column }'>
        <div>test</div>
        <!--StreamDefinition
          streamDefinition={streamDef}
          setStreamDefinition={setStreamDef}
        /-->
      </Row>
      <Row>
        <Col :class='vban-stream-audio-column'>
          <div>test</div>
          <!--ReceivedStream-->
        </Col>
        <Col :class='vban-stream-audio-arrow-column'>
          <Icon type="arrow-right" :class="arrow" />
          <Icon type="arrow-right" :class="arrow" />
          <Icon type="arrow-right" :class="arrow" />
        </Col>
        <Col :class="vban-stream-audio-column" >
          <div>test</div>
          <!--OutputStream
            streamAudio={streamAudio}
            setStreamAudio={setStreamAudio}
          -->
        </Col>
      </Row>
    </Col>
    <Col>
      <Divider :class="HomeDivider" type="vertical" plain />
    </Col>
    <Col flex="auto">
      <!--AudioController channels={streamAudio.channel} -->
    </Col>
  </Row>
</template>

<script>
import { Row, Col, Divider, Icon } from "ant-design-vue";

export default {
  name: 'Home',
  components: {
    Row,
    Col,
    Divider,
    Icon
  }
};
</script>

<style scoped>

</style>
