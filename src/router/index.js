import Vue from 'vue'
import Router from 'vue-router'
import SunTracker from '@/components/SunTracker'
import Faqs from '@/components/Faqs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SunTracker',
      component: SunTracker
    }
  ]
})
