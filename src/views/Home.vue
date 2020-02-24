<template>
  <v-card width="500" class="mx-auto mt-5" v-if="!loggedIn">
    <v-card-title>
      <h1>Welcome to the App!</h1>
    </v-card-title>
    <v-card-text>
      To use this app you'll need to
      <router-link to="/login">Login</router-link> or
      <router-link to="/register">Register</router-link>
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-card-text
      ><p>Id:{{ id }}</p>
      <p>Username:{{ username }}</p>
      <p>Avatar: <v-img :src="avatar" width="300"></v-img></p>
      <p>About:{{ about }}</p></v-card-text
    >
  </v-card>
</template>

<script>
import axios from 'axios'
import { authComputed } from '../store/helper'
export default {
  name: 'Home',
  data() {
    return {
      id: '',
      username: '',
      avatar: '',
      about: ''
    }
  },
  computed: {
    ...authComputed
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('//localhost:8080/about').then(({ data: userData }) => {
        const { data } = userData
        console.log(data)
        const { id, username, avatar, about } = data
        this.id = id
        this.username = username
        this.avatar = avatar
        this.about = about
      })
    }
  }
}
</script>
