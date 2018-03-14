import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Artist from '@/components/artist/Artist.vue';
import Category from '@/components/category/Category.vue';
import Bang from '@/components/bang/Bang.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/home',
        component: Home
    },
   	{
        path: '/bang',
        component: Bang,
        beforeEnter: (to, from, next) => {
            // to: Route: 即将要进入的目标 路由对象
            // from: Route: 当前导航正要离开的路由
            // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
            console.log('进入榜单页面之前拦截：');
            next(vm => {
                // 通过 `vm` 访问组件实例
            })
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            console.log('更新之前拦截：');
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log('离开榜单页面之前拦截：');
        },
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/artist',
        component: Artist
    }
   
  ]
})
