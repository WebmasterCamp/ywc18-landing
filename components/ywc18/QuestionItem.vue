<template>
  <Container>
    <QBox class="not-close-zone" @click="toggleAns">
      <h4 class="not-close-zone">{{ qa.q }}</h4>
    </QBox>
    <FloatBox>
      <ABox v-show="showAns" class="not-close-zone">
        {{ qa.a }}
      </ABox>
      <ToggleBtn class="not-close-zone" @click="toggleAns">
        <img
          :src="require(`~/assets/images/ywc18/top.svg`)"
          :class="{ isShow: showAns }"
          alt="เปิด/ปิด"
        />
      </ToggleBtn>
    </FloatBox>
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    & {
      margin-bottom: 0px;
    }
  }
`
const QBox = styled.div`
  cursor: pointer;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    #002144;
  border-radius: 2px;
  border-bottom: 1px solid #1f65aa;
  padding: 24px 16px;

  font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
  font-size: 20px;
  line-height: 30px;
  text-align: left;

  & h4 {
    margin: 0;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    & {
      font-size: 18px;
      padding: 12px 16px;
    }
  }
`
const FloatBox = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  @media (max-width: 768px) {
    & {
      position: initial;
      z-index: initial;
    }
  }
`
const ABox = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    #1f65aa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px 16px;

  text-align: left;
  font-family: 'CmPrasanmit', system-ui, -apple-system, sans-sreif;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 768px) {
    & {
      padding: 12px 16px;
    }
  }
`
const ToggleBtn = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    #002144;
  color: #ffffff;
  border-top: 1px solid #1f65aa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 2px 2px;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    & {
      padding: 4px;
    }
  }
`
export default {
  components: {
    Container,
    QBox,
    FloatBox,
    ABox,
    ToggleBtn,
  },
  props: {
    qa: {
      type: Object,
      default: () => {
        return { q: 'Question', a: 'Answer' }
      },
    },
    showAns: { type: Boolean, default: false },
    selectQ: {
      type: Function,
      default: () => {
        return function() {}
      },
    },
  },
  methods: {
    dismissAns() {
      this.selectQ('')
    },
    toggleAns() {
      this.selectQ(this.qa.q)
    },
  },
}
</script>

<style scoped>
.isShow {
  transform: rotate(180deg);
}
</style>
