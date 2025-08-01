import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import Press from '../components/Press.vue'
import Career from '../components/Career.vue'
import Nav from '../components/Nav.vue'
import Application from '../components/Application.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
     {
      path: '/about',
      name: 'about',
      component: About,
    },
     {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
     {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
     {
      path: '/press',
      name: 'press',
      component: Press,
    },
     {
      path: '/career',
      name: 'career',
      component: Career,
    },
     {
      path: '/nav',
      name: 'nav',
      component: Nav,
    },
    {
      path: '/application',
      name: 'application',
      component: Application,
    }
  ],
})

export default router
