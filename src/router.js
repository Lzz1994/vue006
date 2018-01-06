import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newsList from "./components/news/newsList.vue"
import newsInfo from "./components/news/newsinfo.vue"
import photos from "./components/photos/photos.vue"
import photoinfo from "./components/photos/photoinfo.vue"
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    //HomeContainer.vue中的路由  ，/home/
    {path:"/home/newsList", component:newsList},
    {path:"/home/newsinfo/:id",component:newsInfo},
    {path:"/home/photos", component:photos},
    {path:"/home/photoinfo/:id", component:photoinfo}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router