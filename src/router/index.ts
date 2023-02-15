import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import dataForm from '@/components/form-data.vue';
import allData from '@/components/all-data.vue';
import editData from '@/components/edit-data.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Form',
    component: dataForm
  },
  {
    path: '/data',
    name: 'data',
    component: allData
  },
  {
    path: '/edit-data/:nit',
    name: 'edit-data',
    component: editData
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
