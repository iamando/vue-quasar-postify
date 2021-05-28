export function getPostifies(state) {
  return state.postifies;
}

export function postPostify(state, payload) {
  let newPostify = {
    content: payload.content,
    imageUrl: payload.imageUrl,
    date: Date.now()
  };
  state.postifies.unshift(newPostify);
}

export function deletePostify(state, payload) {
  let dataToDelete = payload.date;
  let index = state.postifies.findIndex(
    payload => payload.date === dataToDelete
  );

  state.postifies.splice(index, 1);
}
