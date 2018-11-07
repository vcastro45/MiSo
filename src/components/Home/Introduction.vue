<template>
  <div class="introduction" ref="introduction" id="introduction">
    <v-layout wrap column class="whitebox primary--text" v-if="$vuetify.breakpoint.mdAndUp">
      <v-flex shrink><h2>Hi There</h2></v-flex>
      <v-flex shrink class="py-2"><hr class="secondary"/></v-flex>
      <v-flex shrink>
        <p>Diplômé de la Fonderie de l’Image, je suis<br/>
          graphiste print / webdesigner.</p>
      </v-flex>
      <v-flex shrink>
        <p>Du projet le plus simple, à la direction artistique<br/>
          globale d’une marque ; je cherche des réponses<br/>
          sur mesures, afin de créer des univers<br/>
          impactants et adaptés. Je réponds à tout type de<br/>
          projet, Print & Digital dans les domaines du<br/>
          design graphique, de la communication visuelle,<br/>
          la publicité, l’édition.</p>
      </v-flex>
      <v-flex shrink>
        <p>Suivant vos besoins, je m’entoure des<br/>
          professionnels (développeurs, imprimeurs,<br/>
          photographes…) nécessaires à la réalisation de<br/>
          vos outils.</p>
      </v-flex>
      <v-flex shrink>
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
          <arrow class="go-next"/>
        </div>
      </v-flex>
      <v-flex xs2 md1>
        <v-layout :column="$vuetify.breakpoint.mdAndUp" :justify-space-around="$vuetify.breakpoint.smAndDown" wrap :justify-center="$vuetify.breakpoint.mdAndUp" :fill-height="$vuetify.breakpoint.mdAndUp" class="social" :class="{ 'vertical-center': $vuetify.breakpoint.smAndDown }">
          <a href="https://www.behance.net/hello1818" class="flex shrink py-3">
            <v-icon color="primary">mdi-behance</v-icon>
          </a>
          <a href="https://www.facebook.com/mi.so.graphiste/" class="flex shrink py-3">
            <v-icon color="primary">mdi-facebook</v-icon>
          </a>
          <a href="https://www.linkedin.com/in/micka%C3%ABl-sossi-516560131/" class="flex shrink py-3">
            <v-icon color="primary">mdi-linkedin</v-icon>
          </a>
          <a href="https://www.instagram.com/mi.so_graphiste/" class="flex shrink py-3">
            <v-icon color="primary">mdi-instagram</v-icon>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Eye from './Eye.vue'
import Arrow from '../Arrow.vue'

@Component({
  components: {
    Eye,
    Arrow
  }
})
export default class Introduction extends Vue {
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
    height: 100%;
    padding: 70px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .7);
    z-index: 1;
  }

  .whitebox h2 {
    font-size: 2em;
    letter-spacing: 1px;
    font-family: Graceland;
  }

  .whitebox h3 {
    font-size: 2.4em;
    font-family: NouvelleVague;
  }

  .subframe {
    height: 100%;
  }

  .go-next {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  .social i {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2em;
  }

  .social > div {
    padding: 10px 0;
    cursor: pointer;
  }

  .social > div:first-of-type {
    padding-top: 0;
  }

  .social > div:last-of-type {
    padding-bottom: 0;
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
</style>
