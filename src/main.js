// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Home from './components/Home'
import BlogAdd from './components/BlogAdd'
import BlogEdit from './components/BlogEdit'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUi)
//Vue.use(Axios)

Vue.prototype.$ajax = Axios

//自定义指令
Vue.directive('bgcolor',{
	bind(el,binding,vnode){
		el.style.backgroundColor = "#fff"
	}
})

//自定义过滤器
Vue.filter('snippet',function(value){
	return value.slice(0,100) + "...";
})

const router = new VueRouter({
	routes : [
		{path:'/',component:Home,redirect: '/Home' },
		{path:'/Home',component:Home},
		{path:'/addBlog',component:BlogAdd},
		{path:'/editBlog/:id',component:BlogEdit}
	],
	mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
