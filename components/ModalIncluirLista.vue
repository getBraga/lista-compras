<template>
  <div>
    <section v-if="modal" class="modal_default">
      <form class="modal_container_default">
        <b-button
          class="modal_default_fechar"
          type="is-primary"
          @click="fecharModal"
          >X</b-button
        >
        <div class="mb_20">
          <label for="nomeProdutoValue">
            <p class="color_principal">Nome do item</p>
            <b-input
              v-model="nomeProdutoValue"
              placeholder="ex: arroz(branco)"
            />
          </label>
        </div>
        <div class="mb_20">
          <label for="precoValue">
            <p class="color_principal">Preço do produto</p>
            <b-input v-model.lazy="precoValue" v-money="valor" />
          </label>
        </div>
        <div class="mb_20">
          <label for="quantidadeValue">
            <p class="color_principal">Quantidade</p>
            <b-input v-model="quantidadeValue" type="number" min="1" />
          </label>
        </div>

        <div class="div_btn_modal_incluir">
          <b-button
            class="btn_modal_incluir"
            type="is-primary"
            :disabled="!nomeProdutoValue"
            @click="incluirLista"
            >Incluir</b-button
          >
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { money } from '~/mixins/money'

export default {
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    fecharModal: {
      type: Function,
      required: true,
    },
    incluirLista: {
      type: Function,
      required: true,
    },
    nomeLista: {
      type: String,
      required: true,
    },
    preco: {
      type: String,
      required: true,
    },
    quantidade: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      nomeProdutoValue: this.nomeLista,
      precoValue: this.preco,
      quantidadeValue: this.quantidade,
    }
  },
  computed: {
    valor() {
      return money
    },
  },

  watch: {
    modal() {
      this.nomeProdutoValue = this.nomeLista
      this.precoValue = this.preco
      this.quantidadeValue = this.quantidade
    },
    nomeProdutoValue() {
      this.$emit('update:nomeLista', this.nomeProdutoValue)
    },
    precoValue() {
      this.$emit('update:preco', this.precoValue)
    },
    quantidadeValue() {
      this.$emit('update:quantidade', this.quantidadeValue)
    },
  },
}
</script>

<style scoped lang="scss">
.modal_default::before {
  content: '';
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal_default {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 80px;
  z-index: 60;
}
.modal_container_default {
  position: fixed;
  background: white;
  width: 60%;
  padding: 40px;
  // z-index: 100;
}
.div_btn_modal_incluir {
  display: flex;
  align-items: center;
  width: 100%;
}
.btn_modal_incluir {
  margin: 0 auto;
  width: 95%;
}
.modal_default_fechar {
  position: absolute;
  top: -15px;
  right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
