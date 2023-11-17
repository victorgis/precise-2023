<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="headings-section">
        <h1>Our Mapathons</h1>
      </div>
      <div class="mapathons-container">
        <div class="mapathon">
          <img src="./img/mapathon-for-malaria.jpeg" alt="" />
          <p><b>Health Mapathon for Malaria</b></p>
        </div>
        <div class="mapathon">
          <img src="./img/pub-2.jpg" alt="" />
          <p>
            <b
              >Humanitarian Mapping to Inmprove HIV/AIDS & GBV Projects in
              Ibeno, Akwa Ibom State. Nigeria</b
            >
          </p>
        </div>
        <div class="mapathon">
          <img src="./img/mapathon2020.jpg" alt="" />
          <p><b>Humanitarian Mapping Exercise For COVID-19</b></p>
        </div>
        <div class="mapathon">
          <img src="./img/mapathon2019.jpg" alt="" />
          <p>
            Humanitarian Mapping Exercise in Collaboration with Missing Maps
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "PrecisegisMapathon",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Header, Footer },
};
</script>

<style scoped>
.main h1 {
  font-size: 35px;
  font-weight: 900;
}
.mapathons-container {
  margin: 60px;
  display: inline-flex;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
}
.mapathon {
  padding: 20px;
  background: #bee9e8;
  color: #1b4965;
  margin: 20px;
  width: 200px;
}
.mapathon img {
  width: 200px;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .mapathons-container {
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>