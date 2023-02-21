// import { ViteSSG } from "vite-ssg/single-page";
import {createApp} from 'vue'
import VueLazyLoad from 'vue3-lazyload'
import "uno.css";
import '@unocss/reset/tailwind.css'
import "@/assets/scss/main.scss";
// @ts-ignore
import App from "./App.vue";
const app = createApp(App)
app.use(VueLazyLoad, {})
app.mount("#app")
