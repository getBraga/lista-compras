<template>
  <div>
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
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
import tokenExpirado from '../mixins/tokenExpirado'
import service from '../services/services'
export default {
  name: 'CreateUser',
  // components: {
  //   loading,
  // },
  data() {
    return {
      isLoading: false,
      isFullPage: true,
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
        this.isLoading = true
        const name = this.login.name
        const dto = {
          nome: '',
          email: null,
        }
        window.localStorage.accessToken = ''
        window.localStorage.uid = ''

        await this.$firebase
          .auth()
          .createUserWithEmailAndPassword(this.login.email, this.login.password)
          .then(function ({ user }) {
            user.updateProfile({
              displayName: name,
            })

            window.localStorage.setItem(
              'accessToken',
              user.multiFactor.user.accessToken
            )
            window.localStorage.setItem('uid', user.multiFactor.user.uid)

            dto.nome = name
            dto.email = user.multiFactor.user.email
            // email
          })

        await this.$buefy.dialog.alert('Usuário cadastrado com sucesso!')
        await this.dtoPost(dto)
        this.login.name = ''
        this.login.email = ''
        this.login.password = ''
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = tokenExpirado(error.response.data.error)
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
        })
      }
    },
    async dtoPost(data) {
      try {
        this.isLoading = true
        await service.postDadosUsuarios(data)
        window.localStorage.accessToken = ''
        window.localStorage.uid = ''
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.isLoading = false
        const errorCode = error.code
        let errorMessage = VerifyErroCode(errorCode)

        if (errorMessage == null) {
          errorMessage = tokenExpirado(error.response.data.error)
        }
        this.$buefy.dialog.alert({
          title: 'Error',
          message: `${errorMessage}`,
          type: 'is-danger',
          hasIcon: true,
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
