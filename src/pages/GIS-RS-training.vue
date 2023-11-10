<template>
  <div class="parent">
    <Header />
    <div class="main">
      <div class="heading-section">
        <h1>GIS & Remote Sensing Training</h1>
      </div>
      <div class="tab-buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="{ active: activeTab === index }"
        >
          <span class="tab-name">{{ tab.name }}</span>
        </button>
      </div>
      <div class="tab-content">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          v-show="activeTab === index"
        >
          <div v-if="activeTab == '0'">
            <QgisTraining />
          </div>
          <div v-if="activeTab == '1'">
            <ArcGISTraining />
          </div>
          <div v-if="activeTab == '2'">
            <RemoteSensingTraining />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import QgisTraining from "@/components/Qgis-training.vue";
import ArcGISTraining from "@/components/ArcGIS-training.vue";
import RemoteSensingTraining from "@/components/RemoteSensing-training.vue";

export default {
  name: "PrecisegisGISRSTraining",
  components: {
    Header,
    Footer,
    QgisTraining,
    ArcGISTraining,
    RemoteSensingTraining,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: "QGIS Training", content: "Content for Tab 1" },
        { name: "ArcGIS Training", content: "Content for Tab 2" },
        { name: "Remote Sensing Training", content: "Content for Tab 3" },
      ],
    };
  },
  mounted() {},
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
.main {
  padding: 0 60px;
}
.heading-section h1 {
  font-size: 35px;
  font-weight: 900;
}
.tab-name {
  color: #1b4965;
}

/* hiohioho  */
/* Add your styling for tabs and content here */
.tab-buttons {
  display: flex;
}

.tab-buttons button {
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
}

.tab-buttons button.active {
  background-color: #fff;
  border-bottom: 2px solid #62b6cb;
}

/* .tab-content div {
  display: none;
} */

.tab-content {
  margin: 60px 0;
}

.tab-content div.show {
  display: block;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .main {
    padding: 0 10px;
  }
  .heading-section h1 {
    font-size: 25px;
  }
}
</style>