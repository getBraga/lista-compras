<template>
  <div>
    <section class="login">
      <h1 class="h1-titulo-login">Cadastro</h1>
      <form class="div-form">
        <b-field label="Nome">
          <b-input
            id="name"
            v-model="login.name"
            type="name"
            name="name"
            placeholder="Nome"
          />
        </b-field>
        <b-field label="Email">
          <b-input
            id="email"
            v-model="login.email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </b-field>

        <b-field label="Senha">
          <b-input
            id="password"
            v-model="login.password"
            type="password"
            name="password"
            placeholder="Senha"
            minlength="6"
            password-reveal
          />
        </b-field>

        <b-button
          :disabled="!disabled"
          class="btn"
          type="is-primary"
          @click.prevent="createNewUser"
        >
          Cadastrar
        </b-button>
        <nuxt-link id="cadastrar" to="/login">Voltar</nuxt-link>
      </form>
    </section>
  </div>
</template>

<script>
import VerifyErroCode from '../mixins/erroMessage'
export default {
  name: 'CreateUser',
  // components: {
  //   loading,
  // },
  data() {
    return {
      loading: false,
      token: '',
      logar: this.$store.state.login,
      login: {
        email: '',
        password: '',
        name: '',
      },
    }
  },
  computed: {
    disabled() {
      let habilitar = false
      // eslint-disable-next-line no-unused-expressions
      this.login.password.length >= 6 &&
      this.login.name.length > 0 &&
      this.login.email.length > 0
        ? (habilitar = true)
        : false
      return habilitar
    },
  },
  methods: {
    async createNewUser() {
      try {
        const name = this.login.name

        await this.$firebase
          .auth()
          .createUserWithEmailAndPassword(this.login.email, this.login.password)
          .then(function ({ user }) {
            user.updateProfile({
              displayName: name,
            })
          })
        await this.$buefy.dialog.alert('Usuário cadastrado com sucesso!')
        this.login.name = ''
        this.login.email = ''
        this.login.password = ''
      } catch (error) {
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = error.message
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true,
        })
      }
    },
  },
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  color: #fff;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: #7f3f1f;
}
.div-form {
  background: #eee;
  color: #7f3f1f;
  min-width: 25%;
  justify-self: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 10px;
}

#cadastrar {
  text-transform: capitalize;
  margin: 10px 0;
  text-transform: none;
  color: #7f3f1f;
  text-align: center;
}

.h1-titulo-login {
  font-size: 1.8rem;
}
</style>
