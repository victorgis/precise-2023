<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="main-details">
        <!-- <h1>Google Maps Business Listing</h1> -->
        <h1>Your Business Deserves a Stunning Landing Page</h1>
        <p>
          Unlock the potential of your brand with a captivating business landing
          page. Attract customers, showcase your products or services, and leave
          a lasting impression.
        </p>
        <div class="main-details-img">
          <img src="./img/landing-page.jpeg" alt="" />
        </div>
      </div>
      <div class="content">
        <p>
          We create unique and visually appealing landing pages tailored to your
          brand identity, ensuring a strong online presence.
        </p>

        <p>
          Your landing page will look stunning on any device, providing a
          seamless user experience for your visitors.
        </p>
        <p>
          Improve your visibility on search engines with our SEO-friendly
          landing pages, driving more traffic to your business.
        </p>

        <p>
          Let's create a powerful online presence for your business. Contact us
          today and take the first step towards success.
        </p>

        <p>
          Reach out to us via any of our social media handles below or via our
          <span class="tt"><a href="/contact">contact form.</a></span>
        </p>

        <p>To send us a direct message on WhatsApp</p>
        <div class="">
          <a
            href="https://wa.me/p/7602661673082369/2349077421323"
            target="_blank"
            ><button class="whatsapp-btn">
              Click here!&nbsp;&nbsp;<i
                class="fa-brands fa-whatsapp"
              ></i></button
          ></a>
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
  name: "PrecisegisLandingPageWebsite",
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
  padding: 0 300px;
  margin-bottom: 100px;
}
.main-details h1 {
  font-size: 35px;
}
.main-details img {
  width: 500px;
}
.content {
  text-align: justify;
}
.main-details-img {
  margin: 40px 0;
}
button {
  border: none;
}
.whatsapp-btn {
  background: #1b4965;
  color: #fff;
  padding: 10px 20px;
}
.whatsapp-btn:hover {
  /* text-decoration: underline; */
  color: #bee9e8;
  cursor: pointer;
}
.tt {
  text-decoration: underline;
}
a {
  color: #1b4965;
  cursor: pointer;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .main {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  .main-details h1 {
    font-size: 25px;
  }
  .main-details img {
    width: 100%;
  }
}
</style>