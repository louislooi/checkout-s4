import Vue from "vue";
import Router from "vue-router";
import NotFound from "../views/NotFound.vue";
import Checkout from "../views/Checkout.vue";

/* eslint-disable */

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/checkout",
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
