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

      <!-- Services  -->
      <div class="services-section">
        <h1>Services</h1>
        <p class="service-desc">
          Welcome to Precise GIS, your trusted partner in the world of
          Information Technology and Geospatial Solutions. Our comprehensive
          range of services is designed to empower businesses and organizations
          with cutting-edge technology and spatial intelligence.
        </p>
        <div class="services-card">
          <div class="services">
            <div class="services-img">
              <img src="./img/software.svg" alt="" />
            </div>
            <div class="service-details">
              <h1>Software Engineering</h1>
              <p>
                Without a website or an app, people may question your legitimacy
                as a business. Having a website is an opportunity to make a
                great first impression and give people comfort that you’re a
                real business.
              </p>
            </div>
          </div>
          <div class="services">
            <div class="services-img">
              <img src="./img/geospatial.svg" alt="" />
            </div>
            <div class="service-details">
              <h1>Geo-spatial analysis & Remote Sensing</h1>
              <p>
                Unleash the power of location-based insights with our Geospatial
                Solutions. We specialize in harnessing the potential of
                geographic data to drive informed decision-making.
              </p>
            </div>
          </div>
          <div class="services">
            <div class="services-img">
              <img src="./img/business.svg" alt="" />
            </div>
            <div class="service-details">
              <h1>Google Map Business</h1>
              <p>
                Get your business listed on Google Map and you’re 70% more likely to
                attract potential customers for on-site location visits. Also,
                your Google Map listing can pull in up to 35% clicks to your
                website.
              </p>
            </div>
          </div>
          <div class="services">
            <div class="services-img">
              <img src="./img/data.svg" alt="" />
            </div>
            <div class="service-details">
              <h1>Data collection Solutions & Analytics</h1>
              <p>
                Transform raw data into actionable insights with our Data
                Analytics services. We're dedicated to helping you extract value
                from your data resources, offering advanced analytics, data
                visualization, and predictive modeling to empower data-driven
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- contact form component  -->
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
import Contact from "@/components/Contact.vue";

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
.services-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 60px;
  padding-top: 0px;
}
.services {
  /* height: 300px; */
  background: #bee9e8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  padding-bottom: 35px;
  padding-top: 35px;
}
.service-desc {
  padding: 0 200px;
}
.services-section h1 {
  font-size: 35px;
  font-weight: 900;
}
.services-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.services-img img {
  max-width: 80%;
}
.service-details {
  padding: 0 20px;
  text-align: left;
}
.service-details h1 {
  margin-bottom: 0px;
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
    margin: 40px 0;
    display: block;
    padding: 10px;
  }
  .contact-form-container {
    padding: 10px;
  }
  .who-we-are-img img {
    max-width: 200px;
  }
}
</style>