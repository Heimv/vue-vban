<template>
  <div id="app">
    <Layout>
      <Header/>
      <LayoutContent>
        <Home
          streamDef={streamDef}
          streamAudio={streamAudio}
          setStreamDef={setStreamDef}
          setStreamAudio={setStreamAudio}
        />
      </LayoutContent>
    </Layout>
  </div>
</template>

<script>
import { Layout, LayoutContent } from 'ant-design-vue'
import Header from './components/Header';
import Home from './Pages/Home';

export default {
  name: 'App',
  data() {
    return {
      streamDef: {},
      streamAudio: {}
    }
  },
  methods: {
    setStreamDef: function () {},
    setStreamAudio: function () {},
  },
  components: {
    Header,
    Home,
    Layout,
    LayoutContent
  },
};
</script>

<style lang="less">
@import '~ant-design-vue/dist/antd.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
