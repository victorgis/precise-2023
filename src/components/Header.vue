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
        <li><a href="/">Home</a></li>
        <li><a href="/#getStarted">About</a></li>
        <!-- <li><a href="/#services">Services</a></li> -->
        <li
          @mouseover="handleServicesMouseOver"
          @mouseleave="handleServicesMouseLeave"
        >
          <a href="#"
            >Services&nbsp;&nbsp;<span id="dropdownIconServices"
              ><i class="fa-solid fa-angle-down"></i></span
          ></a>
          <ul class="submenu" v-if="isServicesHovered" ref="dropdown">
            <a href="/#services"
              ><li>
                <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Services
              </li></a
            >
            <li
              @mouseover="handleDServicesMouseOver"
              @mouseleave="handleDServicesMouseLeave"
            >
              <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Dedicated
              Services
              <ul class="submenu" v-if="isDServicesHovered" ref="dropdown">
                <li>
                  <router-link to="/google-map-business">
                    <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Add
                    Business to Google Map</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/gis-rs-training">GIS & RS Training</router-link>
        </li>
        <li @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
          <router-link to="/past-projects"
            >Past Projects&nbsp;&nbsp;<span id="dropdownIcon"
              ><i class="fa-solid fa-angle-down"></i></span
          ></router-link>
          <!-- <i class="fa-solid fa-chevron-down"></i> -->
          <ul class="submenu" v-if="isHovered" ref="dropdown">
            <router-link
              to="/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria"
              ><li>HOTOSM 2020</li></router-link
            >
          </ul>
        </li>
        <li>
          <a href="https://medium.com/@precisegis" target="_blank">Blog</a>
        </li>
        <router-link to="/contact"><li>Contact</li></router-link>
      </ul>
    </div>
  </header>
</template>
    
<script>
import { RouterLink } from "vue-router";

export default {
  name: "HeaderVue",
  data() {
    return {
      isMenuOpen: false,
      isOpenProjects: false,
      isHovered: false,
      isServicesHovered: false,
      isDServicesHovered: false,
      icon: null,
    };
  },
  components: { RouterLink },
  mounted() {
    this.icon = document.getElementById("dropdownIconServices");
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

    handleMouseOver() {
      // this.icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      this.isHovered = true;
      document.addEventListener("click", this.handleDocumentClick);
    },
    handleMouseLeave() {
      // this.icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      this.isHovered = false;
      document.removeEventListener("click", this.handleDocumentClick);
    },
    handleServicesMouseOver() {
      // this.icon = document.getElementById("dropdownIcon");
      this.icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      this.isServicesHovered = true;
    },

    handleServicesMouseLeave() {
      this.icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      this.isServicesHovered = false;
    },
    handleDServicesMouseOver() {
      // this.icon = document.getElementById("dropdownIcon");
      this.icon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      this.isDServicesHovered = true;
    },
    handleDServicesMouseLeave() {
      this.icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      this.isDServicesHovered = false;
    },
    handleDocumentClick(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isHovered = false;
        this.isServicesHovered = false;
        document.removeEventListener("click", this.handleDocumentClick);
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
/* Style for the header igation menu */
/* ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

ul li {
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
}

ul li:hover {
  background-color: #f0f0f0;
} */

/* Style for submenus */
.submenu {
  position: absolute;
  /* top: 100px; */
  /* right: 200px; */
  text-align: left;
  display: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0px;
  margin: 0;
  width: 200px;
  padding-bottom: 50px;
  z-index: 1;
}

.submenu {
  display: block;
}

.submenu li {
  padding: 8px 15px;
  margin: 0px;
}

.submenu li:hover {
  background-color: #bee9e8; /* Background color on submenu item hover */
}

/* Add more styling as needed to match your design */

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
    width: 95%;
    z-index: 1;
    padding: 20px 0px;
  }
  .menu a {
    text-decoration: none;
    color: #fff;
  }
  .menu li {
    padding: 10px 0;
  }

  .menu.open {
    display: flex;
  }
  .sizes {
    font-size: 22px;
  }
}
</style>
    