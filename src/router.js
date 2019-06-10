import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Edit from "./components/Edit.vue";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit
    },
    {
      path: "/edit/:id",
      name: "editid",
      component: Edit
    }
  ],
  mode: "history"
});
export default router;
