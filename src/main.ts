import { createApp } from 'vue'
// 引用根组件
import App from '@/App.vue'
// 引入清除默认样式
import '@/style/reset.scss';
// 引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue';

const app = createApp(App)
app.component("HospitalTop", HospitalTop)

app.mount('#app')
