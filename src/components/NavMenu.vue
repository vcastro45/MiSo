<template>
  <div class="nav-menu white" :class="{ 'fixed': fixed }">
    <v-layout wrap style="height: 60px">
      <v-spacer/>
      <v-flex xs12 md10 style="position:relative;">
        <router-link :to="{ name: 'Home' }"><img class="logo hidden-sm-and-down" :src="require('../assets/logo.png')"
                                                 alt="logo" height="35"></router-link>
        <v-layout justify-center style="height: 100%;">
          <v-toolbar-items>
            <router-link is="v-btn" to="a-propos" active-class="active" flat :ripple="false">à propos</router-link>
            <router-link is="v-btn" to="expertises" active-class="active" flat :ripple="false">expertises</router-link>
            <router-link is="v-btn" to="portfolio" active-class="active" flat :ripple="false">portfolio</router-link>
            <router-link is="v-btn" to="contact" active-class="active" flat :ripple="false">contact</router-link>
          </v-toolbar-items>
        </v-layout>
        <router-link to="contact">
          <div class="work-together primary--text hidden-sm-and-down">
            Travaillons ensemble
          </div>
        </router-link>
      </v-flex>
      <v-spacer/>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NavMenu extends Vue {
  @Prop({ type: Boolean, default: false })
  fixed: boolean
}
</script>

<style scoped>
  .nav-menu {
    z-index: 50;
  }

  .nav-menu.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .toolbar__items .btn {
    text-transform: initial !important;
    font-size: 1.2em;
    font-weight: bold;
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
  }

  .toolbar__items .btn::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border-radius: 9999px;
    background-color: #0031FF;
    transition: all .15s ease-in-out;
  }

  .toolbar__items .btn.active::after {
    height: 8px;
    width: 8px;
    bottom: 5px;
  }

  .nav-menu /deep/ .btn__content::before {
    background-color: initial !important;
  }

  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .work-together {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .work-together::before {
    content: '';
    height: 2px;
    width: 30px;
    margin-right: 5px;
    background-color: #0031FF;
    display: inline-block;
    position: relative;
    transform: translateY(-50%);
    top: 50%;
  }
</style>
