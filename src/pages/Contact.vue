<template>
  <q-page>
    <div class="q-pa-md">
      <q-form class="q-gutter-md" @submit="onSubmit">
        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              placeholder="Firstname"
              hint="Fistname"
              lazy-rules
              v-model="informationContact.firstName"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <div class="col q-mx-md">
            <q-input
              outlined
              placeholder="Lastname"
              hint="Lastname"
              lazy-rules
              v-model="informationContact.lastName"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
        </div>

        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              placeholder="Email"
              hint="Email"
              lazy-rules
              v-model="informationContact.email"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
        </div>

        <div class="row justify-between">
          <div class="col q-mx-md">
            <q-input
              outlined
              type="textarea"
              placeholder="Message"
              hint="Message"
              lazy-rules
              v-model="informationContact.message"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
        </div>

        <q-toggle
          class="q-mx-xl"
          v-model="informationContact.accept"
          label="I accept the license and terms"
        />

        <div class="row">
          <div class="col q-mx-md">
            <q-btn
              label="Submit"
              type="submit"
              color="primary full-width q-py-sm"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      informationContact: {
        firstName: null,
        lastName: null,
        email: null,
        message: null,
        accept: false,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.informationContact.accept !== true) {
        this.$notify({
          type: "error",
          title: "License not accepted",
          text: "You need to accept the license and terms first",
        });
      } else {
        this.$notify({
          type: "success",
          title: "Successfull",
          text: "Your message will be received immediatly",
        });
        console.log(this.informationContact);
      }
    },

    onReset() {
      this.informationContact.firstName = null;
      this.informationContact.lastName = null;
      this.informationContact.email = null;
      this.informationContact.message = null;
      this.informationContact.accept = false;
    },
  },
};
</script>
