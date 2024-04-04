<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="headings-section">
        <h1>Our Products</h1>
      </div>
      <div class="mapathons-container">
        <!-- products 1  -->
        <div class="mapathon">
          <img src="./thumbnail/aks_pol.png" alt="" />
          <p><b>Akwa Ibom Comprehensive Basemap 31 LGA</b></p>
          <a href="https://paystack.com/pay/2ar4ga7kzd"><div class="buy-btn">Buy @₦10,000</div></a>
        </div>

        <!-- products 2  -->
        
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
.buy-btn {
    padding: 5px 20px;
    background: #1b4965;
    color: #fff;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .mapathons-container {
    margin: 10px;
    display: block;
  }
  .mapathon {
    padding: 0px;
    background: #bee9e8;
    color: #1b4965;
    margin: 20px 0px;
    width: 100%;
  }
  .mapathon img {
    width: 100%;
  }
  .mapathon p {
    padding-bottom: 20px;
  }
}
</style>