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
              content: `Sri Lanka's First ever Machine Learning Hackathon organized by the IEEE Computer Society Student Branch Chapter of UCSC.
              With the primary goal of introducing contestants to the concept of Machine Learning,
              or the use of artificial intelligence to create self-learning systems, the hackathon includes several
              phases and sub-events. IntelliHack 3.0 is aimed to provide participants with a strong understanding of
              machine learning so that they can come up with solutions that help them make better judgments.`,
            },
          ],
        },
      },

      runtimeConfig: {
        public: {
          siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://intellihack.ucscieee.lk',
          siteName: `IntelliHack 3.0`,
          siteDescription: `Sri Lanka's First ever Machine Learning Hackathon organized by the IEEE Computer Society Student Branch Chapter of UCSC.
          With the primary goal of introducing contestants to the concept of Machine Learning,
          or the use of artificial intelligence to create self-learning systems, the hackathon includes several
          phases and sub-events. IntelliHack 3.0 is aimed to provide participants with a strong understanding of
          machine learning so that they can come up with solutions that help them make better judgments.`,
          language: 'en-US',
        }
      },

      nitro: {
        compressPublicAssets: {
          brotli: true,
          gzip: true,
        },
    
        preset: "cloudflare-pages",
      },
      
})
