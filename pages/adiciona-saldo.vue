<template>
  <section>
    <div class="h1_titulo">
      <h1>
        <strong>Adicionar Saldo</strong>
      </h1>
    </div>
    <!-- {{ lista }} -->
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
          {{ moedaLocal(props.row.valor_saldo) }}
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
  </section>
</template>

<script>
import ModalIncluirSaldoVue from '~/components/ModalIncluirSaldo.vue'
import idRandom from '~/mixins/idRandom'
import { money } from '~/mixins/money'
export default {
  components: {
    ModalIncluirSaldoVue,
  },
  data() {
    return {
      modal: false,
      alterarNome: null,
      alterarPreco: '0',
      incluirSaldo: {
        id: idRandom(),
        nome_saldo: '',
        valor_saldo: '0',
        podeAlterar: false,
        data: new Date(),
      },
      date: new Date(),
      datetime: new Date(),
      data: [
        {
          id: idRandom(),
          nome_saldo: 'Vale alimentação',
          valor_saldo: 650,
          data: '2022/08/07',
          podeAlterar: false,
        },

        {
          id: idRandom(),
          nome_saldo: 'Bolo Sara',
          valor_saldo: 200,
          data: '2022/08/09',
          podeAlterar: false,
        },
        {
          id: idRandom(),
          nome_saldo: 'Dinheiro extra',
          valor_saldo: 200,
          data: '2022/08/09',
          podeAlterar: false,
        },
        {
          id: idRandom(),
          nome_saldo: 'Sobra cartao',
          valor_saldo: 200,
          data: '2022/08/09',
          podeAlterar: false,
        },
      ],
    }
  },

  computed: {
    money() {
      return money
    },
    lista() {
      return this.$store.state.lista
    },
  },
  watch: {},
  mounted() {
    if (!window.localStorage.listaSaldo) {
      window.localStorage.setItem('listaSaldo', JSON.stringify(this.data))
    }

    this.data = JSON.parse(window.localStorage.getItem('listaSaldo'))
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
    incluirSaldoLista() {
      const valor = +this.regexFormater(this.incluirSaldo.valor_saldo)
      this.incluirSaldo.valor_saldo = +valor
      const data = this.formatarData(this.incluirSaldo.data)
      this.incluirSaldo.data = data
      this.data.push(this.incluirSaldo)
      this.ordenar(this.data)
      window.localStorage.setItem('listaSaldo', JSON.stringify(this.data))
      this.incluirSaldo = {
        id: idRandom(),
        nome_saldo: '',
        valor_saldo: '0',
        data: new Date(),
        podeAlterar: false,
      }
      this.modal = false
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
    alterar(event) {
      event.nome_saldo = this.alterarNome
      event.valor_saldo = this.alterarPreco
      event.data = this.datetime
      event.podeAlterar = false
      this.ordenar(this.data)
      window.localStorage.setItem('listaSaldo', JSON.stringify(this.data))
    },
    excluir(event) {
      this.$buefy.dialog.confirm({
        title: 'Deletar item',
        message: `Tem certeza que deseja excluir o item: ${event.nome_saldo}?`,
        confirmText: 'Deletar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open('Item deletado!')
          this.data.splice(this.data.indexOf(event), 1)
          window.localStorage.setItem('listaSaldo', JSON.stringify(this.data))
          this.$store.dispatch('deletarLista')
        },
      })
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
