<template>
  
  <div class="container-fluid" style="padding: 0">
  <div class="logo masthead">
      <b-img class="im_log" src="../assets/bg-logo.png"> </b-img>
  </div>

  <div class="container">
    <div class="display-4 mt-2" >

      Dona il tuo 5x1000 alla RIASISSU
    </div>
  </div>
  <div class="container-md  pt-4">
      Basta indicare e chiedere di indicare il Codice Fiscale della RIASISSU nella sezione preposta nella propria dichiarazione dei redditi, riepilogato nella sintesi che segue:
  </div>
  <div class="container-sm pt-3">
      <dl class="row">
        <dt class="offset-sm-2 col-sm-3 text-truncate">Ragione sociale Associazione: </dt>
        <dd class="col-sm-6">"RETE ITALIANA DELL3 ALLIEV3 DELLE SCUOLE E DEGLI ISTITUTI DI STUDI SUPERIORI UNIVERSITARI - APS"</dd>
    
        <dt class="offset-sm-2 col-sm-3">Codice fiscale Associazione: </dt>
        <dd class="col-sm-6">93086750507</dd>
      </dl>
      
  </div>
  </div>

</template>

<script>

</script>

<style scoped lang="scss">

@import "../scss/styles.scss";
.scroll {
  height: 100%;
  overflow:auto;
  background-color: white;
}



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


.logo {
  height: 50vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("../assets/Foto1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y:center;
}



</style>