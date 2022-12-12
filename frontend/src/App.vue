<template>
  <div>
    <b-navbar class="navbar" sticky toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/"> RIASISSU </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/scuole ">Le scuole</b-nav-item>
        </b-navbar-nav>

        <!--        
        <b-navbar-nav>
          <b-nav-item to="/login">
            <b-button class="sign" active> Login </b-button>
          </b-nav-item>

          <b-nav-item to="/signup">
            <b-button class="sign" active> Registrati </b-button>
          </b-nav-item>
        </b-navbar-nav>
      -->
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
  padding-left: 30pt;
  padding-right: 30pt;
}

.sign {
  margin-left: 5px;
  margin-right: 5px;
}

#nav-collapse {
  justify-content: space-between;
}
</style>
