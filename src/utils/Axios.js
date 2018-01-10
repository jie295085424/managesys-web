import Axios from 'axios'

let api = Axios.create();

//baseURL
api.defaults.baseURL = 'http://localhost:8081';

api.interceptors.response.use((response) => {

  response = response.data;

  if (response.code == 200) {
    return Promise.resolve(response);
  }

  else {
    return Promise.reject(response)
  }

})

export default api
