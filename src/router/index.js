import Vue from 'vue'
import Router from 'vue-router'
import SunTracker from '@/components/SunTracker'
import FeaturedVideos from '@/components/FeaturedVideos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SunTracker',
      component: SunTracker
    },
    {
      path:'/FeaturedVideos',
      name: 'FeaturedVideos',
      component: FeaturedVideos
    }
  ]
})
