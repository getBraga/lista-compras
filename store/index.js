import services from '~/services/services'

export const state = () => ({
  login: false,
  usuario: [],
  lista: [],
})
export const mutations = {
  GET_USUARIO(state, payload) {
    state.login = true
    state.usuario = payload
  },
}

export const actions = {
  async getUsuario({ commit }) {
    const { data } = await services.getUser()

    const [usuario] = Object.keys(data).map((i) => data[i])
    const primeiroNome = usuario.nome.replace(/ .*/, '')
    usuario.primeiroNome = primeiroNome
    commit('GET_USUARIO', usuario)
  },
}
