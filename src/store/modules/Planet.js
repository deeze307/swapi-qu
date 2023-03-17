import PlanetService from "../../service/PlanetService";
import PersonService from "../../service/PersonService";
import FilmService from "../../service/FilmService";

const Planet = {
  state:{
    planetsData:[],
    planetsCount:null,
    planet:{},
    planetsLoading:false,
    planetLoading:false
  },
  mutations:{
    setPlanets(state,payload) {
      state.planetsCount = payload.count
      state.planetsData = payload.results
    },
    setPlanet(state,payload) {
      state.planet = payload
    },
    setPlanetsLoading(state,payload) {
      state.planetsLoading = payload
    },
    setPlanetLoading(state,payload) {
      state.planetLoading = payload
    }
  },
  actions:{
    PLANET_getAllPlanets({commit},serverParams) {
      commit('setPlanetsLoading',true)
      commit('setAxiosLoading',true)
      PlanetService.getAllPlanets(serverParams).then(response => {
        commit('setPlanets',response)
      }).catch(error => console.log('ocurrió un error',error))
      .finally(() => {
        commit('setPlanetsLoading',false)
        commit('setAxiosLoading',false)
      })
    },
    async PLANET_getOnePlanet({commit},url) {
      commit('setPlanetLoading',true)
      let result = null
      result = await PlanetService.getOnePlanet(url).then(async response => {
        // Residents  
        if(response.residents && response.residents.length > 0) {
          let residents = []
          await Promise.all(response.residents.map(async resident => {
            let personResult = await PersonService.getOnePerson(resident)
            residents.push(personResult)
          }))
          response.residents = residents
        }

        // Films
        if(response.films && response.films.length > 0) {
          let films = []
          await Promise.all(response.films.map(async film => {
            let filmResult = await PersonService.getOnePerson(film)
            films.push(filmResult)
          }))
          response.films = films
        }
        
        commit('setPlanet',response)
        
      }).catch(error => console.log('ocurrió un error',error))
      .finally(() => commit('setPlanetLoading',false))
      return result
    },
  }
}

export default Planet