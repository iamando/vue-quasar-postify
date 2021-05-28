import Vue from "vue";
import Vuex from "vuex";

import postify from "./postify";
import user from "./user";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      postify,
      user
    },
    strict: process.env.DEBUGGING
  });

  return Store;
}
