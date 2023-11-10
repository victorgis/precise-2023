<template>
  <div class="parent">
    <Header />
    <div class="main">
      <h1>Our Past Projects</h1>
      <div class="past-projects-card">
        <router-link
          to="/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria"
        >
          <div class="projects">HOTOSM 2020</div></router-link
        >
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { RouterLink } from "vue-router";

export default {
  name: "PrecisegisPastProjects",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Header, Footer, RouterLink },
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
a {
    color: #1b4965;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .main {
    padding: 0 10px;
  }
  .main h1 {
    font-size: 25px;
  }
  .projects {
    padding: 10px;
  }
}
</style>