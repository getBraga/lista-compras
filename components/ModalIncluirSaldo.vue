<template>
  <div>
    <ModalDefault :modal="modal" :fechar-modal="fecharModal">
      <template #conteudo>
        <div class="mb_20">
          <label for="nomeProdutoValue">
            <p class="color_principal">Nome do Saldo</p>
            <b-input
              v-model="nomeSaldoValue"
              placeholder="ex: Vale alimentação"
            />
          </label>
        </div>
        <div class="mb_20">
          <label for="saldoValue">
            <p class="color_principal">Preço do produto</p>

            <b-input v-model.lazy="saldoValue" v-money="valor" />
          </label>
        </div>
        <div class="mb_20">
          <label for="dateValue">
            <p class="color_principal">Data</p>
            <b-field>
              <b-datepicker
                ref="datepicker"
                v-model="dateValue"
                expanded
                position="is-top-right"
                placeholder="Selecione uma data"
                :mobile-native="false"
              >
              </b-datepicker>
              <b-button
                icon-left="calendar-today"
                type="is-primary"
                @click="$refs.datepicker.toggle()"
              />
            </b-field>
          </label>
        </div>
      </template>
      <template #btn>
        <b-button
          class="btn_modal_incluir"
          type="is-primary"
          @click="incluirSaldo"
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
    incluirSaldo: {
      type: Function,
      required: true,
    },
    nomeSaldo: {
      type: String,
      required: true,
    },
    saldo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      nomeSaldoValue: this.nomeSaldo,
      saldoValue: this.saldo,
      dateValue: this.data,
    }
  },
  computed: {
    valor() {
      return money
    },
  },

  watch: {
    modal() {
      if (this.modal) {
        this.nomeSaldoValue = ''
        this.saldoValue = '0'
        this.dateValue = new Date()
      }
    },
    nomeSaldoValue() {
      this.$emit('update:nomeSaldo', this.nomeSaldoValue)
    },
    saldoValue() {
      this.$emit('update:saldo', this.saldoValue)
    },
    dateValue() {
      this.$emit('update:date', this.dateValue)
    },
  },
}
</script>

<style></style>
