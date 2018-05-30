<template>
  <div class="portfolio" id="portfolio">
    <v-layout wrap>
      <v-flex xs12 style="padding: 0 90px">
        <h2 class="home-title pb-5">PORTFOLIO</h2>
      </v-flex>

      <v-flex xs12>
        <v-layout wrap>
          <router-link to="#" class="flex xs12 md4" v-for="(frame, index) in frames" :key="index">
            <div
              class="portfolio-frame"
              :class="{ 'fullheight': $vuetify.breakpoint.smAndDown }"
              :style="getStyle(frame)"
            >
              <v-layout column class="portfolio-frame__desc white--text pa-5" :style="`background-color: ${getRGBAColor(frame.color, '.8')};`" v-if="frame.title || frame.text || frame.date">
                <v-flex shrink class="frame-title" v-html="frame.title"/>
                <v-flex shrink class="frame-text" v-html="frame.text"/>
                <hr class="my-2" v-if="frame.title || frame.text"/>
                <v-spacer/>
                <v-flex shrink style="opacity: .6;">{{ frame.date }}</v-flex>
              </v-layout>
            </div>
          </router-link>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-layout wrap justify-center class="pt-5">
          <v-flex v-for="(logo, index) in logos" :key="index" class="logo">
            <img :src="logo" height="75"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  type Frame = { img?: string, color: string, title?: string, text?: string, date?: string }

  @Component
  export default class Portfolio extends Vue {

    private hexToRgb(hex: string) {
      let result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    getRGBAColor(hex: string, opacity: string): string {
      let rgb = this.hexToRgb(hex)
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
    }

    frames: Frame[] = [
      {
        img: require('../../assets/portfolio/frame1.jpg'),
        color: '#0031FF',
        title: 'OFFICE NOTARIAL LAVAL<br/>& LAVAL-CASSADOUR',
        text: 'Création logo & univers<br/>graphique',
        date: 'décembre 2017'
      },
      {
        img: require('../../assets/portfolio/frame2.jpg'),
        color: '#0031FF',
      },
      {
        img: require('../../assets/portfolio/frame3.jpg'),
        color: '#0031FF',
      },
      {
        img: require('../../assets/portfolio/frame4.jpg'),
        color: '#0031FF',
      },
      {
        img: require('../../assets/portfolio/frame5.jpg'),
        color: '#0031FF',
      },
      {
        color: '#000000'
      },
      {
        color: '#ff3399'
      },
      {
        color: '#6683ff'
      },
      {
        color: '#ffeb02'
      },
      {
        color: '#c1ff6c'
      },
      {
        color: '#99adff'
      },
      {
        color: '#92836a'
      }
    ]

    logos: string[] = [
      require('../../assets/logos/office-notarial-logo.jpg'),
      require('../../assets/logos/freed-home-camper-logo.jpg'),
      require('../../assets/logos/webelier-logo.jpg'),
      require('../../assets/logos/scc-logo.jpg')
    ]

    getStyle(frame: Frame): string {
      let style = `background-color: ${frame.color};`

      if (frame.img) {
        style += `background-image: url(${frame.img});`
      }
      return style
    }
  }
</script>

<style scoped>
  .portfolio {
    padding: 90px 0;
  }

  .portfolio-frame {
    height: 33.33333333333333vw;
    background-size: cover;
    background-color: #0031FF;
  }

  .portfolio-frame.fullheight {
    height: 100vw !important;
  }

  .portfolio-frame__desc {
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
  }

  .frame-title {
    font-size: 1.6em;
  }

  .frame-text {
    font-size: 1.4em;
  }

  .portfolio-frame__desc hr {
    border: 0;
    height: 2px;
    width: 40px;
    background-color: white;
  }

  .portfolio-frame__desc:hover {
    opacity: 1;
  }

  .logo img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
