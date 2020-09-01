<template>
  <Wrapper>
    <BackdropString
      v-for="(text,index) in texts"
      :key="index"
      :class="index === 0 && highlight ? 'highlight' : ''"
      :gap="gap"
    >{{ text }}</BackdropString>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'
// import color from '~/utils/color'
// import Picture from '~/components/Picture.vue'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BackdropString = styled('span', { gap: Boolean })`
  font-family: Barlow Semi Condensed, Anuphan;
  color: rgba(242, 246, 252, 0.09);
  -webkit-text-fill-color: hsl(
    209deg,
    72%,
    8%
  ); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(242, 246, 252, 0.09);
  font-style: italic;
  font-weight: bold;
  font-size: 500%;
  line-height: ${({ gap }) => (gap ? '90.5%' : '75%')};

  &.highlight {
    -webkit-text-fill-color: unset;
    -webkit-text-stroke-width: 0px;
  }
`

export default {
  components: {
    BackdropString,
    Wrapper
  },
  props: {
    text: { type: String, default: '' },
    times: { type: Number, default: 1 },
    fade: { type: Boolean, default: false },
    highlight: { type: Boolean, default: false },
    gap: { type: Boolean, default: true }
  },
  computed: {
    texts() {
      return Array(this.times).fill(String(this.text))
    }
  }
}
</script>
