<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div
        class="q-px-xs row justify-center items-center q-col-gutter-md column"
      >
        <ExploreCard class="col" />
        <ExploreCard class="col" />
        <ExploreCard class="col" />
        <ExploreCard class="col" />
        <ExploreCard class="col" />
        <ExploreCard class="col" />
        <ExploreCard class="col" />
      </div>
    </q-scroll-area>
  </q-page>
</template>


<script>
import ExploreCard from "../components/ExploreCard";

export default {
  components: {
    ExploreCard,
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
