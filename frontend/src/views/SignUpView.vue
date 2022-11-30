<template>
  <div class="text-h4 text-center pa-10">
    <div>
      <p>Inserisci i tuoi dati</p>
    </div>
    <!--   <FormOne v-if="pageOne"></FormOne>
   <FormTwo v-if="pageTwo"></FormTwo>-->
    <transition name="translate" mode="out-in">
      <component :is="activepage"></component>
    </transition>
  </div>
</template>

<script>
import FormOne from "../components/FormOne.vue";
import FormTwo from "../components/FormTwo.vue";

import { eventBus } from "../main.js";

export default {
  created() {
    eventBus.$on("nextForm", (data) => {
      if (data === "formTwo") {
        this.activepage = "FormTwo";
      } else {
        this.activepage ="FormOne";
      }
    });
  },

  components: {
    FormOne,
    FormTwo,
  },

  data: () => ({
    activepage: "FormOne",
  }),
};
</script>

<style scoped>
.container {
  max-width: 100%;
}

.v-btn {
  float: right;
}

.trainslate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: translateX(60px);
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
