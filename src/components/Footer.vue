<template>
  <footer>
    <div class="footer-container">
      <!-- <div class="footer-logo">Your Footer Logo</div> -->
      <div class="footer-links">
        <ul class="ul-grid">
          <li><a href="/">Home</a></li>
          <li><a href="/#getStarted">About</a></li>
          <li><a href="/#services">Services</a></li>

          <li><a href="/past-projects">Past Projects</a></li>
          <li><a href="https://medium.com/@precisegis">Blog</a></li>
          <li><a href="/gis-rs-training">GIS & RS Training</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="social-media">
      <span class="header-icon-right"
        ><a href="https://x.com/precisegis"
          ><i class="fa-brands fa-x-twitter"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://facebook.com/precisegis"
          ><i class="fa fa-facebook" aria-hidden="true"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://wa.me/message/6RYZLZ6RHVWNB1"
          ><i class="fa fa-whatsapp" aria-hidden="true"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://www.instagram.com/precisegis2"
          ><i class="fa fa-instagram" aria-hidden="true"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://medium.com/@precisegis"
          ><i class="fa fa-medium" aria-hidden="true"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://www.youtube.com/@precisegis6759"
          ><i class="fa fa-youtube" aria-hidden="true"></i></a
      ></span>
      <span class="header-icon-right"
        ><a href="https://www.linkedin.com/company/34746083"
          ><i class="fa fa-linkedin" aria-hidden="true"></i></a
      ></span>
    </div>
    <div>
      <p>
        <i class="fa fa-copyright" aria-hidden="true"></i> 2023 Precise GIS LTD.
        All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
    
    <script>
export default {
  name: "FooterVue",
  // You can add any logic or data properties specific to your footer here.
};
</script>
    
<style scoped>
/* Add your styling for the footer here */
footer {
  background-color: #1b4965;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  /* position: absolute;
  bottom: 0;
  width: 100%; */
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-logo {
  font-size: 24px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  display: inline-block;
  margin: 0 10px;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
}

.social-media i {
  padding: 0 10px;
}
.social-media i:hover {
  color: #bee9e8;
}

.ul-grid a:hover {
  color: #bee9e8;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .ul-grid li {
    margin: 10px;
  }
}
</style>
    