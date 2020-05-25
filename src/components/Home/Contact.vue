<template>
  <v-layout wrap class="contact primary white--text pa-5" id="contact">
    <v-flex xs12 md6 class="px-3">
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
          <div>A<span class="slash"></span>Melun - France</div>
          <div>M<span class="slash"></span><a href="mailto:hello@mi-so.fr" class="white--text">hello@mi-so.fr</a></div>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 md6 class="px-3" :class="{ 'mt-4': $vuetify.breakpoint.smAndDown }">
      <v-layout :justify-center="$vuetify.breakpoint.xsOnly" class="right-part">
        <v-flex style="max-width: 350px">
          <v-form v-model="validForm" ref="contactForm">
            <v-text-field v-model="contact.name"
                          :rules="[rules.name]"
                          label="votre nom"
                          placeholder="Bruce Wayne"
                          dark
                          color="white"
                          required/>

            <v-text-field v-model="contact.email"
                          class="py-3"
                          :rules="[rules.email]"
                          label="votre email"
                          placeholder="sayhello@gmail.com"
                          dark
                          color="white"
                          required/>
            <v-textarea v-model="contact.message"
                        :rules="[rules.message]"
                        label="message"
                        placeholder="say hello!"
                        dark
                        color="white"
                        required/>
            <v-layout>
              <v-flex xs12 md8>
                <v-btn outline block color="secondary" @click="sendMail()">Contactez-moi</v-btn>
              </v-flex>
              <v-flex md4 class="hidden-sm-and-down">
                <img :src="dontBeShy" alt="Don't be shy !" class="dont-be-shy">
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type ContactForm = { name: string, email: string, message: string }
@Component
export default class Contact extends Vue {
  dontBeShy: string = require('@/assets/dont-be-shy.png')
  validForm: boolean = true
  contact: ContactForm = { name: '', email: '', message: '' }
  rules = {
    name: (v: string) => !!v || 'Mais qui êtes-vous ?',
    email: (v: string) => !!v || 'J\'ai besoin de votre email pour vous contacter !',
    message: (v: string) => !!v || 'N\'avez-vous vraiment rien à me dire ?'
  }

  sendMail () {
    if ((this as any).$refs.contactForm.validate()) {
      const subject = 'MiSo.fr - Demande de prestation'
      const text = `${this.contact.message}\r\n\r\n${this.contact.name},\r\n${this.contact.email}`
      window.open(encodeURI(`mailto:hello@mi-so.fr?subject=${subject}&body=${text}`))
    }
  }
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

  .contact-submit-wrapper {
    position: relative;
  }

  .dont-be-shy {
    opacity: .4;
    width: 150%;
    transform: translate(10px, -10px);
  }
</style>
