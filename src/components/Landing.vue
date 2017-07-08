<template>
  <temp>
    <div class="d-flex align-items-center justify-content-center">
      <span>
        <router-link to="/join" role="button" class="btn btn-primary">Join a Draft</router-link>
      </span>
      <span>
        <router-link to="/create" role="button" class="btn btn-primary">Start a Draft</router-link>
      </span>
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
