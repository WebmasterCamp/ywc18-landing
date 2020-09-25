<template>
  <ThemeProvider :name="currTheme">
    <Loading v-if="!isInit" />
    <section v-else class="container">
      <SectionTitle title="สนับสนุน YWC18" />
      <InfoContainer class="sponsor-info">
        <p>
          มากกว่าสิบปีที่โครงการ Young Webmaster Camp (YWC)
          ของสมาคมผู้ดูแลเว็บไทยได้พัฒนาบุคลากรด้านออนไลน์และดิจิทัลเข้าสู่วงการออนไลน์ของไทย
          ซึ่งสมาคม ฯ ยังคงมุ่งมั่นที่จะพัฒนาโครงการอย่างต่อเนื่อง
          โดยสำหรับโครงการ YWC ครั้งที่ 18 ในปีนี้
          มีกำหนดจัดกิจกรรมระหว่างวันที่ 24 - 27 ธันวาคม 2563 (ไม่ค้างคืน) ณ SCB
          Academy ธนาคารไทยพาณิชย์ สำนักงานใหญ่ ชั้น 18-19 อาคารไทยพาณิชย์ปาร์ค
          พลาซ่า (East Tower)
        </p>
        <p>
          ในการนี้สมาคมผู้ดูแลเว็บไทย
          ได้เล็งเห็นถึงวิสัยทัศน์อันดีของหน่วยงานของท่าน จึงใคร่ขอความ
          <span style="white-space:nowrap">อนุเคราะห์์</span
          >ท่านร่วมเป็นผู้สนับสนุนการจัดโครงการ Young Webmaster Camp ครั้งที่ 18
          พวกเราเยาวชนผู้ดูแลเว็บไทย รุ่นที่ 17
          หวังเป็นอย่างยิ่งว่าจะได้รับความอนุเคราะห์จากท่านและขอขอบพระคุณในความอนุเคราะห์ของท่านมา
          ณ โอกาสนี้
        </p>
        <p>
          หากสนใจสนับสนุนโครงการ Young Webmaster Camp ครั้งที่ 18
          สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่ นายณัฐพงศ์ คงลำธาร โทร.
          <a href="tel:+66894469127">089-446-9127</a> อีเมล
          <a href="mailto:ywc@webmaster.or.th">ywc@webmaster.or.th</a>
        </p>
        <p style="text-align: right;">แก้ไขล่าสุด 25 กันยายน 2563</p>
      </InfoContainer>
      <div>
        <CTAButton @click="viewProposal">ดูรายละเอียดโครงการ</CTAButton>
      </div>
      <SectionTitle title="Sponsorship Packages" />
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
import { PACKAGES } from '~/utils/const'
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
    SponsorPackage,
    PackageTable,
    SectionTitle: () => import('~/components/ywc18/SectionHead.vue'),
    InfoContainer: () => import('~/components/InfoContainer.vue'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
    CTAButton: () => import('~/components/ywc18/Button.vue'),
  },
  data() {
    return {
      PACKAGES,

      currTheme: '',
      isInit: false,
    }
  },
  mounted() {
    this.isInit = true
  },
  methods: {
    selectText,
    viewProposal() {
      window.open('/archive/ywc18-sponsor-proposal.pdf')
    },
  },
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
    font-family: CmPrasanmit, system-ui, -apple-system, sans-sreif;
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
  font-family: Anuphan, system-ui, -apple-system, sans-sreif !important;
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
