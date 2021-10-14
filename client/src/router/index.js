import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tracker from '../views/Tracker.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

const routes = [
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
    name: 'Tracker',
    component: Tracker
  },
  {
    path: '/login',
    name: 'Login',
    Component: Login
    
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    Component: SignUp
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router