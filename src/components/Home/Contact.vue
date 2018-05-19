<template>
  <div class="contact" id="contact">
    <v-layout wrap>
      <v-flex xs12 md6 class="white-side text-xs-right">
        <v-layout wrap class="pa-5">
          <v-flex xs12>
            <h3 class="primary--text">Vous avez été séduit par les<br/>réalisations et vous aimeriez me<br/>solliciter sur la creation d'un projet ?</h3>
          </v-flex>
          <v-flex xs12 class="py-5 primary--text">● ● ●</v-flex>
          <v-flex xs12>
            <h2 class="home-title">CONTACT</h2>
          </v-flex>
          <v-flex xs12 class="pt-4">
            <v-layout column class="contact-infos">
              <v-flex>Mickaël Sossi</v-flex>
              <v-flex><a href="tel:0666039963"><span class="indicative">T</span> +33 6.66.03.99.63</a></v-flex>
              <v-flex><span class="indicative">A</span> Paris - France</v-flex>
              <v-flex><a href="mailto:hello@mi-so.fr"><span class="indicative">M</span> hello@mi-so.fr</a></v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="blue-side hidden-sm-and-down">
        <v-form>
          <v-layout column class="pa-5">
            <v-flex xs12 v-show="!valid">
              <p class="red--text">Veuillez remplir tous les champs avant de valider</p>
            </v-flex>
            <v-flex xs12>
              <text-input v-model="contactForm.name" label="nom" required placeholder="say hello !" class="white--text"/>
            </v-flex>
            <v-flex xs12 class="mt-2">
              <text-input v-model="contactForm.email" label="adresse email" required placeholder="say hello !" class="white--text"/>
            </v-flex>
            <v-flex xs12 class="mt-2">
              <text-input v-model="contactForm.message" label="message" :height="5" textarea required placeholder="say hello !" class="white--text"/>
            </v-flex>
            <v-flex class="py-4">
              <v-btn @click="submit" flat large class="white--text title contact-button">Contactez-moi</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TextInput from '../TextInput.vue'

@Component({
  components: {TextInput},
  TextInput
})
export default class Contact extends Vue {
  valid: boolean = true
  contactForm: { name: string | number, email: string | number, message: string | number } = {
    name: '',
    email: '',
    message: ''
  }

  submit (): void {
    if (!this.contactForm.name || this.contactForm.name === '' ||
      !this.contactForm.email || this.contactForm.email === '' ||
      !this.contactForm.message || this.contactForm.message === '') {
      this.valid = false
    } else {
      this.valid = true
      console.log('submit')
    }
  }
}
</script>

<style scoped>
  .blue-side,
  .white-side {
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

  .indicative::after {
    content: ' /';
    color: #0031FF;
  }

  h3 {
    font-size: 1.7em;
    font-weight: 500;
  }

  .contact-button {
    border-radius: 8px;
    background-color: black !important;
  }
</style>
