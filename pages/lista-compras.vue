<template>
  <section>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
    <div class="h1_titulo">
      <h1>
        <strong>Lista de compras</strong>
      </h1>
    </div>

    <b-button type="is-primary" class="mb_20 mt_10" @click="modal = true"
      >Novo item</b-button
    >
    <ModalIncluirListaVue
      :modal="modal"
      :fechar-modal="fecharModal"
      :incluir-lista="incluirLista"
      :nome-lista.sync="incluirInfo.nome_produto"
      :preco.sync="incluirInfo.preco_produto"
      :quantidade.sync="incluirInfo.quantidade"
    >
    </ModalIncluirListaVue>

    <b-table
      id="tabela"
      :data="data"
      sticky-checkbox
      striped
      paginated
      :per-page="10"
      sort="asc"
    >
      <b-table-column
        v-slot="props"
        searchable
        sortable
        field="nome_produto"
        label="Nome"
      >
        <span v-if="!props.row.podeAlterar">{{ props.row.nome_produto }}</span>
        <b-input v-else v-model="alterarNome" />
      </b-table-column>

      <b-table-column
        v-slot="props"
        sortable
        field="preco_produto"
        label="Preço"
      >
        <span v-if="!props.row.podeAlterar">
          {{ moedaLocal(+props.row.preco_produto) }}
        </span>
        <!-- <span v-if="!props.row.podeAlterar">
          <b-input v-model="props.row.preco_produto" v-money="money" />
        </span> -->
        <b-input v-else v-model.lazy="alterarPreco" v-money="money" />
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="quantidade"
        label="Quantidade"
        sortable
      >
        <span v-if="!props.row.podeAlterar">{{ props.row.quantidade }}</span>
        <b-input v-else v-model="alterarQuantidade" type="number" min="1" />
      </b-table-column>

      <b-table-column v-slot="props" field="preco_total" label="Total" sortable>
        <span>{{ moedaLocal(props.row.preco_total) }}</span>
      </b-table-column>
      <b-table-column v-slot="props" field="excluir_produto" label="Excluir">
        <b-button class="btn_icon" @click="excluir(props.row)"
          ><b-icon class="icon_lixeira" icon="delete" size="is-medium"> </b-icon
        ></b-button>
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="atualzar_produto"
        label="Atualizar"
        centered
      >
        <b-button
          v-show="!props.row.podeAlterar"
          class="btn_icon"
          @click="ativarAlterar(props.row)"
          ><b-icon
            class="icon_primary"
            icon="pencil"
            type="is-primary"
            size="is-medium"
          >
          </b-icon>
        </b-button>
        <div v-show="props.row.podeAlterar" class="icon_atualizar">
          <b-button
            v-show="props.row.podeAlterar"
            class="btn_icon"
            @click="props.row.podeAlterar = false"
          >
            <b-icon
              class="close_icon"
              icon="close-circle-outline"
              type="is-second"
              size="is-medium"
            >
            </b-icon
          ></b-button>
          <b-button
            v-show="props.row.podeAlterar"
            class="btn_icon"
            @click="alterar(props.row)"
          >
            <b-icon
              class="icon_primary"
              icon="check-circle"
              type="is-primary"
              size="is-medium"
            >
            </b-icon
          ></b-button>
        </div>
      </b-table-column>

      <template #empty>
        <div class="has_text_centered">
          <strong>Nenhum produto cadastrado </strong>
        </div>
      </template>
    </b-table>
    <h2 class="color_red">Total gasto {{ moedaLocal(total) }}</h2>
    <h2 class="mt_5">Para gastar {{ moedaLocal(saldoIncluido) }}</h2>
    <h2 class="mt_5" :class="saldoParaGastar < 0 ? 'color_red' : ''">
      Saldo: {{ moedaLocal(saldoParaGastar) }}
    </h2>
  </section>
</template>

<script>
import VerifyErroCode from '../mixins/erroMessage'
import tokenExpirado from '../mixins/tokenExpirado'
import ModalIncluirListaVue from '~/components/ModalIncluirLista.vue'
import { money } from '~/mixins/money'
import services from '~/services/services'

