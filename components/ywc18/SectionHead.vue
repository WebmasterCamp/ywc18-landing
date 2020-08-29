<template>
  <Container :align="align" :size="size" :color="color">
    {{ title }}
    <slot />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const sizes = {
  sm: {
    fontSize: 30,
    fontSmallSize: 20,
    height: 100,
  },
  md: {
    fontSize: 44, // For Desktop
    fontSmallSize: 32, // For Mobile + Tablet
    height: 101,
  },
  timeline: {
    fontSize: 60,
    fontSmallSize: 36,
    height: 100,
  },
}
const Container = styled('div', { align: String, size: String, color: String })`
  height: ${(props) => sizes[props.size].height}px;
  color: white;
  font-family: Barlow, Anuphan;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => sizes[props.size].fontSize}px;
  line-height: 101px;
  box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.25);
  background: url(${require('../../assets/images/ywc18/section-head-bg.png')});
  background-position: center center;
  background-size: 436px 101px;
  background-repeat: no-repeat;
  text-align: ${(props) => props.align};

  user-select: none;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: ${(props) => sizes[props.size].fontSmallSize}px;
    background: url(${require('../../assets/images/ywc18/section-head-bg.png')});
    background-position: center center;
    background-size: 324px 75px;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 576px) {
    background-size: 100% auto;
    font-size: 32px;
    line-height: 96px;
  }
`
export default {
  components: {
    Container,
  },
  props: {
    title: { type: String, default: '' },
    size: { type: String, default: 'md' },
    align: { type: String, default: 'center' },
    color: { type: String, default: '#FFFFFF' },
  },
}
</script>
