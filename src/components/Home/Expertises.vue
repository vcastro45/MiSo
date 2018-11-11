<template>
  <div class="expertises" id="expertises">
    <v-layout wrap>
      <v-flex xs12>
        <v-layout wrap justify-center v-if="$vuetify.breakpoint.mdAndUp">
          <v-flex class="slider-navigator">
            <v-layout column fill-height justify-center @click="goToPreviousPage">
              <v-icon large color="primary">mdi-arrow-left</v-icon>
            </v-layout>
          </v-flex>
          <v-flex xs11 style="overflow: hidden">
            <v-layout class="carousel-slider" ref="carouselSlider" wrap
                      :style="`width: ${expertises.length / 6 * 100}%;${translationStyle};`">
              <v-flex xs2 class="py-5"
                      v-for="(expertise, index) in expertises" :key="index">
                <v-layout class="fill-height">
                  <v-flex shrink class="px-4 fill-height">
                    <img :src="expertise.img"/>
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
          <v-flex class="slider-navigator">
            <v-layout column fill-height justify-center @click="goToNextPage">
              <v-icon large color="primary">mdi-arrow-right</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout wrap v-else>
          <v-flex xs12 sm6 class="py-5"
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
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type Expertise = { title: string, text: string, img: string }

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
      title: 'Mise en page',
      text: 'Disposition graphique du contenu de manière hiérarchique et harmonieuse afin de faciliter la lecture du support par le choix judicieux de la typographie et des photographies éventuelles.',
      img: require('../../assets/pictos/misePage.png')
    },
    {
      title: 'Retouche d\'images',
      text: 'Retouche de l’image afin d’améliorer son rendu par la modification des couleurs, des courbes, manipulation des vecteurs, détourage avec masque de fusion.',
      img: require('../../assets/pictos/retoucheImg.png')
    },
    {
      title: 'Identité visuelle',
      text: 'Création de votre logo, votre identité visuelle ou votre charte graphique en adéquation avec votre message publicitaire et/ou votre image de marque.',
      img: require('../../assets/pictos/idVisu.png')
    },
    {
      title: 'Supports de communication',
      text: 'Déclinaison de votre image sur l’ensemble de vos supports de publicité papeterie (carte de visite, carte de correspondance) ou print (flyer, magazine, affiche, brochure)',
      img: require('../../assets/pictos/supportCom.png')
    },
    {
      title: 'Design éditorial',
      text: 'Élaboration graphique créative et ergonomique permettant une lecture agréable et fonctionnelle de votre magazine, votre livre ou votre journal.',
      img: require('../../assets/pictos/designEditorial.png')
    },
    {
      title: 'Réplique de logo',
      text: 'Réplique d’un logo en haute qualité pour permettre son exploitation sur de nouveaux supports sans perte de qualité et de lisibilité.',
      img: require('../../assets/pictos/repliqueLogo.png')
    },
    {
      title: 'Visuel Publicitaire',
      text: 'Création d’un visuel publicitaire percutant destiné à porter une image forte de votre Société auprès de ses clients et partenaires.',
      img: require('../../assets/pictos/visuPub.png')
    },
    {
      title: 'Une prestation clé en main',
      text: 'Suivi de votre projet depuis l’idée jusqu’à la préparation des fichiers destinés à l’impression (mise en page, traits de coupe et fonds perdus, taille et résolution des fichiers)',
      img: require('../../assets/pictos/presta.png')
    },
    {
      title: 'Design d\'interface',
      text: 'Conception graphique et intuitive permettant l’adaptation de votre message aux divers supports (mailings, applications pour smartphones ou tablette)',
      img: require('../../assets/pictos/designInterface.png')
    },
    {
      title: 'Enseigne & signalétique',
      text: 'Impression de votre visuel publicitaire sur divers supports (enseignes, PLV, totem, kakémono, pancarte, roll-up)',
      img: require('../../assets/pictos/enseigne.png')
    },
    {
      title: 'Coup de jeune numérique',
      text: 'Adaptation de votre site internet à votre nouvelle identité visuelle, Optimisation de votre image sur les différents supports pour un visuel publicitaire cohérent et innovant.',
      img: require('../../assets/pictos/coupJeune.png')
    },
    {
      title: 'Création graphique digitale',
      text: 'Création d’un message graphique destiné à promouvoir vos offres de services via votre site internet par la réalisation d’un habillage d’interface web.',
      img: require('../../assets/pictos/creaGraph.png')
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
    padding-bottom: 90px;
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
    background-color: #edb48e !important;
    display: inline-block;
  }

  .carousel-slider {
    transition: transform .2s ease-in-out;
  }
</style>
