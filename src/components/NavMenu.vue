<template>
  <div class="nav-menu" :class="{ 'fixed': fixed }">
  <v-toolbar color="transparent" light class="elevation-0" height="60px">
    <v-spacer/>
    <v-toolbar-items>
      <router-link is="v-btn" to="a-propos" active-class="active" flat>à propos</router-link>
      <router-link is="v-btn" to="expertises" active-class="active" flat>expertises</router-link>
      <router-link is="v-btn" to="portfolio" active-class="active" flat>portfolio</router-link>
      <router-link is="v-btn" to="contact" active-class="active" flat>contact</router-link>
    </v-toolbar-items>
    <v-spacer/>
  </v-toolbar>
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
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
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
    font-weight: 300;
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
    background-color: blue;
    transition: all .15s ease-in-out;
  }

  .toolbar__items .btn.active::after {
    height: 8px;
    width: 8px;
    bottom: 5px;
  }
</style>
