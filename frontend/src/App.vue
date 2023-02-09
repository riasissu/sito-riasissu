<template>
  <div>
    <nav class= "navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref="navv">
      <div class="container"><a class="navbar-brand" href="/">RIASISSU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars ms-1"></i></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item"><a class="nav-link" href="#services">Le Scuole</a></li>
          </ul>
        </div>
      </div>
    </nav>
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
    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

  },
}


</script>

<style scoped lang="scss">

@import "./scss/styles.scss";

/*.sign {
  margin-left: 5px;
  margin-right: 5px;
}

#nav-collapse {
  justify-content: space-between;
}*/

</style>
