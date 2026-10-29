import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  externals: [
    '@nuxt/kit',
    '@owdproject/core',
    '@owdproject/module-nuxt-fs',
    'vue3-selecto',
    'primevue',
    'primevue/useconfirm',
    'primevue/confirmationservice',
    'vue',
    'nuxt',
    'nuxt/app',
  ],
})