export default {
  components: {
    ModalIncluirListaVue,
  },
  data() {
    return {
      isLoading: false,
      isFullPage: true,
      data: [],
      incluirInfo: {
        nome_produto: '',
        preco_produto: '0',
        quantidade: '1',
        preco_total: '0',
        podeAlterar: false,
      },

      alterarNome: null,
      alterarPreco: null,
      alterarQuantidade: null,
      modal: false,
    }
  },

  computed: {
    money() {
      return money
    },
    saldoIncluido() {
      return this.$store.state.saldo
    },
    total() {
      let total = 0
      for (const index in this.data) {
        total += +this.data[index].preco_total
      }
      return total
    },
    gastar() {
      let total = 0
      const saldo = JSON.parse(window.localStorage.getItem('listaSaldo'))
      for (const index in saldo) {
        total += saldo[index].valor_saldo
      }

      return total
    },
    saldoParaGastar() {
      return this.saldoIncluido - this.total
    },
  },

  mounted() {
    this.getDados()
    this.getSaldo()
  },

  methods: {
    async getDados() {
      try {
        this.isLoading = true
        const { data } = await services.getLista()
        this.dadosFireBase = data
        if (data) {
          this.data = Object.keys(data).map((i) => data[i])
          const key = Object.keys(data)
          for (let i = 0; i < this.data.length; i++) {
            this.data[i].id = key[i]
          }
        }

        this.ordenar(this.data)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          if (error.response)
            errorMessage = tokenExpirado(error.response.data.error)
          else errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    async getSaldo() {
      try {
        this.isLoading = true
        const { data } = await services.getData()
        let saldo = data

        if (data) {
          saldo = Object.keys(data).map((i) => data[i])
          const key = Object.keys(data)
          for (let i = 0; i < saldo; i++) {
            saldo[i].id = key[i]
          }
        }
        this.$store.commit('GET_SALDO', saldo)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          if (error.response)
            errorMessage = tokenExpirado(error.response.data.error)
          else errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    async incluirLista() {
      try {
        this.isLoading = true
        const valor = this.regexFormater(this.incluirInfo.preco_produto)
        this.incluirInfo.preco_produto = valor
        const quantidade = +this.incluirInfo.quantidade
        this.incluirInfo.preco_total = +valor * +quantidade
        const { data } = await services.postLista(this.incluirInfo)
        this.incluirInfo.id = data.name
        this.data.push(this.incluirInfo)
        this.ordenar(this.data)
        this.incluirInfo = {
          nome_produto: '',
          preco_produto: '0',
          quantidade: '1',
          preco_total: '0',
          podeAlterar: false,
        }
        this.modal = false
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          if (error.response) {
            errorMessage = tokenExpirado(error.response.data.error)
          } else errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    async alterar(data) {
      try {
        this.isLoading = true

        const index = this.data.indexOf(data)
        const regexPreco = this.regexFormater(this.alterarPreco)
        data.nome_produto = this.alterarNome
        data.preco_produto = regexPreco
        data.quantidade = this.alterarQuantidade
        data.preco_total = +regexPreco * data.quantidade
        data.podeAlterar = false
        this.data[index] = data

        await services.putLista(data.id, data)
        this.ordenar(this.data)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          if (error.response)
            errorMessage = tokenExpirado(error.response.data.error)
          else errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    excluir(event) {
      try {
        this.$buefy.dialog.confirm({
          title: 'Deletar item',
          message: `Tem certeza que deseja excluir o item ${event.nome_produto}?`,
          confirmText: 'Deletar',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            this.isLoading = true
            const [data] = await this.data.splice(this.data.indexOf(event), 1)
            await services.deleteLista(data.id)
            this.$buefy.toast.open('Item deletado!')
            this.isLoading = false
          },
        })
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          if (error.response)
            errorMessage = tokenExpirado(error.response.data.error)
          else errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },

    ativarAlterar(data) {
      this.data.forEach((inf) => {
        if (inf.podeAlterar) {
          inf.podeAlterar = false
        }
      })
      this.alterarNome = data.nome_produto
      this.alterarPreco = this.moedaLocal(data.preco_produto)
      this.alterarQuantidade = data.quantidade
      data.podeAlterar = true
    },
    cancel(data) {
      data.podeAlterar = false
    },

    fecharModal() {
      this.modal = false
    },

    regexFormater(valor) {
      const regex = /[.]/gi
      return valor.replace('R$', '').replace(regex, '').replace(',', '.')
    },
    moedaLocal(value) {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    },
    ordenar(item) {
      item.sort((a, b) =>
        a.nome_produto.toLowerCase() > b.nome_produto.toLowerCase()
          ? 1
          : b.nome_produto.toLowerCase() > a.nome_produto.toLowerCase()
          ? -1
          : 0
      )
    },
  },
}
</script>

<style>
.icon-atualizar {
  display: flex;
}
#span {
  background: none;
  border: none;
  color: #363636;
}
</style>
