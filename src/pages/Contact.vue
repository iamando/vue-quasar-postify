<template>
  <q-page>
    <div class="q-pa-md q-mt-xl">
      <q-form class="q-gutter-md" @submit="onSubmit">
        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              placeholder="Firstname"
              v-model="informationContact.firstName"
            />
          </div>
          <div class="col q-mx-md">
            <q-input
              outlined
              placeholder="Lastname"
              v-model="informationContact.lastName"
            />
          </div>
        </div>

        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="email"
              placeholder="Email"
              v-model="informationContact.email"
            />
          </div>
        </div>

        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="textarea"
              placeholder="Message"
              v-model="informationContact.message"
            />
          </div>
        </div>

        <div class="row">
          <div class="col q-mx-md">
            <q-btn
              label="Send Us"
              type="submit"
              color="primary full-width q-py-sm"
              :disable="
                !informationContact.message ||
                !informationContact.email ||
                !informationContact.firstName ||
                !informationContact.lastName
              "
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { db } from "src/boot/firebase";

export default {
  name: "Contact",
  data() {
    return {
      informationContact: {
        firstName: null,
        lastName: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    onSubmit() {
      let newContact = {
        firstName: this.informationContact.firstName,
        lastName: this.informationContact.lastName,
        email: this.informationContact.email,
        message: this.informationContact.message,
        date: new Date().toUTCString(),
      };

      db.collection("contacts")
        .add(newContact)
        .then((docRef) => {
          console.log("Contact written with ID: ", docRef.id);
          this.$notify({
            type: "success",
            title: "Successfull",
            text: "Your message will be received immediatly",
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      this.onReset();
    },

    onReset() {
      this.informationContact.firstName = null;
      this.informationContact.lastName = null;
      this.informationContact.email = null;
      this.informationContact.message = null;
    },
  },
};
</script>
