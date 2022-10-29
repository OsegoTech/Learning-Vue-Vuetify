<template>
  <v-main>
    <div class="mt-6 mb-0 px-5 pt-3" style="background-color: #fafcff">
      <v-img class="wave" :src="require('../assets/landing/wave.png')"></v-img>
      <v-container>
        <v-row class="align-items-center">
          <v-col xl="2" cols="4">
            <v-img
              fluid
              sizes="10rem"
              :src="require('../assets/landing/nepays.png')">
            </v-img>
          </v-col>
          <v-col xl="10" cols="8" class="text-right">
            <v-btn class="login" to="/login">Login</v-btn>
            <v-btn class="register" to="/signup">Sign Up</v-btn>
          </v-col>
          <v-col cols="12" xl="7" class="title-banner pl-5">
            <h1>Awesome App</h1>
            <h1 class="m-0">For Saving <span>Time.</span></h1>
            <p class="my-4">
              We bring you a mobile app for banking problems that <br>
              oftenly wasting much of your time
            </p>
            <v-btn class="py-2 px-4 btn-hero" to="/login">Try it free</v-btn>
          </v-col>
          <v-col cols="12" xl="5" class="text-center">
            <img src="@/assets/landing/png-phone.png" alt="" class="landing-img hidden-sm-and-down">
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-footer  class="mb-0 mt-10 py-1" style="background-color: #6379f4" app>
      <v-container class="footer">
        <div class="my-4">
          <img src="../assets/landing/nepays_auth.png" alt="nepays" />
        </div>
<!--        <p class="foot-text my-3">-->
<!--          Simplify financial needs and saving <br />-->
<!--          much time in banking needs with <br />one single app.-->
<!--        </p>-->
        <br />
        <hr />
        <div class="btm-text">
          <p>2020 Nepays. All right reserved</p>
          <div class="phone-email">
            <p class="mx-5">Phone: 919191919191</p>
            <p>Email: nepays@gmail.com</p>
          </div>
        </div>
      </v-container>
    </v-footer>


  </v-main>
</template>

<script>
export default {
  name: 'landingPage',
}
</script>

<style scoped>
* {
  font-family: 'Nunito Sans', sans-serif;
}

.login {
  padding: 1% 4%;
  border-radius: 12px;
  background: #fff;
  color: #6379f4;
  border: solid 2px #fff;
  font-weight: bold;
  margin-right: 4%;
  text-decoration: none;
}

.login:hover,
.login:focus {
  border: solid 2px #6379f4;
  background: #fff;
  color: #6379f4;
  text-decoration: none;
}

.register {
  padding: 1% 3%;
  border-radius: 12px;
  background: #fff;
  color: #6379f4;
  border: solid 2px #fff;
  font-weight: bold;
}

.register:hover {
  border: solid 2px #fff;
  background: #6379f4;
  color: #fff;
  opacity: 0.9;
}

.wave {
  position: absolute;
  top: 0;
  right: 0;
  width: 44%;
}

.landing-img {
  position: absolute;
  top: 70px;
  right: 100px;
  width: 30%;
  height: 600px;
  margin-bottom: 30px;
}
.title-banner h1 {
  font-size: 65px;
  line-height: 65px;
  font-weight: bold;
}

.title-banner span {
  color: #6379f4;
}

.title-banner p {
  line-height: 35px;
}

.btn-hero {
  background-color: #6379f4;
  border-radius: 12px;
  border: solid 2px #6379f4;
}

.landing-feature h1 {
  font-weight: bold;
}

.landing-feature span {
  color: #6379f4;
}

.point-feature h5 {
  font-weight: bold;
}

.landing-testi h1 {
  font-weight: bold;
}

.landing-testi span {
  color: #6379f4;
}


.title-section h1 {
  font-weight: bold;
}

.title-section span {
  color: #6379f4;
}


hr {
  background-color: white;
  width: 100%;
}

.btm-text {
  display: flex;
  color: white;
  justify-content: space-between;
}

.phone-email {
  display: flex;
  justify-content: space-between;
}

</style>

