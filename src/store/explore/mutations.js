import { db } from "src/boot/firebase";
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
    tag: payload.tag,
    content: payload.content,
    imageUrl: payload.imageUrl,
    date: Date.now()
  };

  db.collection("explores")
    .add(newExplore)
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      Vue.notify({
        type: "success",
        title: "Explore",
        text: "Explore posted successfuly"
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
