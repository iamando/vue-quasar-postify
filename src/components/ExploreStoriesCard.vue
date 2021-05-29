<template>
  <span>
    <q-dialog v-model="storyCard">
      <StoryCard :explore="explore" />
    </q-dialog>
    <span class="exploreCard" @click.prevent="storyCard = true">
      <div class="flex column justify-center items-center">
        <div>
          <img class="q-ma-sm exploreStoriesImage" :src="explore.imageUrl" />
        </div>
        <div class="text-grey-10">by @johndoe</div>
      </div>
    </span>
  </span>
</template>

<script>
import StoryCard from "../components/StoryCard";

export default {
  name: "ExploreStoriesCard",
  props: ["explore"],
  components: {
    StoryCard,
  },
  data() {
    return {
      storyCard: false,
    };
  },
};
</script>

<style lang='sass' scoped>
.exploreCard
  text-decoration: none
  outline: none
  cursor: pointer
.exploreStoriesImage
  width: 150px
  height: 150px
  object-fit: cover
</style>
