<template>
  <temp>
    <div class="column is-4 is-offset-4 has-text-left">
      <div class="field">
        <label class="label">Room Code</label>
        <p class="control">
          <input type="text" class="input">
        </p>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <p class="control">
          <input type="text" class="input">
        </p>
      </div>
      <div class="field">
        <label class="label">Nickname</label>
        <p class="control">
          <input type="text" class="input">
        </p>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-primary ">Join</button>
        </p>
        <p class="control">
          <router-link to="/" class="button is-outlined">Back</router-link>
        </p>
      </div>
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
