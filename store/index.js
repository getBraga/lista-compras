import services from '~/services/services'

export const state = () => ({
  login: false,
  usuario: [],
  saldo: 0,
})
export const mutations = {
  GET_USUARIO(state, payload) {
    state.login = true
    state.usuario = payload
  },
  GET_SALDO(state, payload) {
    let soma = 0
    for (const index in payload) {
      soma += +payload[index].valor_saldo
    }
    state.saldo = soma
  },
}

export const actions = {
  async getUsuario({ commit }) {
    const { data } = await services.getUser()

    if (data) {
      const [usuario] = Object.keys(data).map((i) => data[i])
      const primeiroNome = usuario.nome.replace(/ .*/, '')
      usuario.primeiroNome = primeiroNome
      commit('GET_USUARIO', usuario)
    }
  },
}
