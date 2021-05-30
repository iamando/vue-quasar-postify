export function getNotifications(context) {
  context.commit("getNotifications");
}

export function addNotification(context, payload) {
  context.commit("addNotification", payload);
}

export function deleteNotification(context, payload) {
  context.commit("deleteNotification", payload);
}

export function clearNotifications(context) {
  context.commit("clearNotifications");
}
