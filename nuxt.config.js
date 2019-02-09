const pkg = require('./package');
const WebpackShellPlugin = require('webpack-shell-plugin');

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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito|Quicksand',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.css'],

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
    'nuxt-fontawesome',
    '@nuxtjs/style-resources',
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
    strategies: {
      auth0: {
        domain: 'timeman.auth0.com',
        client_id: 'PsEsUB705UNm8ovl3BqD8ZbeQpNn13Nu',
        audience: 'https://montoliov.ml/rs',
        scope: 'openid profile email crud:self',
      },
    },
    redirect: {
      login: '/auth/redirect-to-auth',
      callback: '/auth/cb',
      logout: '/',
      home: '/',
    },
    resetOnError: true,
    rewriteRedirects: true,
    plugins: ['~/plugins/auth.js'],
  },

  styleResources: {
    scss: ['~/assets/css/scss/variables.scss'],
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
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

      config.plugins.push(
        new WebpackShellPlugin({
          onBuildStart: ['node fix_nuxt_auth.js'],
          onBuildEnd: [],
        })
      );
    },
  },
};
