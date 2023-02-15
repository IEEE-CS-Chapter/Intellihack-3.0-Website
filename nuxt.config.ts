// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
    extends: [
        'nuxt-seo-kit'
      ],   
      
      vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "sass:math";@use "@/assets/scss/variables/_colors.scss" as *;@use "@/assets/scss/_mixins.scss" as *;'
            }
          }
        }
      },

      // @ts-ignore
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@vueuse/nuxt',
        "@nuxtjs/fontaine",
        "@nuxtjs/google-fonts"
      ],


      googleFonts: {
        families: {
          Nunito: {
            wght: [200, 400, 700],
          },
          Poppins: {
            wght: [400]
          }
        },
        display: "fallback",
        prefetch: true,
        preload: true,
        preconnect: true,
      },

      app: {
        head: {
          link: [
            {
              rel: "icon",
              href: "/favicon.ico",
            },
          ],
          title: "",
          htmlAttrs: {
            lang: "en",
          },
    
          meta: [
            {
              name: "description",
              content: `
                        Credits: {
                          "AJF-12 "Dvergr": (https://skfb.ly/FMID) by Star Conflict is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                          "asteroid": (https://skfb.ly/COwN) by admone is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                        }`,
            },
          ],
        },
      },

      runtimeConfig: {
        public: {
          siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://intellihack.ucscieee.lk',
          siteName: `IntelliHack - SL's Leading ML Hackathon`,
          siteDescription: 'Welcome to my awesome site!',
          language: 'en-US', // prefer more explicit language codes like `en-AU` over `en`
        }
      },
      
})
