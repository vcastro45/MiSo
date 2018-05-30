<template>
  <div class="Home">
    <introduction/>
    <a-propos ref="a-propos"/>
    <expertises ref="expertises"/>
    <portfolio ref="portfolio"/>
    <contact ref="contact"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Introduction from '@/components/Home/Introduction.vue'
import APropos from '@/components/Home/APropos.vue'
import Expertises from '@/components/Home/Expertises.vue'
import Portfolio from '@/components/Home/Portfolio.vue'
import Contact from '@/components/Home/Contact.vue'

@Component({
  components: {
    Introduction,
    APropos,
    Expertises,
    Portfolio,
    Contact
  }
})
export default class Home extends Vue {
  @Watch('$route.name', { immediate: true })
  onRouteChanged (newVal: string | undefined) {
    let anchor = `#${newVal}`
    let anchorElement = document.querySelector(anchor)
    if (anchorElement) {
      anchorElement.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

