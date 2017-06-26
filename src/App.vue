<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import '~bulma/sass/utilities/initial-variables.sass'
$dark : $grey
@import '~bulma'
</style>
