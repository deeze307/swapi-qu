import axios from 'axios'

let restNoBase = axios.create({
})

const PersonService = {

  async getOnePerson(url) {
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

export default PersonService