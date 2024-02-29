
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },

  { path:'/job', component: () => import('pages/Jobpage.vue') }
]

export default routes
