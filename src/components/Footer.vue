<template>
  <footer class="footer black white--text">
    <v-layout wrap justify-center>
      <v-flex xs12 sm11 class="py-4">
        <v-layout wrap justify-center>
          <v-flex shrink text-xs-center>
            Contact : Mickaël Sossi // <a href="tel:0666039963" style="color: white;">(+33) 6.66.03.99.63</a> // <a href="mailto:hello@mi-so.fr" style="color: white;">hello@mi-so.fr</a> // Paris // 2018 - All Rights Reserved
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
}
</script>
