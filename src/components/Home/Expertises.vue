<template>
	<div class="expertises" id="expertises">
		<v-layout wrap>
			<v-flex xs12 style="padding-left: 90px;">
				<h2 class="home-title pb-5">EXPERTISES</h2>
			</v-flex>
			<v-flex xs12>
				<v-layout wrap>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #e6eaff;">
						<v-layout>
							<v-flex shrink class="px-4">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Mise en pages</h4>
									<p>
										Disposition graphique du contenu de la
										maquette, hiérarchie des informations,
										choix typographiques et création de
										gabarit.
									</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #f2f4ff;">
						<v-layout>
							<v-flex shrink class="pl-4 pr-3">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Retouche d'images</h4>
									<p>
										Retouche et correction d’images,
										chromie, ajustement des courbes et détour
										age de haute qualité avec masque de fusion.
									</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #e6eaff;">
						<v-layout>
							<v-flex shrink class="pl-4 pr-3">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Identité visuelle</h4>
									<p>
										Conception d’identité visuelle, charte
										graphique, logo, en prenant en compte
										le message que doit véhiculer la marque.
									</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #dae1ff;">
						<v-layout>
							<v-flex shrink class="pl-4 pr-3">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Supports de communication</h4>
									<p>
										Création de l’ensemble des supports
										de communication (flyer, plaquette,
										dépliant, brochure, carte de visite, affiche...)
									</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #e6eaff;">
						<v-layout>
							<v-flex shrink class="pl-4 pr-3">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Design éditorial</h4>
									<p>
										Mise en place de charte graphique,
										création de maquette pour tous types de
										supports imprimés (livres, magazine,
										catalogue...)
									</p>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm6 md4 class="py-5" style="background-color: #dae1ff;">
						<v-layout>
							<v-flex shrink class="pl-4 pr-3">
								<img :src="idea"/>
							</v-flex>
							<v-flex class="expertise-text">
								<div class="px-3">
									<h4 class="primary--text">Reproduction de logo</h4>
									<p>
										Reproduction fidèle de logo existant,
										pour qu’il puisse être exploiter pour tous
										types de formats sans perte de qualité
									</p>
								</div>
							</v-flex>
						</v-layout>
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
	idea: any = require('../../assets/idea.png')
}
</script>

<style scoped>
	.expertises {
		padding-top: 90px;
	}

	.expertise-text {
		font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
	}

	.expertise-text > div {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	img {
		height: 100px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.expertise-text h4 {
		text-transform: uppercase;
	}

	.expertise-text p::after {
		content: '';
		width: 30px;
		height: 2px;
		margin: 0 10px;
		background-color: #0031FF;
		display: inline-block;
	}
</style>
