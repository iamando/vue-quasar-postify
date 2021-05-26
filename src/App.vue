<template>
  <div id="q-app">
    <notifications class="q-mt-md text-h6" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
