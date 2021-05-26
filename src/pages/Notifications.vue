<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-pa-md q-gutter-md">
        <q-list class="rounded-borders">
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
          <NotificationCard class="notifCard" />
        </q-list>
      </div>
    </q-scroll-area>
  </q-page>
</template>


<script>
import NotificationCard from "../components/NotificationCard";

export default {
  name: "Notifications",
  components: {
    NotificationCard,
  },
};
</script>

<style lang="sass" scoped>
.notifCard:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
