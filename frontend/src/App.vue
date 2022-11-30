<!--<template>
<v-app>

  <v-row class="pa-5" >
    <v-col class="pl-8">
      <router-link to="/scuole">Scuole</router-link>
      <router-link class="pl-4" to="/chiasmo">Chiasmo</router-link>
      <router-link class="pl-4" to="/xcool">Xcool</router-link>
      <router-link class="pl-4" to="/reteidee">Rete di idee</router-link>
    </v-col>
    
    <v-spacer></v-spacer>
    
    <v-col>
    <router-link  to="/" class="text-decoration-none " >
      <p class="text-h3 " style="color:black"  > RIASISSU</p>
    </router-link>
    
   </v-col>
  <v-spacer></v-spacer>

  <v-col>
    <router-link class="pr-4" to="/login"><v-btn color="primary" >Login</v-btn></router-link>
    <router-link to="/signup"><v-btn outlined color="primary ">Registrati</v-btn></router-link>
  </v-col>
  </v-row>

  <v-main>
    <router-view />
  </v-main>

  </v-app>
</template>-->

<template>
  <v-app>

    <v-app-bar app elevation="0" color="grey lighten-5">

      <div class="text-h2 ma-10" color="grey lighten-5">
        <router-link to="/">RIASISSU</router-link>
      </div>

      <v-spacer></v-spacer>

      <span class="ma-5">
        <router-link to="/scuole">Scuole</router-link>
      </span>

      <span class="ma-5">
        <router-link to="/chiasmo">Chiasmo</router-link>
      </span>

      <span class="ma-5">
        <router-link to="/reteidee">Rete di idee</router-link>
      </span>

      <span class="ma-5">
        <router-link to="/scuole">Scuole</router-link>
      </span>

      <div>

        <router-link class="pr-4" to="/login">
          <v-btn color="primary" class="ma-5">Login</v-btn>
        </router-link>

        <router-link to="/signup">
          <v-btn outlined color="primary ">Registrati</v-btn>
        </router-link>

      </div>


    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>

import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyDDbBbCydrNYqW8o3lG0vnFvdtlhGzywgo",

  authDomain: "sito-riasissu.firebaseapp.com",

  projectId: "sito-riasissu",

  storageBucket: "sito-riasissu.appspot.com",

  messagingSenderId: "81670035087",

  appId: "1:81670035087:web:433f388c9fe06a522842fa",

  measurementId: "G-WQJ6WP2TKN"

};

initializeApp(firebaseConfig)

export default {
  name: "App"
};
</script>
