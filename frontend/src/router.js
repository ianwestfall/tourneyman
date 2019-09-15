import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { getAuthenticatedUser } from './utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component() {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component() {
        return import(/* webpackChunkName: "profile" */ './views/Profile.vue');
      },
      beforeEnter: (to, from, next) => {
        if (!getAuthenticatedUser()) {
          next('/signIn');
        } else {
          next();
        }
      },
    },
    {
      path: '/signIn',
      name: 'signIn',
      component() {
        return import(/* webpackChunkName: "signIn" */ './views/auth/SignIn.vue');
      },
    },
    {
      path: '/register',
      name: 'register',
      component() {
        return import(/* webpackChunkName: "register" */ './views/auth/Register.vue');
      },
    },
  ],
});
