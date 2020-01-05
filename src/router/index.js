// 引入vue库
import Vue from 'vue'
// 引入路由
import Router from 'vue-router'

//一级路由
import Index from '@/components/index'

// 二级路由
// 引入推荐组件
import Recommend from '@/components/pages/recommend'
// 引入热门歌曲组件
import Hotsong from '@/components/pages/hotsong'
// 引入搜索组件
import Seach from '@/components/pages/seach'
import Heder from '@/components/pages/heder'

// 使用路由
Vue.use(Router)

// 定义路由组件的名称
export default new Router({
    routes: [{
        path: '/index',
        component: Index,
        children: [{
            path: '/rec',
            component: Recommend
        }, {
            path: '/hot',
            component: Hotsong
        }, {
            path: '/seach',
            component: Seach
        }]
    }, { //重定向
        path: '*',
        redirect: '/rec'
    }]
})