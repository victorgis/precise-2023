<template>
  <div class="parent">
    <Header />
    <div class="main">
      <!-- Hero section  -->
      <div class="hero-section">
        <div class="hero-section-details"></div>
        <h1>Software Engineering & Geo-spatial Solutions Company</h1>
        <div class="hero-btn">
          <div class="get-started-btn">Get Started</div>
          <div class="contact-us-btn">Contact Us</div>
        </div>
      </div>

      <!-- Who we are and what we do  -->
      <div class="who-we-are">
        <div class="who-we-are-img">
          <img src="./img/what-we-do.svg" alt="" />
        </div>
        <div class="who-we-are-details">
          <h2>Who We Are. What We Do</h2>
          <p>
            Software Engineering & Geospatial Solutions Company, specializing
            creating innovative digital solutions for everyone, everywhere!
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Business
              Landing Pages Websites
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Software
              Development
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Geo-spatial
              Mapping & Analysis
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Remote
              Sensing & Image Analysis
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Data
              Collection & Management
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp; Geo-saptial
              & Remote Sensing Training
            </li>
          </ul>
        </div>
      </div>
      <div class="contact-form-container">
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "PrecisegisHomeView",
  components: { Header, Footer, Contact },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.hero-section {
  background-image: url("./img/hero-background.jpg");
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
  position: relative;
}
.hero-section h1 {
  font-size: 64px;
  font-weight: 900;
}

.hero-btn {
  position: absolute;
  bottom: 50px;
  display: flex;
}
.get-started-btn {
  background: #bee9e8;
  color: #1b4965;
  padding: 10px 20px;
  border: #bee9e8 1px solid;
  margin: 0 10px;
}
.contact-us-btn {
  background: #1b4965;
  color: #fff;
  padding: 10px 20px;
  border: #1b4965 1px solid;
  margin: 0 10px;
}
.who-we-are {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px;
}
.who-we-are-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.who-we-are-img img {
  max-width: 500px;
}
.who-we-are-details {
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
.who-we-are-details li {
  margin: 20px 0;
  font-size: 18px;
}
.who-we-are-details h2 {
  font-size: 35px;
  font-weight: 900;
}
.who-we-are-details p {
  font-style: italic;
  font-size: 18px;
}

.who-we-are-details i {
  color: #62b6cb;
}

.contact-form-container {
  padding: 60px;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .hero-section {
    padding: 0 50px;
  }
  .hero-section h1 {
    font-size: 34px;
    font-weight: 900;
  }
  .who-we-are {
    display: block;
    /* grid-template-columns: repeat(2, 1fr); */
    padding: 60px;
  }
}
</style>