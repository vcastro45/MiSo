<template>
	<div class="a-propos" id="a-propos">
		<v-layout wrap fill-height>
			<v-flex xs12 md6 class="miso-picture"/>
			<v-flex xs12 md6 class="miso-resume white--text">
				<h2>A PROPOS</h2>
				<p>
					Diplômé de la Fonderie de l’Image, je suis designer graphique et je vous
accompagne et vous conseille de la prise de contact à la livraison du produit.
Suivant vos besoins, je m’entoure des professionnels (développeurs,
imprimeurs,…) nécessaires à la réalisation de vos outils.
				</p>
				<p>
					Du projet le plus simple, à la direction artistique globale d’une marque ; je
cherche des réponses sur mesures, afin de créer des univers impactants et
adaptés.
				</p>
				<p>
					Votre logo reflète votre image de marque et c’est ce que l’on voit en premier
sur tous vos documents, il doit être efficace et facilement repérable.
				</p>
				<h3>Pour une image forte, qui perdure dans le temps !</h3>
			</v-flex>
		</v-layout>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class APropos extends Vue {

}
</script>

<style scoped>
.miso-picture {
	background-image: url('../../assets/miso-picture.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 500px;
}

.miso-resume {
	background-color: #000000;
	padding: 90px;
}

.miso-resume h2 {
	font-size: 2.3em;
	font-weight: 600;
}

.miso-resume p {
	color: #7C8080;
	font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
}

.miso-resume > p:first-of-type {
	margin-top: 40px;
}

.miso-resume h3 {
	font-size: 1.6em;
	margin-top: 30px;
}
</style>
