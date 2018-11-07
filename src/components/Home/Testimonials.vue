<template>
  <v-layout column class="testimonials my-5">
    <v-flex>
      <v-layout justify-center>
        <v-flex shrink>
          <img :src="star" alt="star" height="140px" class="mt-5">
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-carousel hide-delimiters next-icon="mdi-arrow-right" prev-icon="mdi-arrow-left" style="height: 300px;" class="elevation-0">
        <v-carousel-item v-for="(quote, index) of quotes" :key="index">
          <v-layout column justify-center fill-height class="px-6">
            <v-flex shrink>
              <h3 class="primary--text quote-text">{{ quote.text }}</h3>
            </v-flex>
            <v-flex shrink class="mt-4">
              <h3 class="primary--text quote-author">{{ quote.author }}</h3>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type Quote = { text?: string, author?: string }
@Component
export default class Testimonials extends Vue {
  star: string = require('../../assets/pictos/star.png')
  quotes: Quote[] = [
    { text: 'Nous collaborons avec Mickaël depuis la création de notre entreprise pour la réalisation de nos documents de communication. Cette personne grâce à ses idées, nous a permis d\'avoir une identité forte et reconnaissable sur la toile. Mickaël est créatif et nous n\'avons pas besoin d\'y revenir à 20 fois. Réactivité, créativité, professionnalisme sont les mots qui le définissent.', author: 'Antoine Berguer - Freed\'home camper' },
    { text: 'J’ai eu l’occasion de travailler plusieurs fois avec Mickael, que ce soit sur de la création de Logo ou du webdesign,  j’ai à chaque fois été plus que satisfait du résultat. Mickael est quelqu’un de créatif et de passionné. Je vous le recommande !', author: 'Victor Castro-Cintas - Webelier' }
  ]
}
</script>

<style scoped>
  .testimonials /deep/ i {
    color: #edb48e !important;
    font-size: 36px !important;
  }

  .px-6 {
    padding-left: 128px;
    padding-right: 128px;
  }

  .quote-text {
    font-weight: 100;
    font-style: italic;
    font-size: 1.5em;
    text-align: center;
  }

  .quote-author {
    text-align: center;
    font-size: 1.5em;
    font-weight: 500;
  }

  .quote-author::before,
  .quote-author::after {
    content: '//';
  }

  .quote-author::before {
    margin-right: 10px;
  }

  .quote-author::after {
    margin-left: 10px;
  }
</style>
