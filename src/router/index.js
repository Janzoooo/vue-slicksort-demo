import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VisDemo from "../components/VisDemo";
import slicksort from "../components/vue-slicksort";
import slicksort2 from "../components/vue-slicksort-2";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/visdemo',
      name: 'visdemo',
      component: VisDemo
    },
    {
      path: '/vue-slicksort',
      name: 'vue-slicksort',
      component: slicksort
    },
    {
      path: '/vue-slicksort-2',
      name: 'vue-slicksort-2',
      component: slicksort2
    }
  ]
})
