import { createApp } from 'vue'
import store from './store'
import router from './router'
import '@/style.css'
import AppWrapper from '@/AppWrapper.vue'

// PrimeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(AppWrapper)

app.use(PrimeVue,{ ripple: true })

app.use(store)

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next();
});
app.use(router)

app.use(VueGoodTablePlugin)

app.mount('#app')
