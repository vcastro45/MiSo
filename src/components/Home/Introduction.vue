<template>
  <div class="introduction" ref="introduction" id="introduction">

    <v-layout wrap column class="whitebox primary--text" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="pulse-btn"><v-icon class="pulse pa-1">mdi-chevron-right</v-icon></div>
      <v-flex shrink><h2>Hi There</h2></v-flex>
      <v-flex shrink class="py-2"><hr class="secondary"/></v-flex>
      <v-flex shrink :class="{ 'big-font': $vuetify.breakpoint.xlOnly }">
        <p>Diplômé de la Fonderie de l’Image, je suis<br/>
          graphiste print / webdesigner.</p>
      </v-flex>
      <v-flex shrink :class="{ 'big-font': $vuetify.breakpoint.xlOnly }">
        <p>Du projet le plus simple, à la direction artistique<br/>
          globale d’une marque ; je cherche des réponses<br/>
          sur mesures, afin de créer des univers<br/>
          impactants et adaptés. Je réponds à tout type de<br/>
          projet, Print & Digital dans les domaines du<br/>
          design graphique, de la communication visuelle,<br/>
          la publicité, l’édition.</p>
      </v-flex>
      <v-flex shrink :class="{ 'big-font': $vuetify.breakpoint.xlOnly }">
        <p>Suivant vos besoins, je m’entoure des<br/>
          professionnels (développeurs, imprimeurs,<br/>
          photographes…) nécessaires à la réalisation de<br/>
          vos outils.</p>
      </v-flex>
      <v-flex shrink class="strongimg">
        <h3 class="secondary--text">
          <span class="line">Pour une image</span>
          <span class="line">forte,</span>
          <span class="line">qui perdure</span>
          <span class="line">dans le temps</span>
        </h3>
      </v-flex>
    </v-layout>


    <v-layout :wrap="$vuetify.breakpoint.mdAndUp" :column="$vuetify.breakpoint.smAndDown" style="height: 100%;">
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
      <v-flex xs10 class="eye-frame">
        <div class="subframe">
          <img :src="require('../../assets/bg-eye.svg')"class="bg-eye"/>
          <eye class="eye" :reference="introduction"/>
          <arrow class="go-next pointer" @click.native="window.location.replace('#raisons')" v-if="$vuetify.breakpoint.smAndUp"/>
        </div>
      </v-flex>
      <v-flex xs2 md1>
        <socials/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Eye from './Eye.vue'
import Arrow from '../Arrow.vue'
import Socials from '../Socials.vue'

@Component({
  components: {
    Eye,
    Arrow,
    Socials
  }
})
export default class Introduction extends Vue {
  window = window
  introduction: HTMLElement | null = null

  mounted () {
    this.introduction = this.$refs.introduction as HTMLElement
  }
}
</script>

<style scoped>
  .introduction {
    position: relative;
    height: calc(100vh - 60px);
    margin-top: 60px;
  }

  .whitebox {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(50vw - 180px);
    transform: translateX(calc(-100% + 70px));
    height: 100%;
    padding: 40px 70px 0 70px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .7);
    z-index: 1;
    transition: transform .6s cubic-bezier(0.66, 0, 0, 1);
  }

  .whitebox:hover {
    transform: translateX(0);
  }

  .whitebox h2 {
    font-size: 2em;
    letter-spacing: 1px;
    font-family: Graceland;
  }

  .big-font {
    font-size: 1.5em;
  }

  .whitebox h3 {
    font-size: 2.4em;
    font-family: NouvelleVague;
  }

  .subframe {
    height: 100%;
  }

  .go-next {
    left: 50%;
    transform: translateY(calc(-100% - 10px));
  }

  .bg-eye {
    position: absolute;
    left: 45%;
    top: 40%;
    transform: translate(-50%, -50%);
    height: 70%;
  }

  .eye {
    width: 100%;
    height: 100%;
  }

  hr {
    border: 0;
    height: 2px;
    background-color: white;
    width: 40px;
  }

  .vertical-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .line {
    display: block;
    font-family: inherit;
    font-size: inherit;
    line-height: 40px;
  }

  .pointer {
    cursor: pointer;
  }

  @media screen and (max-width: 1180px) {
    .strongimg {
      display: none;
    }
  }

  .pulse-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-20px, -50%);
  }
  .pulse {
    box-shadow: 0 0 0 0 rgba(232, 234, 237, 0.7);
    border-radius: 999px;
    cursor: pointer;
    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  .pulse:hover {
    -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
  }

  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 234, 237, 0);}}
  @-moz-keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 234, 237, 0);}}
  @-ms-keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 234, 237, 0);}}
  @keyframes pulse {to {box-shadow: 0 0 0 20px rgba(232, 234, 237, 0);}}
</style>
