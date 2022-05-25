<template>
<v-app>
  <v-row class="pa-5" >
  <v-spacer></v-spacer>
  <v-spacer></v-spacer>
  <v-col>
  <span class="text-h3"> RIASISSU</span>
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
