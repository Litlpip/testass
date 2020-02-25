<template>
  <v-app>
    <!-- bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TestAssignment</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn v-if="!loggedIn" text rounded to="/login">Login</v-btn>
      <v-btn v-if="!loggedIn" text rounded to="/register">Register</v-btn>
      <!-- Prevent? -->
      <v-btn v-if="loggedIn" @click.prevent="logout" to="/" color="red">
        Logout
      </v-btn>
    </v-app-bar>
    <!-- content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- footer -->
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} —
          <strong>TestAssignment</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { authComputed } from './store/helper'
export default {
  name: 'App',

  components: {},

  data: () => ({}),
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
