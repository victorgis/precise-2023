<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="contact-us">
        <h1>Contact Us</h1>
        <p>
          At Precise GIS, we're committed to providing innovative software
          development and GIS solutions tailored to your unique needs. Our team
          of experts is here to assist you in harnessing the power of technology
          for your projects. Whether you have questions, require a custom
          software solution, or need assistance with geographic information
          systems, we're just a message or a phone call away. Don't hesitate to
          reach out to us.
        </p>
      </div>
      <div class="contact-elements">
        <div class="address-element bar-right">
          <img src="./img/geospatial.svg" alt="" />
          <h2>Address</h2>
          <p>3 Green Springs Estate Rd, Uyo 520102, NG</p>
        </div>
        <div class="address-element bar-right">
          <img src="./img/location.svg" alt="" />
          <h2>Phone Number</h2>
          <p><a href="tel:+2349077421323">+234 907 742 1323</a></p>
        </div>
        <div class="address-element bar">
          <img src="./img/mail.svg" alt="" />
          <h2>Email</h2>
          <p><a href="mailto:precisegis@gmail.com">precisegis@gmail.com</a></p>
        </div>
      </div>
      <div class="contact-form">
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "PrecisegisContactView",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Contact, Header, Footer },
};
</script>

<style scoped>
.contact-us h1 {
  font-size: 35px;
  font-weight: 900;
}
.contact-us p {
  padding: 0 100px;
}
.contact-elements {
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.address-element {
  padding: 0 25px;
}
.address-element img {
  width: 20%;
}
.bar-right {
  border-right: #ccc 1px solid;
}
a {
  color: #1b4965;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .contact-us p {
    padding: 0 10px;
    text-align: justify;
  }
  .contact-elements {
    padding: 10px;
    display: block;
  }
  .bar-right {
    border-right: #ccc 1px none;
    padding: 10px 0;
  }
  .address-element {
  padding: 25px;
  margin: 15px 0;
  background: #bee9e8;
  border-radius: 10px;

}
}
</style>