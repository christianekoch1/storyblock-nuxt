export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'CFDQmo2ZegLL4no03NijCQtt',
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
  ],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
});
