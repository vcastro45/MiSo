<template>
  <div class="contact" id="contact">
    <v-layout wrap>
      <v-flex xs6 class="blue-side hidden-sm-and-down">
      </v-flex>
      <v-flex xs12 md6 class="white-side">
        <v-layout wrap class="pa-5">
          <v-flex xs12>
            <h2 class="home-title">CONTACT</h2>
          </v-flex>
          <v-flex xs12 class="pt-5">
            <v-layout column class="contact-infos">
              <v-flex>Mickaël Sossi</v-flex>
              <v-flex><a href="tel:0666039963">T / +33 6.66.03.99.63</a></v-flex>
              <v-flex>A / Paris - France</v-flex>
              <v-flex><a href="mailto:hello@mi-so.fr">M / hello@mi-so.fr</a></v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="py-4">
            <a href="mailto:hello@mi-so.fr" is="v-btn" :style="`background-color: ${$vuetify.theme.primary} !important;`" large class="white--text title">Contactez-moi</a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Contact extends Vue {
  }
</script>

<style scoped>
  .blue-side,
  .white-side {
    height: 400px;
    background-size: cover;

  }

  .blue-side {
    background-image: url('../../assets/background-blue.jpg');
  }

  .white-side {
    background-image: url('../../assets/background-white.jpg');
  }

  .contact-infos * {
    color: #737373;
    font-size: 1.8rem;
    text-decoration: none;
  }
</style>
