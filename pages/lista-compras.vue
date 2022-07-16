<!-- eslint-disable vue/no-lone-template -->
<template>
  <section>
    <b-table :data="data" sticky-checkbox striped paginated :per-page="10">
      <template class="is-primary">
        <b-table-column
          v-for="column in columns"
          :key="column.id"
          v-bind="column"
        >
          <template
            v-if="column.searchable && !column.numeric"
            #searchable="props"
          >
            <b-input
              v-model="props.filters[props.column.field]"
              placeholder="Search..."
              icon="magnify"
              size="is-small"
            />
          </template>
          <template #default="props">
            {{ props.row[column.field] }}
          </template>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sortField: 'nome_produto',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      data: [
        {
          id: 1,
          nome_produto: 'Arroz',
          preco_produto: 16,
          quantidade: 1,
          preco_total: 16,
        },
        {
          id: 2,
          nome_produto: 'Feijão',
          preco_produto: 7.5,
          quantidade: 3,
          preco_total: 22.5,
        },
        {
          id: 3,
          nome_produto: 'Macarrão',
          preco_produto: 2.8,
          quantidade: 3,
          preco_total: 8.4,
        },
        {
          id: 4,
          nome_produto: 'Batata Frita',
          preco_produto: 7,
          quantidade: 1,
          preco_total: 7,
        },
        {
          id: 5,
          nome_produto: 'Açucar',
          preco_produto: 3,
          quantidade: 4,
          preco_total: 12,
        },
        {
          id: 5,
          nome_produto: 'Sal',
          preco_produto: 2.5,
          quantidade: 2,
          preco_total: 5,
        },
        {
          id: 5,
          nome_produto: 'Óleo',
          preco_produto: 8,
          quantidade: 4,
          preco_total: 32,
        },
        {
          id: 5,
          nome_produto: 'Café (Pipinela)',
          preco_produto: 14,
          quantidade: 2,
          preco_total: 28,
        },
        {
          id: 5,
          nome_produto: 'Biscoito Piraque',
          preco_produto: 4,
          quantidade: 2,
          preco_total: 8,
        },
        {
          id: 5,
          nome_produto: 'Requeijão',
          preco_produto: 8,
          quantidade: 1,
          preco_total: 8,
        },
        {
          id: 5,
          nome_produto: 'Café (Pilão)',
          preco_produto: 17,
          quantidade: 1,
          preco_total: 17,
        },
        {
          id: 5,
          nome_produto: 'Biscoito Trakinas',
          preco_produto: 3,
          quantidade: 3,
          preco_total: 9,
        },
      ],
      columns: [
        {
          field: 'nome_produto',
          label: 'Nome do Produto',
          searchable: true,
          sortable: true,
        },
        {
          field: 'preco_produto',
          label: 'Preço do Produto',
          sortable: true,
        },
        {
          field: 'quantidade',
          label: 'Quantidade',
          sortable: true,
        },
        {
          field: 'preco_total',
          label: 'Preço Total',
          sortable: true,
        },
      ],
    }
  },
}
</script>
