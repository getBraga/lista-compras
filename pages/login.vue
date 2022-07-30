<template>
  <section class="login">
    <b-loading
      v-model="isLoading"
      :is-full-page="isFullPage"
      :can-cancel="true"
    ></b-loading>
    <h1>Lista de Compras</h1>
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
      <b-field label="Password">
        <b-input
          id="password"
          v-model="login.password"
          type="password"
          name="password"
          placeholder="Senha"
        />
      </b-field>

      <!-- <router-link to="/redefinir-senha" id="redefinir"
        >Esqueceu a senha?</router-link
      > -->
      <b-button class="btn" type="is-primary" @click.prevent="Login"
        >Entrar</b-button
      >
      <!-- <router-link to="/cadastrar" id="cadastrar">Cadastre-se</router-link> -->
      <!-- <button class="btn" @click.prevent="LoginUserFaceBook">Facebook</button> -->
    </form>
  </section>
</template>

<script>
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

  methods: {
    Login() {
      this.isLoading = true

      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.login.email, this.login.password)
        .then((data) => {
          window.localStorage.uid = data.user.uid

          window.localStorage.refreshToken = data.user.refreshToken
          window.localStorage.accessToken =
            data.user.multiFactor.user.accessToken
          this.$store.commit('GET_USUARIO', data)
          this.$router.push({ name: 'index' })
        })
        .catch(() => {
          this.isLoading = false
          this.$buefy.dialog.alert({
            title: 'Error',
            message: `Email ou Senha Invalido!`,
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true,
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
label {
  margin-top: 10px;
  font-size: 0.875rem;
}
.btn {
  margin-top: 10px;
}
input {
  margin-top: 5px;
  padding: 10px;
  font-size: 1rem;
  background: #fff;
  border: 1px solid rgb(192, 182, 182);
  outline-color: #7f3f1f;
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
</style>
