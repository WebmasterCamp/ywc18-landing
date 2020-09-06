<template>
  <!-- for Follow us and Q&A Section -->
  <Wrapper>
    <div class="title__wrapper">
      <img src="images/ywc18/arrow-left.svg" alt />
      <span class="title">{{ title }}</span>
      <img src="images/ywc18/arrow-right.svg" alt />
    </div>
    <span class="subtitle">{{ subtitle }}</span>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'
// import Picture from '~/components/Picture.vue'
const Wrapper = styled.div`
  max-width: 100%;
  width: 430px;
  height: 130px;
  background: url(${require('~/assets/images/ywc18/heading-landing.svg')});
  background-size: contain;
  background-position: center, center;
  background-repeat: no-repeat;
  margin: 0 auto 66px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title__wrapper {
    display: flex;
    justify-content: center;
  }
  .title {
    font-family: Barlow Semi Condensed;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    margin: 0 1rem;
  }
  .subtitle {
    font-family: Anuphan;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #061625;
  }
`
export default {
  components: { Wrapper },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
