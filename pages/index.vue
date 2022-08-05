<template>
  <section>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
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

  data() {
    return {
      isLoading: false,
      isFullPage: true,
    }
  },
  async created() {
    try {
      await this.$store.dispatch('getUsuario')
      this.isLoading = false
    } catch (error) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.localStorage.accessToken = ''
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.localStorage.uid = ''
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.localStorage.token = ''
      this.isLoading = true

      this.$router.push({ name: 'login' })
    }
  },
  methods: {},
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
