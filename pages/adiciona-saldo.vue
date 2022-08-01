<template>
  <section>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
    <div class="h1_titulo">
      <h1>
        <strong>Adicionar Saldo</strong>
      </h1>
    </div>

    <b-button type="is-primary" class="mb_20 mt_10" @click="modal = true"
      >Novo item</b-button
    >
    <ModalIncluirSaldoVue
      :modal="modal"
      :fechar-modal="fecharModal"
      :incluir-saldo="incluirSaldoLista"
      :nome-saldo.sync="incluirSaldo.nome_saldo"
      :saldo.sync="incluirSaldo.valor_saldo"
      :date.sync="incluirSaldo.data"
    />
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
        field="nome_saldo"
        label="Saldo"
      >
        <span v-if="!props.row.podeAlterar">{{ props.row.nome_saldo }}</span>
        <b-input v-else v-model="alterarNome" />
      </b-table-column>

      <b-table-column v-slot="props" sortable field="valor_saldo" label="Valor">
        <span v-if="!props.row.podeAlterar">
          {{ moedaLocal(+props.row.valor_saldo) }}
        </span>
        <!-- <span v-if="!props.row.podeAlterar">
          <b-input v-model="props.row.preco_produto" v-money="money" />
        </span> -->

        <b-input v-else v-model.lazy="alterarPreco" v-money="money" />
      </b-table-column>

      <b-table-column v-slot="props" field="data" label="Data" sortable>
        <span v-if="!props.row.podeAlterar">{{
          new Date(props.row.data).toLocaleDateString()
        }}</span>
        <b-field v-else>
          <b-datepicker
            ref="datepicker"
            v-model="datetime"
            expanded
            position="is-top-right"
            placeholder="Selecione uma data"
            :mobile-native="false"
          >
          </b-datepicker>
          <b-button
            icon-left="calendar-today"
            type="is-primary"
            class="btn_data_flex"
            @click="$refs.datepicker.toggle()"
          />
        </b-field>
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
          <strong>Nenhum saldo cadastrado </strong>
        </div>
      </template>
    </b-table>
    <h2 class="mt_5">Saldo {{ moedaLocal(total) }}</h2>
  </section>
</template>

<script>
import VerifyErroCode from '../mixins/erroMessage'
import tokenExpirado from '../mixins/tokenExpirado'
import services from '~/services/services'
import ModalIncluirSaldoVue from '~/components/ModalIncluirSaldo.vue'
import { money } from '~/mixins/money'
export default {
  components: {
    ModalIncluirSaldoVue,
  },
  data() {
    return {
      isLoading: false,
      isFullPage: true,
      dadosFireBase: null,
      modal: false,
      alterarNome: null,
      alterarPreco: '0',
      incluirSaldo: {
        id: null,
        nome_saldo: '',
        valor_saldo: '0',
        podeAlterar: false,
        data: new Date(),
      },
      date: new Date(),
      datetime: new Date(),
      data: [],
    }
  },

  computed: {
    money() {
      return money
    },
    total() {
      let soma = 0
      for (const index in this.data) {
        soma += +this.data[index].valor_saldo
      }

      return soma
    },
  },
  watch: {},
  mounted() {
    this.getDados()
    this.ordenar(this.data)
  },
  methods: {
    ordenar(event) {
      event.sort((a, b) =>
        a.nome_saldo.toLowerCase() > b.nome_saldo.toLowerCase()
          ? 1
          : a.nome_saldo.toLowerCase() < b.nome_saldo.toLowerCase()
          ? -1
          : 0
      )
    },
    fecharModal() {
      this.modal = false
    },
    async getDados() {
      try {
        this.isLoading = true
        const { data } = await services.getData()

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
          errorMessage = tokenExpirado(error.response.data.error)
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    async incluirSaldoLista() {
      try {
        this.isLoading = true
        const valor = await this.regexFormater(this.incluirSaldo.valor_saldo)
        this.incluirSaldo.valor_saldo = valor
        const data = this.formatarData(this.incluirSaldo.data)
        this.incluirSaldo.data = new Date(data)
        const paiId = await services.postData(this.incluirSaldo)
        this.incluirSaldo.id = paiId.data.name
        this.data.push(this.incluirSaldo)
        this.ordenar(this.data)
        this.incluirSaldo = {
          nome_saldo: '',
          valor_saldo: '0',
          data: new Date(),
          podeAlterar: false,
        }
        this.modal = false
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = tokenExpirado(error.response.data.error)
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    regexFormater(valor) {
      const regex = /[.]/gi
      return valor.replace('R$', '').replace(regex, '').replace(',', '.')
    },

    formatarData(event) {
      const data = new Date(event)
      const ano = data.getFullYear()
      const dia = data.getDate()
      const mes =
        data.getMonth() + 1 < 10
          ? `0${data.getMonth() + 1}`
          : data.getMonth() + 1
      const formatar = `${ano}/${mes}/${dia}`
      return formatar
    },
    moedaLocal(value) {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    },
    ativarAlterar(event) {
      this.data.forEach((item) => {
        if (item.podeAlterar) {
          item.podeAlterar = false
        }
      })

      this.alterarNome = event.nome_saldo
      this.alterarPreco = this.moedaLocal(event.valor_saldo)
      this.datetime = new Date(event.data)
      event.podeAlterar = true
    },
    async alterar(event) {
      try {
        this.isLoading = true
        const valor = this.regexFormater(this.alterarPreco)
        event.nome_saldo = this.alterarNome
        event.valor_saldo = +valor
        event.data = this.datetime
        event.podeAlterar = false
        await services.putData(event.id, event)
        this.ordenar(this.data)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = tokenExpirado(error.response.data.error)
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
          message: `Tem certeza que deseja excluir o item: ${event.nome_saldo}?`,
          confirmText: 'Deletar',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            this.isLoading = true
            this.$buefy.toast.open('Item deletado!')
            const [data] = await this.data.splice(this.data.indexOf(event), 1)
            await services.deleteData(data.id)
            this.isLoading = false
          },
        })
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = tokenExpirado(error.response.data.error)
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .btn_data_flex {
    display: none;
  }
}
</style>
