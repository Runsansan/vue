import axios from 'axios';
import iView from 'iview';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = 'http://192.168.1.117:8081/egoo-web';
// axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
    iView.LoadingBar.start();
    let getToken = sessionStorage.getItem('Token') ;// 在发送请求之前做些什么
    console.log ('TOKEN' + getToken);
    config.headers.common['APP-USER-TOKEN'] = getToken;
    return config;
}, function (error) { // 对请求错误做些什么
    iView.LoadingBar.finish();
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    iView.LoadingBar.finish();
    return response;
}, function (error) {
    return  Promise.reject(error);
});
export default {
    post(url, data, callback) {
        return axios.post(url, data, callback).then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            callback(response.data);
        }).catch((error) => {
            callback(error);
        });
    },
    get(url, callback) {
        return axios.get(url, callback).then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            callback(response.data);
        }).catch((error) => {
            callback(error);
        });
    }
} 
