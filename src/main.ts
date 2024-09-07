import { createApp } from 'vue';
// 引用根组件
import App from '@/App.vue';
// 引入清除默认样式
import '@/style/reset.scss';
// 引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';
// 引入vue-router核心插件并安装
import router from '@/router';
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化文件
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
// 安装vue-router
app.use(router);
// 安装element-plus
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app');
