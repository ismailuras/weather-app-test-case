import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import { OhVueIcon } from "oh-vue-icons";

createApp(App).use(router).mount("#app");
