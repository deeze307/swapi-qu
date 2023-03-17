import axios from 'axios'


let rest = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

let restNoBase = axios.create({
})

const PlanetService = {
  async getAllPlanets(serverParams) {
    let dataJson = {}
    let query = ''

    try {
      if(serverParams) {
        if(serverParams.page) query +=`page=${serverParams.page}&`
      }
      let response = await rest.get(`/planets?${query}format=json`)
      if(response.status == 200) {
        dataJson = response.data
      }
    } catch (error) {
      dataJson = { Error:error }
    }
    return dataJson
  },

  async getOnePlanet(url) {
    let dataJson = {}

    try {
      let response = await restNoBase.get(url)
      if(response.data) {
        dataJson = response.data
      }
    } catch (error) {
      dataJson = { Error:error }
    }
    return dataJson
  }
}

export default PlanetService