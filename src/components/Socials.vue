<template>
  <v-layout wrap
            :column="$vuetify.breakpoint.mdAndUp"
            :justify-space-around="$vuetify.breakpoint.smAndDown"
            :justify-center="$vuetify.breakpoint.mdAndUp"
            :fill-height="$vuetify.breakpoint.mdAndUp"
            class="socials"
            :class="{ 'vertical-center': $vuetify.breakpoint.smAndDown }">
    <v-hover>
      <a href="https://www.behance.net/hello1818" target="_blank" class="flex shrink py-3" slot-scope="{ hover }">
        <v-icon :color="hover ? `secondary` : xsColor" class="behance">mdi-behance</v-icon>
      </a>
    </v-hover>

    <v-hover>
      <a href="https://www.facebook.com/mi.so.graphiste/" target="_blank" class="flex shrink py-3" slot-scope="{ hover }">
        <v-icon :color="hover ? `secondary` : xsColor">mdi-facebook</v-icon>
      </a>
    </v-hover>

    <v-hover>
      <a href="https://www.linkedin.com/in/micka%C3%ABl-sossi-516560131/" target="_blank" class="flex shrink py-3" slot-scope="{ hover }">
        <v-icon :color="hover ? `secondary` : xsColor">mdi-linkedin</v-icon>
      </a>
    </v-hover>

    <v-hover>
      <a href="https://www.instagram.com/mi.so_graphiste/" target="_blank" class="flex shrink py-3" slot-scope="{ hover }">
        <v-icon :color="hover ? `secondary` : xsColor">mdi-instagram</v-icon>
      </a>
    </v-hover>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Socials extends Vue {
  get xsColor (): string {
    return this.$vuetify.breakpoint.smAndUp ? 'primary' : 'white'
  }
}
</script>

<style scoped>
.socials i {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
}

.socials i.behance {
  font-size: 1.5rem !important;
}

.socials > div {
  padding: 10px 0;
  cursor: pointer;
}

.socials > div:first-of-type {
  padding-top: 0;
}

.socials > div:last-of-type {
  padding-bottom: 0;
}
</style>
