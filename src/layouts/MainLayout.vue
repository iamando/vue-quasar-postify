<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"
          class="lt-md"
        />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fas fa-paper-plane"
            size="sm"
            color="primary"
            class="q-pa-md lt-md header-icon"
          />
        </q-toolbar-title>
        <div class="flex items-center">
          <q-icon
            name="logout"
            size="sm"
            color="primary"
            class="cursor-pointer"
            @click="logout"
          />
        </div>
      </q-toolbar>
    </q-header>

    <LeftDrawer />
    <RightDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawer from "../layouts/LeftDrawer";
import RightDrawer from "../layouts/RightDrawer";

export default {
  components: {
    LeftDrawer,
    RightDrawer,
  },
  data() {
    return {
      left: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
  },
};
</script>

<style scoped lang='sass'>
.header-icon
  position: absolute
  bottom: 0
  left: 15%
  transform: translateX(-15%)
</style>
