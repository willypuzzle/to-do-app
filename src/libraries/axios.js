import axios from 'axios'
import getData from '/src/mocks/axios'

//Mocking axios for development purpose, see env conf file .env or .env.example
if(process.env.API_BASE_URL === 'MOCK'){
  axios.get = (url, params = {}) => getData('get', url, params)
  axios.post = (url, params = {}) => getData('post', url, params)
  axios.put = (url, params = {}) => getData('put', url, params)
  axios.delete = (url, params = {}) => getData('delete', url, params)

  axios.create = () => axios
}

export default axios
