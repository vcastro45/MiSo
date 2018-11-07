<template>
  <div class="nav-menu white" :class="{ 'fixed': fixed }">
    <v-layout wrap style="height: 60px">
      <v-spacer/>
      <v-flex xs12 md10 style="position:relative;">
        <img class="logo hidden-sm-and-down" :src="require('../assets/logo.svg')" alt="logo" height="20">
        <v-layout justify-center style="height: 100%;">
          <v-toolbar-items>
            <v-btn flat :ripple="false" href="#raisons">services</v-btn>
            <v-btn flat :ripple="false" href="#portfolio">portfolio</v-btn>
            <v-btn flat :ripple="false" href="#contact">contact</v-btn>
          </v-toolbar-items>
        </v-layout>
        <div>
          <div class="work-together secondary--text hidden-sm-and-down">
            Faites confiance a un oeil d'expert !
          </div>
        </div>
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

  .nav-menu /deep/ .v-btn {
    font-size: 1em;
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
    text-transform: initial !important;
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
    font-family: NouvelleVague, Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .work-together::before {
    content: '';
    height: 2px;
    width: 30px;
    margin-right: 5px;
    background-color: #edb48e !important;
    display: inline-block;
    position: relative;
    transform: translateY(-50%);
    top: 50%;
  }
</style>
