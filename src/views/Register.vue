<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Register</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model="password"
        ></v-text-field>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn type="submit" color="success" block>Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      showPassword: false,
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      axios
        .post('//localhost:8080/register', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(Error(err.response.data.error))
        })
    }
  }
}
</script>

<style></style>
