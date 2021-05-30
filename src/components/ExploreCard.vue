<template>
  <div>
    <q-card class="explore-card q-my-md" flat bordered>
      <q-img class="explore-img" :src="explore.imageUrl" />

      <q-card-section>
        <div class="text-orange-9 text-weight-bold text-subtitle1">
          #{{ explore.tag }}
        </div>
        <div class="q-mt-sm q-mb-xs text-subtitle1">
          <q-item-label>
            <strong>John Doe</strong>
            <span class="text-grey-7 q-ml-sm">
              @johndoe <br class="lt-md" />
              &bull; {{ explore.date | relativeDate }}
            </span>
          </q-item-label>
        </div>
        <div class="text-subtitle2">
          {{ explore.content }}
        </div>
      </q-card-section>

      <q-card-actions align="left">
        <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
        <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
        <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "ExploreCard",
  props: ["explore"],
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>

<style lang="sass" scoped>
.explore-card
  width: 325px
  max-width: 325px
.explore-img
  height: 325px
</style>
