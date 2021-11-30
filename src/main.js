// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';

const app = createApp(App);

app.config.productionTip = false;
app.use(Antd);
app.mount("#app");
