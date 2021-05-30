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
              required
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
import { db, storage } from "src/boot/firebase";

export default {
  name: "ExploreStoriesCardInput",
  data() {
    return {
      newExploreTag: null,
      newExploreContent: null,
      imageExploreUploadedUrl: null,
      imageExploreUploadedName: null,
      imageExploreUploadedData: null,
    };
  },
  methods: {
    shareExplore() {
      // Add to storage
      if (this.imageExploreUploadedData) {
        const storageRef = storage
          .ref(`explores/${this.imageExploreUploadedName}`)
          .put(this.imageExploreUploadedData)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              console.log("Uploaded a blob or file!", url);

              // Get image URL from Firebase Storage
              this.$store.dispatch("explore/shareExplore", {
                imageUrl: url,
                tag: this.newExploreTag,
                content: this.newExploreContent,
              });

              this.resetAll();
            });
          });
        return;
      }

      // Create notification
      this.$store.dispatch("notification/addNotification", {
        title: "Explore",
        content: "Explore shared successfuly",
      });

      this.resetAll();
    },
    chooseFiles() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageExploreUploadedData = file;
      this.imageExploreUploadedName = file.name;
      this.imageExploreUploadedUrl = URL.createObjectURL(file);
    },
    resetAll() {
      this.newExploreTag = null;
      this.newExploreContent = null;
      this.imageExploreUploadedUrl = null;
      this.imageExploreUploadedName = null;
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
