<template>
  <div class="text-h4 text-center pa-10">
    <div>
      <p>Inserisci i tuoi dati</p>
    </div>
    <OneForm></OneForm>
  </div>
</template>

<script>

import  OneForm from '../components/OneForm.vue'

export default {

  components : {
    OneForm
  },

};
</script>

<style scoped>
.container {
  max-width: 100%;
}

.v-btn {
  float: right;
}
</style>
<!-- 
    firstName:	  	
    secondName:
    mail	  	
    password:	    	
    birthPlace:	  	
    birthDate:	  	
    CF:		      		
    addressCity:  	
    addressStreet:	
    CAP:		      	
    annoAccademico:	
    annoCorso:		  
    laureaTipo:
    laureaNome:
    university:
    collegeName:
 -->
