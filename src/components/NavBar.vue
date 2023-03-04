<template>
  <nav class="navbar bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#firstBlock">
        <img src="../assets/img.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <p :class="$style['name-product']">Estate</p>
      </a>
        <div :class="$style['navbar-nav']">

          <div :class="$style['nav-item']">
            <a class="nav-link" href="#secondBlock">Features</a>
          </div>
          <div :class="$style['nav-item']">
            <a class="nav-link" href="#thirdBlock">Features</a>
          </div>
          <div :class="$style['nav-item']">
            <a class="nav-link" href="#fourthBlock">Pricing</a>
          </div>
          <div :class="$style['nav-item']">
            <a class="nav-link " href="#fifthBlock" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
          <div :class="$style['nav-item']">
            <a class="nav-link " href="#sixthBlock" tabindex="-1" aria-disabled="true">Reating</a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style module>
.navbar-nav{

  display: flex;
  flex-direction: row;
}
.nav-item{
  margin-left: 40px;
}
.name-product{

  display: inline-block;
  position: relative;
  top: 10px;
left: 3px;
  margin-bottom: 0px;
}
</style>