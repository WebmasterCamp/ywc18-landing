<template>
  <div>
    <ModalOverlay v-if="show" @click="dismiss" />
    <Container
      v-if="show"
      :color="color"
      :normal="normal"
      :exiting="exiting"
      :major="major"
    >
      <div class="overlay-content">
        <Header :normal="normal">
          <template v-if="!normal">
            <Title> Web <br />{{ title }} </Title>
            <Count :color="color">
              <span v-if="showCount || isRegOpen">สมัครแล้ว</span>
              <p v-if="showCount || isRegOpen">
                <span>{{ count }}</span> คน
              </p>
            </Count>
          </template>
          <Title v-else>{{ title }}</Title>
        </Header>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
      <BottomMenu>
        <BackButton :color="color" @click="dismiss">
          <span class="arrow-icon"></span>
          ย้อนกลับ
        </BackButton>
        <slot name="footer">
          <a-button
            type="primary"
            size="large"
            class="register-btn"
            v-if="isRegOpen"
            @click="goToRegister"
            style="background-color: #FF5D29;"
            >สมัครค่าย</a-button
          >
          <span
            v-else
            style="color: #eee;margin:0 auto;font-family: Anuphan,system-ui,-apple-system, sans-sreif;"
            >เปิดรับสมัคร 14 กันยายน</span
          >
        </slot>
      </BottomMenu>
    </Container>
  </div>
</template>

<script>
import Vue from 'vue'
import styled, { css, keyframes } from 'vue-styled-components'
import color from '~/utils/color'
import antDesignVueButton from '~/plugins/ant-design-vue-button'

const majorImage = {
  content: '/images/ywc18/modal/content.jpg',
  design: '/images/ywc18/modal/design.jpg',
  marketing: '/images/ywc18/modal/marketing.jpg',
  programming: '/images/ywc18/modal/programming.jpg',
}

const withColorProps = {
  color: String,
}

const containerProps = {
  color: String,
  exiting: Boolean,
  normal: Boolean,
  major: String,
}

const fadein = keyframes`
  from { top: 100%; }
  to { top: 0; }
`

const fadeout = keyframes`
  from { top: 0; }
  to { top: 100%; }
`

const ModalOverlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  transition: all 0.3s;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

const Container = styled('div', containerProps)`
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 72vh;
    min-width: 600px;
    max-width: 960px;
    margin: 0 auto;
    margin-top: 12vh;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 32px 32px 0;
  text-align: left;
  transition: all 0.3s;
  animation: ${fadein} 0.5s;
  ${(props) =>
    props.normal
      ? ''
      : `
  &:before {
    content: '';
    background: url('${majorImage[props.major]}') no-repeat center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    background-size: cover;
    height: 100%;

    @media screen and (min-width: 768px) {
    background-size: cover;
    background-position: center center;
    }
  }
  `}

  ${(props) =>
    props.exiting &&
    `
    animation: ${fadeout} 0.5s;
  `};

  .overlay-content {
    padding: 32px 32px 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .content {
    font-family: Barlow, CmPrasanmit, system-ui, -apple-system, sans-sreif;
    height: calc(90% - 150px);
    overflow: hidden;
    overflow-y: auto;
    line-height: 2;
    z-index: 998;
    span {
      font-family: Barlow, system-ui, -apple-system, sans-sreif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 0.01em;
    }
  }
  .content p,
  .content li {
    font-family: Barlow, CmPrasanmit, system-ui, -apple-system, sans-sreif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
  }
  .content li {
    line-height: 1.2;
    margin-bottom: 12px;
  }
  .content ol {
    padding-left: 24px;
  }
  .content h3 {
    font-family: Anuphan, system-ui, -apple-system, sans-sreif;
    line-height: 100%;
  }
  .content p {
    margin-bottom: 32px;
  }
`

