// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://awesome-lib.js' }
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-Variable-font-face.css' }
          ],
          // please note that this is an area that is likely to change
          style: [],
          noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' }
          ]
        }
      },
    
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
          apiBase: 'http://localhost:1338'
        }
      }
})
