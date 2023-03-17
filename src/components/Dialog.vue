<template>
  <Dialog v-model:visible="dialogProps.visible" modal :header="dialogProps.title" :style="{ width: '50vw' }">
    <Component :is="mapTypeComponents[dialogProps.component]" :data="dialogProps.data" />
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog'
import PersonDetail from '@/components/PersonDetail.vue'
import FilmDetail from '@/components/FilmDetail.vue'
import { defineProps } from 'vue'

const props = defineProps(['dialogProps'])

const mapTypeComponents = {
  person: PersonDetail,
  film: FilmDetail
}

</script>

<style lang="scss" scoped>

</style>