<template>
  <ThemeProvider :name="currTheme">
    <Loading v-if="!isInit" />
    <CenterContainer v-else class="announcement-box">
      <div class="announcement-box__wrapper">
        <img
          src="~/assets/images/ywc18/ywc18-logo-orange.svg"
          class="ywc-logo"
          alt="18 th Young Webmaster Camp"
        />
        <template v-if="!finalistInfo">
          <h3>
            ประกาศผลสัมภาษณ์
            <br class="mobile" />Young Webmaster Camp ครั้งที่ 18
          </h3>
          กรอกรหัสสัมภาษณ์ของคุณ
          <div class="ref-input">
            <div v-for="idx in [0, 1, 2, 3, 4]" :key="`ref${idx}`">
              <a-input
                :ref="`ref${idx}`"
                v-model="ref[idx]"
                size="large"
                :placeholder="'CT001'.charAt(idx)"
                :disabled="isCandidateLoading"
                type="text"
                maxlength="1"
                @paste="refHandler($event, idx)"
                @input="refHandler($event, idx)"
                @keyup="refNavigator($event, idx)"
              />
            </div>
          </div>
          <Button :disabled="isCandidateLoading" @click="checkRefCode">
            ตรวจสอบผล
          </Button>
        </template>
        <template v-else>
          <h3>
            ผลสัมภาษณ์
            <br class="mobile" />Young Webmaster Camp ครั้งที่ 18
          </h3>
          ของ {{ finalistInfo.firstName }} {{ finalistInfo.lastName }} รหัส
          {{ refCode }}
          <template v-if="isFinalistLoading">
            <h1 class="themeText">
              คุณ<span id="notPassText">ไม่</span>ผ่านการคัดเลือก
            </h1>
            <p>{{ statusText }}</p>
          </template>
          <template v-else-if="isPass">
            <h2>ขอแสดงความยินดี</h2>
            <h1 class="themeText" style="margin-top:50px">
              คุณผ่านการคัดเลือก
              <span v-if="isReserve"> <br class="mobile" />(ตัวสำรอง) </span>
            </h1>

            <p v-if="isReserve">กรุณารอการติดต่อกลับจากทีมงานภายหลัง</p>
            <template v-else>
              <div class="alignLeft">
                <h3>รายละเอียดการยืนยันสิทธิ์</h3>
                <p>
                  เพื่อยืนยันสิทธิ์การเข้าค่าย กรุณา
                  <b>โอนเงินมัดจำ</b> จำนวน
                  <b class="themeText"
                    >{{ finalistInfo.verificationAmount.toFixed(2) }} บาท</b
                  >
                  เข้าบัญชี
                </p>
                <p style="text-align:center">
                  เลขที่บัญชี
                  <b
                    @mouseover="selectText"
                    @mouseclick="selectText"
                    v-html="FINALIST_BANKACCOUNT_no_html"
                  ></b>
                  <br />ชื่อบัญชี
                  <b>{{ FINALIST_BANKACCOUNT.name }}</b>
                  <br />ธนาคาร
                  <b>{{ FINALIST_BANKACCOUNT.bank }}</b>
                </p>
                <p>ภายในวันเสาร์ที่ 28 พฤศจิกายน เวลา 23:59 น.</p>
              </div>
              <Button
                link
                :href="FINALIST_FORM_LINK(finalistInfo)"
                target="_blank"
                rel="noopener noreferrer"
              >
                ยืนยันสิทธิ์
              </Button>
            </template>
          </template>
          <template v-else>
            <h2>ขอแสดงความเสียใจ</h2>
            <h1 class="themeText" style="margin-top:50px">
              คุณไม่ผ่านการคัดเลือก
            </h1>
            <p>
              พลาดโอกาสครั้งนี้อย่าเพิ่งเสียใจ
              <br />เราเชื่อว่าคุณมีศักยภาพและความสามารถในการพัฒนาตนเอง
              <br />ปีหน้าฟ้าใหม่ (ถ้ายังเข้าหลักเกณฑ์)
              กลับมาสมัครใหม่อีกครั้งนะ
            </p>
          </template>
        </template>
      </div>
    </CenterContainer>
    <div class="more-details">
      <NuxtLink
        v-if="!finalistInfo"
        to="/announcement/majors/"
        class="show-all-finalist"
      >
        <b>แสดงรายชื่อทั้งหมด</b>
      </NuxtLink>
      <SponsorBox />
      <Footer />
    </div>
  </ThemeProvider>
