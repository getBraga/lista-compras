// import { ListSaldos } from '~/data/dados'
export const state = () => ({
  total: null,
})

export const mutations = {
  TOTAL_SALDO(state, payload) {
    state.total = payload
  },
}

// export const actions = {
//   totalSaldo({ commit }) {
//     const data = JSON.parse(window.localStorage.listaSaldo)
//     console.log(data)
//     let soma = 0
//     for (const index in ListSaldos) {
//       soma += ListSaldos[index].valor_saldo
//     }
//     commit('TOTAL_SALDO', soma)
//   },
// }
