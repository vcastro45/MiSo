<template>
  <div class="arrow" :class="direction">
    <div class="text primary--text">{{ text }}</div>
    <v-layout column style="height: 100%;" :justify-end="direction === 'down'">
      <v-icon large :class="direction" color="primary">mdi-arrow-{{ direction }}</v-icon>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type Direction = 'down' | 'up'

@Component
export default class Arrow extends Vue {
  @Prop({ type: String, default: 'down' })
  direction: Direction

  @Prop({ type: String, default: 'scroll' })
  text: string
}
</script>

<style scoped>
  .arrow {
    display: inline-block;
    text-decoration: none;
    height: 60px;
    width: 36px;
    position: relative;
  }

  .arrow .v-icon {
    position: relative;
  }

  .text {
    position: absolute;
    top: -10px;
    left: 2px;
    transform-origin: center;
    transform: rotateZ(-90deg);
    font-size: .9em;
  }
</style>
