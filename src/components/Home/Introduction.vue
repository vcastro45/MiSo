<template>
  <div class="introduction" ref="introduction">
    <v-layout wrap column justify-center class="bluebox white--text" v-if="$vuetify.breakpoint.mdAndUp">
      <v-flex shrink><h2 class="text-xs-center">Graphiste</h2></v-flex>
      <v-flex shrink><h2 class="text-xs-center">Print</h2></v-flex>
      <v-flex shrink><h2 class="text-xs-center">Webdesigner</h2></v-flex>
      <v-flex shrink><h5 class="text-xs-center" style="letter-spacing: 0px">● ● ●</h5></v-flex>
    </v-layout>
    <v-layout :wrap="$vuetify.breakpoint.mdAndUp" :column="$vuetify.breakpoint.smAndDown" style="height: 100%;">
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
      <v-flex xs10 class="eye-frame">
        <eye class="eye"/>
        <arrow to="a-propos" class="go-next"/>
      </v-flex>
      <v-flex xs2 md1>
        <v-layout :column="$vuetify.breakpoint.mdAndUp" :justify-space-around="$vuetify.breakpoint.smAndDown" wrap :justify-center="$vuetify.breakpoint.mdAndUp" :fill-height="$vuetify.breakpoint.mdAndUp" class="social" :class="{ 'vertical-center': $vuetify.breakpoint.smAndDown }">
          <a href="https://www.behance.net/hello1818" class="flex shrink py-3">
            <v-icon>mdi-behance</v-icon>
          </a>
          <a href="https://www.facebook.com/mi.so.graphiste/" class="flex shrink py-3">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a href="https://www.linkedin.com/in/micka%C3%ABl-sossi-516560131/" class="flex shrink py-3">
            <v-icon>mdi-linkedin</v-icon>
          </a>
          <a href="https://www.instagram.com/mi.so_graphiste/" class="flex shrink py-3">
            <v-icon>mdi-instagram</v-icon>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Eye from './Eye.vue'
import Arrow from '../Arrow.vue'

@Component({
  components: {
    Eye,
    Arrow
  }
})
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
    background-color: #0031FF;
    height: 27vw;
    width: 65vh;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transform-origin: 0 0;
    transform: rotateZ(-90deg) translateX(-50%);
  }

  .bluebox h2 {
    font-size: 3em;
    line-height: 1.1em;
    letter-spacing: 2px;
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

  .go-next {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -100%);
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

  .eye {
    width: 100%;
    height: 100%;
  }

  .vertical-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
