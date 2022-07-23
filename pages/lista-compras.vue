<template>
  <section>
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
    />

    <b-table :data="data" sticky-checkbox striped paginated :per-page="10">
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
        <span v-if="!props.row.podeAlterar">{{
          moedaLocal(+props.row.preco_produto)
        }}</span>
        <b-input v-else v-model="alterarPreco" v-money="money" />
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
    <h2 class="color_red">Total gasto {{ total }}</h2>
    <h2 class="mt_5">Para gastar {{ moedaLocal(gastar) }}</h2>
    <h2 class="mt_5" :class="saldo < 0 ? 'color_red' : ''">
      Saldo {{ moedaLocal(saldo) }}
    </h2>
  </section>
</template>

<script>
import { dados } from '@/data/data'
import ModalIncluirListaVue from '~/components/ModalIncluirLista.vue'
import idRandom from '~/mixins/idRandom'
import { money } from '~/mixins/money'

export default {
  components: {
    ModalIncluirListaVue,
  },
  data() {
    return {
      sortField: 'nome_produto',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      data: [],
      incluirInfo: {
        id: idRandom(),
        nome_produto: '',
        preco_produto: '0',
        quantidade: '1',
        preco_total: '0',
        podeAlterar: false,
      },
      gastar: 630,

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
    total() {
      let total = 0
      for (const index in this.data) {
        total += +this.data[index].preco_total
      }
      return this.moedaLocal(total)
    },
    saldo() {
      return this.gastar - +this.regexFormater(this.total)
    },
  },

  mounted() {
    this.ordenar(dados)
    if (!window.localStorage.listaCompras) {
      window.localStorage.setItem('listaCompras', JSON.stringify(dados))
    }

    this.data = JSON.parse(window.localStorage.getItem('listaCompras'))
    this.$store.commit(
      'GETDADOS',
      JSON.parse(window.localStorage.getItem('listaCompras'))
    )
  },

  methods: {
    excluir(data) {
      this.$buefy.dialog.confirm({
        title: 'Deletar item',
        message: `Tem certeza que deseja excluir o item ${data.nome_produto}?`,
        confirmText: 'Deletar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.data.splice(this.data.indexOf(data), 1)
          this.$buefy.toast.open('Item deletado!')
          window.localStorage.setItem('listaCompras', JSON.stringify(this.data))
          this.$store.dispatch('deletarLista')
        },
      })
    },
    ativarAlterar(data) {
      this.data.forEach((inf) => {
        if (inf.podeAlterar) {
          inf.podeAlterar = false
        }
      })
      this.alterarNome = data.nome_produto
      this.alterarPreco = data.preco_produto
      this.alterarQuantidade = data.quantidade
      data.podeAlterar = true
    },
    cancel(data) {
      data.podeAlterar = false
    },
    alterar(data) {
      const index = this.data.indexOf(data)
      data.nome_produto = this.alterarNome
      data.preco_produto = this.regexFormater(this.alterarPreco)
      data.quantidade = this.alterarQuantidade
      data.preco_total = data.preco_produto * data.quantidade
      this.data[index] = data
      data.podeAlterar = false
      window.localStorage.setItem('listaCompras', JSON.stringify(this.data))
      this.$store.commit(
        'UPDATEDADOS',
        JSON.parse(window.localStorage.getItem('listaCompras'))
      )
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
    incluirLista() {
      const valor = +this.regexFormater(this.incluirInfo.preco_produto)
      const quantidade = +this.incluirInfo.quantidade
      this.incluirInfo.preco_produto = `${valor}.00`
      this.incluirInfo.preco_total = +valor * +quantidade
      this.incluirInfo.id = idRandom()
      this.data.push(this.incluirInfo)
      this.ordenar(this.data)
      this.incluirInfo = {
        nome_produto: '',
        preco_produto: '0',
        quantidade: '1',
        preco_total: '0',
        podeAlterar: false,
      }
      window.localStorage.setItem('listaCompras', JSON.stringify(this.data))
      this.modal = false
    },
  },
}
</script>

<style>
.icon-atualizar {
  display: flex;
}
</style>
