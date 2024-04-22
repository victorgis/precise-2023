<template>
  <div class="parent">
    <Header />
    <div class="main" style="position: relative">
      <!-- <div class="headings-section">
        <h1>Our Products</h1>
      </div> -->
      <div v-if="showPopup" class="download-here">
        <div class="downup">
          <a href="/products" class="close-btn"
            ><i class="fa-solid fa-square-xmark"></i
          ></a>
          <p>Click here to download</p>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/precisegisstorage.appspot.com/o/AKWA%20IBOM%20AMENDED%20ADMINISTRATIVE%2031.jpg.zip?alt=media&token=ca4b0de1-9371-4e92-b597-af2dcebe484e"
            ><div class="download-btn">
              Download file <i class="fa-solid fa-file-arrow-down"></i></div
          ></a>
        </div>
      </div>
      <div>
        <img src="./assets/declined-1.gif" alt="">
        <img src="./assets/failed.gif" alt="">
        <img src="./assets/Mobile-Payment.gif" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "PrecisegisDownload",
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {},
  methods: {},
  components: { Header, Footer },
};
</script>

<style scoped>
.download-here {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.downup {
  color: #fff;
  color: #1b4965;
  background: #bee9e8;
  width: 400px;
  padding: 10px 20px;
}
.download-btn {
  background: #1b4965;
  padding: 5px 20px;
  margin: 20px 20%;
}
.close-btn {
  padding: 0 40px;
  text-align: right;
  color: rgb(144, 7, 7);
  font-size: 25px;
}

.main h1 {
  font-size: 35px;
  font-weight: 900;
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