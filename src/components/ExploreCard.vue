<template>
  <div>
    <q-card class="my-card q-my-md" flat bordered>
      <q-img src="https://dummyimage.com/400x400" />

      <q-card-section>
        <div class="text-orange-9 text-weight-bold text-subtitle1">
          #hashtag
        </div>
        <div class="text-h6 text-weight-bold q-mt-sm q-mb-xs">John Doe</div>
        <div class="text-grey text-subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
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
