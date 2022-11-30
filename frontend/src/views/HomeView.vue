<template>

  <div class="scroll">
  <div class="logo">
    <img class="logoIm" src="../assets/logo-riasissu-big.jpg">
  </div>

  <div class="inf">
    <h1>Page2</h1>
  </div>
</div>
</template>

<script>


export default {

  name: 'HomeView',

} 
</script>



<style scoped>

.scroll{
  height: 100%;
  overflow: auto;
}

.logoIm {
  scale:0.8
}

.logo{
  background-color: #005b9a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inf {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
