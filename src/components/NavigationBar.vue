<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app class="primary" v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-content>
            <v-list-item-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => {
    return{
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard-variant', text: 'Landing', route: '/'},
        {icon: 'mdi-briefcase', text: 'My Projects', route: '/projects'},
        {icon: 'mdi-account', text: 'Team', route: '/team'},
      ]
    }
  }
};

</script>
