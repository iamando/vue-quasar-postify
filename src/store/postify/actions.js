export function getPostifies(context) {
  context.commit("getPostifies");
}

export function postPostify(context, payload) {
  context.commit("postPostify", payload);
}

export function deletePostify(context, payload) {
  context.commit("deletePostify", payload);
}
