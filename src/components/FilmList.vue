<template>
  <div>
    - <span class="list-link" @click="toggleDialog()">{{film.title}}</span>
  </div>
  <Dialog :dialogProps="dialogProps" />
</template>

<script setup>
import {defineProps, computed, ref} from 'vue'
import Dialog from '@/components/Dialog.vue'
const props = defineProps(["film"])
const dialogProps = ref({
  visible: false
})

// Methods
const toggleDialog = () => {
  dialogProps.value = {
    title: props.film.title,
    component: 'film',
    visible:true,
    data: props.film
  }
}

</script>

<style lang="scss" scoped>

</style>