<template>
  <div class="portfolio" id="portfolio">
    <v-layout wrap>
      <v-flex xs12 style="padding: 0 90px">
        <h2 class="home-title pb-5">PORTFOLIO</h2>
      </v-flex>
      <v-flex xs12 style="padding: 0 90px">
        <v-layout wrap justify-space-between>
          <v-flex  xs12 md6 v-for="(frame, index) in frames" :key="index">
            <div class="portfolio-frame ma-3" :style="`background-image: url(${frame})`"></div>
          </v-flex>
          <v-flex xs12 md6 v-if="frames.length % 2 > 0" class="hidden-sm-and-down">
            <div class="portfolio-frame ma-3"></div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout wrap justify-center class="pt-5">
          <v-flex v-for="(logo, index) in logos" :key="index" class="logo">
            <img :src="logo" height="75"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Portfolio extends Vue {
  frames: string[] = [
    require('../../assets/portfolio/frame1.jpg'),
    require('../../assets/portfolio/frame2.jpg'),
    require('../../assets/portfolio/frame3.jpg'),
    require('../../assets/portfolio/frame4.jpg'),
    require('../../assets/portfolio/frame5.jpg')
  ]

  logos: string[] = [
    require('../../assets/logos/office-notarial-logo.jpg'),
    require('../../assets/logos/freed-home-camper-logo.jpg'),
    require('../../assets/logos/webelier-logo.jpg'),
    require('../../assets/logos/scc-logo.jpg')
  ]
}
</script>

<style scoped>
  .portfolio {
    padding: 90px 0;
  }

  .portfolio-frame {
    height: 40vw;
    background-size: cover;
    background-color: #0031FF;
  }

  .logo img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
