<template>
  <v-layout wrap class="text-input">
    <v-flex xs12 class="text-input__label" :class="{ required: required }">{{ label }}</v-flex>
    <v-flex xs12>
      <input v-if="!textarea" @input="$emit('input', $refs.input.value)" type="text" :style="`height: ${height}px;`" :placeholder="placeholder" :required="required" ref="input"/>
      <textarea v-else @input="$emit('input', $refs.input.value)" :placeholder="placeholder" :rows="height" :required="required" ref="input"></textarea>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TextInput extends Vue {
  @Prop({ type: String, default: '' })
  value: string

  @Prop({ type: String, default: '' })
  label: string

  @Prop({ type: Boolean, default: false })
  required: boolean

  @Prop({ type: Number, default: 40 })
  height: number

  @Prop({ type: String, default: '' })
  placeholder: string

  @Prop({ type: Boolean, default: false })
  textarea: boolean
}
</script>

<style scoped>
  .required::after {
    content: '*';
  }

  .text-input__label {
    font-family: 'AcherusGrotesque', Arial, Helvetica, sans-serif;
    font-size: 1.5em;
  }

  input, textarea {
    background-color: white;
    border-radius: 8px;
    width: 100%;
    color: black;
    padding: 0 15px;
    outline: none;
    font-size: 20px;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #0031FF;
    opacity: .3;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #0031FF;
    opacity: .3;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #0031FF;
    opacity: .3;
  }
</style>