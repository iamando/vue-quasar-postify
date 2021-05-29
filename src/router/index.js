import Vue from "vue";
import VueRouter from "vue-router";
import Notifications from "vue-notification";

import { auth } from "src/boot/firebase";

import routes from "./routes";

Vue.use(VueRouter);
Vue.use(Notifications);

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
      if (auth.currentUser) {
        next();
      } else {
        alert("You must be logged in to see this page");
        next({
          path: "/login"
        });
      }
    } else {
      next();
    }
  });

  return Router;
}
