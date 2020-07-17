import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import startQuiz from "./Quiz/startQuiz";
import createQuiz from "./Create/createQuiz";
import quizTemplate from "./Quiz/quizTemplate";
import quizFinish from "./Quiz/quizFinish";
import quizResult from "./Quiz/quizResult";
import quizList from "./editQuiz/quizList";
import editQuiz from "./editQuiz/editQuiz";
import Notifications from 'vue-notification';
import store from './store';
import main from './Create/main';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Login from './user/login/login'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Notifications);
const routes = [
  // {path:'/App',redirect:'/createQuiz'},
  {path: '/createQuiz', component: createQuiz},
  {path: '/quizTemplate/:id', name: 'quizTemplate', component: quizTemplate},
  {path: '/quizFinish', name: 'quizFinish', component: quizFinish},
  {path: '/startQuiz', component: startQuiz},
  {path: '/quizResult', component: quizResult},
  {path: '/quizList', component: quizList},
  {path: '/editQuiz/:id', name: 'editQuiz', component: editQuiz},
  {path: '/login', component: Login},
  {path: '/index', component: main}
];
const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

