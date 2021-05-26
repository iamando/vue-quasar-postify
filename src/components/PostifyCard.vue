<template>
  <q-item>
    <q-item-section avatar top>
      <q-avatar>
        <img src="https://dummyimage.com/150x150" />
      </q-avatar>
    </q-item-section>

    <q-item-section class="q-px-md">
      <q-item-label>
        <strong>John Doe</strong>
        <span class="text-grey-7 q-ml-sm">
          @johndoe <br class="lt-md" />
          &bull; {{ postify.date | relativeDate }}
        </span>
      </q-item-label>
      <q-item-label class="post-content text-subtitle1">
        {{ postify.content }}
      </q-item-label>
      <div class="post-icons row justify-between q-mt-sm">
        <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
        <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
        <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
        <q-btn
          @click="deletePostify(postify)"
          color="grey"
          icon="fas fa-trash"
          size="sm"
          flat
          round
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  props: ["postify", "deletePostify"],
  name: "PostifyCard",
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>

