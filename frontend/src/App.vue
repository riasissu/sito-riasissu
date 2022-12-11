<template>
  <!--
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
  -->

  <div>
    <b-navbar class="navbar" sticky toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/"> RIASISSU </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav>
          <b-nav-item to="/scuole ">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item to="/login">
            <b-button class="sign" active> Login </b-button>
          </b-nav-item>

          <b-nav-item to="/signup">
            <b-button class="sign" active> Registrati </b-button>
          </b-nav-item>
                  </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
import "./firebase/initialize";

export default {
  name: "App",
};
</script>

<style scoped>
.navbar {
  padding-left: 10pt;
  padding-right: 10pt;
}

.sign {
  margin-left: 5px;
  margin-right: 5px;
}

#nav-collapse{
  justify-content: space-between;
}
</style>
