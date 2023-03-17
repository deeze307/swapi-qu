<template>
  <vue-good-table
    mode="remote"
    :columns="columns"
    :rows="rows"
    :theme="theme"
    @page-change="onPageChange"
    @sort-change="onSortChange"
    @column-filter="onColumnFilter"
    @per-page-change="onPerPageChange"
    :pagination-options="paginationOptions"
    :totalRows="totalRows">
      <template #table-row="props">
        <span v-if="props.column.field == 'detail'">
          <Button icon="pi pi-eye" rounded :disabled="planet.planetLoading" :loading="planet.planetLoading && (url == props.row.url)" @click="showPlanetInfoDialog(props.row)" />
        </span>
      </template>
  </vue-good-table>

  <Sidebar :visible="sidebarVisible" position="right" class="w-full md:w-40rem lg:w-30rem" :dismissable="false" :showCloseIcon="false">
    <template #header>
      <div class="sidebar-header-container">
        <span class="sidebar-header-text">{{title}}</span>
        <Button icon="pi pi-times" @click="onCancelSidebar()" text class="text-right p-button-sm"/>
      </div>
    </template>
    <PlanetDetail :detail="planet.planet" />
  </Sidebar>

</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, defineProps, defineEmits } from 'vue'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import PlanetDetail from '@/components/PlanetDetail.vue'
  const props = defineProps(['columns', 'rows', 'theme', 'totalRows', 'serverParams'])
  const store = useStore()

  const emit = defineEmits(['fetchItems','updateServerParams'])

  const paginationOptions = ref({
    enabled: true,
    setCurrentPage: props.serverParams.page,
    perPageDropdownEnabled: false,
  })

  const sidebarVisible = ref(false)
  const title = ref("")
  const url = ref("")

  // Computed
  const planet = computed(() => { return store.state.Planet})

  // Methods
  const showPlanetInfoDialog = (props) => {
    title.value = props.name
    url.value = props.url
    store.dispatch('PLANET_getOnePlanet',url.value).then(() => {
      sidebarVisible.value = true
    })
  }

  const onCancelSidebar = () => {
    sidebarVisible.value = false
  }

  const updateParams = (newProps) => {
    emit('updateServerParams',Object.assign({}, props.serverParams, newProps))
  }

  const onPageChange = (params) => {
    updateParams({page: params.currentPage});
    emit('fetchItems')
  }

  const onSortChange = (params) => {
    updateParams({
      sort: [{
        type: params.sortType,
        field: columns.value[params.columnIndex].field,
      }],
    })
    emit('fetchItems')
  }

  const onColumnFilter = (params) => {
    updateParams(params)
    getAllPlanets(serverParams.value)
  }

  const onPerPageChange = (params) => {
    updateParams({perPage: params.currentPerPage})
    getAllPlanets(serverParams.value)
  }
</script>

<style>

</style>