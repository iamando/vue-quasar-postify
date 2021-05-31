export function getUser(context) {
  context.commit("getUser");
}

export function login(context, payload) {
  context.commit("login", payload);
}

export function register(context, payload) {
  context.commit("register", payload);
}

export function logout(context) {
  context.commit("logout");
}

export function getUserProfile(context) {
  context.commit("getUserProfile");
}

export function saveUserProfile(context, payload) {
  context.commit("saveUserProfile", payload);
}
