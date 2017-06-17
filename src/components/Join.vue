<template>
  <temp>
  <form class="has-text-left" action="">
    <div class="field">
      <label class="label has-text-white">Room Code</label>
      <p class="control"><input type="text" class="input"></p>
    </div>
    <div class="field">
      <label class="label has-text-white">Passcode</label>
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
