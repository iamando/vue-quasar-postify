export function getNotifications(state) {
  return state.notifications;
}

export function addNotification(state, payload) {
  let newNotif = {
    title: payload.title,
    content: payload.content,
    date: Date.now()
  };

  state.notifications.unshift(newNotif);
}

export function deleteNotification(state, payload) {
  let notifToDelete = payload.date;
  let index = state.notifications.findIndex(
    payload => payload.date === notifToDelete
  );

  state.notifications.splice(index, 1);
}
