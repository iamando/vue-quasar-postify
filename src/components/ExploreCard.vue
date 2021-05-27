<template>
  <div>
    <q-card class="my-card q-my-md" flat bordered>
      <q-img src="https://dummyimage.com/400x400" />

      <q-card-section>
        <div class="text-orange-9 text-weight-bold text-subtitle1">
          #hashtag
        </div>
        <div class="q-mt-sm q-mb-xs text-subtitle1">
          <q-item-label>
            <strong>John Doe</strong>
            <span class="text-grey-7 q-ml-sm">
              @johndoe <br class="lt-md" />
              &bull; one minutes ago
            </span>
          </q-item-label>
        </div>
        <div class="text-subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions align="left">
        <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
        <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
        <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ExploreCard",
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
