<template>
  <q-drawer show-if-above side="left" bordered :width="283">
    <q-icon
      name="fas fa-paper-plane"
      size="lg"
      color="primary"
      class="q-pa-md"
    />
    <q-list>
      <q-item to="/" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="house" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Home</q-item-section
        >
      </q-item>
      <q-item to="/explore" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="tag" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Explore</q-item-section
        >
      </q-item>
      <q-item to="/notifications" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="notifications" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Notifications</q-item-section
        >
      </q-item>
      <q-item to="/profile" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="person_outline" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Profile</q-item-section
        >
      </q-item>
      <q-item to="/about" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="help_outline" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >About</q-item-section
        >
      </q-item>
      <q-item to="/contact" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="mail_outline" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Contact</q-item-section
        >
      </q-item>

      <q-item to="/support" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="support" size="md" />
        </q-item-section>

        <q-item-section class="text-subtitle1 text-weight-bold"
          >Support</q-item-section
        >
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  props: ["left"],
  name: "LeftDrawer",
};
</script>

<style>
</style>
