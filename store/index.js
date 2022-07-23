export const state = () => ({
  login: false,
  lista: [],
})
export const mutations = {
  GETDADOS(state, payload) {
    state.lista = payload
  },
  UPDATEDADOS(state, payload) {
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
}
