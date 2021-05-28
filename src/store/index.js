import Vue from "vue";
import Vuex from "vuex";

import postify from "./postify";
import user from "./user";
import notification from "./notification";
import explore from "./explore";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      postify,
      explore,
      notification,
      user
    },
    strict: process.env.DEBUGGING
  });

  return Store;
}
