<template>
  <img class="img_logo" src="./assets/images/sw_logo2.png" alt="swapi-test">
  <div class="row">
    <div class="col-12">
      <Menubar :model="items" />
    </div>
  </div>
  <div class="layout-main-container">
    <div class="layout-main">
        <router-view />
    </div>
</div>
<ProgressSpinner v-if="appState.axiosLoading"/>
</template>

<script setup>
  import Menubar from 'primevue/menubar'
  import ProgressSpinner from 'primevue/progressspinner';
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  // computed
  const appState = computed(() => { return store.state })

  const items = ref([
    {
      label: 'Home',
      icon: 'pi pi-home',
      to: '/'
    },
    {
      label: 'Planets',
      icon: 'pi pi-globe',
      to: '/planets'
    }
  ])

</script>
<style lang="scss">
@import './assets/styles/App.scss';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
