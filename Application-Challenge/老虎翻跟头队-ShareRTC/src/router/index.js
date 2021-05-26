import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: HelloWorld,
      children:[
        {
          path: '/',
          component:()=>import('@/components/initMsg.vue'),
        },
        {
          path: 'mainMsg',
          component:()=>import('@/components/mainMsg.vue'),
        },
        {
          path: 'userMsg',
          component:()=>import('@/components/userMsg.vue'),
        },
        {
          path: 'videoMeeting',
          component:()=>import('@/components/videoMeeting.vue'),
        },
      ]
    }
  ]
})
