import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import UnoCSS from "unocss/vite";
import WebfontDownload from "vite-plugin-webfont-dl";
import { compression as Compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", "@vueuse/head", "vue/macros"],
      resolvers: [IconsResolver({})],
    }),
    Components({}),
    Icons({}),
    UnoCSS({}),
    WebfontDownload({}),
    Compression(),
    Compression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@use "sass:math";@use "@/assets/scss/variables/_colors.scss" as *;@use "@/assets/scss/_mixins.scss" as *;',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
