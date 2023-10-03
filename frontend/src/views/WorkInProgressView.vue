<template>
  
    <div class="container-fluid" style="padding: 0">
    <div class="logo masthead">
        <b-img class="im_log" src="../assets/bg-logo.png"> </b-img>
    </div>
  
    <div class="container">
      <div class="display-4 p-4" >
  
WORK IN PROGRESS
      </div>
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