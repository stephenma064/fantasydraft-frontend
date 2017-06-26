<template>
  <section class="hero is-fullheight is-dark is-bold" id="landing">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/variables.sass';
</style>
