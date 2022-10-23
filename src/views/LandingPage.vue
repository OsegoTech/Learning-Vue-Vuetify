<template>
  <v-main>
    <div class="mb-0 px-5 pt-3" style="background-color: #fafcff">
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
            <router-link to="/login">
              <v-btn class="login">Login</v-btn>
            </router-link>
            <router-link to="/register">
              <v-btn class="register">Sign Up</v-btn>
            </router-link>
          </v-col>
          <v-col cols="12" xl="7" class="title-banner pl-5">
            <h1>Awesome App</h1>
            <h1 class="m-0">For Saving <span>Time.</span></h1>
            <p class="my-4">
              We bring you a mobile app for banking problems that <br>
              oftenly wasting much of your time
            </p>
            <router-link to="/login">
              <v-btn class="py-2 px-4 btn-hero">Try it free</v-btn>
            </router-link>
          </v-col>
          <v-col cols="12" xl="5" class="text-center">
            <img src="@/assets/landing/png-phone.png" alt="" class="landing-img">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="mb-0 py-5" style="background-color: #eff0fc">
      <v-container>
        <div cols="12" class="text-center mb-5 landing-testi">
          <h1 class="mb-3"><span>About</span> the Application.</h1>
          <small>
             We Have some great features from the application and it's totally
            free <br />to use by all users around the world
          </small>
        </div>

        <v-row>
          <v-col cols="12" xl="4" class="my-2">
            <v-card class="text-center py-4" style="border-radius: 20px">
              <v-avatar class="p-2 avatar" size="4rem">
                <v-icon scale="2" variant="primary">
                  mdi-telephone
                </v-icon>
                <h4 class="my-4"><strong>24/7 Support</strong></h4>
              </v-avatar>
              <v-card-text>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" xl="4" class="my-2">
            <v-card class="text-center py-4" style="border-radius: 20px">
              <v-avatar class="p-2 avatar" size="4rem">
                <v-icon icon="download" scale="2" variant="primary">
                  mdi-download
                </v-icon>
              </v-avatar>
              <h4 class="my-4"><strong>Easy Download</strong></h4>
              <v-card-text>
                Nepays is 100% totally free to use it's now available on Google
                Play Store and App Store
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="mb-0" style="background-color: #fafcff; padding: 60px">
      <v-container>
        <v-row>
          <v-col cols="12" xl="4" class="title-section pl-5 align-self-center">
            <h1>100+ <span>Trusted</span></h1>
            <h1>Partners.</h1>
            <small
            >We have reached global level and have 100+ <br />
              brand partners around the globe</small
            >
          </v-col>
          <v-col cols="12" xl="8" class="text-center my-3">
            <v-row>
              <v-col>
                <v-img fluid :src="require('../assets/landing/airbnb.png')"/>
              </v-col>
              <v-col>
                <v-img fluid :src="require('../assets/landing/canon.png')"/>
              </v-col>
              <v-col>
                <v-img fluid :src="require('../assets/landing/dell.png')"/>
              </v-col>
              <v-col>
                <v-img fluid :src="require('../assets/landing/microsoft.png')"/>
              </v-col>
              <v-col>
                <v-img fluid :src="require('../assets/landing/dropbox.png')"/>
              </v-col>
              <v-col>
                <v-img fluid :src="require('../assets/landing/hnm.png')"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="mb-0 py-5" style="background-color: #eff0fc">
      <v-container>
        <v-row class="align-items-center">
          <v-col cols="12" xl="5" class="text-center">
            <v-img src="@/assets/landing/phone3.png" class="landing-img" />
          </v-col>
          <v-col cols="12" xl="6" class="landing-feature">
            <h1 class="mb-3">All The <span>Greet</span></h1>
            <h1 class="mb-5">NePays Features.</h1>
            <v-row>
              <v-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>1. </span> Small Fee</h5>
                <p class="mb-0">
                  We Only charge 5% of every success transaction done in NePays
                  App
                </p>
              </v-col>
              <v-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>2.</span> Data Secured</h5>
                <p class="mb-0">
                  All your data is secured properly in our system and it's
                  encrypted
                </p>
              </v-col>
              <v-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>3. </span>User Friendly</h5>
                <p class="mb-0">
                  NePays come up with modern and sleek design and not
                  complicated
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" xl="1"></v-col>
        </v-row>
      </v-container>
    </div>

    <div class="mb-0 py-5" style="background-color: #fafcff">
      <v-container>
        <div cols="12" class="text-center mb-5 landing-testi">
          <h1 class="mb-3">What Users are <span>Saying.</span></h1>
          <small>
            We Have some great features from the application and it's totally
            free <br />to use by all users around the world
          </small>
        </div>
        <!-- CAROUSEL -->
        <v-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#fff"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          style="
            background: #ffffff;
            box-shadow: 0 0 11px 6px rgba(0, 0, 0, 0.15);
            text-shadow: 1px 1px 2px #333;
            color: #000;
          "
        >
          <v-carousel-item img-blank>
            <v-avatar size="10rem" class="mb-4 opinion-people align-baseline">
              <v-img
                src="@/assets/landing/testi.png"
                style="width: 15rem"
                class="mt-4"
              />
            </v-avatar>
            <h4 class="mt-2" style="color: #000">Muhammad Nur Hidayat</h4>
            <small class="text-muted" style="color: #000"
            >Fullstack Developer</small
            >
            <v-card-text class="mt-2 px-4" style="color: #000"
            >Initially I was hesitant to use Nepays, but after a few days of
              trying it turned out to be satisfactory. Easy to use and very
              scratchy. Success continues at Nepays</v-card-text
            >
          </v-carousel-item>
          <v-carousel-item img-blank>
            <v-avatar size="10rem" class="mb-4 opinion-people align-baseline">
              <v-img
                src="@/assets/landing/testi2.png"
                style="width: 15rem"
                class="mt-4"
              />
            </v-avatar>
            <h4 class="mt-2" style="color: #000">Arif Rahman</h4>
            <small class="text-muted" style="color: #000"
            >Fullstack Developer</small
            >
            <v-card-text class="mt-2 px-4" style="color: #000"
            >amazing, this application is really interesting. Even though it
              has just been launched, its function is very attractive and also
              safe. Thanks Nepays</v-card-text
            >
          </v-carousel-item>
          <v-carousel-item img-blank>
            <v-avatar size="10rem" class="mb-4 opinion-people align-baseline">
              <v-img
                src="@/assets/landing/testi3.png"
                style="width: 15rem"
                class="mt-4"
              />
            </v-avatar>
            <h4 class="mt-2" style="color: #000">Johan Simbolon</h4>
            <small class="text-muted" style="color: #000">UI UX Designer</small>
            <v-card-text class="mt-2 px-4" style="color: #000"
            >It is very nice to be able to use Papaya, easy to use, attractive
              and safe UI in transactions. I really recommend this application
              for friends to use. Thanks Nepays</v-card-text
            >
          </v-carousel-item>
        </v-carousel>

      </v-container>
    </div>

    <v-footer  class="mb-0 py-5" style="background-color: #6379f4">
      <v-container class="footer">
        <div class="my-4">
          <img src="../assets/landing/nepays_auth.png" alt="nepays" />
        </div>
        <p class="foot-text my-3">
          Simplify financial needs and saving <br />
          much time in banking needs with <br />one single app.
        </p>
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
  background: #6379f4;
  color: #fff;
  border: solid 2px #fff;
  font-weight: bold;
  margin-right: 4%;
}

.login:hover,
.login:focus {
  border: solid 2px #6379f4;
  background: #fff;
  color: #6379f4;
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
  width: 70%;
  height: 70%;
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

.point-feature {
  border-radius: 20px;
  margin-bottom: 25px;
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

.avatar {
  background-color: rgba(71, 58, 209, 0.1);
}

.title-section h1 {
  font-weight: bold;
}

.title-section span {
  color: #6379f4;
}

.foot-text {
  width: 381px;
  height: 84px;
  color: white;
  font-size: 17px;
  font-weight: normal;
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

