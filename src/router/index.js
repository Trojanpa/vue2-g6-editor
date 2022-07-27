import Vue from 'vue';
import Router from 'vue-router';
import { _import } from '@/utils/common';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/404',
      name: '404',
      component: _import('ErrorPages/404'),
      meta: {
        title: '404页面',
        icon: '',
        hasAuth: true,
        keepAlive: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: _import('Login/index'),
      meta: {
        title: '登录页面',
        icon: '',
        hasAuth: true,
        keepAlive: false,
      },
    },
    {
      path: '/',
      name: 'main',
      redirect: '/login',
      meta: {
        title: '首页',
        icon: '',
        hasAuth: true,
        rights: [],
        keepAlive: false,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: _import('Home/index'),
      meta: {
        title: '编辑器',
        icon: '',
        hasAuth: true,
        rights: [],
        keepAlive: false,
      },
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

export default router;
