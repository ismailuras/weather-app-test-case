import { createApp } from "vue"; // Import createApp from Vue 3
import App from "./App.vue";
import router from "./router";
import helpers from "./helpers/helper.js";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoEyeSharp, IoEyeOff } from "oh-vue-icons/icons";
import { LaSearchPlusSolid } from "oh-vue-icons/icons";

import "./assets/style.css";

addIcons(IoEyeSharp, IoEyeOff, LaSearchPlusSolid);

const plugins = {
  install(app) {
    app.config.globalProperties.$helpers = helpers;
  },
};

const app = createApp(App);
app.use(router).component("oh-vue-icon", OhVueIcon).use(plugins).mount("#app");
