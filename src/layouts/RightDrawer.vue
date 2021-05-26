<template>
  <q-drawer show-if-above side="right" bordered>
    <q-input
      color="primary"
      outlined
      rounded
      class="q-ma-md"
      placeholder="Search Postify"
      dense
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-list separator>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </q-list>
  </q-drawer>
</template>

<script>
import NewsCard from "../components/NewsCard";

export default {
  name: "RightDrawer",
  components: {
    NewsCard,
  },
};
</script>

<style>
</style>
