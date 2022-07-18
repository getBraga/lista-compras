<template>
  <section>
    <b-button type="is-primary" class="mb-20 mt-10">Novo item</b-button>

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
        <span v-if="!props.row.podeAlterar">{{ props.row.preco_produto }}</span>
        <b-input v-else v-model="alterarPreco" />
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="quantidade"
        label="Quantidade"
        sortable
      >
        <span v-if="!props.row.podeAlterar">{{ props.row.quantidade }}</span>
        <b-input v-else v-model="alterarQuantidade" />
      </b-table-column>

      <b-table-column v-slot="props" field="preco_total" label="Total" sortable>
        <span>{{ props.row.preco_total }}</span>
      </b-table-column>
      <b-table-column v-slot="props" field="excluir_produto" label="Excluir">
        <b-button class="btn-icon" @click="excluir(props.row)"
          ><b-icon class="icon-lixeira" icon="delete" size="is-medium"> </b-icon
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
          class="btn-icon"
          @click="ativarAlterar(props.row)"
          ><b-icon
            class="icon-primary"
            icon="pencil"
            type="is-primary"
            size="is-medium"
          >
          </b-icon>
        </b-button>
        <div v-show="props.row.podeAlterar" class="icon-atualizar">
          <b-button
            v-show="props.row.podeAlterar"
            class="btn-icon"
            @click="props.row.podeAlterar = false"
          >
            <b-icon
              class="close-icon"
              icon="close-circle-outline"
              type="is-second"
              size="is-medium"
            >
            </b-icon
          ></b-button>
          <b-button
            v-show="props.row.podeAlterar"
            class="btn-icon"
            @click="alterar(props.row)"
          >
            <b-icon
              class="icon-primary-hover"
              icon="check-circle"
              type="is-primary"
              size="is-medium"
            >
            </b-icon
          ></b-button>
        </div>
      </b-table-column>
      <template #empty>
        <div class="has-text-centered">
          <strong>Nenhum produto cadastrado </strong>
        </div>
      </template>
    </b-table>
  </section>
</template>

<script>
import { data } from '@/data/data'
export default {
  data() {
    return {
      sortField: 'nome_produto',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      data: [],
      alterarNome: null,
      alterarPreco: null,
      alterarQuantidade: null,
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    excluir(data) {
      this.$buefy.dialog.confirm({
        title: 'Deleting account',
        message: `Tem certeza que deseja excluir o item ${data.nome_produto}?`,
        confirmText: 'Deletar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.data.splice(this.data.indexOf(data), 1)
          this.$buefy.toast.open('Item deletado!')
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
      data.preco_produto = this.alterarPreco
      data.quantidade = this.alterarQuantidade
      this.data[index] = data
      data.podeAlterar = false
    },
  },
}
</script>
<style scoped>
.icon-atualizar {
  display: flex;
}
</style>
