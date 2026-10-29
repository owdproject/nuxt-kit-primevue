import { defineNuxtPlugin } from 'nuxt/app'
import { setupDesktopDialogProvider } from '../dialogs/setupDesktopDialogProvider'

export default defineNuxtPlugin({
  name: 'owd-kit-nuxt-primevue-dialogs',
  enforce: 'pre',
  setup(nuxtApp) {
    setupDesktopDialogProvider(nuxtApp)
  },
})
