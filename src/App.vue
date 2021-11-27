<template>

  <div class="container mt-3">
      <Navbar />

      <div class="row mt-3">
        <div class="col-md-12">
          <router-view />
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
</style>
