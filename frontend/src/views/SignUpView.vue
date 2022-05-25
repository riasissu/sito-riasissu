
<template>
  <div>
    <v-form v-model="valid">
      <v-container >
      <div class="text-h4 text-center">Dacci i tuoi dati, in particolare la carta di credito e il numerino sul retro</div>
        <v-row  class="mt-4">
          <v-col md="2"></v-col>
          <v-col cols="12" md="3"  >
            <v-text-field v-model="firstname" label="Nome" required></v-text-field>
          </v-col>
          <v-col md="1"></v-col>
          <v-col cols="12" md="3" >
            <v-text-field v-model="lastname"  label="Cognome" required></v-text-field>
          </v-col>

        </v-row>
        <v-row >
          <v-col md="2"></v-col>
          <v-col cols="12" md="5">
            <v-text-field v-model="email" :rules="emailRules" label="Indirizzo e-mail" required></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col md="6">      <v-divider></v-divider>
        </v-col>
        
        </v-row>
        <v-row class="mt-6">
          <v-col md="2"></v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
              label="Password" hint="Usa almeno 8 caratteri" counter @click:append="show1 = !show1">
            </v-text-field>
          </v-col>
          <v-col md="1"></v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="controlPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
              label="Conferma password" hint="Usa almeno 8 caratteri" counter @click:append="show2 = !show2">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col md="6">      <v-divider></v-divider>
        </v-col>
        
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="lastname" label="Luogo di nascita" required></v-text-field>
          </v-col>
          <v-col md="1 "></v-col>
          <v-col cols="12" md="3">
                 <v-menu
                  v-model="dataInserita"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="birthDate  "
                      label="Data di nascita"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="birthDate"
                    @input="dataInserita = false"
                  ></v-date-picker>
                </v-menu>
          </v-col>
          
          </v-row>
        <v-row justify="center">
          <v-col md="6">      <v-divider></v-divider>
        </v-col>
        
        </v-row>
      
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="12" md="5">
            <v-text-field v-model="lastname" label="Codice fiscale" required></v-text-field>
          </v-col>
        </v-row>
        </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
    valid: false,
    dataInserita:false,
    firstname: '',
    lastname: '',
    password: '',
    controlPassword:'',
    birthPlace:'',	  	
    birthDate:"2000-01-01",

    nameRules: [
      v => !!v || 'Almeno 8 caratteri',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),

}
</script>
<style lang="">
    
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