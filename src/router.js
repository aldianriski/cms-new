import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/home/Home.vue';
import store from './store';

Vue.use(VueRouter);

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/', name: 'login', component: () => import('./views/login/Login.vue') },
  { path: '/about', name: 'about', component: () => import('./views/home/About.vue') },
  {
    path: '/dashboard', name: 'dashboard', component: () => import('./views/home/Dashboard.vue'), beforeEnter(to, from, next) { if (store.state.idToken) { next(); } else { next('/'); } },
  },
  { path: '/forgotpass', name: 'forgotpass', component: () => import('./views/login/Forgotpass.vue') },
  { path: '/register', name: 'register', component: () => import('./views/login/Register.vue') },
  { path: '/viewuser', name: 'viewuser', component: () => import('./views/ViewUser.vue') },
];

// routes.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register', '/forgotpass'];
//   const authRequired = !publicPages.includes(to.path);
//   // const authUser = store.state.idToken;

//   if (authRequired) {
//     return next('/login');
//   }

//   next();
// });

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
