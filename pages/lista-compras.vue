<template>
  <section>
    <b-button type="is-primary" class="mb-20 mt-10">Novo item</b-button>

    <b-table :data="data" sticky-checkbox striped paginated :per-page="10">
      <b-table-column
        v-slot="props"
        searchable
        sortable
        field="nome_produto"
        label="Nome do Produto"
      >
        <b-input v-model="props.row.nome_produto" disabled />
      </b-table-column>

      <b-table-column
        v-slot="props"
        sortable
        field="preco_produto"
        label="Preço do Produto"
      >
        <b-input v-model="props.row.preco_produto" disabled />
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="quantidade"
        label="Quantidade"
        sortable
      >
        <b-input v-model="props.row.quantidade" disabled />
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="preco_total"
        label="Preço Total"
        sortable
      >
        <b-input v-model="props.row.preco_total" />
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="excluir_produto"
        label="Excluir"
        centered
      >
        <b-button class="btn-icon" @click="excluir(props.row)"
          ><b-icon icon="delete" type="is-primary" size="is-medium"> </b-icon
        ></b-button>
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="atualzar_produto"
        label="Atualizar Produto"
        centered
      >
        <b-button class="btn-icon" @click="excluir(props.row)"
          ><b-icon icon="pencil" type="is-primary" size="is-medium"> </b-icon
        ></b-button>
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
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    excluir(data) {
      // this.data = []
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
}
</script>
