<template>
  <div class="container-fluid">
    <div class="logo masthead">
      <b-img class="im_log"
          src="../assets/bg-logo.png">
      </b-img>
    </div>

    <div class="container">
      <div ref="chisiamo">
        <h1 class="h1">Chi Siamo?</h1>
        <p class="p">Un associazione di studenti che</p>
        <p class="p">vuole salvare il mondo</p>
        <p class="p">dalla prossima invasione aliena</p>
      </div>

      <div ref="cosafacciamo">
        <h1 class="h1">Cosa facciamo?</h1>
        <p class="p">lorem ipsum</p>
      </div>
    </div>
    <div class="container">
      <div class="scuole" ref="scuole">
      <h1 style="text-align: center;" class="h1">Le scuole</h1>
      <div style="display:flex; justify-content: space-around;" class="p">
      <ul>
        <li>Collegio Superiore Bologna</li>
        <li>Scuola Superiore Catania </li>
        <li>Scuola Normale Superiore</li>
        <li>Scuola Superiore Sant'Anna </li>
        <li>SSSAS Roma</li>
        <li>SSST Torino</li>
      </ul>
      <ul>
        <li>Scuola Galileiana Padova</li>
        <li>Scuola di studi superiori Giacomo Leopardi</li>
        <li>Scuola Superiore ISUFI</li>
        <li>IUSS Padova</li>
        <li>Scuola Superiore Udine</li>
        <li>Collegio superiore Venezia</li>
      </ul>
    </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    slide: 0,
    sliding: null,
  }),

  name: "HomeView",

  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
  },

  mounted() {
    //console.log(this.$refs);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //console.log(entry);
          //console.log(this);
          this.show = true;

          for (let e of entry.target.children) {
            //console.log(e);
            e.classList.add("h1-new");
          }
        }
      });
    });

    observer.observe(this.$refs.chisiamo);
    observer.observe(this.$refs.cosafacciamo);
    observer.observe(this.$refs.scuole);
  },
};
</script>

<style>


</style>

<style scoped lang="scss">

@import "../scss/styles.scss";


.im_log{
  margin: 50pt;
}
.h1 {
  opacity: 0.2;
  transition: all 2s;
  transform: translateX(100px);
}

.p {
  opacity: 0.2;
  transition: all 3.5s;
  transform: translateX(100px);
}
.h1-new {
  transform: translateX(0px);
  opacity: 1;
}
.scroll {
  height: 100%;
  overflow: auto;
  background-color: white;
}

.logo {
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("../assets/Foto1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: top;
  padding: 50px;
}

.scuole {
  width: 100%;
  vertical-align: center;
}

.chi {
  padding: 0px;
  margin: 1px;
}
</style>
