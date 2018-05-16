<template>
  <v-app id="app">
    <v-container fluid class="pa-0">
      <v-layout column>
        <nav-menu fixed/>
        <router-view/>
        <footer-miso/>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import NavMenu from '@/components/NavMenu.vue'
import FooterMiso from '@/components/Footer.vue'

@Component({
  components: {
    NavMenu,
    FooterMiso
  }
})
export default class App extends Vue {
}
</script>
