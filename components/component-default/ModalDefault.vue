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
        <!-- <div class="mb_20">
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
        </div> -->
        <slot name="conteudo"></slot>
        <div class="div_btn_modal_incluir">
          <slot name="btn"></slot>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
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
