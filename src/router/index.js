import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    //通配符 * 被取消
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "NoPage404",
    component: () => import("@/views/404.vue"), // 建议进行路由懒加载，优化访问性能
    hidden: true,
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/home.vue"), // 建议进行路由懒加载，优化访问性能
  },
  {
    path: "/add",
    name: "add",
    components: {
      base: () => import("@/views/add.vue"), // 建议进行路由懒加载，优化访问性能
    },
  },
  {
    path: "/select",
    name: "select",
    components: {
      base: () => import("@/views/select.vue"), // 建议进行路由懒加载，优化访问性能
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
})

export default router
