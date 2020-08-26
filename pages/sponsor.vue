<template>
  <ThemeProvider :name="currTheme">
    <Loading v-if="!isInit" />
    <!-- <CenterContainer v-else class="announcement-box">
      <div style="width:90%"></div>
    </CenterContainer> -->
    <section class="container" v-else>
      <SectionTitle title="สนับสนุน YWC18" />
    </section>
  </ThemeProvider>
</template>
<script>
import antDesignVueInput from '~/plugins/ant-design-vue-input'
import ThemeProvider from '~/components/ThemeProvider.vue'
import Loading from '~/components/result/Loading.vue'
// import { colorScheme } from '~/utils/color'
import {
  majors,
  FINALIST_FORM_LINK,
  FINALIST_LOAD_TIME,
  FINALIST_BANKACCOUNT,
} from '~/utils/const'
import { selectText } from '~/utils/dom'
export default {
  layout: 'secondary',
  head() {
    return {
      title: `สนับสนุน - 18th Young Webmaster Camp`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `สนับสนุน - 18th Young Webmaster Camp`,
        },
        { hid: 'og:description', property: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' }, // TODO: Add description
      ],
    }
  },
  components: {
    ThemeProvider,
    Loading,
    SectionTitle: () => import('~/components/ywc18/SectionHead.vue'),
    // Button: () => import('~/components/result/Button.vue'),
    // Footer: () => import('~/components/sections/Footer.vue'),
  },
  data() {
    return {
      majors,
      FINALIST_BANKACCOUNT,

      currTheme: '',
      major: '',

      ref: [],
      isInit: false,

      isCandidateLoading: false,
      candidateLoadingText: null,

      isFinalistLoading: true,
      statusText: 'ใจเย็น ๆ นะ ระบบยังโหลดไม่เสร็จ',
      finalistInfo: null,
    }
  },
  computed: {
    refCode() {
      return (this.ref[0] + this.ref[1] + this.ref[2] + this.ref[3])
        .toString()
        .toUpperCase()
    },
    isPass() {
      return this.finalistInfo && this.finalistInfo.isFinalist === true
    },
    isReserve() {
      return this.isPass && this.finalistInfo.isReserve === true
    },
    FINALIST_BANKACCOUNT_no_html() {
      return this.FINALIST_BANKACCOUNT.no.replace(
        /-/g,
        `<span class="hyphen">-</span>`
      )
    },
  },
  created() {
    antDesignVueInput()
    if (process.client) {
      this.changeTheme()
    }
  },
  mounted() {
    this.isInit = true
  },
  methods: {
    FINALIST_FORM_LINK,
    selectText,
    changeTheme(major) {
      if (major) {
        const majorColor = !this.isPass ? 'gray' : majors[major][1]
        this.currTheme = !this.isPass ? '' : majorColor

        if (this.isPass && !this.isReserve) {
          this.$confetti.start()
          setTimeout(() => this.$confetti.stop(), 3000)
        }
      } else {
        this.currTheme = ''
      }
    },
    animateText() {
      this.$nextTick(() => {
        const elm = document.getElementById('notPassText')
        elm.classList.add('animateText')
        elm.classList.add('one')
        setTimeout(() => {
          elm.classList.remove('one')
          void elm.offsetWidth
          elm.classList.add('two')
        }, parseInt((5 / 8) * FINALIST_LOAD_TIME))
        setTimeout(() => {
          elm.classList.remove('two')
          void elm.offsetWidth
          elm.classList.add('three')
        }, parseInt((68 / 80) * FINALIST_LOAD_TIME))
      })
    },
  },
}
</script>
<style lang="scss">
.secondary.announcement {
  .mobile {
    display: none;
    @media screen and (max-width: 576px) {
      display: inline-block;
    }
  }
  .container {
    max-width: 1056px;
  }
  .ywc-logo {
    display: none;
  }
  input {
    font-family: 'Sarabun', serif, Tahoma;
  }
  .announcement-box {
    padding: 40px 0;

    font-family: 'Maledpan';
    font-size: 18px;
    @media screen and (max-width: 576px) {
      font-size: 16px;
    }

    .ywc-logo {
      display: block;
      width: 280px;
      height: 97px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 187px;
        height: 65px;
      }
    }
    p {
      font-family: 'Sarabun';
    }
    h1 {
      font-size: 48px;
      margin-top: 60px;
      margin-bottom: 60px;
      @media screen and (max-width: 576px) {
        font-size: 36px;
        line-height: 1;
      }
    }
    h2 {
      font-weight: normal;
      margin: 0;
      margin-top: 10px;
      font-size: 24px;
    }
    .alignLeft {
      text-align: left;
    }
    .ref-input {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 400px;
      input {
        font-size: 64px;
        width: 88px;
        height: 137px;
        text-transform: uppercase;
        text-align: center !important;

        @media screen and (max-width: 576px) {
          font-size: 48px;
          width: 66px;
          height: 104px;
        }
      }
    }
    .hyphen {
      user-select: none;
    }
  }
  .more-details {
    position: absolute;
    text-align: center;
    top: 90%;
    left: 0;
    width: 100%;
    z-index: -1;
    @media screen and (max-height: 750px) {
      position: static;
      left: unset;
      top: unset;
    }
    a,
    a:hover,
    a:visited,
    a:active {
      color: white;
      text-decoration: underline !important;
    }
    & > div {
      margin-top: 100px;
    }
  }
  .animateText {
    opacity: 0;
  }
  .animateText.one {
    animation: animateText 0.5s infinite;
  }
  .animateText.two {
    animation: animateText 0.3s infinite;
  }
  .animateText.three {
    animation: animateText 0.1s infinite;
  }
}
@keyframes animateText {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
