import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tracker from '../views/Tracker.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Feed from '../views/Feed.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tracker',
    component: Tracker
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/feed',
    component: Feed
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router