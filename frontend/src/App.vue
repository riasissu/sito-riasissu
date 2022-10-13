<template>
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
    <router-link class="pr-4" to="/login"><v-btn color="primary" >Login</v-btn>
    </router-link>
    <router-link to="/signup"><v-btn outlined color="primary ">Registrati</v-btn>
    </router-link>
  
  </v-col>
  </v-row>

  <v-main>
    <router-view />
 
  </v-main></v-app>
</template>

<script>


export default {
    name: "App",
    data: () => ({
    //
    }),
};
</script>
