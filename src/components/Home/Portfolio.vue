<template>
  <v-layout row wrap class="portfolio" id="portfolio">
    <v-flex xs12 sm6 md4 v-for="(item, index) of items" :key="index">
      <a :href="item.link" target="_blank">
        <v-responsive :aspect-ratio="1/1" width="100%" class="portfolio-item">
          <v-img :src="getBgImg(item)" height="100%" width="100%"/>
          <v-layout column class="descriptor pa-5">
            <v-flex shrink>
              <h2 class="portfolio-title primary--text">{{ item.title }}</h2>
            </v-flex>
            <v-flex shrink>
              <h3 class="desc black--text">{{ item.description }}</h3>
            </v-flex>
            <v-flex shrink>
              <hr class="secondary my-2"/>
            </v-flex>
            <v-spacer/>
            <v-flex shrink>
              <h6 class="date primary--text">{{ item.date }}</h6>
            </v-flex>
          </v-layout>
        </v-responsive>
      </a>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type PortfolioItem = { title?: string, description?: string, link?: string, img?: string, date?: string }
@Component
export default class Portfolio extends Vue {
  @Prop({type: Array, default: () => []})
  items: PortfolioItem[]

  getBgImg (item: PortfolioItem): string {
    if (item && item.img) {
      return require(`../../assets/portfolio/${item.img}`)
    }
    return ''
  }
}
</script>

<style scoped>
  .portfolio-item {
    position: relative;
    overflow: hidden;
  }

  .descriptor {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(100%);
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, .9);
    transition: transform .2s ease-in-out;
  }

  .portfolio-item:hover .descriptor {
    transform: translateY(0);
  }

  .portfolio-title {
    text-transform: uppercase;
    font-size: 2.3em !important;
    font-weight: bold;
  }

  .desc {
    font-size: 2.1em !important;
    font-weight: normal;
    line-height: 1.7em;
  }

  hr {
    width: 30px;
    border: 0;
    height: 2px;
  }

  .date {
    font-size: 1.2em !important;
    font-weight: 200;
  }
</style>