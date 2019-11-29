import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import CreateQuiz from './components/createQuiz'
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
const routes=[
  {path:'/createQuiz',component:CreateQuiz}
]
const router=new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

