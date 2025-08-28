import { createApp } from "vue";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../css/style.css";
import App from "../../App.vue"; // Root Vue component

// --- Additional Libraries ---
import VueApexCharts from "vue3-apexcharts";
import { gsap } from "gsap";
// Swiper CSS removed
import "@fortawesome/fontawesome-free/css/all.min.css";

$(function () {
  console.log("jQuery + Bootstrap ready!");
});

// --- Mount Vue app ---
const app = createApp(App);

// Register ApexCharts globally
app.use(VueApexCharts);

// Wait for DOM to be ready before mounting
document.addEventListener('DOMContentLoaded', () => {
  app.mount("#app");
});
