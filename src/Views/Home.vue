<template>
  <div class="Home">
    <introduction/>
    <raisons/>
    <expertises/>
    <tagline>
      <h2>
        <span class="line">Réussir nécessite de viser plus haut…</span>
        <span class="line">il ne faut pas se satisfaire du nécessaire, il faut voir plus grand !</span>
        <span class="line">Avoir le minimum va plus vite, faire le maximum permet d’aller plus loin.</span>
      </h2>
      <h2 slot="hint" class="secondary--text">
        <span class="line">Travaillons ensemble pour que votre communication soit à la hauteur de votre ambition car la médiocrité ne peut pas être une option !</span>
      </h2>
    </tagline>
    <portfolio :items="portfolio"/>
    <testimonials/>
    <contact/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Introduction from '@/components/Home/Introduction.vue'
import Raisons from '@/components/Home/Raisons.vue'
import Expertises from '@/components/Home/Expertises.vue'
import Tagline from '@/components/Tagline.vue'
import Portfolio from '@/components/Home/Portfolio.vue'
import Testimonials from '@/components/Home/Testimonials.vue'
import Contact from '@/components/Home/Contact.vue'
import axios from 'axios'

type PortfolioItem = { title?: string, description?: string, link?: string, date?: string }
@Component({
  components: {
    Introduction,
    Raisons,
    Expertises,
    Tagline,
    Portfolio,
    Testimonials,
    Contact
  }
})
export default class extends Vue {
  portfolio: PortfolioItem[] = []

  async created () {
    this.portfolio = (await axios.get<PortfolioItem[]>('/static/portfolio.json')).data
  }
}
</script>

<style scoped>
  .line {
    display: block;
    font-family: inherit;
    font-weight: normal;
  }

  p {
    font-size: 1em;
    letter-spacing: 1px;
    font-weight: normal;
  }
</style>
