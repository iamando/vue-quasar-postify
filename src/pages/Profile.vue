<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="row flex wrap column">
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
                Email: john@doe.com
              </q-card-section>
            </div>

            <q-separator inset color="primary" />

            <div class="flex justify-center q-my-md">
              <q-btn
                @click="logoutUser"
                outline
                rounded
                color="negative"
                label="Log Out"
                class="q-py-sm q-px-sm"
              />
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
  methods: {
    logoutUser() {
      this.$notify({
        type: "success",
        title: "Logout",
        text: "Your account are disconnected successfully",
      });
    },
  },
};
</script>
