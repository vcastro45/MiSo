<template>
  <div class="portfolio" id="portfolio">
    <v-layout wrap>
      <v-flex xs12>
        <h2 class="home-title pb-5">PORTFOLIO</h2>
      </v-flex>
      <v-flex xs12>
        <v-layout wrap justify-space-between>
          <v-flex  xs12 md6 v-for="(frame, index) in frames" :key="index">
            <div class="portfolio-frame ma-3" :style="`background-image: url(${frame})`"></div>
          </v-flex>
          <v-flex xs12 md6 v-if="frames.length % 2 > 0" class="hidden-sm-and-down">
            <div class="portfolio-frame ma-3"></div>
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
}
</script>

<style scoped>
  .portfolio {
    padding: 90px;
  }

  .portfolio-frame {
    height: 40vw;
    background-size: cover;
    background-color: #0031FF;
  }
</style>
