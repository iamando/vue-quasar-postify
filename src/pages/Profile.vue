<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="row flex wrap column q-pt-xl">
        <div class="col flex justify-center items-center">
          <q-avatar size="200px">
            <img src="https://dummyimage.com/150x150" />
          </q-avatar>
        </div>
        <div class="col flex justify-center items-center text-center">
          <q-card flat class="my-card">
            <q-card-section>
              <div class="text-h6 text-weight-bold">Profile Information</div>
            </q-card-section>

            <q-separator inset color="primary" />

            <div class="q-my-md">
              <q-card-section class="q-pt-none">
                Name: John Doe
              </q-card-section>
              <q-card-section class="q-pt-none">
                Email: {{ userInfo.email }}
              </q-card-section>
            </div>
          </q-card>
        </div>
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
    };
  },
  mounted() {
    // this.$store.dispatch("user/getUser");
    console.log(this.userInfo);
  },
};
</script>
