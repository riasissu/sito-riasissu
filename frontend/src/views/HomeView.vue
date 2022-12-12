<template>
  <div class="container-fluid">
    <div class="logo">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>RIASISSU</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
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
      <h1>Le scuole</h1>
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
    console.log(this.$refs);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          console.log(this);
          this.show = true;

          for (let e of entry.target.children) {
            console.log(e);
            e.classList.add("h1-new");
          }
        }
      });
    });

    observer.observe(this.$refs.chisiamo);
    observer.observe(this.$refs.cosafacciamo);
  },
};
</script>

<style></style>

<style scoped>
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

#carousel-1 {
  width: 100%;
}

.scroll {
  height: 100%;
  overflow: auto;
  background-color: white;
}

.logo {
  display: flex;
  align-items: center;
}
.container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: top;
  padding: 50px;
}

.chi {
  padding: 0px;
  margin: 1px;
}
</style>
