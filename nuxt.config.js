require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Lustrous Gems Group - Jewellers Since 1807 | World's Best Jeweller | Diamonds, Gems & Jewellery | Lustrous Gems Group",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "World's Best Jeweller. Diamonds, Gems & Jewellery | Lustrous Gems Group",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'preload',
        onload: "this.onload=null;this.rel='stylesheet'",
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      {
        rel: 'preload',
        onload: "this.onload=null;this.rel='stylesheet'",
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Gotu&display=swap',
      },
      {
        rel: 'preload',
        onload: "this.onload=null;this.rel='stylesheet'",
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap',
      },
    ],
  },
  loading: {
    color: 'orange',
    throttle: 0,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-114209131-1',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],
  content: {
    nestedProperties: [
      'products.slug',
      'products.isFeatured',
      'products.gems',
      'products.jewellery',
      'products.categories',
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
}
