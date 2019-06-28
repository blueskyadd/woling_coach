import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Index from '../components/layout/index'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'loging',
      component:() => import('@/view/loging/index'),
    },
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
      path:'/evaluationIndex',
      name:'evaluationIndex',
      component:() => import('@/view/evaluation/index')
    },
    {
      path:'/evaluationDetail',
      name:'evaluationDetail',
      component:() => import('@/view/evaluation/evalationDetail')
    },
    {
      path:'/actively',
      name:'actively',
      component:() => import('@/view/actively/index')
    },
    {
      path:'/activelyDetail',
      name:'activelyDetail',
      component:() => import('@/view/actively/activelyDetail')
    },
    {
      path:'/student',
      name:'student',
      component:() => import('@/view/student/index')
    },
    {
      path:'/timeBar',
      name:'timeBar',
      component:() => import('@/view/course/timetable')
    },
    {
      path:'/courseDetail',
      name:'courseDetail',
      component:() => import('@/view/course/courseDetail')
    },
    {
      path:'/gradeIndex',
      name:'gradeIndex',
      component:() => import('@/view/grade/index')
    },
    {
      path:'/gradeDetail',
      name:'gradeDetail',
      component:() => import('@/view/grade/greadeDetail')
    },
    {
      path:'/exercise',
      name:'exercise',
      redirect:'/exercise/exerciseCoach',
      component:() => import('@/view/exercise/index'),
      children:[
        {
          path:'/exercise/exerciseCoach',
          name:'exerciseCoach',
          component:() => import('@/view/exercise/coach'),
        },
        //
        {
          path:'/exercise/exerciseGrade',
          name:'exerciseGrade',
          component:() => import('@/view/exercise/grade'),
        },
      ]
    }
  ]
})
Router.prototype.routerBack = function () {
  store.commit("changeIsBack",true)
  this.back(-1)
}

const toStrings = function(from){
  var cache = [];
  return JSON.stringify(from, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
}
