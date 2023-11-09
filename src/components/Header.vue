<template>
  <header>
    <div class="header-contact">
      <div class="header-container-left">
        <span class="header-container-left-icon" style="margin-right: 10px"
          ><i class="fa fa-envelope" aria-hidden="true"></i>
          <a href="mailto:precisegis@gmail.com" target="_blank">
            &nbsp;precisegis@gmail.com</a
          ></span
        >
        <span class="header-container-left-icon"
          ><i class="fa fa-phone" aria-hidden="true"></i
          ><a href="tel: +2349077421323">&nbsp;+234 907 742 1323</a></span
        >
      </div>
      <div class="header-container-right">
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
    </div>
    <div class="header-container">
      <!-- <div class="logo">
        <i class="fa-solid fa-cloud-showers-heavy"></i> Weather App
      </div> -->
      <div class="logo">
        <a href="/"
          ><img
            src="../assets/logo.svg"
            alt=""
            style="height: 30px; width: 118"
        /></a>
      </div>
      <div id="injectIcon" class="menu-button" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <ul class="menu" :class="{ open: isMenuOpen }">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </header>
</template>
    
    <script>
export default {
  name: "HeaderVue",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      const icon = document.getElementById("injectIcon");
      icon.className = "sizes";
      if (this.isMenuOpen == true) {
        icon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        this.isMenuOpen = false;
      } else {
        icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        this.isMenuOpen = true;
      }
    },
  },
};
</script>
    
<style scoped>
/* Add your styling here */

.header-contact {
  color: #1b4965;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 60px;
  border-bottom: #ccc 1px solid;
}
.header-container-left {
  text-align: left;
}
.header-container-left-icon:hover {
  color: #62b6cb;
}
.header-container-right {
  text-align: right;
}
.header-icon-right {
  margin-left: 15px;
  padding-right: 15px;
  border-right: #ccc 1px solid;
  text-align: center;
}
.header-container {
  padding: 10px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
a {
  color: #1b4965;
}
a:hover {
  color: #62b6cb;
}

.menu-button {
  display: none;
  cursor: pointer;
}

.menu-button i {
  font-size: 24px;
}

.menu {
  list-style: none;
  display: flex;
}

.menu li {
  margin: 0 20px;
}

.menu a {
  text-decoration: none;
  color: #1b4965;
}
.menu a:hover {
  color: #62b6cb;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .header-container {
    padding: 10px;
  }
  .header-contact {
    display: none;
  }
  .menu-button {
    display: block;
  }

  .menu {
    border-radius: 10px;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 45px;
    right: 15px;
    background-color: #2c3e50db;
    width: 150px;
    z-index: 1;
  }
  .menu li {
    padding: 10px 0;
    margin: 0 20px;
  }

  .menu.open {
    display: flex;
  }
  .sizes {
    font-size: 22px;
  }
}
</style>
    