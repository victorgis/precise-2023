<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="main-details">
        <!-- <h1>Google Maps Business Listing</h1> -->
        <h1>Enhance Your Presence: Add Your Company to Google Maps</h1>
        <p>
          Let Customers Find You Easily with Our Expert Google Maps Listing
          Service
        </p>
        <div class="main-details-img">
          <img src="./img/google-business-img.png" alt="" />
        </div>
      </div>
      <div class="content">
        <p>
          Unlock the potential of online visibility by adding your company to
          Google Maps. Increase your business's discoverability and connect with
          local customers effortlessly.
        </p>

        <p>
          Our dedicated team of experts will guide you through the process,
          ensuring accurate and compelling information on your Google Maps
          listing. From attracting more foot traffic to boosting online
          engagement, the benefits are immense.
        </p>

        <p>Why Choose Our Google Maps Listing Service?</p>
        <ul>
          <li>
            Professional Guidance: Our experienced team will assist you at every
            step.
          </li>
          <li>
            Accurate Information: Ensure your business details are correct for
            customers searching on Google.
          </li>
          <li>
            Increased Visibility: Stand out from the competition and attract
            more customers.
          </li>
          <li>
            Local Connection: Reach customers in your community and nearby
            areas.
          </li>
        </ul>

        <p>Ready to elevate your business presence?</p>

        <p>
          Reach out to us via any of our social media handles below or via our
          <span class="tt"><a href="/contact">contact form.</a></span>
        </p>

        <p>To send us a direct message on WhatsApp</p>
        <div class="">
          <a
            href="https://wa.me/p/24444960208428547/2349077421323"
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
  name: "PrecisegisGoogleMapBusinesses",
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