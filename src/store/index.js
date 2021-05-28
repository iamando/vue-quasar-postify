import Vue from "vue";
import Vuex from "vuex";

import postify from "./postify";
import user from "./user";
import notification from "./notification";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      postify,
      notification,
      user
    },
    strict: process.env.DEBUGGING
  });

  return Store;
}
