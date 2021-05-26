<template>
  <q-page>
    <div class="row q-pt-md flex wrap column q-px-lg">
      <div class="col flex justify-center items-center">
        <q-avatar size="200px">
          <img src="https://dummyimage.com/150x150" />
        </q-avatar>
      </div>
      <div class="col flex justify-center items-center text-center">
        <q-card flat class="my-card">
          <q-card-section>
            <div class="text-h6 text-weight-bold">Profile Information</div>
          </q-card-section>
          <q-card-section class="q-pt-none"> Name: John Doe </q-card-section>
          <q-card-section class="q-pt-none">
            Email: john@doe.com
          </q-card-section>

          <q-separator inset />

          <div class="q-mt-md flex justify-center q-mr-md">
            <q-btn
              outline
              rounded
              color="negative"
              label="Log Out"
              class="q-py-sm q-px-sm"
            />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Accounts",
};
</script>
