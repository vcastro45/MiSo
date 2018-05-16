<template>
	<div class="expertises" id="expertises">
		<v-layout wrap>
			<v-flex xs12>
				<h2 class="home-title pb-5">EXPERTISES</h2>
			</v-flex>
			<v-flex xs12 md6 class="py-3">
				<v-layout>
					<v-flex shrink>
						<img :src="require('../../assets/idea.png')"/>
					</v-flex>
					<v-flex class="expertise-text">
						<div class="px-5">
							Réalisation sur-mesure de vos supports de
							communication :<br/>
							plaquette commerciale, catalogue, magazine, flyer,
							brochure, affiche, publicité, dépliant, carte de visite,
						</div>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs12 md6 class="py-3">
				<v-layout>
					<v-flex shrink>
						<img :src="require('../../assets/idea.png')"/>
					</v-flex>
					<v-flex class="expertise-text">
						<div class="px-5">
							Création de votre logo, charte graphique, identité
							visuelle ainsi que l’ensemble de leurs déclinaisons sur
							les différents supports imprimés et en ligne.
						</div>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs12 md6 class="py-3">
				<v-layout>
					<v-flex shrink>
						<img :src="require('../../assets/idea.png')"/>
					</v-flex>
					<v-flex class="expertise-text">
						<div class="px-5">
							Réalisation de kakémono, d’habillage vitrine et de
							visuel publicitaire qui s’adapte aux contraintes de
							l’environnement.
						</div>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs12 md6 class="py-3">
				<v-layout>
					<v-flex shrink>
						<img :src="require('../../assets/idea.png')"/>
					</v-flex>
					<v-flex class="expertise-text">
						<div class="px-5">
							Suivi de projet et préparation des fichiers pour
							l’impression (résolution, taux d’encrage, traits de coupe
							et fonds perdus).
						</div>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Expertises extends Vue {

}
</script>

<style scoped>
	.expertises {
		padding: 90px;
	}

	.expertise-text > div {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
