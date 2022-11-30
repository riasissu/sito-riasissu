<template>
    <v-container>
      <v-row>
        <v-col col="6"></v-col>
        <v-col col="6" md="4">
          <v-img :src="require('@/assets/logo-riasissu-big.jpg')"></v-img>
        </v-col>
        <v-col col="12" md="4">
          <v-container pt="8">
            <v-form v-model="valid">
              <h2 class="text-center">
                Effettua il login
              </h2>
              <v-text-field v-model="email" :rules="emailRules" label="Indirizzo e-mail" required></v-text-field>
              <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                label="Password" counter @click:append="show1 = !show1">
              </v-text-field>
              <span class="red--text"> {{ errMessage }}</span>
              <v-btn :disable='!valid' depressed :color="valid ? 'primary' : ''" @click="signIn()">
                Login
              </v-btn>


            </v-form>
          </v-container>
        </v-col>
        <v-col col="2"></v-col>
      </v-row>
    </v-container>
</template>

<script>
import {getAuth, signInWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';
const auth = getAuth()
connectAuthEmulator(auth, "http://localhost:9099");

export default {
  data: () => ({
    show1: false,
    valid: false,
    email: '',
    emailRules: [
      v => !!v || '*',
      v => /.+@.+/.test(v) || 'Formato e-mail errato',
    ],
    password: '',
    errMessage: "",
    rules: {
      required: value => !!value || '*',
      min: v => v.length >= 8 || '',
      emailMatch: () => `Email o password non corrette.`,
    },
  }),
  methods: {
    signIn: function()  {
      signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
        this.$router.push("profile")
      }).catch((err)=>{
        this.errMessage=err;
      })
    }
  },

}
</script>

<style lang="">
    
</style>

<!-- 
    firstName:	  	
    secondName:	  	
    password:	    	
    birthPlace:	  	
    birthDate:	  	
    CF:		      		
    addressCity:  	
    addressStreet:	
    CAP:		      	
    email:		     	
    annoAccademico:	
    annoCorso:		  
    laureaTipo:
    laureaNome:
    university:
    collegeName:
 -->