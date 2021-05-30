import Vue from "vue";
import { auth } from "src/boot/firebase";
import Cookie from "js-cookie";

export function getUser(state) {
  return state.userInfo;
}

export function login(state, payload) {
  auth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      Vue.notify({
        type: "success",
        title: "Login",
        text: "Successfully logged in."
      });
      this.$router.push("/profile");
      const user = auth.currentUser;
      Cookie.set("userInfo", JSON.stringify(user));
    })
    .catch(error => {
      console.error(error);
    });
}

export function register(state, payload) {
  auth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      Vue.notify({
        type: "success",
        title: "Registration",
        text: "Successfully registered! Please login."
      });
      this.$router.push("/login");
    })
    .catch(error => {
      console.error(error);
    });
}

export function logout(state) {
  auth
    .signOut()
    .then(() => {
      Vue.notify({
        type: "success",
        title: "Logout",
        text: "Successfully logged out"
      });
      this.$router.push("/login");
      Cookie.remove("userInfo");
    })
    .catch(error => {
      console.error(error);
      this.$router.push("/login");
    });
}

export function saveUserProfile(state, payload) {}
