import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaQuestion,
  HiSolidHome,
  BiPieChartFill,
  BiPersonLinesFill,
  OiFeedPerson,
} from 'oh-vue-icons/icons'

addIcons(FaQuestion, HiSolidHome, BiPieChartFill, BiPersonLinesFill, OiFeedPerson)

createApp(App)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .component('v-icon', OhVueIcon)
  .mount('#app')
