import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import startQuiz from "./Quiz/startQuiz";
import createQuiz from "./Create/createQuiz";
import quizTemplate from "./Quiz/quizTemplate";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
const routes=[
  // {path:'/App',redirect:'/createQuiz'},
  {path:'/createQuiz',component: createQuiz},
  {path:'/quizTemplate/:id',name:'quizTemplate',component:quizTemplate},
  {path:'/startQuiz',component:startQuiz}
]
const router=new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

