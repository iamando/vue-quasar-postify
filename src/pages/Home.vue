<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            bottom-slots
            placeholder="What's happening?"
            counter
            maxlength="280"
            v-model="newPostifyContent"
            autogrow
            class="new-post"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://dummyimage.com/150x150" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewPostify"
            :disable="!newPostifyContent"
            color="primary"
            rounded
            unelevated
            label="Postify"
            no-caps
            class="q-mb-lg"
          />
        </div>
      </div>

      <div class="q-mx-xl" v-if="imageUploadedUrl">
        <div>
          <q-img :src="imageUploadedUrl" class="postifyImagePreview" />
        </div>
        <span class="text-grey-9">{{ imageUploadedName }}</span>
      </div>

      <q-card-actions align="right">
        <input
          ref="file"
          type="file"
          name="file"
          id="file"
          hidden
          @change="onFileChange"
          accept="image/*"
        />
        <q-btn flat round color="grey" icon="image" @click="chooseFiles" />
        <q-btn flat round color="grey" icon="mood" />
        <q-btn flat round color="grey" icon="event" />
      </q-card-actions>

      <q-separator size="10px" color="grey-2" class="divider" />

      <div class="q-pa-md flex column">
        <div class="flex justify-start items-center">
          <div class="text-weight-bold text-h5 q-pa-md">Explore</div>
          <div>
            <q-dialog v-model="exploreStoriesCardInput">
              <ExploreStoriesCardInput />
            </q-dialog>
            <q-btn
              @click="exploreStoriesCardInput = true"
              flat
              round
              color="grey"
              icon="add_a_photo"
            />
          </div>
        </div>

        <div class="exploreContainer" v-if="explores.length > 0">
          <ExploreStoriesCard
            v-for="explore in explores"
            :key="explore.date"
            :explore="explore"
          />
        </div>
      </div>

      <q-separator size="10px" color="grey-2" class="divider" />

      <div>
        <q-list separator>
          <div
            v-if="postifies.length === 0"
            class="text-weight-bold text-h5 text-center q-mt-lg"
          >
            No Postifies
          </div>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut slow"
          >
            <PostifyCard
              v-for="postify in postifies"
              :key="postify.id"
              :postify="postify"
              class="postify q-py-md"
              :deletePostify="deletePostify"
            />
          </transition-group>
        </q-list>
      </div>
    </q-scroll-area>
  </q-page>
</template>


<script>
import PostifyCard from "../components/PostifyCard";
import ExploreStoriesCard from "../components/ExploreStoriesCard";
import ExploreStoriesCardInput from "../components/ExploreStoriesCardInput";

export default {
  name: "Home",
  components: {
    PostifyCard,
    ExploreStoriesCard,
    ExploreStoriesCardInput,
  },
  data() {
    return {
      postifies: this.$store.state.postify.postifies,
      explores: this.$store.state.explore.explores,
      userInfo: this.$store.state.user.userInfo,
      newPostifyContent: null,
      imageUploadedUrl: null,
      imageUploadedName: null,
      exploreStoriesCardInput: false,
    };
  },
  mounted() {
    this.getPostifies();
  },
  methods: {
    getPostifies() {
      this.$store.dispatch("postify/getPostifies");
    },
    addNewPostify() {
      // Create postify
      this.$store.dispatch("postify/postPostify", {
        content: this.newPostifyContent,
        imageUrl: this.imageUploadedUrl,
      });

      // Create notification
      this.$store.dispatch("notification/addNotification", {
        title: "Postify",
        content: "Postify posted successfuly",
      });

      this.newPostifyContent = null;
      this.imageUploadedUrl = null;
      this.imageUploadedName = null;
    },
    deletePostify(postify) {
      this.$store.dispatch("postify/deletePostify", postify);
    },
    chooseFiles() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageUploadedName = file.name;
      this.imageUploadedUrl = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped lang='sass'>
.new-post
  textarea
    font-size: 16px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-3
.post-content
  white-space: pre-line
.post-icons
  margin-left: -5px
.postify:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.postifyImagePreview
  max-width: 100px
  max-height: 100px
.exploreContainer
  width: 100%
  height: 200px
  overflow: auto
  white-space: nowrap
.exploreContainer span
  display: inline-block
</style>
