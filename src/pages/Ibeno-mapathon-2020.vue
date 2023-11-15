<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="report">
        <h1>HOTOSM Mapathon 2021</h1>
        <img class="img1" src="./img/pub-2.jpg" alt="" />

        <div class="report-details">
          <h2>
            Precise GIS Mappers in collaboration with Geohazards Risk Mapping
            Initiative (GRMI) , co-hosted a humanitarian mapping exercise
            (Mapathon) on 5th June, 2021 for the improvement of HIV/AIDS &
            Gender-Based Violence (GBV) in Ibeno, Akwa Ibom, Nigeria.
          </h2>
          <img src="./img/pub-1.jpg" alt="" />
          <p>
            The project was completed with a total of 4,395 buildings and 4.72
            sqkm landuse which was mapped by online volunteers around the world.
          </p>
          <p>
            Simultaneously, a group of experienced mappers were on standby to
            validate the edits made by the volunteers to ensure the mapped
            information are accurate before it gets added to the OpenStreetMap
            imagery platform.
          </p>
          <div class="map-grid-container">
            <div class="pub-5"><img src="./img/pub-3.jpg" alt="" /></div>
            <div class="pub-6"><img src="./img/pub-4.jpg" alt="" /></div>
          </div>
          <div class="map-grid-container">
            <div class="map-text5">
              <span><b>The Mapathon event on-going</b></span>
            </div>
            <div class="map-text6">
              <span><b>The Mapathon project completed</b></span>
            </div>
          </div>
          <p>
            Through the help of volunteers, we’ve been able to provide support
            to public health projects in the region reaching even to the very
            creeks and hard-to-reach areas of Ibeno LGA. This was achieved by
            providing spatial information in the form of buildings footprint
            that were mapped during the Mapathon which are now visible on the
            OpenStreetMap.
          </p>
          <div class="plain-content">
            <img src="./img/pub-5.jpg" alt="" />
            <p><b>Ibeno LGA's creek communities on Google Map satellite</b></p>
          </div>
          <p style="text-align: center">
            The image below shows the building footprint mapped by volunteers on
            OpenStreetMap.
          </p>
          <div class="plain-content2">
            <img src="./img/pub-6.jpg" alt="" />
            <p><b>Ibeno LGA's creek communities on OpenStreetMap</b></p>
          </div>
          <p>
            The availability of these Geographic Information System (GIS)
            datasets will enhance case-finding efforts for HIV/AIDS &
            Gender-Based Violence (GBV) cases in the region. Also, it will bring
            about a more effective geo-centric drug dispensing and patient
            management for clients in this region by their managers. The GIS
            datasets will also be used to bring about an improvement in the
            route communication network for medical supplies, through network
            analysis by the use of shortest or fastest routes thereby giving a
            faster service delivery.
          </p>
          <p>
            Demographic information is not left out as it is an important
            element for planning and decision making processes in public health
            projects. With the use of the GIS datasets, aid organizations will
            be able to have a precise number of households to target, thereby
            helping in estimating the population and population density of the
            location. Overlaying casefinding hotspots will help show where to
            target for more improved case finding effort for the project.
          </p>
          <p>
            Mr. Victor Essang, the team lead of Precise GIS mappers says, the
            provided GIS data is a great achievement, as this will not only
            improve public health concerns in the region but also will bring
            about more visibility, infrastructural development and a more
            intentional approach to environmental protection & risk management,
            being a coastal and an oil producing region of the state. In
            addition, Mr. Taiwo S. Ogunwumi, (President of GRMI) explained that
            for effective implementation of humanitarian projects, accurate
            information on buildings, road networks to access vulnerable
            households are very essential, most especially during health-related
            projects that can save the life of the victims. He further explained
            that it was based on this backdrop that the two initiatives
            collaborated to digitally map those hard-to-reach locations.
          </p>
          <img class="img1" src="./img/pub-7.png" alt="" />
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
  name: "PrecisegisIbenoMapathon2020",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Footer, Header },
};
</script>

<style scoped>
.report h1 {
  font-size: 35px;
  font-weight: 900;
}
.report .img1 {
  width: 500px;
}
.report-details {
  margin: 50px 0;
}
.report-details img {
  width: 60%;
  margin: 60px 0;
}
.report-details h2,
.report-details p {
  text-align: justify;
  padding: 0 200px;
}
.map-grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.map-grid-container img {
  width: 70%;
}
.pub-5 {
  text-align: right;
}
.pub-6 {
  text-align: left;
}
.pub-5 img,
.pub-6 img {
  margin-bottom: 0px;
}
.map-text5 {
  text-align: right;
}
.map-text6 {
  text-align: left;
}
.plain-content {
  display: block;
  text-align: center;
}
.plain-content img {
  margin-bottom: 0px;
}
.plain-content2 img {
  margin: 0px;
}
.plain-content p,
.plain-content2 p {
  display: block;
  text-align: center;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .report h1 {
    font-size: 25px;
  }
  .report .img1 {
    width: 90%;
  }
  .report-details h2,
  .report-details p {
    text-align: justify;
    padding: 0 10px;
  }
  .report-details img {
    width: 90%;
    margin: 20px 0;
  }
}
</style>