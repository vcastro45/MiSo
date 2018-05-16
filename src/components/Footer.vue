<template>
  <footer class="footer">
    <v-layout wrap justify-center>
      <v-flex xs12 sm11 class="py-4">
        <v-layout wrap>
          <v-spacer/>
          <v-flex xs4 text-xs-center>
            2018 - Mickaël Sossi - All Rights Reserved
          </v-flex>
          <v-flex xs4 text-xs-right>
            Mentions Légales
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
