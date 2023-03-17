<template>
  <div class="planet-detail-text">
    <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Episode: {{data.episode_id}}</span></div>
      <div class="flex"> <span>Director: {{data.director}}</span></div>
      <div class="flex"> <span>Producer: {{data.producer}}</span></div>
      <div class="flex"> <span>Release date: {{data.release_date}}</span></div>
    </div>
    <h4>Opening Crawl</h4>
    <p>{{data.opening_crawl}}</p>
    <!-- <div class="flex flex-wrap detail-text">
      <div class="flex"> <span>Skin color: {{data.skin_color}}</span></div>
      <div class="flex"> <span>Eye color: {{data.eye_color}}</span></div>
      <div class="flex"> <span>Birth year: {{birth_year}}</span></div>
    </div> -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['data'])

</script>

<style lang="scss" scoped>
h4{
  margin-bottom: 0 !important;
}
p {
  margin-top: 8px;
}
</style>