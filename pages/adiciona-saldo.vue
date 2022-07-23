<template>
  <section>
    <div class="h1_titulo">
      <h1>
        <strong>Adicionar Saldo</strong>
      </h1>
    </div>
    {{ lista }}
    <b-button type="is-primary" class="mb_20 mt_10">Novo item</b-button>
  </section>
</template>

<script>
export default {
  computed: {
    lista() {
      return this.$store.state.lista
    },
  },
  // mounted() {
  //   this.$store.commit(
  //     'GET_DADOS',
  //     JSON.parse(window.localStorage.getItem('listaCompras'))
  //   )
  // },
}
</script>

<style></style>
