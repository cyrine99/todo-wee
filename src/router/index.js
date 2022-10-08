import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/VDashboard.vue'
import projects from '@/views/VProjects.vue'
import team from "@/views/VTeams.vue"

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
