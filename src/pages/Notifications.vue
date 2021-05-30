<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-pa-md q-gutter-md">
        <q-list class="rounded-borders">
          <div
            v-if="notifications.length === 0"
            class="text-weight-bold text-h5 text-center"
          >
            No Notifications
          </div>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut slow"
          >
            <NotificationCard
              v-for="notification in notifications"
              :key="notification.id"
              :notification="notification"
              class="notifCard"
              :deleteNotification="deleteNotification"
            />
          </transition-group>
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
  data() {
    return {
      notifications: this.$store.state.notification.notifications,
    };
  },
  mounted() {
    if (this.notifications.length == 0) {
      this.getNotifications();
    }
  },
  methods: {
    deleteNotification(notification) {
      this.$store.dispatch("notification/deleteNotification", notification);
    },
  },
};
</script>

<style lang="sass" scoped>
.notifCard:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
