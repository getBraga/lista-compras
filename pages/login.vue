<template>
  <section class="login">
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
    <h1 class="h1-titulo-login">Lista de Compras</h1>
    <form class="div-form">
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
          password-reveal
        />
      </b-field>

      <router-link id="redefinir" to="/redefinir-senha"
        >Esqueceu a senha?</router-link
      >
      <b-button
        class="btn"
        type="is-primary"
        :disabled="disable"
        @click.prevent="Login"
        >Entrar</b-button
      >
      <nuxt-link id="cadastrar" to="/cadastrar">Cadastre-se</nuxt-link>
    </form>
  </section>
</template>

<script>
import VerifyErroCode from '../mixins/erroMessage'
export default {
  name: 'LoginDefault',
  data() {
    return {
      isLoading: false,
      isFullPage: true,
      token: '',
      logar: this.$store.state.login,
      login: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    disable() {
      let disabled = false
      this.login.email <= 0 || this.login.password <= 0
        ? (disabled = true)
        : (disabled = false)
      return disabled
    },
  },
  methods: {
    Login() {
      this.isLoading = true

      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then((data) => {
          window.localStorage.uid = data.user.uid

          // window.localStorage.refreshToken = data.user.refreshToken
          window.localStorage.accessToken =
            data.user.multiFactor.user.accessToken
          this.$store.commit('GET_USUARIO', data)
          this.$router.push({ name: 'index' })
        })
        .catch((error) => {
          this.isLoading = false
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
          })
        })

      //  console.log('foi')
      //
    },
    // LogiUserWithGoogle() {
    //   const provider = new firebase.auth.GoogleAuthProvider()
    //   const teste = firebase.auth().getRedirectResult()
    //   this.$store.commit('LOGIN_USUARIO', teste)
    //   this.signIn(provider)
    // },
    // LoginUserFaceBook() {
    //   const provider = new firebase.auth.FacebookAuthProvider()

    //   const ass = this.signIn(provider)
    // },

    // async signIn(provider) {
    //   const teste = await firebase.auth().signInWithPopup(provider)
    //   window.localStorage.uid = teste.user.uid
    //   window.localStorage.accessToken = teste.credential.accessToken
    // },
  },
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.1rem;
  /* font-family: 'Times New Roman', Times, serif; */
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
  height: 100vh;
  /* background: #c57112; */
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

#redefinir {
  margin: 10px 0;
  text-transform: none;
  font-size: 0.875rem;
  color: #7f3f1f;
  text-align: right;
}
#cadastrar {
  margin: 10px 0;
  text-transform: none;
  color: #7f3f1f;
  text-align: center;
}
.h1-titulo-login {
  font-size: 1.8rem;
}
</style>
