<template>
  <section>
    <h1 class="manutencao">
      <strong
        >Em manutenção...

        <p class="mt_40">
          <nuxt-link to="/lista-compras">
            <b-button type="is-primary">Lista de compras</b-button></nuxt-link
          >
        </p></strong
      >
    </h1>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
}
</script>
<style lang="scss">
.manutencao {
  text-align: center;
  font-size: 5rem;
  max-width: 100%;
}
@media screen and (max-width: 768px) {
  .manutencao {
    font-size: 2rem;
  }
}
</style>
