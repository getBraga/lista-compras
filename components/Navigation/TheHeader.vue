<template>
  <div>
  <b-navbar id="navbar"  fixed-top spaced  type="is-primary" shadow>
      <template slot="brand">
        <b-navbar-item tag="router-link"  to="/" >
          <span>Home</span>

        </b-navbar-item>
      </template>

      <template slot="start"></template>

  <template slot="end">
       <b-navbar-item tag="router-link"  to="/lista-compras" class="mr-10">
       <span>Lista de Compras</span>
        </b-navbar-item>
          <b-navbar-item tag="router-link"  to="/adiciona-saldo" >
       <span>Adicionar Saldo</span>
        </b-navbar-item>
  </template>

      <template slot="end">
     
        
      </template>
    </b-navbar>
  </div>
</template>

<script>


export default {
  name: "ComponentHeader",

};
</script>

<style lang="scss" scoped>


</style>
