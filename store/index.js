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

export const actions = {}
