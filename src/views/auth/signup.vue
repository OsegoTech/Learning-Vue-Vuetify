<template>
  <v-container class="container--fluid">
    <v-row class="container--fluid">
      <v-col class="left-col">
        <v-img :src="require('/src/assets/img/nepays-blue.png')"
               width="300px"
               height="150px"
        >

        </v-img>
        <v-container class="auth-inspiration my-auto mb-0" >
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
          <h2 class="white--text mt-">App that Governs Your Banking Needs</h2>
          <p class="white--text mt-16">
            Nepays is an application that focussing in banking needs for all users in the world.
            Always updated and always following world trends.
            5000+ users registered in Zwallet everyday with worldwide users coverage.
          </p>
        </v-container>
      </v-col>

      <v-col>
        <h3 class="mt-10 mb-6">
          Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
        </h3>
        <p class="mt-16 mb-6">
          Transfering money is eassier than ever, you can access Nepays wherever you are.
          Desktop, laptop, mobile phone? we cover all of that for you!
        </p>
        <form action="" class="mb-10 mt-5">
          <v-text-field
            prepend-icon="mdi-account"
            name="first_name"
            label="First Name"
            placeholder="First name"
          >
          </v-text-field>
          <v-text-field
            prepend-icon="mdi-account"
            name="first_name"
            label="Last Name"
            placeholder="Last name"
          >
          </v-text-field>
          <v-text-field
            prepend-icon="mdi-phone"
            name="phone-number"
            label="Phone Number"
          >
          </v-text-field>
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
            label="Enter your Password"
            type="password"
            placeholder="Enter your Password"
          >

          </v-text-field>

          <v-btn class="grey" block rounded>SIGN UP</v-btn>
        </form>
        <v-container class="text-center">
          <p>
            Already have account?
            <router-link to="/login">
              Log In
            </router-link>
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup"
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
