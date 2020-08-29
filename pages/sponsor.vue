<template>
  <ThemeProvider :name="currTheme">
    <Loading v-if="!isInit" />
    <section class="container" v-else>
      <SectionTitle title="สนับสนุน YWC18" />
      <InfoContainer class="sponsor-info">
        <p>
          มากกว่าสิบปีที่โครงการ Young Webmaster Camp (YWC)
          ของสมาคมผู้ดูแลเว็บไทยได้พัฒนา
          บุคลากรด้านออนไลน์และดิจิทัลเข้าสู่วงการออนไลน์ของไทยซึ่งสมาคมฯยังคงมุ่งมั่นที่จะพัฒนาโครงการอย่าง
          ต่อเนื่อง โดยสำหรับโครงการ YWC ครั้งที่ 18 ในปีนี้นั้น
          มีกำหนดจัดกิจกรรมระหว่างวันที่ 24 - 27 ธันวาคม 2563 (ไม่ค้างคืน)
          โดยสถานที่อยู่ระหว่างประสานงาน
        </p>
        <p>
          ในการนี้สมาคมผู้ดูแลเว็บไทย
          เล็งเห็นถึงวิสัยทัศน์อันดีของหน่วยงานของท่านจึงใคร่ขอความอนุเคราะห์์
          ท่านร่วมเป็นผู้สนับสนุนการจัดโครงการ Young Webmaster Camp ครั้งที่ 18
          พวกเราเยาวชนผู้ดูแลเว็บไทย รุ่นที่ 17
          หวังเป็นอย่างยิ่งว่าจะได้รับความอนุเคราะห์จากท่านและขอขอบพระคุณ
          ในความอนุเคราะห์ของท่านมา ณ โอกาสนี้
        </p>
        <p>
          หากสนใจสนับสนุนโครงการ Young Webmaster Camp ครั้งที่ 18
          สามารถติดต่อสอบถามข้อมูล เพิ่มเติ่มได้ที่ นายณัฐพงศ์ คงลำธาร โทร.
          <a
            href="tel:+66894469127"
          >089-446-9127</a> อีเมล
          <a href="mailto:ywc@webmaster.or.th">ywc@webmaster.or.th</a>
        </p>
      </InfoContainer>
      <div>
        <CTAButton @click="viewProposal">ดูรายละเอียดโครงการ</CTAButton>
      </div>
      <SectionTitle title="Package Sponsor" />
      <InfoContainer class="packages-sponsor">
        <a-row :gutter="21">
          <a-col :xs="24" :lg="8">
            <SponsorPackage type="vip" />
          </a-col>
          <a-col :xs="24" :lg="8">
            <SponsorPackage type="gold" />
          </a-col>
          <a-col :xs="24" :lg="8">
            <SponsorPackage type="silver" />
          </a-col>
        </a-row>
        <h1 class="package-detail-heading">รายละเอียด Package</h1>
        <PackageTable :items="PACKAGES" />
      </InfoContainer>
      <Footer />
    </section>
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import Loading from '~/components/result/Loading.vue'
import SponsorPackage from '~/components/ywc18/SponsorPackage.vue'
import PackageTable from '~/components/ywc18/PackageTable.vue'
// import { colorScheme } from '~/utils/color'
import {
  majors,
  FINALIST_FORM_LINK,
  FINALIST_LOAD_TIME,
  FINALIST_BANKACCOUNT,
  PACKAGES
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
          content: `สนับสนุน - 18th Young Webmaster Camp`
        },
        { hid: 'og:description', property: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' } // TODO: Add description
      ]
    }
  },
  components: {
    ThemeProvider,
    Loading,
    SponsorPackage,
    PackageTable,
    SectionTitle: () => import('~/components/ywc18/SectionHead.vue'),
    InfoContainer: () => import('~/components/InfoContainer.vue'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
    CTAButton: () => import('~/components/ywc18/Button.vue')
  },
  data() {
    return {
      majors,
      FINALIST_BANKACCOUNT,
      PACKAGES,

      currTheme: '',
      major: '',

      ref: [],
      isInit: false,

      isCandidateLoading: false,
      candidateLoadingText: null,

      isFinalistLoading: true,
      statusText: 'ใจเย็น ๆ นะ ระบบยังโหลดไม่เสร็จ',
      finalistInfo: null
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
    }
  },
  created() {
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
    viewProposal() {
      window.open(window.location.host + '/archive/ywc18-sponsor-proposal.pdf')
    },
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
    }
  }
}
</script>
<style lang="scss">
@import '../assets/css/global';
.packages-sponsor,
.sponsor-info {
  background: #f2f6fc;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
}
.sponsor-info {
  p {
    font-family: CmPrasanmit;
    font-size: 24px;
    font-weight: 700;
    text-indent: 78px;
    @media screen and (max-width: 576px) {
      text-indent: 42px;
    }
    a {
      color: $primary-color;
      text-decoration: none;
    }
  }
}

.package-detail-heading {
  font-family: Anuphan !important;
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  color: $primary-color;
  margin-bottom: 23px;
  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
}
</style>
