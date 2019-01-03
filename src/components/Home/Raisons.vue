<template>
  <v-layout wrap class="raisons" :class="{ 'pa-6': $vuetify.breakpoint.mdAndUp }" id="raisons">
    <v-flex xs12 class="secondary lighten-2">
      <v-layout column fill-height
                :class="{ 'pa-5': $vuetify.breakpoint.mdAndUp, 'pa-3': $vuetify.breakpoint.smAndDown }">
        <v-flex style="position: relative">
          <v-layout justify-center :class="{ 'reasons-part': $vuetify.breakpoint.mdAndUp }">
            <v-flex xs12 sm8 md4 class="quatre-raisons">
              <img :src="reasonImg" alt="4 bonnes raisons de me confier vos projets" width="100%">
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <img :src="pouce" alt="pouce" class="pouce" ref="pouce" @mouseover="animatePouce()" :style="$vuetify.breakpoint.xlOnly ? `width: 100px` : `width: 60px;`"/>
                <div class="plus secondary--text" ref="plus" :style="$vuetify.breakpoint.xlOnly ? `font-size: 3em` : `font-size: 2em`">+1</div>
                <img :src="hoverMe" alt="hover me" class="hover-me" :style="$vuetify.breakpoint.xlOnly ? `height: 150px` : `height: 90px;`"/>
              </template>
              <div class="separator primary"></div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex :shrink="$vuetify.breakpoint.mdAndUp">
          <v-layout wrap justify-space-around>
            <v-flex :shrink="$vuetify.breakpoint.mdAndUp" :xs12="$vuetify.breakpoint.smAndDown" class="reason secondary lighten-1 px-5 py-4"
                    v-for="(reason, i) of reasons" :key="i">
              <img :src="reason.img" alt="reason image" :height="$vuetify.breakpoint.xlOnly ? `150px` : `100px`" class="py-4">
              <p class="primary--text" :style="$vuetify.breakpoint.xlOnly ? `font-size:1.7em` : `font-size:1em`">{{ reason.text }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Raisons extends Vue {
  pouce: string = require('../../assets/pouce.png')
  reasonImg: string = require('../../assets/raisons.svg')
  hoverMe: string = require('../../assets/hover-me.png')

  reasons: { img: string, text: string }[] = [
    {
      img: require('../../assets/reasons-logos/clock.png'),
      text: 'Je suis votre interlocuteur unique et privilégié, je m’occupe de tout'
    },
    {
      img: require('../../assets/reasons-logos/message.png'),
      text: 'Je suis à votre écoute pour réaliser ce que vous souhaitez, vous êtes ma plus belle carte de visite'
    },
    {
      img: require('../../assets/reasons-logos/file_check.png'),
      text: 'Je suis une entreprise à taille humaine, chaque client est précieux'
    },
    {
      img: require('../../assets/reasons-logos/money.png'),
      text: 'Je suis aussi compétent qu’une agence de communication, les tarifs en moins'
    }
  ]

  animatePouce (): void {
    const pouce: HTMLElement = this.$refs.pouce as HTMLElement
    const plus: HTMLElement = this.$refs.plus as HTMLElement
    pouce.classList.add('animate')
    plus.classList.add('animate')
    setTimeout(() => {
      pouce.classList.remove('animate')
    }, 300)

    setTimeout(() => {
      plus.classList.remove('animate')
    }, 600)
  }
}
</script>

<style scoped>
  .raisons {
    min-height: 100vh;
  }

  .quatre-raisons {
    position: relative;
  }

  .quatre-raisons .hover-me {
    height: 90px;
    position: absolute;
    top: 0;
    right: -20px;
    transform: translate(100%, 10%);
    opacity: .2;
  }

  .quatre-raisons .plus {
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 2em;
    font-weight: 900;
    opacity: 1;
    transform: rotateZ(10deg);
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  .quatre-raisons .plus.animate {
    opacity: 0;
    top: -50px;
    transition: all .5s cubic-bezier(.52, -0.06, .42, 1.13);
  }

  .quatre-raisons .pouce {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center;
    margin: auto;
  }

  .quatre-raisons .pouce.animate {
    transform: rotateZ(-15deg);
    width: 75px;
  }

  .reason {
    text-align: center;
    width: calc(25% - 32px);
  }

  .reasons-part {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }

  .separator {
    height: 3px;
    width: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
