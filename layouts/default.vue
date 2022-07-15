<template>
  <div class="main">
    <div>
      <TheHeader id="the_header" />
    </div>
    <div>
      <div class="container">
        <div class="section pt-5">
          <nuxt />
        </div>
      </div>
      <a
        v-show="windowTop > 400"
        class="btn-scroll-top"
        title="Rolar para o início da página"
        @click="scrollTo"
      >
        <b-icon icon="chevron-up" size="is-medium"></b-icon>
      </a>
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
$primary-invert: findColorInvert($primary);
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
$link-focus-border: $primary;
@import '~bulma';
@import '~buefy/src/scss/buefy';
@import '~/assets/sass/app.scss';
</style>
