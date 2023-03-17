<template>
  <div>
    - <span class="list-link" @click="toggleDialog()">{{person.name}}</span>
  </div>
  <Dialog :dialogProps="dialogProps" />
</template>

<script setup>
import {defineProps, computed, ref} from 'vue'
import Dialog from '@/components/Dialog.vue'
const props = defineProps(["person"])
const dialogProps = ref({
  visible: false
})

// Methods
const toggleDialog = () => {
  dialogProps.value = {
    title: props.person.name,
    component: 'person',
    visible:true,
    data: props.person
  }
}

</script>

<style lang="scss" scoped>

</style>