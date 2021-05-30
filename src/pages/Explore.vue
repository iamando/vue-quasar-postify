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
        <ExploreCard
          class="col"
          v-for="explore in explores"
          :key="explore.date"
          :explore="explore"
        />
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
      explores: this.$store.state.explore.explores,
    };
  },
  created() {
    if (this.explores.length == 0) {
      this.$store.dispatch("explore/getExplores");
    }
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
