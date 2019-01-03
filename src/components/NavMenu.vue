<template>
  <div class="nav-menu white" :class="{ 'fixed': fixed }">
    <v-layout wrap justify-space-between
              style="height: 60px;"
              :style="$vuetify.breakpoint.mdAndUp ? 'padding: 0 70px;' : ''"
    >
      <v-flex shrink v-if="$vuetify.breakpoint.mdAndUp">
        <img class="logo" :src="require('../assets/logo.svg')" alt="logo" height="20">
      </v-flex>
      <v-flex>
        <v-layout justify-center style="height: 100%;" class="menu-buttons">
          <v-toolbar-items class="toolbar-btns">
            <v-btn flat :ripple="false" href="#raisons">services</v-btn>
            <v-btn flat :ripple="false" href="#portfolio">portfolio</v-btn>
            <v-btn flat :ripple="false" href="#contact">contact</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-flex>
      <v-flex shrink>
        <div class="work-together secondary--text" v-if="$vuetify.breakpoint.mdAndUp">
          Faites confiance à un oeil d'expert !
        </div>
      </v-flex>
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

  .menu-buttons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .work-together {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: PistolliRoman, Arial, Helvetica, sans-serif;
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

  .toolbar-btns /deep/ .v-btn--active:before,
  .toolbar-btns /deep/ .v-btn:focus:before,
  .toolbar-btns /deep/ .v-btn:hover:before {
    height: 5px;
    width: 5px;
    border-radius: 99999px;
    background-color: #edb48e;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, calc(-100% - 5px));
  }
</style>
