<template>
  <div>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
    <b-navbar id="navbar" fixed-top spaced type="is-white" shadow>
      <template slot="brand">
        <b-navbar-item id="navbar_logo" tag="router-link" to="/">
          <strong>Home</strong>
        </b-navbar-item>
      </template>

      <template slot="start"></template>

      <template slot="end">
        <b-navbar-item
          id="navbar_item"
          tag="router-link"
          to="/lista-compras"
          class="mr-10"
        >
          <span>Lista de Compras</span>
        </b-navbar-item>
        <b-navbar-item id="navbar_item" tag="router-link" to="/adiciona-saldo">
          <span>Adicionar Saldo</span>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-dropdown aria-role="list" position="is-bottom-left">
          <template #trigger="{ active }">
            <b-button
              :label="nome"
              type="is-primary"
              :icon-right="active ? 'menu-up' : 'menu-down'"
            />
          </template>

          <b-navbar-item tag="router-link" to="/login" class="mr-10">
            <b-button class="btn_icon icon_primary icon-padding" @click="sair">
              <b-icon icon="power" type="is-primary" size="is-small"></b-icon
              ><nuxt-link to="#">Logout</nuxt-link></b-button
            >
          </b-navbar-item>
        </b-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeader',
  data() {
    return {
      isLoading: false,
      isFullPage: true,
    }
  },
  computed: {
    nome() {
      return this.$store.state.usuario.primeiroNome
    },
  },
  async created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    if (window.localStorage.uid && window.localStorage.accessToken)
      await this.$store.dispatch('getUsuario')
  },
  methods: {
    sair() {
      try {
        this.isLoading = true
        this.$store.commit('GET_USUARIO', [])
        window.localStorage.accessToken = ''
        window.localStorage.uid = ''
        this.isLoading = false
      } catch (error) {
        return error
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#navbar_logo {
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
#navbar_item {
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
