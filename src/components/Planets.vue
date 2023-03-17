<template>
<div>
  <h2>Planets</h2>
</div>
  <DataTable v-if="!planet.planetsLoading"
    :columns="columns"
    :rows="planet.planetsData"
    theme="nocturnal"
    :totalRows="planet.planetsCount"
    :serverParams="serverParams"
    @fetch-items="getAllPlanets"
    @update-server-params="updateParams"
  />
</template>

<script setup>
  import DataTable from '@/components/DataTable.vue'
  import { useStore } from 'vuex'
  import { computed, onMounted, ref } from 'vue'

  const store = useStore()

  const serverParams = ref({
    columnFilters: {
      },
    sort: {
      field: '', 
      type: '',
    },
    page: 1, 
    perPage: 10
  })
  const columns = ref([
    {
      label: 'Name',
      field:'name',
      sortable: false
    },
    {
      label: 'Rotation period',
      field: 'rotation_period',
      sortable: false
    },
    {
      label: 'Orbital period',
      field: 'orbital_period',
      sortable: false
    },
    {
      label: 'Diameter',
      field: 'diameter',
      sortable: false
    },
    {
      label: 'Climate',
      field: 'climate',
      sortable: false
    },
    {
      label: 'Gravity',
      field: 'gravity',
      sortable: false
    },
    {
      label: 'Terrain',
      field: 'terrain',
      sortable: false
    },
    {
      label: 'Surface water',
      field: 'surface_water',
      sortable: false
    },
    {
      label: 'Population',
      field: 'population',
      sortable: false
    },
    {
      label:'Detail',
      field: 'detail',
      sortable: false
    }
  ])

  // computed
  const planet = computed(() => { return store.state.Planet })

  // methods
  const getAllPlanets = () => {
    store.dispatch('PLANET_getAllPlanets',serverParams.value)
  }

  const updateParams = (newProps) => {
    serverParams.value = Object.assign({}, serverParams.value, newProps)
  }

  // On Mounted
  onMounted(() => {
    getAllPlanets()
  })

</script>

<style>

</style>