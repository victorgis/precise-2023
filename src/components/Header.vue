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
        <li>
          <a
            href="#"
            @mouseover="handleServicesMouseOver"
            @mouseleave="handleServicesMouseLeave"
          >
            Services&nbsp;&nbsp;<span id="dropdownIconServices"
              ><i class="fa-solid fa-angle-down"></i
            ></span>
            <ul class="submenu" v-if="isServicesHovered" ref="dropdown">
              <li>
                <a href="/#services">
                  <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Our
                  Services</a
                >
              </li>
              <li
                @mouseover="handleDServicesMouseOver"
                @mouseleave="handleDServicesMouseLeave"
              >
                <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Dedicated
                Services
                <ul class="submenu2" v-if="isDServicesHovered" ref="dropdown">
                  <li>
                    <router-link to="/google-map-business">
                      <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Add
                      Your Business to Google Map</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/landing-page-website">
                      <i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Build
                      Your Business Landing Website</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul></a
          >
        </li>
        <li>
          <router-link to="/gis-rs-training">GIS & RS Training</router-link>
        </li>
        <li>
          <a
            href="#"
            @mouseover="handleProjectsMouseOver"
            @mouseleave="handleProjectsMouseLeave"
          >
            Past Projects&nbsp;&nbsp;<span id="dropdownIconProjects"
              ><i class="fa-solid fa-angle-down"></i
            ></span>
            <ul class="submenu" v-if="isProjectsHovered">
              <li>
                <router-link
                  to="/humanitarian-mapping-exercise-for-improvement-in-hiv-aids-gender-based-violence-gbv-projects-in-nigeria"
                  ><i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;HOTOSM
                  2021</router-link
                >
              </li>
              <li><a href="/mapathon"><i class="fa-solid fa-caret-right"></i>&nbsp;&nbsp;Mapathons</a></li>
            </ul></a
          >
        </li>
        <li>
          <a href="https://medium.com/@precisegis" target="_blank">Blog</a>
        </li>
        <li><router-link to="/contact">Contact</router-link></li>
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
      isProjectsHovered: false,
      isServicesHovered: false,
      isDServicesHovered: false,
      icon: null,
      projectIcon: null,
    };
  },
  components: { RouterLink },
  mounted() {
    this.icon = document.getElementById("dropdownIconServices");
    this.projectIcon = document.getElementById("dropdownIconProjects");
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

    handleProjectsMouseOver() {
      this.projectIcon.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
      this.isProjectsHovered = true;
      document.addEventListener("click", this.handleDocumentClick);
    },
    handleProjectsMouseLeave() {
      this.projectIcon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
      this.isProjectsHovered = false;
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
        this.isProjectsHovered = false;
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
li {
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

/* Style for submenus */
.submenu {
  position: absolute;
  text-align: left;
  display: block;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 200px;
  padding-bottom: 50px;
  z-index: 1;
}

.submenu2 {
  position: absolute;
  text-align: left;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 200px;
  padding-bottom: 50px;
  z-index: 1;
}

.submenu li {
  padding: 8px 15px;
  margin: 0px;
}

.submenu li:hover {
  background-color: #bee9e8;
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
    z-index: 3;
    padding: 20px 0px;
  }
  .menu a {
    text-decoration: none;
    color: #fff;
  }
  .menu li {
    color: #fff;
    padding: 10px 0;
  }

  .menu.open {
    display: flex;
  }

  .submenu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    color: #1b4965;
    background-color: #bee9e8;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    padding: 10px 10px 40px;
    z-index: 2;
  }

  .submenu2 {
    position: absolute;
    /* left: 50%;
    transform: translateX(-50%); */
    text-align: left;
    color: #1b4965;
    background-color: #e3faf9;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    padding: 10px 10px 40px;
    z-index: 2;
  }
  .submenu li,
  .submenu a {
    color: #1b4965;
  }
}
</style>
    