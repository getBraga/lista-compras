<template>
  <section class="login">
    <h1>Redefinir Senha</h1>
    <p>
      Ao clicar em redefinir a senha um link será enviado para o email
      cadastrado.
    </p>

    <form class="div-form">
      <b-field label="Email">
        <b-input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="Email"
        />
      </b-field>

      <b-button
        class="btn"
        type="is-primary"
        :disabled="email <= 0"
        @click.prevent="recuperarSenha"
        >Enviar</b-button
      >
      <nuxt-link id="cadastrar" to="/login">Voltar</nuxt-link>
    </form>
  </section>
</template>

<script>
import VerifyErroCode from '../mixins/erroMessage'
export default {
  name: 'CreateUser',

  data() {
    return {
      email: null,
    }
  },
  methods: {
    async recuperarSenha() {
      try {
        await this.$firebase.auth().sendPasswordResetEmail(this.email)
        alert('Link enviado com sucesso!')
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
h1,
p {
  color: #fff;
  /* opacity: 0.9; */
}
p {
  max-width: 300px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 10px;
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
</style>
