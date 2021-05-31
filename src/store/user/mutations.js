import Vue from "vue";
import { auth, db, storage } from "src/boot/firebase";
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
      this.$router.push("/");
      const user = auth.currentUser;
      Cookie.set("__inf", JSON.stringify(user));
      Cookie.set("__token", JSON.stringify(user.refreshToken));
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

export function getUserProfile(state) {
  db.collection("profiles")
    .where("userId", "==", auth.currentUser.uid)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        Cookie.set("__prfl", JSON.stringify(doc.data()));
      });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    });
}

export function saveUserProfile(state, payload) {
  let userProfile = {
    userId: auth.currentUser.uid,
    email: auth.currentUser.email,
    username: payload.username,
    firstName: payload.firstName,
    lastName: payload.lastName,
    userProfileImgUrl: payload.userProfileImgUrl
  };

  db.collection("profiles")
    .add(userProfile)
    .then(docRef => {
      console.log("Profile written with ID: ", docRef.id);
      Vue.notify({
        type: "success",
        title: "Profile",
        text: "Profile saved successfuly"
      });
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}
