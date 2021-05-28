<template>
  <q-card class="exploreStoriesCardInput">
    <q-form class="full-width" @submit="shareExplore">
      <div class="text-weight-bold text-h5">Share Explore</div>
      <div class="row justify-between q-mt-md">
        <div class="col">
          <q-input
            outlined
            type="text"
            placeholder="#Sport, #Education, ..."
            v-model="newExploreTag"
          />
        </div>
      </div>

      <div class="row justify-between q-mt-md">
        <div class="col">
          <q-input
            maxlength="280"
            outlined
            type="textarea"
            placeholder="What's happened?"
            v-model="newExploreContent"
          />
        </div>
      </div>

      <div class="row justify-between q-mt-md">
        <div class="col">
          <div v-if="!imageExploreUploadedUrl">
            <input
              ref="file"
              type="file"
              name="file"
              id="file"
              hidden
              @change="onFileChange"
              accept="image/*"
            />
            <div class="flex items-center">
              <q-btn
                flat
                round
                color="grey"
                icon="image"
                @click="chooseFiles"
              />
              <span>Add Picture</span>
            </div>
          </div>
          <div class="q-mx-xl" v-if="imageExploreUploadedUrl">
            <div>
              <q-img
                :src="imageExploreUploadedUrl"
                class="postifyImagePreview"
              />
            </div>
            <span class="text-grey-9">{{ imageExploreUploadedName }}</span>
          </div>
        </div>
      </div>

      <div class="row q-mt-md">
        <div class="col">
          <q-btn
            label="Share"
            type="submit"
            color="primary full-width q-py-sm"
            :disable="!newExploreContent || !newExploreTag"
          />
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script>
export default {
  name: "ExploreStoriesCardInput",
  data() {
    return {
      newExploreTag: null,
      newExploreContent: null,
      imageExploreUploadedUrl: null,
      imageExploreUploadedName: null,
    };
  },
  methods: {
    shareExplore() {
      // Share explore
      this.$store.dispatch("explore/shareExplore", {
        tag: this.newExploreTag,
        content: this.newExploreContent,
        imageUrl: this.imageExploreUploadedUrl,
      });

      // Create notification
      this.$store.dispatch("notification/addNotification", {
        title: "Explore",
        content: "Explore shared successfuly",
      });

      this.$notify({
        type: "success",
        title: "Explore",
        text: "Explore shared successfuly",
      });

      this.newExploreTag = null;
      this.newExploreContent = null;
      this.imageExploreUploadedUrl = null;
      this.imageExploreUploadedName = null;
    },
    chooseFiles() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageExploreUploadedName = file.name;
      this.imageExploreUploadedUrl = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang='sass' scoped>
.exploreStoriesCardInput
  height: auto
  width: 450px
  display: flex
  justify-content: center
  align-items: center
  padding: 40px
</style>
