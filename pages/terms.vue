<template>
  <ThemeProvider :name="currTheme">
    <Loading v-if="!isInit" />
    <section v-else class="container">
      <SectionName
        title="Terms and Conditions"
        subTitle="ข้อกำหนดและเงื่อนไขการเข้าร่วมกิจกรรม"
      />
      <InfoContainer class="policy-info">
        <h2>คุณสมบัติของผู้สมัครเข้าร่วมกิจกรรม</h2>
        <ol>
          <li>มีอายุระหว่าง 18 - 23 ปี โดยเกิดระหว่างวันที่ 1 มกราคม 2540 - 1 มกราคม 2546</li>
          <li>ไม่จำกัดวุฒิการศึกษา สาขา คณะ ชั้นปี หรือตำแหน่งงาน</li>
          <li>ไม่มีโรคติดต่อร้ายแรง</li>
          <li>ไม่มีประวัติการกระทำผิดกฎหมายอาญาร้ายแรง</li>
          <li>
            ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19 ตามเงื่อนไขดังนี้
            <ul>
              <li>ไม่มีอาการระบบทางเดินหายใจผิดปกติ เช่น ไอ น้ำมูก เจ็บคอ หายใจเหนื่อย หรือหายใจลำบาก</li>
              <li>ไม่ได้เดินทางหรืออาศัยอยู่ในพื้นที่ที่มีรายงานการติดเชื้อของโรค COVID-19 ใน 14 วันที่ผ่านมา</li>
              <li>ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัส COVID-19 เป็นเวลาอย่างน้อย 14 วันก่อนวันสัมภาษณ์และวันจัดกิจกรรม</li>
              <li>ในสถานที่ที่ไปเป็นประจำ ไม่มีการสัมผัสหรือมีปฏิสัมพันธ์กับคนที่มีอาการไข้ ไอ น้ำมูก เสมหะ ในช่วงก่อนวันสัมภาษณ์และวันจัดกิจกรรม</li>
            </ul>
          </li>
          <li>สามารถมาเข้าร่วมได้ทุกกิจกรรมตลอดระยะเวลา 4 วัน</li>
        </ol>

        <h2>การสมัครเข้าร่วมกิจกรรม</h2>
        <ol>
          <li>สามารถสมัครได้ตั้งแต่วันที่ 14 กันยายน 2563 จนถึงวันที่ 7 พฤศจิกายน 2563</li>
          <li>
            สาขาที่รับสมัครมีทั้งหมด 4 สาขา ได้แก่
            <ul>
              <li>เว็บคอนเทนต์ (Web Content)</li>
              <li>เว็บดีไซน์ (Web Design)</li>
              <li>เว็บมาร์เก็ตติ้ง (Web Marketing)</li>
              <li>เว็บโปรแกรมมิ่ง (Web Programming)</li>
            </ul>
          </li>
          <li>
            ผู้สมัครสามารถสมัครได้เพียง 1 สาขาเท่านั้น โดยการเลือกสาขาจะอยู่ในขั้นตอนที่ 2 ของระบบรับสมัคร
            หากมีการยืนยันการเลือกสาขาและผ่านขั้นตอนที่ 2 แล้ว ผู้สมัครจะไม่สามารถเปลี่ยนสาขาได้อีก
          </li>
          <li>
            การสมัครจะเสร็จสิ้นก็ต่อเมื่อผู้สมัครกดปุ่ม "ส่งใบสมัคร"
            ในขั้นตอนสุดท้ายแล้วเท่านั้น
            และเมื่อกดปุ่มแล้วจะไม่สามารถแก้ไขข้อมูลได้อีก
          </li>
          <li>
            ข้อมูลของผู้สมัครทุกคนจะถูกคุ้มครองตาม<a href="https://ywc18.ywc.in.th/policy">นโยบายคุ้มครองข้อมูลส่วนบุคคล</a>
          </li>
        </ol>

        <h2>การคัดเลือกผู้เข้าร่วมกิจกรรม</h2>

        <ol>
          <li>
            ผู้สมัครทุกคนจะถูกคัดเลือกโดยคณะกรรมการ ซึ่งจะมีทั้งหมด 2 รอบ ได้แก่
            <ol>
              <li>คัดเลือกผู้มีสิทธิ์สัมภาษณ์</li>
              <li>คัดเลือกผู้มีสิทธิ์เข้าร่วมกิจกรรม</li>
            </ol>
          </li>
          <li>
            รายชื่อผู้มีสิทธิ์สัมภาษณ์จะถูกประกาศในวันที่ 14 พฤศจิกายน 2563
            พร้อมกับรายละเอียด และสิ่งที่ต้องเตรียมตัวมาในวันสัมภาษณ์
          </li>
          <li>
            ผู้มีสิทธิ์สัมภาษณ์ทุกคนจะต้องมาสัมภาษณ์กับคณะกรรมการในวันที่ 21 พฤศจิกายน 2563
            โดยรายละเอียดวันสัมภาษณ์ทั้งหมดจะแจ้งให้ทราบในภายหลัง
          </li>
          <li>
            คณะกรรมการทำจะคัดเลือกผู้มีสิทธิ์เข้าร่วมกิจกรรมจากทั้ง 4 สาขา สาขาละ 20 คน รวมเป็น 80 คน
            โดยจะประกาศรายชื่อทั้งหมดในวันที่ 25 พฤศจิกายน 2563
          </li>
          <li>การตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด</li>
        </ol>

        <h2>รายละเอียดการเข้าร่วมกิจกรรม</h2>
        <ol>
          <li>
            คณะกรรมการจะคัดเลือกแต่ละสาขา สาขาละ 20 คน รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมกิจกรรม 80 คน
          </li>
          <li>
            ผู้มีสิทธิ์เข้าร่วมกิจกรรมจะต้องโอนเงินค่ามัดจำเป็นจำนวน 500 บาทเพื่อเป็นการยืนยันสิทธิ์
            โดยจะได้รับเงินคืนในวันสุดท้ายของกิจกรรมหากเข้าร่วมครบทุกกิจกรรมตลอดช่วงระยะเวลาค่าย
          </li>
          <li>
            ทางโครงการจะรับผิดชอบค่าใช้จ่ายให้กับผู้เข้าร่วมกิจกรรม ดังนี้
            <ul>
              <li>สถานที่จัดกิจกรรม</li>
              <li>อาหารและของว่างตลอดระยะเวลากิจกรรม</li>
              <li>การเดินทางในช่วงระยะเวลากิจกรรม</li>
            </ul>
          </li>
        </ol>

        <p>
          ทีมงานขอสงวนสิทธิ์ที่จะเปลี่ยนแปลง แก้ไขกิจกรรมในครั้งนี้
          และ/หรือข้อกำหนดและเงื่อนไขต่าง ๆ ที่เกี่ยวข้องตามดุลพินิจของทีมงาน โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
        </p>
      </InfoContainer>
      <Footer />
    </section>
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import Loading from '~/components/result/Loading.vue'
import { selectText } from '~/utils/dom'

