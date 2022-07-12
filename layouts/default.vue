<template>
  <div>
    <section>
      <div>
        <b-button  type="is-primary">aaaaaaaa</b-button>
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
@import "~/assets/sass/app.scss";
@import "~bulma/sass/utilities/_all";

.button.is-primary {
  background: red;
}

$primary: $cor-principal;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
  "twitter": (
    $twitter,
    $twitter-invert,
  ),
);
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "~/assets/sass/app.scss";


</style>