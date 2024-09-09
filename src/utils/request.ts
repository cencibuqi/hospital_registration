// 二次封装axios
// 目的1:利用axios请求，响应拦截器功能
// 目的2:请求拦截器，一般可以在请求头中携带公共的参数如token
// 目的3响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from 'axios';

// 利用xios.create方法创建一个axios实例：可以设置基础路径，超时时间
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,  // 超时时间设置，超出5秒就是失败的
});

// 请求拦截器
request.interceptors.request.use((config) => {
    // config: 请求拦截器回调注入的对象（配置对象），配置对象身上最重要的一件事情headers属性
    // 可以通过请求头携带公共参数- token
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
request.interceptors.response.use((response) => {
    // 响应拦截器成功的回调,一般会进行简化数据
    return response;
}, (error) => {
    // 拦截器失败的回调，处理http网络错误
    return Promise.reject(new Error(error.messge));
})

// 对外暴露axios
export default request;