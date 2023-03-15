<template>
  <!-- CONTAINER  -->
  <div class="container-fluid" style="padding: 0">
    <!-- LOGO RIASISSU  -->
    <div class="logo masthead">
      <b-img class="im_log" src="../assets/bg-logo.png"> </b-img>
    </div>

    <!-- PARAGRAFI  -->
    <div class="container">
      <!-- CHISIAMO -->
      <div ref="chisiamo">
        <h1 class="h1">Chi Siamo?</h1>
        <p class="p">Lorem Ipsum</p>
      </div>

      <!-- COSA FACCIAMO -->
      <div ref="cosafacciamo">
        <h1 class="h1">Cosa facciamo?</h1>
        <p class="p">lorem ipsum</p>
      </div>
    </div>

    <!-- LE SCUOLE -->
    <div class="container">
      <div class="scuole" ref="scuole">
        <h1 style="text-align: center" class="h1">Le scuole</h1>
        <div class="p container">
          <ul style="list-style: none; padding:0pt; margin-bottom: 0pt;">
            <li>Collegio Superiore Bologna</li>
            <li>Scuola Superiore Catania</li>
            <li>Scuola Normale Superiore</li>
            <li>Scuola Superiore Sant'Anna</li>
            <li>SSSAS Roma</li>
            <li>SSST Torino</li>
          </ul>
          <ul style="list-style: none;padding:0pt;">
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

<style></style>

<style scoped lang="scss">
@import "../scss/styles.scss";

/*.im_log {
  margin: 10pt;
}*/



@media only screen and (min-width: 600px) {
  .container {
  display: flex;
  justify-content: space-around;
  align-items: top;
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
}
}

@media only screen and (max-width: 600px) {
  .container {
    align-content: center;
    text-align: center;
  }
}

.container {
  height: 100%;
  padding: 20px;
}

.logo {
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("../assets/Foto1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

.scuole {
  width: 100%;
  vertical-align: center;
  text-align: center;
}

.chi {
  padding: 0px;
  margin: 1px;
}
</style>
