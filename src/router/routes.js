
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name:'settings', path: '/settings', component: () => import('pages/SettingPage.vue') },
      { name:'todos', path: '/todos', component: () => import('pages/ToDosPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
