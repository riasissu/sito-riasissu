
<template>
  <div>
    <p>Dacci i tuoi dati, in particolare la carta di credito e il numerino sul retro</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="firstname" :rules="nameRules" label="Nome" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="lastname" :rules="nameRules" label="Cognome" required></v-text-field>
          </v-col>
        </v-row>
        <v-divider inset></v-divider>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="Indirizzo e-mail" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
              label="Normal with hint text" hint="Usa almeno 8 caratteri" counter @click:append="show1 = !show1">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
              label="Normal with hint text" hint="Usa almeno 8 caratteri" counter @click:append="show1 = !show1">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="lastname" :rules="nameRules" label="Luogo di nascita" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="Data di nascita" required></v-text-field>
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
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    password: 'Password',
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