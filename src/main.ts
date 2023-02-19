import { ViteSSG } from "vite-ssg/single-page";
import VueLazyLoad from 'vue3-lazyload'
import "uno.css";
import '@unocss/reset/tailwind.css'
import "@/assets/scss/main.scss";
// @ts-ignore
import App from "./App.vue";

export const createApp = ViteSSG(App, ({ app }) => {
    app.use(VueLazyLoad, {
        
    })
});
