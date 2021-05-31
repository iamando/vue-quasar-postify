import { db, storage, auth } from "src/boot/firebase";
import Vue from "vue";

export function getPostifies(state) {
  db.collection("postifies")
    .orderBy("date")
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let postifyChange = change.doc.data();
        postifyChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New postify: ", postifyChange);
          state.postifies.unshift(postifyChange);
        }
        if (change.type === "modified") {
          console.log("Modified postify: ", postifyChange);
          let index = state.postifies.findIndex(
            postify => postify.id === postifyChange.id
          );
          Object.assign(state.postifies[index], postifyChange);
        }
        if (change.type === "removed") {
          console.log("Removed postify: ", postifyChange);
          let index = state.postifies.findIndex(
            postify => postify.id === postifyChange.id
          );
          state.postifies.splice(index, 1);
        }
      });
    });
}

export function postPostify(state, payload) {
  let newPostify = {
    userId: auth.currentUser.uid,
    content: payload.content || null,
    imageUrl: payload.imageUrl || null,
    imageName: payload.imageName || null,
    liked: false,
    date: Date.now()
  };

  db.collection("postifies")
    .add(newPostify)
    .then(docRef => {
      console.log("Postify written with ID: ", docRef.id);
      Vue.notify({
        type: "success",
        title: "Postify",
        text: "Postify posted successfuly"
      });
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export function deletePostify(state, payload) {
  db.collection("postifies")
    .doc(payload.id)
    .delete()
    .then(() => {
      if (payload.imageUrl) {
        const storageRef = storage
          .ref()
          .child(`postifies/${payload.imageName}`);
        storageRef
          .delete()
          .then(() => {
            console.log("Image and Document deleted");
            Vue.notify({
              type: "success",
              title: "Postify",
              text: "Postify deleted successfuly"
            });
          })
          .catch(error => {
            console.error("Error deleting storage", error);
          });
      } else {
        console.log("Document deleted");
        Vue.notify({
          type: "success",
          title: "Postify",
          text: "Postify deleted successfuly"
        });
      }
    })
    .catch(error => {
      console.error("Error deleting document: ", error);
    });
}

export function toggleLiked(state, payload) {
  db.collection("postifies")
    .doc(payload.id)
    .update({
      liked: !payload.liked
    })
    .then(() => {
      console.log("Document updated");
    })
    .catch(error => {
      console.error("Error updating document", error);
    });
}
