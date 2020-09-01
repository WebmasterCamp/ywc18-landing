<template>
  <Wrapper>
    <BackdropString
      v-for="(text,index) in texts"
      :key="index"
      :class="filled || (index === 0 && highlight) ? 'filled' : ''"
      :gap="gap"
      :bright="bright"
      :style="{
          opacity: fade ? ((texts.length - index)/texts.length): 1
        }"
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

const BackdropString = styled('span', { gap: Boolean, bright: Boolean })`
  font-family: Barlow Semi Condensed, Anuphan;
  color: ${({ bright }) =>
    bright ? 'rgba(242, 246, 252, 0.7)' : 'rgba(74, 80, 92, 0.29)'};
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ bright }) =>
    bright ? 'rgba(242, 246, 252, 0.7)' : 'rgba(74, 80, 92, 0.29)'};
  font-style: italic;
  font-weight: bold;
  font-size: 500%;
  line-height: ${({ gap }) => (gap ? '90.5%' : '75%')};

  &.filled {
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
    gap: { type: Boolean, default: false },
    bright: { type: Boolean, default: false },
    filled: { type: Boolean, default: false }
  },
  computed: {
    texts() {
      return Array(this.times).fill(String(this.text))
    }
  }
}
</script>
