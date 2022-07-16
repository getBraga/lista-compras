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
import { columns, data } from '@/data/data'
export default {
  data() {
    return {
      sortField: 'nome_produto',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      data: [],
      columns: [],
      // columns: [
      //   {
      //     field: 'nome_produto',
      //     label: 'Nome do Produto',
      //     searchable: true,
      //     sortable: true,
      //   },
      //   {
      //     field: 'preco_produto',
      //     label: 'Preço do Produto',
      //     sortable: true,
      //   },
      //   {
      //     field: 'quantidade',
      //     label: 'Quantidade',
      //     sortable: true,
      //   },
      //   {
      //     field: 'preco_total',
      //     label: 'Preço Total',
      //     sortable: true,
      //   },
      // ],
    }
  },
  mounted() {
    this.data = data
    this.columns = columns
  },
}
</script>
