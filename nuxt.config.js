const pkg = require('./package');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // script: [{ src: 'https://cdn.auth0.com/js/auth0/9.9.0/auth0.min.js' }],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // '@nuxtjs/router'
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000',
    proxy: true,
  },
  proxy: {
    '/rs/': { target: 'http://localhost:18080', pathRewrite: { '^/rs/': '' } },
  },
  /*
  ** Auth module configuration
  */
  auth: {
    redirect: {
      login: '/auth/redirect',
      callback: '/auth/cb',
      logout: '/',
      home: '/',
    },
    resetOnError: true,
    rewriteRedirects: true,
    strategies: {
      auth0: {
        domain: 'timeman.auth0.com',
        client_id: 'PsEsUB705UNm8ovl3BqD8ZbeQpNn13Nu',
      },
    },
    plugins: ['~/plugins/auth.js'],
  },

  /*
  ** Middleware
  */
  router: {
    // middleware: 'authCheck',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
