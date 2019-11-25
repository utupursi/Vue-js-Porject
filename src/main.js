import Vue from 'vue'
import App from './App.vue'
import CreateQuiz from './components/createQuiz'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes=[
  {path:'/createQuiz',component:CreateQuiz}
]
const router=new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
