import Vue from 'vue'
import Router from 'vue-router'
import SunTracker from '@/components/SunTracker'
import FeaturedVideo from '@/components/FeaturedVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SunTracker',
      component: SunTracker
    },
    {
      path:'/FeaturedVideo',
      name: 'FeaturedVideo',
      component: FeaturedVideo
    }
  ]
})
