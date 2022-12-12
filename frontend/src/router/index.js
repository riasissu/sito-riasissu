import { app } from '../main'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
//  {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
 
//   {
//     path:'/login',
//      name:'login',
//   //component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')  
//   },
//   {
//     path:'/signup',
//     name:'signup',
//     //component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue')  
//   },
//   {
//     path:'/profile',
//     name:'profile',
//     //component:()=>import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
//   },
//   {
//     path:'/scuole',
//     name:'scuole',
//     //component:()=>import(/* webpackChunkName: "profile" */ '../views/MappaView.vue')
//   },
//   {
//     path:'/chiasmo',
//     name:'chiasmo',
//     //component:()=>import(/* webpackChunkName: "profile" */ '../views/ChiasmoView.vue')
//   },
//   {
//     path:'/reteidee',
//     name:'reteidee',
//    // component:()=>import(/* webpackChunkName: "profile" */ '../views/ReteIdeeView.vue')
//   },
//   {
//     path:'/xcool',
//     name:'xcool',
//     component:()=>import(/* webpackChunkName: "profile" */ '../views/XCoolView.vue')
//   },
  
  //{
  //  path:'/scuole',
  //  name:'scole',
  //  component:()=>import(/* webpackChunkName: "profile" */ '../views/MappaView.vue')
  //}
//  {
//    path: '/*',
//    name: '404',
//    component: () => import(/* webpackChunkName: "about" */ '../views/Error404View.vue')  
//  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

app.use(router);



export default router
