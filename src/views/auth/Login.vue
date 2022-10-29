<template>
  <v-app>
    <v-container class="container--fluid">
      <v-row class="container--fluid">
        <v-col class="left-col">
          <v-img :src="require('/src/assets/img/nepays-blue.png')"
                 width="300px"
                 height="150px"
          >

          </v-img>
          <v-container class="auth-inspiration">
            <v-img
              :src="require('/src/assets/auth_img/png-phone2.png')"
              class="logo logo-left mr-n16"
            >

            </v-img>
            <v-img
              :src="require('/src/assets/auth_img/png-phone.png')"
              class="logo logo-right ml-n16"
            >

            </v-img>
          </v-container>
          <v-container class="text-center">
            <h2 class="white--text mt-16">App that Governs Your Banking Needs</h2>
            <p class="white--text mt-16">
              Nepays is an application that focussing in banking needs for all users in the world.
              Always updated and always following world trends.
              5000+ users registered in Zwallet everyday with worldwide users coverage.
            </p>
          </v-container>
        </v-col>

        <v-col>
          <h3 class="mt-16 mb-6">
            Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
          </h3>
          <p class="mt-16 mb-6">
            Transfering money is eassier than ever, you can access Nepays wherever you are.
            Desktop, laptop, mobile phone? we cover all of that for you!
          </p>
          <form action="" class="mb-10">
            <v-text-field
              prepend-icon="mdi-email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter your e-mail"
            >

            </v-text-field>

            <v-text-field
              prepend-icon="mdi-lock"
              v-model="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your Password"
            >

            </v-text-field>
          </form>
          <router-link to="">
            <p class="mr-5">Forgot Password?</p>
          </router-link>
          <v-btn
            width="400px"
            class="mb-14 grey"
            block
            rounded
          >
            Login
          </v-btn>
          <v-container class="text-center">
            <p>
              Do not have account? Let's
              <router-link to="/signup">
                Sign Up
              </router-link>
            </p>
          </v-container>

        </v-col>
      </v-row>
    </v-container>
  </v-app>

</template>

<script>
  export default {
    name: 'loginauth',
    data(){
      return{
        username: "",
        password: ""
      }
    }
  }
</script>


<style scoped>
   .left-col{
     background-color: #0066cc;
   }
  .auth-inspiration{
    display: flex;
    flex-direction: row;
  }
</style>
