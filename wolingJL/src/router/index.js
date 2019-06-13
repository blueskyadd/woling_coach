import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/layout/index'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/index',
          name:'index',
          component:() => import('@/view/index/index')
        },
        {
          path:'/userinfo',
          name:'userinfo',
          component:() => import('@/view/userinfo/userinfo')
        },
        {
          path:'/assessAll',
          name:'assessAll',
          component:() => import('@/view/assess/assessAll'),
          children:[
            {
              path:'/selectFootball',
              name:'selectFootball',
              component:() => import('@/view/assess/selectFootball'),
            }
          ]
        },
        {
          path:'/assess',
          name:'assess',
          component:() => import('@/view/assess/assess')
        },
        {
          path:'/evaluation',
          name:'evaluation',
          component:() => import('@/view/evaluation/evaluation'),
          children:[
            {
              path:'/selectEvaluation',
              name:'selectEvaluation',
              component:() => import('@/view/evaluation/selectEvaluation')
            }
          ]
        },
        {
          path:'/parctice',
          name:'parctice',
          component:() => import('@/view/parctice/parctice')
        }
      ]
    }
  ]
})
