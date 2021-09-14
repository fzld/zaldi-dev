export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fachrizaldi Wahyudi — Developer and Designer based in Jakarta.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Zaldi is a Frontend Developer and Designer based in Jakarta that currently pursuing his Bachelor of Engineering degree at Gunadarma University.' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1'},
      { name: 'keywords', content: 'Fachrizaldi Wahyudi, Frontend Developer, UI Designer, UX Designer, Designer, based in Jakarta, Gunadarma'},
      { name: 'og:title', content: 'Fachrizaldi Wahyudi | Frontend Developer and Designer based in Jakarta'},
      { name: 'og:description', content: 'Zaldi is a Frontend Developer and Designer based in Jakarta that currently pursuing his Bachelor of Engineering degree at Gunadarma University.'},
      { name: 'og:url', content: 'https://zaldi-dev.netlify.app/'},
      { name: 'og:site_name', content: 'Fachrizaldi Wahyudi — Developer and Designer based in Jakarta.'},
      { name: 'og:image', content:'/og.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/logo-yellow.svg' },
      { rel: 'stylesheet', type: ' text/css', href: '~/assets/css/style.css'},
      { rel: 'stylesheet', type: ' text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
