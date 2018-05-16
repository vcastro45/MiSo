<template>
	<div class="introduction">
		<v-layout wrap column justify-center class="bluebox white--text">
		<v-flex shrink><h2 class="text-xs-center">Mickaël</h2></v-flex>
		<v-flex shrink><h2 class="text-xs-center">Sossi</h2></v-flex>
		<v-flex shrink><h5 class="text-xs-center">Graphiste Print / Web</h5></v-flex>
		</v-layout>
		<v-layout wrap style="height: 100%;">
		<v-spacer/>
		<v-flex xs10 class="eye-frame">
			<router-link class="go-next" to="a-propos"><v-icon large class="white--text">mdi-chevron-down</v-icon></router-link>
		</v-flex>
		<v-flex xs1>
			<v-layout column wrap justify-center fill-height class="social">
				<a href="https://www.behance.net/hello1818" class="flex shrink py-3"><v-icon>mdi-behance</v-icon></a>
				<a href="https://www.facebook.com/mi.so.graphiste/" class="flex shrink py-3"><v-icon>mdi-facebook</v-icon></a>
				<a href="https://www.linkedin.com/in/micka%C3%ABl-sossi-516560131/" class="flex shrink py-3"><v-icon>mdi-linkedin</v-icon></a>
				<a href="#" class="flex shrink py-3"><v-icon>mdi-dribbble</v-icon></a>
				<a href="https://www.instagram.com/mi.so_graphiste/" class="flex shrink py-3"><v-icon>mdi-instagram</v-icon></a>
			</v-layout>
		</v-flex>
		</v-layout>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Introduction extends Vue {
}
</script>

<style scoped>
.introduction {
  position: relative;
  height: calc(100vh - 60px);
  margin-top: 60px;
}

.bluebox {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #0031FF;
  height: 27vw;
  width: 65vh;
  transform-origin: 0 0;
  transform: rotateZ(-90deg) translateX(-50%);
}

.bluebox h2 {
  font-size: 5em;
  line-height: .9em;
  letter-spacing: 7px;
}
.bluebox h5 {
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: 4px;
  margin-top: 15px;
}

.eye-frame {
  background-color: #E6E6E6;
}

.introduction .go-next {
  display: inline-block;
  text-decoration: none;
  background-color: #0031FF;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.social i {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2em;
}
.social > div {
  padding: 10px 0;
  cursor: pointer;
}

.social > div:first-of-type {
  padding-top: 0;
}

.social > div:last-of-type {
  padding-bottom: 0;
}
</style>
