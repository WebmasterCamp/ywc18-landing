<template>
  <Wrapper>
    <Title :wrap="!subTitle">
      <img src="images/ywc18/arrow-left.svg" alt />
      <span class="section__name--title">{{ title }}</span>
      <img src="images/ywc18/arrow-right.svg" alt />
    </Title>
    <SubTitle :color="subTitleColor" class="section__name--subtitle">{{
      subTitle
    }}</SubTitle>
    <Picture
      v-show="bgLeft"
      fileName="ywc18/section-name-bg"
      class="bg bg-left"
      alt
    />
    <Picture
      v-show="bgRight"
      fileName="ywc18/section-name-bg"
      class="bg bg-right"
      alt
    />
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'
import Picture from '~/components/Picture.vue'

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

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

const Title = styled('div', { wrap: Boolean })`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: white;
    font-size: 60px;
    font-weight: 600;
    line-height: 100%;
    width: ${(props) => (props.wrap ? 'min-content' : 'auto')};
    margin: 0 15px;
  }

  @media screen and (max-width: 768px) {
    > span {
      font-size: 48px;
    }
  }

  @media screen and (max-width: 576px) {
    > span {
      font-size: 32px;
    }
  }
`

const SubTitle = styled('div', { color: String })`
  color: ${(props) => (props.color ? props.color : color.primary)};
  font-size: 24px;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 10px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-top: 5px;
  }
`

export default {
  components: {
    Picture,
    Wrapper,
    Title,
    SubTitle,
  },
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    subTitleColor: { type: String, default: '' },
    bgLeft: { type: Boolean, default: false },
    bgRight: { type: Boolean, default: false },
  },
}
</script>
