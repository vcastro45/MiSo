<template>
  <router-link class="arrow" :class="direction" :to="to">
    <v-layout column style="height: 100%;" :justify-end="direction === 'down'">
      <v-icon large class="white--text" :class="direction">mdi-chevron-{{ direction }}</v-icon>
    </v-layout>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type Direction = 'down' | 'up'

@Component
export default class Arrow extends Vue {
  @Prop({ type: String, default: 'down' })
  direction: Direction

  @Prop({ type: [ Object, String ], required: true })
  to: any
}
</script>

<style scoped>
  .arrow {
    display: inline-block;
    text-decoration: none;
    background-color: #0031FF;
    height: 60px;
    width: 36px;
    position: relative;
  }

  .arrow .icon {
    position: relative;
  }

  .arrow.down:hover .icon {
    animation: arrowDown .5s ease-in 0s infinite;
  }

  .arrow.up:hover .icon {
    animation: arrowTop .5s ease-in 0s infinite;
  }

  @keyframes arrowDown {
    from { top: 0; }
    to { top: 10px; }
  }

  @keyframes arrowTop {
    from { top: 10px; }
    to { top: 0; }
  }
</style>
