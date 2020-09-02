<template>
  <Container :align="align" :size="size" :color="color">
    <h1>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
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
  lg: {
    fontSize: 60,
    fontSmallSize: 36,
    height: 100,
  },
}
const Container = styled('div', { align: String, size: String, color: String })`
  height: ${(props) => sizes[props.size].height}px;
  h1 {
    color: white;
    font-family: Barlow, Anuphan;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => sizes[props.size].fontSize}px;
    line-height: 101px;
    margin: 0;
  }
  background: url(${(props) =>
    props.type === 'a'
      ? require('~/assets/images/ywc18/section-head-bg.png')
      : require('~/assets/images/ywc18/section-head-bg-2.png')});
  background-position: center center;
  background-size: ${(props) =>
    props.type === 'a' ? '436px 101px' : '438px 130px'};
  height: ${(props) => (props.type === 'a' ? '101px' : '130px')};
  background-repeat: no-repeat;
  text-align: ${(props) => props.align};

  p {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0;
    color: #061625;
  }

  user-select: none;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: ${(props) => sizes[props.size].fontSmallSize}px;
    background: url(${(props) =>
      props.type === 'a'
        ? require('~/assets/images/ywc18/section-head-bg.png')
        : require('~/assets/images/ywc18/section-head-bg-2.png')});
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
    subtitle: { type: String, default: '' },
    type: { type: String, default: 'a' },
    size: { type: String, default: 'md' },
    align: { type: String, default: 'center' },
    color: { type: String, default: '#FFFFFF' },
  },
}
</script>
