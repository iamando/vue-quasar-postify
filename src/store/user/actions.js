export function login(context, payload) {
  context.commit("login", payload);
}

export function register(context, payload) {
  context.commit("register", payload);
}

export function logout(context) {
  context.commit("logout");
}
