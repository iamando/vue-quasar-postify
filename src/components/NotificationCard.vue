<template>
  <q-item class="q-my-md">
    <q-item-section avatar top>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://dummyimage.com/150x150" />
        </q-avatar>
      </q-item-section>
    </q-item-section>

    <q-item-section top>
      <q-item-label>
        <span class="text-weight-bold"
          >{{ notification.title }}
          <span class="text-grey-7 q-ml-sm">
            <br class="lt-md" />
            &bull; {{ notification.date | relativeDate }}
          </span></span
        >
      </q-item-label>
      <q-item-label class="text-subtitle1">
        {{ notification.content }}
      </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          @click="deleteNotification(notification)"
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="delete"
        />
        <q-btn size="12px" flat dense round icon="more_vert" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  props: ["notification", "deleteNotification"],
  name: "NotificationCard",
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
};
</script>
