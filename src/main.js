// 入口文件
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)
  

//导入mint-ui
import MintUi from "mint-ui"

//从mint-UI中导入头部
import {Header} from "mint-ui"
Vue.component(Header.name,Header)

//导入mui
import "./lib/mui/css/mui.min.css"


import app from "./App.vue"

//导入自己的router.js路由模块
import router from "./router.js"

var vm=new Vue({
	el:"#app",
	render:c=>c(app),
	router
})