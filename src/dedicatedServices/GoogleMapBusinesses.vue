<template>
  <div class="parent">
    <Header />
    <div class="main">
      <h1>Add Your Business to Google Map</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "PrecisegisGoogleMapBusinesses",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Header, Footer },
};
</script>

<style scoped>
</style>