import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoEyeSharp, IoEyeOff } from "oh-vue-icons/icons";

addIcons(IoEyeSharp, IoEyeOff);

createApp(App).use(router).component("oh-vue-icon", OhVueIcon).mount("#app");