const Header = styled('div', { normal: Boolean })`
  display: grid;
  grid-template-columns: auto ${(props) => (props.normal ? '' : ' 130px')};
  ${(props) => (props.normal ? 'margin-bottom: 20px;' : '')}

  font-family: 'CmPrasanmit', Arial, Helvetica, sans-serif;
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
  font-style: italic;
  font-weight: 600;
  font-size: 60px;
  line-height: 65px;
  @media screen and (max-width: 425px) {
    font-size: 32px;
    line-height: 38px;
  }
`

const Count = styled('div', withColorProps)`
  text-align: right;
  font-size: 20px;

  span {
    font-family: Anuphan;
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    text-align: right;
    color: #f2f6fc;
    @media screen and (max-width: 425px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  p {
    font-family: Anuphan, system-ui, -apple-system, sans-sreif;
    font-size: 32px;
    margin: 0.5em 0;
    font-weight: bold;
    color: #f2f6fc;
    span {
      font-family: Barlow Semi Condensed, system-ui, -apple-system, sans-sreif;
      font-style: italic;
      font-weight: 800;
      font-size: 64px;
      text-align: right;
      letter-spacing: 0.05em;
      -webkit-text-stroke-color: ${color.primary};
      -webkit-text-stroke-width: 3px;
      text-align: right;
      color: #061625;
      @media screen and (max-width: 425px) {
        font-size: 40px;
        -webkit-text-stroke-width: 1.5px;
      }
    }
    @media screen and (max-width: 425px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
`

const BottomMenu = styled.div`
  background: rgba(0, 0, 0, 0.25);
  z-index: 999;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 24px;

  font-family: 'Barlow', 'CmPrasanmit', system-ui, -apple-system, sans-sreif;
  font-size: 16px;

  display: grid;
  grid-template-columns: 105px auto;
  grid-column-gap: 12px;
  align-items: center;
  box-sizing: border-box;
  span {
    font-family: 'Barlow', system-ui, -apple-system, sans-sreif;
  }
`

const defaultButton = css`
  width: 100%;
  height: 100%;
  font-family: 'Barlow Semi Condensed', 'CmPrasanmit', system-ui, -apple-system,
    sans-sreif;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`

const BackButton = styled('button', withColorProps)`
  ${defaultButton};
  color: ${(props) => color.primary};
  background-color: transparent;
  font-family: Anuphan, system-ui, -apple-system, sans-sreif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  .arrow-icon {
    width: 8px;
    height: 8px;
    position: relative;
    top: -2px;
    display: inline-block;
    border-left: 2px solid white;
    border-top: 2px solid white;
    transform: rotate(-45deg);
    border-color: ${(props) => color.primary};
  }
`

export default Vue.extend({
  components: {
    ModalOverlay,
    Container,
    Header,
    Title,
    Count,
    BottomMenu,
    BackButton,
  },
  props: {
    major: {
      type: String,
      default: '',
    },
    count: {
      default: 0,
      type: Number,
    },
    show: {
      default: false,
      type: Boolean,
    },
    normal: {
      default: false,
      type: Boolean,
    },
    isRegOpen: {
      default: true,
      type: Boolean,
    },
    title: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      color: '',
      exiting: false,
      showCount: false,
    }
  },
  created() {
    antDesignVueButton()
  },
  mounted() {
    this.color = this.$parent.color
    if (process.client) {
      const vm = this
      document.addEventListener('keyup', function(e) {
        if (e.keyCode === 27) {
          vm.dismiss()
        }
      })
    }
  },
  methods: {
    goToRegister() {
      window.open('https://register.ywc18.ywc.in.th/')
    },
    dismiss() {
      this.showExitingAnimation()
    },
    showExitingAnimation() {
      this.exiting = true
      setTimeout(() => {
        this.$parent.dismissOverlay()
        this.exiting = false
      }, 500)
    },
  },
})
</script>

<style lang="scss">
.register-btn {
  width: 230px;
  max-width: 100%;
  margin-left: auto;
  span {
    font-family: Anuphan, system-ui, -apple-system, sans-sreif;
  }
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
}
</style>
