<template>
  <!-- NAVBAR -->
  <div>
    
    <nav class= "navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">

      <!-- NAVBAR BRAND -->
      <div class="container"><router-link to="/" class="navbar-brand">RIASISSU</router-link>

         <!-- NAVBAR TOGGLE BUTTON -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars ms-0"></i></button>
        
        <!-- NAVBAR  MENU   -->
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item">    <router-link to="/mappa" class="nav-link" >Le Scuole</router-link></li>
            <li class="nav-item">    <router-link to="/5x1000" class="nav-link" >5X1000</router-link></li>
          </ul>
        </div>

      </div>

    </nav>

    <!-- PAGE -->
    <div >
      <router-view />
    </div>
  </div>
</template>

<script>

import "./firebase/initialize";

export default {
  name: "App",
  data : () => ({
      isBlack:false
  }), 

  mounted() {

    

    document.title="RIASISSU";

    let isBlack = this.isBlack;
    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && isBlack == false) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();

    // On scroll, run navbarShrink function and collapse navbar if scrollY > 0
    document.addEventListener('scroll', navbarShrink);

  },
}


</script>

<style scoped lang="scss">

@import "./scss/styles.scss";
.scroll {
  height: 100%;
  overflow:auto;
  background-color: white;
}
</style>
