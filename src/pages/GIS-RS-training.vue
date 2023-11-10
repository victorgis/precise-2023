<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="heading-section">
        <h1>GIS & Remote Sensing Training</h1>
      </div>
      <div class="courses">
        <h1>GIS Certification Course : Geographic Information Systems (QGIS)</h1>
        <p>
          Explore the world of Geographic Information Systems with our GIS
          Certification Course designed for beginners. Whether you're entirely
          new to GIS or have minimal experience, this course provides
          foundational knowledge and skills in utilizing spatial data.
        </p>
        <h2 class="wyl">What you will learn:</h2>

        <div class="what-you-learn">
          <div class="what-left">
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Using QGIS
                3 software from scratch
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i
                >&nbsp;&nbsp;Digitalization and map visualization
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Graphic
                files calibration
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i
                >&nbsp;&nbsp;Geoprocessing of vector and raster data
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Attribute
                interpolation
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Spatial
                statistics calculations
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Working
                with MS Excel & CSV files
              </li>
            </ul>
          </div>
          <div class="what-right">
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Working
                with spatial data
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Finding
                and loading data (local and online)
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Data
                visualization styles
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Importing
                GPS coordinates
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Kriging
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Creating
                maps
              </li>
            </ul>
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlsY7XQMRDaL9TxtY2u4fD-mMZDOtNbeuodggEFFf8F-sLHQ/viewform?usp=pp_url" target="_blank"><div class="btn">Register here!</div></a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "PrecisegisGISRSTraining",
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
.heading-section h1 {
  font-size: 35px;
  font-weight: 900;
}
.courses {
  text-align: left;
}
.wyl {
  margin-top: 50px;
}
.what-you-learn {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.what-you-learn li{
  padding: 10px 0;
}
.what-left {
  margin-left: 20px;
}
.what-right {
  text-align: left;
}

ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}

.btn {
    background: #1b4965;
    margin: 20px 0;
    padding: 10px 20px;
    border: #1b4965 1px solid;
    width: 100px;
    color: #fff;
    
}
</style>