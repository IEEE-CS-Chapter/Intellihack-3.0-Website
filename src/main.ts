import { ViteSSG } from "vite-ssg/single-page";
import VueLazyLoad from 'vue3-lazyload'
import "uno.css";
import '@unocss/reset/tailwind.css'
import "@/assets/scss/main.scss";
import App from "./App.vue";
import "@/firebase.config"

export const createApp = ViteSSG(App, ({ app, isClient, initialState }) => {
    app.use(VueLazyLoad, {
        
    })
});
