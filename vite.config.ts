import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import UnoCSS from "unocss/vite";
import { VitePluginFonts } from 'vite-plugin-fonts'
import { compression as Compression } from "vite-plugin-compression2";
// @ts-ignore
import gltf from "vite-plugin-gltf"; // (b) Vite

import { draco } from "@gltf-transform/functions";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    gltf({
      transforms: [draco()],
    }),
    AutoImport({
      dts: true,
      imports: ["vue", "@vueuse/core", "@vueuse/head", "vue/macros"],
      resolvers: [IconsResolver({})],
    }),
    Components({}),
    Icons({}),
    UnoCSS({}),
    VitePluginFonts({
      google: {
        preconnect: true,
        display: 'block',
        families: [
          {
            name: 'Poppins',
            styles: 'wght@0,400;1,700',
          },
        ],
      }, 
    }),
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
