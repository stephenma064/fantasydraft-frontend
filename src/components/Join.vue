<template>
  <temp>
  <form class="has-text-left" action="">
    <div class="field">
      <label class="label is-large">Room Code</label>
      <p class="control"><input type="text" class="input"></p>
    </div>
    <div class="field">
      <label class="label is-large">Passcode</label>
      <p class="control"><input type="text" class="input"></p>
    </div>
  </form>
  </temp>
</template>

<script>
import Base from './Base.vue'
export default {
  components: {
    'temp': Base
  }
}
</script>

<style lang="sass" scoped>
  @import '~bulma/sass/utilities/variables.sass'
  label
    color: $white
</style>
