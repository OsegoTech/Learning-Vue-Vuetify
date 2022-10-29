<template>
  <v-app>
    <v-content>
      <router-view/>
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
