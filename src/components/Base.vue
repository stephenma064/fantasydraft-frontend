<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded" style="background: transparent">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 offset-md-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background: #8e9eab;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
