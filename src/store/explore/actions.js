export function getExplores(context) {
  context.commit("getExplores");
}

export function shareExplore(context, payload) {
  context.commit("shareExplore", payload);
}

export function deleteExplore(context, payload) {
  context.commit("deleteExplore", payload);
}
