<template>
  <div class="planet-detail-text">
    <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Gender: {{data.gender}}</span></div>
      <div class="flex"> <span>Height: {{data.height}}</span></div>
      <div class="flex"> <span>Mass: {{data.mass}}</span></div>
      <div class="flex"> <span>Hair color: {{data.hair_color}}</span></div>
    </div>
    
    <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Skin color: {{data.skin_color}}</span></div>
      <div class="flex"> <span>Eye color: {{data.eye_color}}</span></div>
      <div class="flex"> <span>Birth year: {{birth_year}}</span></div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref} from 'vue'

const props = defineProps(['data'])
const birth_year = ref("")

onMounted(() => {
  if(props.data.birth_year) {
    if(props.data.birth_year.includes('BBY')) {
      birth_year.value = `${props.data.birth_year} (Before the Battle of Yavin)`
    } else if (props.data.birth_year.includes('ABY')) {
      birth_year.value = `${props.data.birth_year} (After the Battle of Yavin)`
    } else {
      birth_year.value = props.data.birth_year
    }
  }
})

</script>

<style lang="scss" scoped>

</style>