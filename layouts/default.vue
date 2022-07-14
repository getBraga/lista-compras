<template>
  <div>
    <TheHeader id="the_header" />

    <!-- @detected-condition fires when the connectivity status of the device changes -->

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
    <!-- <TheMenuMobileBottom /> -->
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
// import TheMenuMobileBottom from '~/components/Navigation/TheMenuMobileBottom'

export default {
  name: 'TelaDefault',
  components: {
    TheHeader,
    // TheMenuMobileBottom,
    // offline
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
          behavior: "smooth",
        });
    }
  },
}
</script>
<style lang="scss">
body {
  height: 200vh;
}
.btn-scroll-top {
  border-radius: 100%;
  border: 0px;
  // #ac6c47
  background-color: #ac6c47;
  position: fixed;
  width: 51px;
  bottom: 65px;
  right: 107px;
  height: 53px;
  box-shadow: 0px 10px 20px rgba(160, 160, 160, 0.69);
  i {
    color: #fff;
    position: relative;
    top: 10px;
    left: 9px;
  }
  &:active {
    border: 0px;
  }
}
-webkit-scrollbar {
    width: 8px;
    &::-webkit-scrollbar-track {
    background: #cccccc;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #008040;
    border-radius: 8px;
  }
  }
  
.msg_off_on {
  p {
    padding: 20px 0px 8px;
  }
  color: #fff;
  margin: 0px;
  background: #006298;
  text-align: center;
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
