export function getExplores(state) {
  return state.explores;
}

export function shareExplore(state, payload) {
  let newExplore = {
    tag: payload.tag,
    content: payload.content,
    imageUrl: payload.imageUrl,
    date: Date.now()
  };
  state.explores.unshift(newExplore);
}

export function deleteExplore(state, payload) {
  let exploreToDelete = payload.date;
  let index = state.explores.findIndex(
    payload => payload.date === exploreToDelete
  );

  state.explores.splice(index, 1);
}
