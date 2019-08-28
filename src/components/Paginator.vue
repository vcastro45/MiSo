<template>
  <v-container fluid grid-list-lg class="paginator pa-0">
    <v-layout justify-center class="ma-0">
      <v-flex shrink v-for="i in length" :key="i" class="primary--text cursor" :class="{ 'active': index === i - 1 }" @click="$emit('input', i - 1)">
        <span class="text px-1">{{ ("0" + i).slice(-2) }}</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Paginator extends Vue {
  @Prop({ default: 0 })
  value: number
  @Prop({ default: 0 })
  length: number

  index: number = 0

  @Watch('value', { immediate: true })
  onValueChanged (newVal: number) {
    this.index = newVal
  }
}
</script>

<style scoped>
  .cursor {
    cursor: pointer;
  }
  
  .cursor::after {
    content: '';
    display: block;
    height: 4px;
    background-color: #edb48e;
    opacity: 1;
  }

  .cursor > .text {
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: .02em;
    opacity: 0;
    transition: all ease-out .3s;
  }

  .cursor.active > .text {
    font-size: 26px !important;
    opacity: 1 !important;
  }
</style>