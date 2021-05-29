<template>
  <div class="loginContainer">
    <div class="q-pa-md q-mt-xl loginForm">
      <span
        class="text-weight-bold flex justify-center items-center q-pa-lg text-h4"
        >Login</span
      >
      <q-form class="q-gutter-md" @submit.prevent="onSubmit">
        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="text"
              placeholder="Username"
              autocomplete="new-username"
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
              label="Login"
              type="submit"
              color="primary full-width q-py-sm"
              :disable="!email || !password"
            />
          </div>
        </div>
      </q-form>
      <span class="flex justify-center items-center q-py-md"
        >Don't have an account?
        <router-link to="/register" class="q-ml-sm text-primary"
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
      this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang='sass' scoped>
.loginContainer
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
.loginForm
  width: 500px
  height: auto
  padding-top: 25px
</style>
