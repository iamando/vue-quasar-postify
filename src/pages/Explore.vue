<template>
  <q-page class="relative-position">
    <div class="q-pa-md flex justify-center">
      <q-chip outline color="primary" text-color="white" icon="fiber_new">
        Newest
      </q-chip>
      <q-chip outline color="teal" text-color="white" icon="favorite">
        Popular
      </q-chip>
      <q-chip outline color="orange" text-color="white" icon-right="star">
        Star
      </q-chip>
      <q-chip
        outline
        square
        color="deep-orange"
        text-color="white"
        icon="directions"
      >
        Get directions
      </q-chip>
    </div>
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
