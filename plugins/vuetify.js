import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa, en } from 'vuetify/locale'
import { md2 } from 'vuetify/blueprints'


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    blueprint: md2,
    ssr: true,
    components,
    directives,
    locale: {
        locale: 'fa',
        fallback: 'en',
        messages: { fa, en }
      },
  })

  nuxtApp.vueApp.use(vuetify)
})