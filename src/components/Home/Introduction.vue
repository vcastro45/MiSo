<template>
  <div class="introduction" ref="introduction" id="introduction">
    <white-box v-if="$vuetify.breakpoint.smAndUp"/>

    <v-layout :wrap="$vuetify.breakpoint.mdAndUp" :column="$vuetify.breakpoint.smAndDown" style="height: 100%;">
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
      <v-flex xs10 class="eye-frame">
        <div class="subframe">
          <img :src="require('../../assets/bg-eye.svg')"class="bg-eye"/>
          <eye class="eye" :reference="introduction"/>
          <arrow class="go-next pointer" @click.native="window.location.replace('#raisons')" v-if="$vuetify.breakpoint.smAndUp"/>
        </div>
      </v-flex>
      <v-flex xs2 md1>
        <socials/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Eye from './Eye.vue'
import WhiteBox from './WhiteBox.vue'
import Arrow from '../Arrow.vue'
import Socials from '../Socials.vue'

@Component({
  components: {
    Eye,
    WhiteBox,
    Arrow,
    Socials
  }
})
export default class Introduction extends Vue {
  window = window
  introduction: HTMLElement | null = null

  mounted () {
    this.introduction = this.$refs.introduction as HTMLElement
  }
}
</script>

<style scoped>
  .introduction {
    position: relative;
    height: calc(100vh - 60px);
    margin-top: 60px;
  }

  .subframe {
    height: 100%;
  }

  .go-next {
    left: 50%;
    transform: translateY(calc(-100% - 10px));
  }

  .eye-frame {
    max-width: 100vw;
    overflow: hidden;
  }

  .bg-eye {
    position: absolute;
    left: 45%;
    top: 40%;
    transform: translate(-50%, -50%);
    height: 70%;
  }

  .eye {
    width: 100%;
    height: 100%;
  }

  .pointer {
    cursor: pointer;
  }
</style>
