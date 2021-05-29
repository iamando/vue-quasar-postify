import { db } from "src/boot/firebase";
import Vue from "vue";

export function getNotifications(state) {
  db.collection("notifications")
    .orderBy("date")
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let notificationChange = change.doc.data();
        notificationChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New notification: ", notificationChange);
          state.notifications.unshift(notificationChange);
        }
        if (change.type === "removed") {
          console.log("Removed notification: ", notificationChange);
          let index = state.notifications.findIndex(
            notification => notification.id === notificationChange.id
          );
          state.notifications.splice(index, 1);
        }
      });
    });
}

export function addNotification(state, payload) {
  let newNotif = {
    title: payload.title,
    content: payload.content,
    date: Date.now()
  };

  db.collection("notifications")
    .add(newNotif)
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export function deleteNotification(state, payload) {
  db.collection("notifications")
    .doc(payload.id)
    .delete()
    .then(() => {
      console.log("Document deleted");
      Vue.notify({
        type: "success",
        title: "Notification",
        text: "Notification deleted successfuly"
      });
    })
    .catch(error => {
      console.error("Error deleting document: ", error);
    });
}
