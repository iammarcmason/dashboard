import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import './assets/css/ft-syntax-highlight.min.css';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import PostComponent from './components/PostComponent.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent,
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent,
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent,
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent,
  },
  {
    name: 'post',
    path: '/post/:id',
    component: PostComponent,
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
