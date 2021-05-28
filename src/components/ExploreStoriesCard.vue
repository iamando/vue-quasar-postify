<template>
  <router-link to="/" class="exploreCard">
    <div class="flex column justify-center items-center">
      <div>
        <img class="q-ma-sm exploreStoriesImage" :src="explore.imageUrl" />
      </div>
      <div class="text-grey-10">by @johndoe</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ExploreStoriesCard",
  props: ["explore"],
};
</script>

<style lang='sass' scoped>
.exploreCard
  text-decoration: none
  outline: none
.exploreStoriesImage
  width: 150px
  height: 150px
</style>
