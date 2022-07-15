<template>
  <div>
    <b-navbar id="navbar" fixed-top spaced type="is-white" shadow>
      <template slot="brand">
        <b-navbar-item id="navbar-logo" tag="router-link" to="/">
          <strong>Home</strong>
        </b-navbar-item>
      </template>

      <template slot="start"></template>

      <template slot="end">
        <b-navbar-item
          id="navbar-item"
          tag="router-link"
          to="/lista-compras"
          class="mr-10"
        >
          <span>Lista de Compras</span>
        </b-navbar-item>
        <b-navbar-item id="navbar-item" tag="router-link" to="/adiciona-saldo">
          <span>Adicionar Saldo</span>
        </b-navbar-item>
      </template>

      <template slot="end"> </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeader',
}
</script>

<style lang="scss" scoped>
#navbar-logo {
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #ac6c47;
  &:hover {
    background: none;
    color: #7f4427;
  }
  &:focus {
    background: none;
    color: #7f4427;
  }
}
#navbar-item {
  &:hover {
    background: none;
    color: #ac6c47;
  }
  &:focus {
    background: none;
    color: #ac6c47;
  }
}
</style>
