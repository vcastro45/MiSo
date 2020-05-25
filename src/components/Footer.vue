<template>
  <footer class="footer secondary white--text">
    <v-layout wrap justify-space-around class="px-5">
			<v-flex shrink :class="{ 'py-4': $vuetify.breakpoint.mdAndUp, 'py-5': $vuetify.breakpoint.smAndDown }">
				Developed by <a href="mailto:victor.castro.cintas@gmail.com" class="primary--text">Victor Castro</a>
			</v-flex>
      <v-flex shrink :class="{ 'py-4': $vuetify.breakpoint.mdAndUp, 'py-5': $vuetify.breakpoint.smAndDown }">
        <v-layout wrap justify-center>
          <v-flex shrink text-xs-center>
            Contact : Mickaël Sossi // <a href="tel:0666039963" style="color: white;">(+33) 6.66.03.99.63</a> // <a href="mailto:hello@mi-so.fr" style="color: white;">hello@mi-so.fr</a> // Melun // 2020 - All Rights Reserved
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

<style scoped>
  footer {
    position: relative;
  }

	a {
		font-weight: bold;
	}
</style>