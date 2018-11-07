<template>
  <div class="Home">
    <introduction/>
    <raisons/>
    <expertises/>
    <tagline>
      <h2>
        <span class="line">Nous ne pouvons se satisfaire de la médiocrité...</span>
        <span class="line">Pouvez-vous réussir sir vous avez seulement l'équipement de base ?</span>
        <span class="line">Pas question ! C'est seulement quand vous savez qui vous êtes que vous</span>
        <span class="line">pouvez devenir ce que vous voulez.</span>
      </h2>
      <p slot="hint" class="secondary--text">
        <span class="line">transformons ensemble l'ambition brûlante en stratégie de marque et dotons d'une sensation numérique.</span>
        <span class="line">Tuer la moyenne - la médiocrité est beaucoup trop ennuyeuse.</span>
      </p>
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
