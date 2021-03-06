import criarId from './idRandom'

const data = [
  {
    id: criarId(),
    nome_produto: 'Arroz',
    preco_produto: 16,
    quantidade: 1,
    preco_total: 16,
  },
  {
    id: criarId(),
    nome_produto: 'Feijão',
    preco_produto: 7.5,
    quantidade: 3,
    preco_total: 22.5,
  },
  {
    id: criarId(),
    nome_produto: 'Macarrão',
    preco_produto: 2.8,
    quantidade: 3,
    preco_total: 8.4,
  },
  {
    id: criarId(),
    nome_produto: 'Batata Frita',
    preco_produto: 7,
    quantidade: 1,
    preco_total: 7,
  },
  {
    id: criarId(),
    nome_produto: 'Açucar',
    preco_produto: 3,
    quantidade: 4,
    preco_total: 12,
  },
  {
    id: criarId(),
    nome_produto: 'Sal',
    preco_produto: 2.5,
    quantidade: 2,
    preco_total: 5,
  },
  {
    id: criarId(),
    nome_produto: 'Óleo',
    preco_produto: 8,
    quantidade: 4,
    preco_total: 32,
  },
  {
    id: criarId(),
    nome_produto: 'Café (Pipinela)',
    preco_produto: 14,
    quantidade: 2,
    preco_total: 28,
  },
  {
    id: criarId(),
    nome_produto: 'Biscoito Piraque',
    preco_produto: 4,
    quantidade: 2,
    preco_total: 8,
  },
  {
    id: criarId(),
    nome_produto: 'Requeijão',
    preco_produto: 8,
    quantidade: 1,
    preco_total: 8,
  },
  {
    id: criarId(),
    nome_produto: 'Café (Pilão)',
    preco_produto: 17,
    quantidade: 1,
    preco_total: 17,
  },
  {
    id: criarId(),
    nome_produto: 'Biscoito Trakinas',
    preco_produto: 3,
    quantidade: 3,
    preco_total: 9,
  },
]

const columns = [
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
]

export { data, columns, criarId }
