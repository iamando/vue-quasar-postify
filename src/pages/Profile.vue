<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-pa-md q-mt-sm">
        <div class="q-pa-md text-h4 text-weight-bold text-center">
          Modify Your Profile
        </div>
        <q-form class="q-gutter-md" @submit.prevent="onSubmit">
          <div class="col column flex justify-center items-center q-py-lg">
            <div>
              <q-avatar size="200px" v-if="userProfile.userProfileUploadedUrl">
                <img :src="userProfile.userProfileUploadedUrl" />
              </q-avatar>
              <q-avatar size="200px" v-if="!userProfile.userProfileUploadedUrl">
                <img src="https://dummyimage.com/150x150" />
              </q-avatar>
            </div>
            <div class="q-py-md">
              <span class="text-grey-9">{{
                userProfile.userProfileUploadedName
              }}</span>
            </div>
          </div>
          <div class="row justify-between">
            <div class="col q-mx-md">
              <q-input
                outlined
                placeholder="Firstname"
                v-model="userProfile.userProfileFirstName"
              />
            </div>
            <div class="col q-mx-md">
              <q-input
                outlined
                placeholder="Lastname"
                v-model="userProfile.userProfileLastName"
              />
            </div>
          </div>

          <div class="row justify-between">
            <div class="col q-mx-md">
              <q-input
                outlined
                type="text"
                placeholder="Username"
                v-model="userProfile.userProfileUsername"
              />
            </div>
          </div>

          <div class="row justify-between">
            <div class="col q-mx-md">
              <q-input
                outlined
                type="email"
                placeholder="Email"
                v-model="userProfile.userProfileEmail"
                value="userInfo.email"
                disable
              />
            </div>
          </div>

          <div class="row justify-between">
            <div class="col q-mx-md">
              <div>
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="image"
                  @click="chooseFiles"
                />
                <span>Add Profile Picture</span>
              </div>
              <input
                type="file"
                ref="file"
                name="file"
                id="file"
                hidden
                @change="onFileChange"
                accept="image/*"
              />
            </div>
          </div>

          <div class="row">
            <div class="col q-mx-md">
              <q-btn
                label="Save Profile"
                type="submit"
                color="primary full-width q-py-sm"
                :disable="
                  !userProfile.userProfileFirstName ||
                  !userProfile.userProfileLastName ||
                  !userProfile.userProfileUsername
                "
              />
            </div>
          </div>
        </q-form>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "Accounts",
  data() {
    return {
      userInfo: this.$store.state.user.userInfo,
      userProfile: {
        userProfileFirstName: null,
        userProfileLastName: null,
        userProfileUsername: null,
        userProfileEmail: this.$store.state.user.userInfo.email,
        userProfileUploadedUrl: null,
        userProfileUploadedName: null,
        userProfileUploadedData: null,
      },
    };
  },
  created() {
    this.$store.dispatch("user/getUser");
    console.log(this.userInfo);
  },
  methods: {
    onSubmit() {},
    chooseFiles() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.userProfile.userProfileUploadedData = file;
      this.userProfile.userProfileUploadedName = file.name;
      this.userProfile.userProfileUploadedUrl = URL.createObjectURL(file);
    },
  },
};
</script>
