<template>
  <v-layout justify-center class="tagline primary">
    <v-flex xs11 sm8 xl6>
      <slot></slot>
      <hr class="secondary my-3"/>
      <slot name="hint"></slot>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Tagline extends Vue {
}
</script>

<style scoped>
  .tagline {
    color: white;
    padding-top: 130px;
    padding-bottom: 130px;
  }

  hr {
    width: 30px;
  }
</style>