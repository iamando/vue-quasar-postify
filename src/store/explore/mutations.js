import { db, auth } from "src/boot/firebase";
import Vue from "vue";

export function getExplores(state) {
  db.collection("explores")
    .orderBy("date")
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let exploreChange = change.doc.data();
        exploreChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New explore: ", exploreChange);
          state.explores.unshift(exploreChange);
        }
        if (change.type === "modified") {
          console.log("Modified explore: ", exploreChange);
          let index = state.explores.findIndex(
            explore => explore.id === exploreChange.id
          );
          Object.assign(state.explores[index], exploreChange);
        }
        if (change.type === "removed") {
          console.log("Removed explore: ", exploreChange);
          let index = state.explores.findIndex(
            explore => explore.id === exploreChange.id
          );
          state.explores.splice(index, 1);
        }
      });
    });
}

export function shareExplore(state, payload) {
  let newExplore = {
    userId: auth.currentUser.uid,
    username: payload.username,
    tag: payload.tag || null,
    content: payload.content || null,
    imageUrl: payload.imageUrl || null,
    imageName: payload.imageName || null,
    liked: false,
    date: Date.now()
  };

  db.collection("explores")
    .add(newExplore)
    .then(docRef => {
      console.log("Explore written with ID: ", docRef.id);
      Vue.notify({
        type: "success",
        title: "Explore",
        text: "Explore shared successfuly"
      });
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}

export function deleteExplore(state, payload) {
  db.collection("explores")
    .doc(payload.id)
    .delete()
    .then(() => {
      if (payload.imageUrl) {
        const storageRef = storage.ref().child(`explores/${payload.imageName}`);
        storageRef
          .delete()
          .then(() => {
            console.log("Image and Document deleted");
            Vue.notify({
              type: "success",
              title: "Explote",
              text: "Explore deleted successfuly"
            });
          })
          .catch(error => {
            console.error("Error deleting storage", error);
          });
      }

      console.log("Document deleted");
      Vue.notify({
        type: "success",
        title: "Explore",
        text: "Explore deleted successfuly"
      });
    })
    .catch(error => {
      console.error("Error deleting document: ", error);
    });
}

export function toggleLiked(state, payload) {
  db.collection("explores")
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
