<template>
  <div class="planet-detail-text">
    <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Population: {{detail.population}}</span></div>
      <div class="flex"> <span>Climate: {{detail.climate}}</span></div>
      <div class="flex"> <span>Gravity: {{detail.gravity}}</span></div>
      <div class="flex"> <span>Terrain: {{detail.terrain}}</span></div>
    </div>
    
    <hr>
    
    <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Rotation period: {{detail.rotation_period}}</span></div>
      <div class="flex"> <span>Diameter: {{detail.diameter}}</span></div>
      <div class="flex"> <span>Orbital period: {{detail.orbital_period}}</span></div>
      <div class="flex"> <span>Surface water: {{detail.surface_water}}</span></div>
    </div>

    <hr>

    <h4>Residents</h4>
    <div v-if="detail.residents && detail.residents.length > 0">
      <PeopleList v-for="person in detail.residents" :key="person" :person="person"/>
    </div>
    <div v-else>
      <span>No residents</span>
    </div>

    <hr>

    <h4>Films</h4>
    <div v-if="detail.films && detail.films.length > 0">
      <FilmList v-for="film in detail.films" :key="film" :film="film" />
    </div>
    <div v-else>
      <span>No films</span>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue'
import PeopleList from '@/components/PeopleList.vue'
import FilmList from '@/components/FilmList.vue'
const props = defineProps(['detail'])

</script>

<style lang="scss" scoped>
h4 {
  margin-bottom: 0 !important;
}


</style>