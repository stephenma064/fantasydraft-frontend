<template>
  <temp>
    <div class="column is-4 is-offset-4 has-text-left">
      <div class="field">
        <label class="label">Room Code</label>
        <p class="control">
          <input v-model="roomCode" type="text" class="input">
        </p>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <p class="control">
          <input v-model="password" type="text" class="input">
        </p>
      </div>
      <div class="field">
        <label class="label">Nickname</label>
        <p class="control">
          <input v-model="nickname" type="text" class="input">
        </p>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <button v-on:click="signIn" class="button is-primary ">Join</button>
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
import firebase from 'firebase'
//eslint-disable-next-line
import db from '.././db.js'
export default {
  components: {
    'temp': Base
  },
  data: function () {
    return {
      roomCode: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInAnonymously().catch(function (error) {
        let errorCode = error.code
        let errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          //eslint-disable-next-line
          let isAnonymous = user.isAnonymous
          //eslint-disable-next-line
          let uid = user.uid
          // user.displayName = 'lmfao'
          console.log('signed in baby')
          console.log(user)
        } else {
          console.log('im signed out')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
