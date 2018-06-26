import Vue from 'vue';
import Router from 'vue-router';
import page from 'com/page.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: page,
      children: [
        {
          path: '/article/:id',
          component: () => import('views/article/index.vue')
        }
      ],
      redirect: '/article/123'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login/index.vue')
    }
  ]
});
