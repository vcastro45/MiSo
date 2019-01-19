<template>
  <div class="nav-menu white" :class="{ 'fixed': fixed }" v-if="$vuetify.breakpoint.smAndUp">
    <v-layout wrap justify-space-between
              style="height: 60px;"
              :style="$vuetify.breakpoint.mdAndUp ? 'padding: 0 70px;' : ''"
    >
      <v-flex shrink v-if="$vuetify.breakpoint.mdAndUp">
        <a href="#" @contextmenu.prevent="openHiddenMenu"><img class="logo" :src="logo" alt="logo" height="20"></a>
      </v-flex>
      <v-flex>
        <v-layout justify-center style="height: 100%;" class="menu-buttons">
          <v-toolbar-items class="toolbar-btns">
            <v-btn flat :ripple="false" v-for="(button, i) of buttons" :key="i" :href="button.link" class="uppercase">{{ button.label }}</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-flex>
      <v-flex shrink>
        <div class="work-together secondary--text" v-if="$vuetify.breakpoint.mdAndUp">
          Faites confiance à un oeil d'expert !
        </div>
      </v-flex>
    </v-layout>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y>
      <v-list>
        <v-list-tile @click="goToAdmin()">
          <v-list-tile-title>Administration</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

  <div class="nav-menu mobile" :class="{ 'fixed': fixed }" v-else>
    <v-layout row class="nav-menu-header pa-3 white" justify-center>
      <v-icon large color="primary" class="close-btn" @click="open = true">mdi-menu</v-icon>
      <v-flex shrink><img class="logo" :src="logo" alt="logo" height="20"></v-flex>
    </v-layout>

    <v-layout column justify-space-between class="panel primary" :class="{ 'open': open }" v-touch="{ left: () => close() }">
      <v-flex shrink>
        <v-layout row class="nav-menu-header-panel pa-3" justify-center>
          <v-icon large color="white" class="close-btn" @click="open = false">mdi-close</v-icon>
          <v-flex shrink><img class="logo mobile" :src="logo" alt="logo" height="20"></v-flex>
        </v-layout>
      </v-flex>
      <v-flex shrink>
        <v-layout column justify-center fill-height>
          <v-flex shrink v-for="(button, i) of buttons" :key="i">
            <a :href="button.link" @click="close()" class="mobile-btn uppercase white--text text-xs-center py-2">
              {{ button.label }}
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex shrink>
        <socials class="socials"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Socials from './Socials.vue'

@Component({
  components: {
    Socials
  }
})
export default class NavMenu extends Vue {
  @Prop({ type: Boolean, default: false })
  fixed: boolean

  open: boolean = false
  logo: string = require('../assets/logo.svg')
  showMenu: boolean = false
  x: number = 0
  y: number = 0

  openHiddenMenu (e: any) {
    this.showMenu = false
    this.x = e.clientX
    this.y = e.clientY
    this.$nextTick(() => {
      this.showMenu = true
    })
  }

  goToAdmin () {
    console.log('goto admin')
  }

  close () {
    this.open = false
  }

  get buttons () {
    return [
      { link: '#raisons', label: 'services' },
      { link: '#portfolio', label: 'portfolio' },
      { link: '#contact', label: 'contact' }
    ]
  }
}
</script>

<style scoped>
  .panel > * {
    z-index: 2;
    position: relative;
  }

  .socials {
    width: 100%;
    z-index: 3;
  }

  .close-btn {
    position: absolute;
    left: 12px;
    top: 12px;
  }

  .nav-menu-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .nav-menu mobile .nav-menu-header {
    z-index: 3;
  }

  .mobile-btn {
    display: block;
    font-size: 1.9em;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .nav-menu {
    z-index: 50;
  }

  .nav-menu.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .panel:before {
    background-color: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 200vh;
    width: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 1.25s cubic-bezier(0.66, 0, 0, 1);
  }

  .panel.open {
    transform: translateX(0);
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

  .logo.mobile {
    filter: contrast(0%) brightness(300%);;
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

  .uppercase,
  .uppercase /deep/ * {
    text-transform: uppercase;
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
