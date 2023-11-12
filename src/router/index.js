import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import IbenoMapathon from '../pages/Ibeno-mapathon-2020.vue'
import GISTraining from '../pages/GIS-RS-training.vue'
import PastProjects from '../pages/Past-projects.vue'
import GoogleMapBusiness from '../dedicatedServices/GoogleMapBusinesses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'PrecisegisContactView',
      component: ContactView
    },
    {
      path: '/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria',
      name: 'PrecisegisIbenoMapathon2020',
      component: IbenoMapathon
    },
    {
      path: '/gis-rs-training',
      name: 'PrecisegisGISRSTraining',
      component: GISTraining
    },
    {
      path: '/past-projects',
      name: 'PrecisegisPastProjects',
      component: PastProjects
    },
    {
      path: '/google-map-business',
      name: 'PrecisegisGoogleMapBusinesses',
      component: GoogleMapBusiness
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
