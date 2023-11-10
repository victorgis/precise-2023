<template>
  <div class="parent">
    <Header />
    <div class="main">
      <h1>Our Past Projects</h1>
      <div class="past-projects-card">
        <div class="projects">HOTOSM 2020</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "PrecisegisPastProjects",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Header, Footer },
};
</script>

<style scoped>
.main {
    padding: 0 60px;
}
h1 {
  font-size: 35px;
  font-weight: 900;
}
.past-projects-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.projects {
  padding: 40px;
  background: #bee9e8;
  border-radius: 5px;
  cursor: pointer;
}
</style>