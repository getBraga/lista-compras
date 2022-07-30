import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: `${process.env.BASE_URL}/${window.localStorage.uid}`,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
    window.localStorage.accessToken = ''

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
  getData() {
    return api.get(`/saldos.json?auth=${window.localStorage.accessToken}`)
  },
  postData(body) {
    return api.post(
      `/saldos.json?auth=${window.localStorage.accessToken}`,
      body
    )
  },
  deleteData(id) {
    return api.delete(
      `/saldos/${id}.json?auth=${window.localStorage.accessToken}`
    )
  },
  putData(id, payload) {
    return api.put(
      `/saldos/${id}.json?auth=${window.localStorage.accessToken}`,
      payload
    )
  },
}
