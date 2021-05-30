<template>
  <div class="q-pa-md event-card">
    <div class="q-gutter-sm">
      <q-badge color="teal"> Model: {{ model }} </q-badge>
      <q-badge color="primary" text-color="white" class="q-ma-md">
        Mask: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="primary" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="primary" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EventInput",
  data() {
    return {
      model: "2019-02-22 21:02",
    };
  },
};
</script>

<style lang='sass' scoped>
.event-card
  width: 650px
  max-width: 650px
  background: #fff
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>
