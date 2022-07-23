export const state = () => ({
  login: false,
  lista: [],
})
export const mutations = {
  GET_DADOS(state, payload) {
    state.lista = payload
  },
  UPDATE_DADOS(state, payload) {
    state.lista = payload
  },
  DELETAR_LISTA(state, payload) {
    state.lista = payload
  },
}

export const actions = {
  deletarLista({ commit }) {
    commit(
      'DELETAR_LISTA',
      JSON.parse(window.localStorage.getItem('listaCompras'))
    )
  },
  // getLista({ commit }) {
  //   commit('GET_DADOS', JSON.parse(window.localStorage.getItem('listaCompras')))
  // },
}
