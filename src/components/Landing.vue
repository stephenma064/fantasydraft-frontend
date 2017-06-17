<template>
  <temp>
      <span>
        <router-link to="/join" class="button is-primary is-large is-inverted is-outlined">Join a Draft</router-link>
      </span>
      <span>
        <router-link to="/create" class="button is-info is-large is-inverted is-outlined">Start a Draft</router-link>
      </span>
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
