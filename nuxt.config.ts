import NuxtConfiguration from '@nuxt/config'

const config = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '18th Young Webmaster Camp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Young Webmaster Camp ครั้งที่ 18 “New Normal New Web New World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด'
      },

      { name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '18th Young Webmaster Camp'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Young Webmaster Camp ครั้งที่ 18 “New Normal New Web New World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด'
      },
      {
        name: 'og:image',
        content: 'https://ywc18.ywc.in.th/images/ywc18/ogImage.jpg'
      },
      { name: 'article:author', content: 'https://www.facebook.com/ywcth' },

      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image:src',
        content: 'https://ywc18.ywc.in.th/images/ywc18/ogImage.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Barlow:400,500,600&display=swap&subset=thai'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  //loading: { color: '#fff' },
  loading: '~/components/FullscreenLoading.vue',
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/global.css',
    '@/assets/css/webfont.css',
    '@/assets/css/global.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/ant-design-vue' },
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-confetti', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-42284958-1'
      }
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '852229261558709',
        disabled: false
      }
    ],
    [
      '@netsells/nuxt-hotjar',
      {
        id: '1470912',
        sv: '6'
      }
    ],
    ['vue-scrollto/nuxt', { duration: 600 }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: ''
  },
  /*
   ** Build configuration
   */
  generate: {
    fallback: true, // For Firebase Hosting, see https://nuxtjs.org/api/configuration-generate#fallback
    routes: [
      '/interview',
      '/interview/content',
      '/interview/design',
      '/interview/marketing',
      '/interview/programming',
      '/announcement',
      '/announcement/majors',
      '/announcement/majors/content',
      '/announcement/majors/design',
      '/announcement/majors/marketing',
      '/announcement/majors/programming',
      '/agenda'
    ]
  },
  build: {
    // Fix ES6 for IE11
    transpile: [
      /(.+)(vue\-agile\/src\/)(.+)(\.js)$/, // Transpile Unix paths
      /(.+)(vue\-agile\\src\\)(.+)(\.js)$/ // Transpile Windows paths
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config: NuxtConfiguration, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
