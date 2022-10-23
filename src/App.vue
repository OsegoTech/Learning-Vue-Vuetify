<template>
  <v-app>
    <v-toolbar color="#970747" dark>
      <v-app-bar-nav-icon to="/">

      </v-app-bar-nav-icon>
      <v-toolbar-title>Osego Codes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn plain to="/signup">SIGN UP</v-btn>
        <v-btn plain to="/login">LOGIN</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
      <landing-page></landing-page>
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from "@/views/LandingPage";
export default {
  name: "App",
  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
