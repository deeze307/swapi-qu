import { createRouter, createWebHashHistory } from 'vue-router';

import App from '@/App.vue'

const routes = [
  {
    path: '/',
		name: 'app',
		component: App,
		children: [
			{
				path: '/planets',
				name: 'planets',
				component: () => import('@/components/Planets.vue')
			},
			{
				path: '/',
				name: 'wellcome',
				component: () => import('@/components/Wellcome.vue')
			},
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;