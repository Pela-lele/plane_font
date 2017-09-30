//http://www.bubuko.com/infodetail-2284022.html
//http://www.jianshu.com/p/aeaa353da89b
//https://github.com/zaxlct/vue-order-admin/blob/master/src/common/js/Axios.js
import axios from "axios";
import qs from "qs";
import router from "../router";

import { Indicator, Toast } from 'mint-ui';
var Axios = axios.create({
  baseURL: "/",
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

Axios.interceptors.request.use(function(config){
	// Do something before request is sent
	Indicator.open();
	if (config.method === "post" && !(config.data instanceof FormData)) {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function (error) {
	// Do something with request error
	Toast("error");
	Indicator.close();
	return Promise.reject(error);
})

Axios.interceptors.response.use(function (response) {
	// Do something with response data
	if (response.data && response.data.code !== 0) {
		// alert("后台报错")
		Toast("服务器异常")
		Indicator.close();
		return Promise.reject(response);
	}
	Indicator.close();
	return response;
}, function (error) {
	Toast("网络或服务器异常")
	Indicator.close();
	// Do something with response error
	return Promise.reject(error);
});
export default {
	install(Vue){
		Object.defineProperty(Vue.prototype, "$ajax", { value: Axios });
	},
	"ajax":Axios
}
