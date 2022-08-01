import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
axiosIntance.interceptors.request.use(
  function (config) {
    const token = `Bearer ${window.localStorage.accessToken}`
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const api = {
  get(endpoint) {
    return axiosIntance.get(endpoint)
  },
  post(endpoint, body) {
    return axiosIntance.post(endpoint, body)
  },
  delete(endpoint, body) {
    return axiosIntance.delete(endpoint, body)
  },
  put(endpoint, body) {
    return axiosIntance.put(endpoint, body)
  },
}

export default {
  getUser() {
    return api.get(
      `/${window.localStorage.uid}/dados-usuarios.json?auth=${window.localStorage.accessToken}`
    )
  },

  getData() {
    return api.get(
      `/${window.localStorage.uid}/saldos.json?auth=${window.localStorage.accessToken}`
    )
  },
  postDadosUsuarios(payload) {
    return api.post(
      `/${window.localStorage.uid}/dados-usuarios.json?auth=${window.localStorage.accessToken}`,
      payload
    )
  },
  postData(body) {
    return api.post(
      `/${window.localStorage.uid}/saldos.json?auth=${window.localStorage.accessToken}`,
      body
    )
  },
  deleteData(id) {
    return api.delete(
      `/${window.localStorage.uid}//saldos/${id}.json?auth=${window.localStorage.accessToken}`
    )
  },
  putData(id, payload) {
    return api.put(
      `/${window.localStorage.uid}//saldos/${id}.json?auth=${window.localStorage.accessToken}`,
      payload
    )
  },
}
