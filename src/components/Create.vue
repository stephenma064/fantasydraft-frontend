<template>
  <temp>
    <div class="column is-4 is-offset-4">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Teams</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <span class="select">
                <select>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">QB</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">RB</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">WR</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">TE</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">D/ST</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">K</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Flex</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">IDP</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Bench</label>
            <p class="control">
              <span class="select">
                <select>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
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
</style>
