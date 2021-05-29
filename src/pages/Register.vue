<template>
  <div class="registerContainer">
    <div class="q-pa-md q-mt-xl registerForm">
      <span
        class="text-weight-bold flex justify-center items-center q-pa-lg text-h4"
        >Register</span
      >
      <q-form class="q-gutter-md" @submit.prevent="onSubmit" autocomplete="off">
        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="email"
              placeholder="Email"
              autocomplete="new-email"
              v-model="email"
            />
          </div>
        </div>

        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="password"
              placeholder="Password"
              autocomplete="new-password"
              v-model="password"
            />
          </div>
        </div>

        <div class="row">
          <div class="col q-mx-md">
            <q-btn
              label="Register"
              type="submit"
              color="primary full-width q-py-sm"
              :disable="!email || !password"
            />
          </div>
        </div>
      </q-form>
      <span class="flex justify-center items-center q-py-md"
        >Already have an account?
        <router-link to="/login" class="q-ml-sm text-primary"
          >here</router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("user/register", {
        email: this.email,
        password: this.password,
      });

      this.$notify({
        type: "success",
        title: "Registration",
        text: "Successfully registered! Please login.",
      });
    },
  },
};
</script>

<style lang='sass' scoped>
.registerContainer
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
.registerForm
  width: 500px
  height: auto
  padding-top: 25px
</style>
