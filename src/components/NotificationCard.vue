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
        <span class="text-weight-bold">Notifications</span>
      </q-item-label>
      <q-item-label class="text-subtitle1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat culpa
        vero at sed nemo molestiae, ipsum voluptatibus dolorum magni modi
        voluptate minus architecto rem qui mollitia! Id optio commodi officia.
      </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
        <q-btn size="12px" flat dense round icon="more_vert" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "NotificationCard",
};
</script>

<style>
</style>
