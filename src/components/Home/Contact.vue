<template>
  <v-layout wrap class="contact primary white--text pa-5" id="contact">
    <v-flex xs12 md6>
      <v-layout column class="left-part">
        <v-flex shrink class="tagline" :style="$vuetify.breakpoint.mdAndUp ? 'margin-left: 100px;' : ''">
          Vous avez été séduit par les réalisations et aimeriez me solliciter sur la création d'un projet ?
        </v-flex>
        <v-flex shrink class="secondary--text separator">
          •••
        </v-flex>
        <v-flex shrink class="contacts">
          <div>Mickaël Sossi</div>
          <div>T<span class="slash"></span><a href="tel:0666039963" class="white--text">+33 6.66.03.99.63</a></div>
          <div>A<span class="slash"></span>Paris - France</div>
          <div>M<span class="slash"></span><a href="mailto:hello@mi-so.fr" class="white--text">hello@mi-so.fr</a></div>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 md6 class="right-part">

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
}
</script>

<style scoped>
  .left-part {
    text-align: right;
  }

  .separator {
    font-size: 3em;
  }

  .tagline {
    font-family: PistolliRoman;
    font-size: 2.3em;
  }

  .slash::before {
    content: '/';
    display: inline-block;
    margin: auto 4px;
    color: #edb48e;
  }

  .contacts {
    font-size: 1.1em;
  }
</style>
