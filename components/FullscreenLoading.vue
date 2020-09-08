<template>
  <transition name="fade">
    <FullscreenContainer v-show="loading" :color="currColor">
      <CenterContainer>
        <div>
          <p>
            <img src="~/assets/images/ywc18/ywc18-logo-orange.svg" alt="YWC18 Logo" />
          </p>
          <a-spin>
            <a-icon
              slot="indicator"
              type="loading"
              style="font-size: 24px; color: white; width:unset;height:unset;"
              spin
            /> </a-spin
          >&nbsp; โปรดรอสักครู่
        </div>
      </CenterContainer>
    </FullscreenContainer>
  </transition>
</template>
<script>
import styled from 'vue-styled-components'
import CenterContainer from '~/components/CenterContainer.vue'
import { majors } from '~/utils/const'
import { colorScheme } from '~/utils/color'
const FullscreenContainer = styled('div', { color: String })`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(props) =>
      props.color
        ? colorScheme[props.color].background
        : `linear-gradient(49.41deg, #FF5D29 7.27%, #F89742 95.22%)`};
`
export default {
  components: {
    FullscreenContainer,
    CenterContainer,
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    currColor() {
      if (
        !this.$route.params.major ||
        typeof majors[this.$route.params.major] === 'undefined'
      ) {
        return ''
      }
      return majors[this.$route.params.major][1]
    },
  },
  // watch: {
  //   loading: (value) => {
  //     document.querySelector('body').style.overflow = (value === true) ? 'hidden' : 'auto'
  //   }
  // },
  // mounted () {
  //   this.start()
  //   // setTimeout(this.finish, 3000)
  // },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style lang="scss">
.anticon-spin::before {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}
@-webkit-keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
