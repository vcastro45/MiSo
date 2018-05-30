<template>
  <div class="expertises" id="expertises">
    <v-layout wrap>
      <v-flex xs12 style="padding-left: 90px;">
        <h2 class="home-title pb-5">EXPERTISES</h2>
      </v-flex>
      <v-flex xs12>
        <v-layout wrap justify-center>
          <v-flex class="slider-navigator primary">
            <v-layout column fill-height justify-center @click="goToPreviousPage">
              <v-icon large class="white--text">mdi-chevron-left</v-icon>
            </v-layout>
          </v-flex>
          <v-flex xs11 style="overflow: hidden">
            <v-layout class="carousel-slider" ref="carouselSlider" wrap :style="`width: ${expertises.length / 6 * 100}%;${translationStyle};`">
              <v-flex xs2 class="py-5"
                      :style="`background-color: ${expertise.color};`"
                      v-for="(expertise, index) in expertises" :key="index">
                <v-layout>
                  <v-flex shrink class="px-4">
                    <img :src="require(`../../assets/pictos/${index + 1}.png`)"/>
                  </v-flex>
                  <v-flex class="expertise-text">
                    <div class="px-3">
                      <h4 class="primary--text">{{ expertise.title }}</h4>
                      <p>{{ expertise.text }}</p>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="slider-navigator primary">
            <v-layout column fill-height justify-center @click="goToNextPage">
              <v-icon large class="white--text">mdi-chevron-right</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  type Expertise = { title: string, text: string, color: string }

  @Component
  export default class Expertises extends Vue {
    page: number = 0

    get stepWidth (): number {
      return 100 / (this.expertises.length / 2)
    }

    get numberOfPages () {
      return this.expertises.length / 2
    }

    get translationStyle (): string {
      return `transform: translateX(${ -this.stepWidth * this.page }%)`
    }

    expertises: Expertise[] = [
      {
        title: 'Mise en pages',
        text: 'Disposition graphique du contenu de la maquette, hiérarchie des informations, choix typographiques et création de gabarit.',
        color: '#e6eaff'
      },
      {
        title: 'Retouche d\'images',
        text: 'Retouche et correction d’images, chromie, ajustement des courbes et détour age de haute qualité avec masque de fusion.',
        color: '#f2f4ff'
      },
      {
        title: 'Identité visuelle',
        text: 'Conception d’identité visuelle, charte graphique, logo, en prenant en compte le message que doit véhiculer la marque.',
        color: '#e6eaff'
      },
      {
        title: 'Supports de communication',
        text: 'Création de l’ensemble des supports de communication (flyer, plaquette, dépliant, brochure, carte de visite, affiche...)',
        color: '#dae1ff'
      },
      {
        title: 'Design éditorial',
        text: 'Mise en place de charte graphique, création de maquette pour tous types de supports imprimés (livres, magazine, catalogue...)',
        color: '#e6eaff'
      },
      {
        title: 'Reproduction de logo',
        text: 'Reproduction fidèle de logo existant, pour qu’il puisse être exploiter pour tous types de formats sans perte de qualité',
        color: '#dae1ff'
      },
      {
        title: 'Mise en pages2',
        text: 'Disposition graphique du contenu de la maquette, hiérarchie des informations, choix typographiques et création de gabarit.',
        color: '#e6eaff'
      },
      {
        title: 'Retouche d\'images2',
        text: 'Retouche et correction d’images, chromie, ajustement des courbes et détour age de haute qualité avec masque de fusion.',
        color: '#f2f4ff'
      },
      {
        title: 'Identité visuelle2',
        text: 'Conception d’identité visuelle, charte graphique, logo, en prenant en compte le message que doit véhiculer la marque.',
        color: '#e6eaff'
      },
      {
        title: 'Supports de communication2',
        text: 'Création de l’ensemble des supports de communication (flyer, plaquette, dépliant, brochure, carte de visite, affiche...)',
        color: '#dae1ff'
      },
      {
        title: 'Design éditorial2',
        text: 'Mise en place de charte graphique, création de maquette pour tous types de supports imprimés (livres, magazine, catalogue...)',
        color: '#e6eaff'
      },
      {
        title: 'Reproduction de logo2',
        text: 'Reproduction fidèle de logo existant, pour qu’il puisse être exploiter pour tous types de formats sans perte de qualité',
        color: '#dae1ff'
      }
    ]

    goToNextPage (): void {
      if (this.page + 1 >= this.numberOfPages - 2) {
        this.page = 0
      } else {
        this.page++
      }
    }

    goToPreviousPage () {
      if (this.page - 1 < 0) {
        this.page = this.numberOfPages - 3
      } else {
        this.page--
      }
    }

    mounted () {
      setInterval(this.goToNextPage, 6000)
    }
  }
</script>

<style scoped>
  .expertises {
    padding-top: 90px;
  }

  .expertise-text {
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
  }

  .expertise-text > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    height: 100px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .slider-navigator {
    cursor: pointer;
  }

  .expertise-text h4 {
    text-transform: uppercase;
  }

  .expertise-text p::after {
    content: '';
    width: 30px;
    height: 2px;
    margin: 0 10px;
    background-color: #0031FF;
    display: inline-block;
  }

  .carousel-slider {
    transition: transform .2s ease-in-out;
  }
</style>
