<template>
  <Wrapper :class="size">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <Picture v-if="fileName != ''" :fileName="fileName" :alt="alt" />
    </a>
  </Wrapper>
</template>

<script>
import styled from 'vue-styled-components'
import Picture from '~/components/Picture.vue'

const Wrapper = styled.div`
  background: rgba(242, 246, 252, 0.9);
  /* box-shadow: 0px 0px 6.42664px rgba(255, 93, 41, 0.5),
    inset 0px 2.57066px 2.57066px 6.42664px #F27236; */
  border: 8px solid #f27236;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (max-width: 425px) {
    border: 6px solid #f27236;
  }
  a {
    transform: scale(1.25);
  }
  &.lg {
    width: 200px;
    height: 200px;
    margin: 10px 25px;

    @media screen and (max-width: 768px) {
      width: 150px;
      height: 150px;
      margin: 10px 15px;
    }
  }

  &.md {
    width: 140px;
    height: 140px;
    margin: 10px 15px;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
      margin: 10px 10px;
    }
  }

  &.sm {
    border: 6px solid #f27236;
    width: 100px;
    height: 100px;
    margin: 10px 10px;

    @media screen and (max-width: 768px) {
      width: 75px;
      height: 75px;
      margin: 10px 10px;
    }
  }

  a {
    width: 60%;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

export default {
  components: {
    Picture,
    Wrapper,
  },
  props: {
    size: {
      type: String,
      default: 'md',
    },
    fileName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
