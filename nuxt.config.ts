export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/impressum',
  },
  sitemap: {
    // options
    hostname: 'https://near-berlin.de',
    gzip: true,
    exclude: [
      '/impressum'
    ],
  }
});
