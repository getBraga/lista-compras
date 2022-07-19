<template>
  <div class="main">
    <div>
      <TheHeader id="the_header" />
      <div class="container">
        <div class="section pt-5">
          <nuxt />
        </div>
      </div>
    </div>
    <div>
      <!-- <div class="div-icon">
        <a
          v-show="windowTop > 400"
          class="btn-scroll-top"
          title="Rolar para o início da página"
          @click="scrollTo"
        >
          <b-icon icon="chevron-up" type="is-white" size="is-medium"></b-icon>
        </a>
      </div> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
import Footer from '~/components/Footer/Footer'
export default {
  name: 'TelaDefault',
  components: {
    TheHeader,
    Footer,
  },

  data() {
    return {
      windowTop: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop =
        window.top.scrollY /* or: e.target.documentElement.scrollTop */
    },
    scrollTo() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="scss">
.div_icon {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.btn_scroll_top {
  // position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  // background: #703211;
  background: #ac6c47;
  &:hover {
    background: #703211;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

@import '~/assets/sass/app.scss';
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: $orange-pb;
$second: $gray-pb;
$primary-invert: findColorInvert($primary);
$second-invert: findColorInvert($second);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'second': (
    $second,
    $second-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
  'twitter': (
    $twitter,
    $twitter-invert,
  ),
);
$link: $primary;
$link-invert: $primary-invert;
$link-invert: $second-invert;
$link-focus-border: $primary;
@import '~bulma';
@import '~buefy/src/scss/buefy';
@import '~/assets/sass/app.scss';
</style>
