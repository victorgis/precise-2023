<template>
  <div class="courses">
    <h1>GIS Certification Course : Geographic Information Systems (QGIS)</h1>
    <p>
      Explore the world of Geographic Information Systems with our GIS
      Certification Course designed for beginners. Whether you're entirely new
      to GIS or have minimal experience, this course provides foundational
      knowledge and skills in utilizing spatial data.
    </p>
    <h2 class="wyl">What you will learn:</h2>

    <div class="what-you-learn">
      <div class="what-left">
        <ul>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Using QGIS 3
            software from scratch
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Digitalization
            and map visualization
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Graphic files
            calibration
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Geoprocessing
            of vector and raster data
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
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Working with
            MS Excel & CSV files
          </li>
        </ul>
      </div>
      <div class="what-right">
        <ul>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Working with
            spatial data
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Finding and
            loading data (local and online)
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Data
            visualization styles
          </li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Importing GPS
            coordinates
          </li>
          <li><i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Kriging</li>
          <li>
            <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;Creating maps
          </li>
        </ul>
      </div>
    </div>

    <h2 class="wyl">Requirements:</h2>
    <p>
      Computer using basics (if You know where is right mouse button You’re good
      to go)
    </p>
    <h2 class="wyl">Description:</h2>
    <p>
      In this course you will learn everything you need to know to start your
      journey with GIS software by solving a real-life scenario. We will start
      by preparing our project and all data we might need, planning our work and
      managing task progress. I will show you all the most important tools, you
      will learn how to import and export spatial data, modify it, calculate
      parameters, search for cases, visualize data, create maps and much more.
    </p>

    <p>
      This course is valued at ₦30,000. For international students it is valued
      at $25 | €25 | £25, respectively.
    </p>
    <p>To proceed, kindly hit the register button.</p>

    <div class="btn">
      <a
        href="https://paystack.com/pay/gis-training"
        target="_blank"
        ><div class="button">Register here!</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PrecisegisQgisTraining",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
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
.what-you-learn li {
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
  display: grid;
  grid-template-columns: 10px;
}
.button {
  background: #1b4965;
  margin: 20px 0;
  padding: 10px 20px;
  border: #1b4965 1px solid;
  color: #fff;
  width: 100px;
}
i {
  color: #62b6cb;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .courses p {
    text-align: justify;
  }
  .what-you-learn {
    display: block;
  }
  .what-right {
    margin-left: 20px;
  }
}
</style>