export default {
  layout: 'secondary',
  head() {
    return {
      title: `ข้อกำหนดและเงื่อนไขการเข้าร่วมกิจกรรม - 18th Young Webmaster Camp`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `ข้อกำหนดและเงื่อนไขการเข้าร่วมกิจกรรม - 18th Young Webmaster Camp`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ข้อกำหนดและเงื่อนไขการเข้าร่วมกิจกรรม',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'ข้อกำหนดและเงื่อนไขการเข้าร่วมกิจกรรม',
        },
      ],
    }
  },
  components: {
    ThemeProvider,
    Loading,
    SectionName: () => import('~/components/ywc18/SectionName.vue'),
    InfoContainer: () => import('~/components/InfoContainer.vue'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
  },
  data() {
    return {
      currTheme: '',
      isInit: false,
    }
  },
  mounted() {
    this.isInit = true
  },
  methods: {
    selectText,
  },
}
</script>
<style lang="scss">
@import '../assets/css/global';
.packages-sponsor,
.policy-info {
  background: #fbfbfb;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
}
.policy-info {
  p,
  li,
  ul,
  span {
    font-family: CmPrasanmit, system-ui, -apple-system, sans-sreif;
    font-size: 24px;
    font-weight: 700;
    text-indent: 42px;
    @media screen and (max-width: 576px) {
      text-indent: 42px;
    }
    a {
      color: $primary-color;
      text-decoration: none;
    }
  }
  li,
  ul {
    text-indent: unset;
  }

  p,
  ul,
  ol {
    margin: 0 0 1.25em;
  }

  ul,
  ol {
    b {
      font-weight: 600;
    }
    ul,
    ol {
      margin: 0 0 0.75em;
    }
  }

  h2 {
    font-family: Anuphan, system-ui, -apple-system, sans-sreif !important;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: $primary-color;
    margin-bottom: 0.75em;
    @media screen and (max-width: 576px) {
      font-size: 22px;
    }
  }
}
</style>
