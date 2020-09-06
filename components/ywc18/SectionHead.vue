<template>
  <Container :align="align" :size="size" :color="color">
    <Wrapper>
      <Title :wrap="!subTitle">
        <img src="images/ywc18/arrow-left.svg" alt />
        <span>{{ title }}</span>
        <img src="images/ywc18/arrow-right.svg" alt />
      </Title>
      <SubTitle>{{ subTitle }}</SubTitle>
      <Picture v-show="bgLeft" fileName="ywc18/section-name-bg" class="bg bg-left" alt />
      <Picture v-show="bgRight" fileName="ywc18/section-name-bg" class="bg bg-right" alt />
    </Wrapper>
    <slot />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
// import color from '~/utils/color'
const sizes = {
  sm: {
    fontSize: 30,
    fontSmallSize: 20,
    height: 100,
  },
  md: {
    fontSize: 38, // For Desktop
    fontSmallSize: 32, // For Mobile + Tablet
    height: 101,
  },
  timeline: {
    fontSize: 60,
    fontSmallSize: 36,
    height: 100,
  },
}
const Wrapper = styled.div`
  font-family: Barlow, Anuphan;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;

  > .bg {
    width: 35%;
    max-width: 500px;
    height: 100%;
    max-height: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(40%, rgba(0, 0, 0, 1)),
      color-stop(100%, rgba(0, 0, 0, 0))
    );

    &.bg-left {
      left: 0;
    }

    &.bg-right {
      transform: translateY(-50%) scaleX(-1);
      right: 0;
    }

    > * {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Title = styled('div', { wrap: Boolean, size: String })`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: white;
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
    width: ${(props) => props.wrap ? 'min-content' : 'auto'};
    margin: 0 15px;
  }

  @media screen and (max-width: 768px) {
    > span {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 576px) {
    > span {
      font-size: 30px;
    }
  }
`

const SubTitle = styled('div', { size: String })`
  color: #000;
  font-size: 20px;
  margin-top: 5px;
  font-weight: lighter;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 5px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-top: 5px;
  }
`
const Container = styled('div', { align: String, size: String, color: String })`
  height: ${(props) => sizes[props.size].height}px;
  color: white;
  font-family: Barlow, Anuphan;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => sizes[props.size].fontSize}px;
  background: url(${require('../../assets/images/ywc18/section-head-bg.png')});
  background-position: center center;
  background-size: 436px 101px;
  background-repeat: no-repeat;
  text-align: ${(props) => props.align};
  display: flex;
  justify-content: center;
  margin: 50px;

  user-select: none;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: ${(props) => sizes[props.size].fontSmallSize}px;
    background: url(${require('../../assets/images/ywc18/section-head-bg.png')});
    background-position: center center;
    background-size: 436px 101px;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 576px) {
    background-size: 80% auto;
    margin: 30px 10px;
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    background-size: 300px auto;
    margin: 30px 10px;
    font-size: 32px;
  }
`
export default {
  components: {
    Container,
    Wrapper,
    Title,
    SubTitle,
  },
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    size: { type: String, default: 'md' },
    align: { type: String, default: 'center' },
    // color: { type: String, default: '#FFFFFF' },
  },
}
</script>
