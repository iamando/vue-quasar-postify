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
      <q-card-actions align="right">
        <input
          ref="files"
          type="file"
          name="files"
          id="files"
          hidden
          @change="previewFiles"
          multiple
        />
        <q-btn flat round color="grey" icon="image" @click="chooseFiles" />
        <q-btn flat round color="grey" icon="mood" />
        <q-btn flat round color="grey" icon="event" />
      </q-card-actions>

      <q-separator size="10px" color="grey-2" class="divider" />

      <div>
        <q-list separator>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut slow"
          >
            <PostifyCard
              v-for="postify in postifies"
              :key="postify.date"
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

export default {
  name: "Home",
  components: {
    PostifyCard,
  },
  data() {
    return {
      newPostifyContent: null,
      filesUpload: [],
      postifies: [
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur ipsum aut, soluta sed beatae quidem? Enim, excepturiveniam architecto delectus magnam et maiores vitae explicabo repellat quia impedit. Enim, eos.",
          date: 1622021212359,
        },
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur ipsum aut, soluta sed beatae quidem? Enim, excepturiveniam architecto delectus magnam et maiores vitae explicabo repellat quia impedit. Enim, eos.",
          date: 1622021329961,
        },
      ],
    };
  },
  methods: {
    addNewPostify() {
      let newPostify = {
        content: this.newPostifyContent,
        images: this.filesUpload,
        date: Date.now(),
      };

      this.postifies.unshift(newPostify);
      this.newPostifyContent = null;
    },
    deletePostify(postify) {
      let dataToDelete = postify.date;
      let index = this.postifies.findIndex(
        (postify) => postify.date === dataToDelete
      );
      this.postifies.splice(index, 1);
    },
    chooseFiles() {
      let fileInputElement = this.$refs.files;
      fileInputElement.click();
    },
    previewFiles() {
      this.filesUpload = this.$refs.files.files;
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
</style>
