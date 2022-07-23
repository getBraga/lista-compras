<template>
  <div>
    <ModalDefault :modal="modal" :fechar-modal="fecharModal">
      <template #conteudo>
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
      </template>
      <template #btn>
        <b-button
          class="btn_modal_incluir"
          type="is-primary"
          @click="incluirLista"
          >Incluir</b-button
        >
      </template>
    </ModalDefault>
  </div>
</template>

<script>
import ModalDefault from '~/components/component-default/ModalDefault.vue'
import { money } from '~/mixins/money'
export default {
  components: {
    ModalDefault,
  },
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
      this.nomeProdutoValue = ''
      this.precoValue = '0'
      this.quantidadeValue = '1'
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

<style></style>
