<template>
  <q-card class="story-card q-my-md" flat bordered>
    <q-img :src="explore.imageUrl" class="story-img" />

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
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "StoryCard",
  props: ["explore"],
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>

<style lang='sass' scoped>
.story-card
  width: 400px !important
.story-img
  width: 100%
  height: 500px
</style>
