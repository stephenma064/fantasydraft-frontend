<template>
  <temp>
    <div class="column is-4 is-offset-4">
      <form class="has-text-left" action="">
        <div class="field">
          <label class="label is-medium">Room Code</label>
          <p class="control">
            <input type="text" class="input">
          </p>
        </div>
        <div class="field">
          <label class="label is-medium">Password</label>
          <p class="control">
            <input type="text" class="input">
          </p>
        </div>
        <div class="field">
          <label class="label is-medium">Nickname</label>
          <p class="control">
            <input type="text" class="input">
          </p>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-medium is-primary ">Join</button>
          </p>
          <p class="control">
            <router-link to="/" class="button is-medium is-outlined">Back</router-link>
          </p>
        </div>
      </form>
    </div>
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

<style lang="scss" scoped>
@import '~bulma/sass/utilities/variables.sass';
label {
  color: $white;
}
</style>