</template>
<script>
import antDesignVueInput from '~/plugins/ant-design-vue-input'
import ThemeProvider from '~/components/ThemeProvider.vue'
import Loading from '~/components/result/Loading.vue'
import CenterContainer from '~/components/CenterContainer.vue'
import { colorScheme } from '~/utils/color'
import {
  majors,
  FINALIST_FORM_LINK,
  FINALIST_LOAD_TIME,
  FINALIST_BANKACCOUNT,
} from '~/utils/const'
import { selectText } from '~/utils/dom'
const isalpha = /^[a-zA-Z]$/
const isnumber = /^[0-9]$/
export default {
  layout: 'secondary',
  head() {
    return {
      title: `ประกาศผลสัมภาษณ์ - 18th Young Webmaster Camp`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `ประกาศผลสัมภาษณ์ - 18th Young Webmaster Camp`,
        },
        { hid: 'og:description', name: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' }, // TODO: Add description
      ],
    }
  },
  components: {
    ThemeProvider,
    Loading,
    CenterContainer,
    Button: () => import('~/components/result/Button.vue'),
    SponsorBox: () => import('~/components/SponsorBox'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
  },
  middleware({ redirect }) {
    // return redirect('/')
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
      return (
        this.ref[0] +
        this.ref[1] +
        this.ref[2] +
        this.ref[3] +
        this.ref[4]
      )
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
        document.getElementsByTagName('body')[0].setAttribute(
          'style',
          `background: ${colorScheme[majorColor].normal};
        background: ${colorScheme[majorColor].backgroundGradient};
        background-size: cover;
        background-attachment: fixed;`
        )
        if (this.isPass && !this.isReserve) {
          this.$confetti.start()
          setTimeout(() => this.$confetti.stop(), 3000)
        }
      } else {
        this.currTheme = ''
        //   document.getElementsByTagName('body')[0].setAttribute(
        //     'style',
        //     `background: #401b19;
        // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(69.01deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
        // background-size: cover;
        // background-attachment: fixed;`
        //   )
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
    refNavigator($event, idx) {
      const value = $event.key
      if (value === 'Enter') {
        this.checkRefCode()
        return false
      } else if (value === 'Backspace' || value === 'ArrowLeft') {
        if (idx > 0) {
          this.$refs[`ref${idx - 1}`][0].focus()
        }
        return false
      } else if (value === 'Delete' || value === 'ArrowRight') {
        if (idx < 3) {
          this.$refs[`ref${idx + 1}`][0].focus()
        }
        return false
      }

      if (idx < 4 && $event.target.value.length === 1) {
        this.$refs[`ref${idx + 1}`][0].focus()
      }
    },
    refHandler($event, idx) {
      let value
      switch ($event.type) {
        case 'paste':
          value = (event.clipboardData || window.clipboardData).getData('text')
          if (value.length === 5) {
            const ref = value.split('')
            if (
              isalpha.test(ref[0]) &&
              isalpha.test(ref[1]) &&
              isnumber.test(ref[2]) &&
              isnumber.test(ref[3]) &&
              isnumber.test(ref[4])
            ) {
              $event.preventDefault()
              this.ref = ref
              return false
            }
          }
          break
        case 'input':
          value = $event.target.value
          break
        default:
          value = $event.key
          if (!value) {
            const currentCode = event.which || event.code
            value = String.fromCharCode(currentCode)
          }
      }
      if (
        [
          'Backspace',
          'ArrowLeft',
          'ArrowRight',
          'Delete',
          'Enter',
          'Tab',
        ].includes(value)
      ) {
        if (value === 'Enter') {
          this.checkRefCode()
        }
        return false
      }
      if (
        idx < 3 &&
        $event.type !== 'input' &&
        $event.target.value.length === 1
      ) {
        this.$refs[`ref${idx + 1}`][0].focus()
        return false
      }

      if (idx === 0 || idx === 1) {
        if (!isalpha.test(value)) {
          $event.preventDefault()
          this.ref[idx] = ''
          return false
        }
      } else if (!isnumber.test(value)) {
        $event.preventDefault()
        this.ref[idx] = ''
        return false
      }
      return true
    },
    checkRefCode() {
      console.log(this.refCode)
      if (this.isCandidateLoading || this.refCode.length !== 5) {
        if (this.refCode.length !== 5) {
          this.$message.error('กรุณากรอกรหัสสัมภาษณ์ให้ครบถ้วนทั้ง 5 ตัว')
        }
        return false
      }
      const refMajor = (this.ref[0] + this.ref[1]).toUpperCase()
      const refIdx =
        parseInt(this.ref[2]) * 100 +
        parseInt(this.ref[3]) * 10 +
        parseInt(this.ref[4])

      let major = ''
      Object.keys(majors).map((codename) => {
        if (refMajor === majors[codename][2]) {
          major = codename
        }
        return codename
      })

      if (!major || refIdx < 1 || refIdx > 103) {
        this.$message.error('รหัสสัมภาษณ์ไม่ถูกต้อง')
        return false
      }
      this.isCandidateLoading = true
      this.candidateLoadingText = this.$message.loading(
        'กำลังตรวจสอบข้อมูล...',
        0
      )
      this.major = major
      this.loadFinalist()
    },
    loadFinalist() {
      const vm = this
      vm.$axios
        .get(
          `https://api-prod.ywc18.ywc.in.th/users/announcement/${vm.refCode}`
        )
        .then(({ status, data }) => {
          vm.candidateLoadingText()
          vm.candidateLoading = null
          if (status === 200 && data.status === 'success') {
            if (!data.payload) {
              vm.isCandidateLoading = false
              vm.major = ''
              vm.$message.error('ไม่พบข้อมูลของรหัสสัมภาษณ์นี้ในระบบ')
            } else {
              vm.isFinalistLoading = true
              vm.finalistInfo = data.payload
              vm.animateText()
              setTimeout(() => {
                vm.isFinalistLoading = false
                vm.changeTheme(vm.major)
              }, FINALIST_LOAD_TIME)
            }
          } else {
            vm.$message.error('เกิดข้อผิดพลาดในการโหลดข้อมูลประกาศผล')
            vm.statusText =
              'เกิดข้อผิดพลาดในการโหลดข้อมูลประกาศผล โปรดลองใหม่อีกครั้ง'
          }
        })
        .catch(() => {
          if (vm.candidateLoadingText) {
            vm.candidateLoadingText()
          }
          vm.candidateLoading = null
          vm.$message.error('เกิดข้อผิดพลาดในการประมวลข้อมูลประกาศผล')
          vm.statusText =
            'เกิดข้อผิดพลาดในการประมวลข้อมูลประกาศผล โปรดลองใหม่อีกครั้ง'
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

    font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
    font-size: 18px;
    @media screen and (max-width: 576px) {
      font-size: 16px;
    }
    &__wrapper {
      width: 600px;
      @media screen and (max-width: 576px) {
        width: unset;
      }
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
      font-family: 'CmPrasanmit', system-ui, -apple-system, sans-sreif;
      font-size: 24px;
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
      font-weight: 400;
      margin: 0;
      margin-top: 10px;
      font-size: 22px;
    }
    h1,
    h2,
    h3 {
      font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
    }

    .alignLeft {
      text-align: left;
    }
    .ref-input {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 0 16px;
      max-width: 504px;
      input {
        font-family: 'Barlow Semi Condensed', system-ui, -apple-system,
          sans-sreif;
        font-size: 64px;
        width: 88px;
        height: 137px;
        text-transform: uppercase;
        text-align: center !important;

        @media screen and (max-width: 576px) {
          font-size: 48px;
          width: 48px;
          height: 86px;
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
    .show-all-finalist {
      font-family: 'CmPrasanmit', system-ui, -apple-system, sans-sreif;
      font-size: 24px;
      color: white;
      text-decoration: underline !important;
    }
    & > div:not(.footer) {
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
