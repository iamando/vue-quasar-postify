import { auth } from "src/boot/firebase";

export function login(state, payload) {
  auth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      this.$router.push("/");
      state.user = auth.currentUser;
    })
    .catch(error => {
      console.error(error);
    });
}

export function register(state, payload) {
  auth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
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
      alert("Successfully logged out");
      this.$router.push("/login");
    })
    .catch(error => {
      console.error(error);
      this.$router.push("/login");
    });
}
