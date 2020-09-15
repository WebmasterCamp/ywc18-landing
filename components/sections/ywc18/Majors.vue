<template>
  <MajorsSection>
    <MajorsBackground>
      <section class="container backdrop__wrapper">
        <BackdropText text="REGISTER" :times="3" gap />
        <BackdropText text="REGISTER" :times="3" gap />
      </section>
      <Cover />
    </MajorsBackground>
    <MajorsWrapper>
      <section class="container">
        <SectionName
          title="สาขาที่รับสมัคร"
          subTitle="MAJORS REGISTER"
          subTitleColor="#061625"
        />
        <MajorsList>
          <a-row :gutter="30">
            <a-col :xs="12" :lg="6">
              <Major
                image="content"
                :showCount="isRegOpen"
                :count="major.content"
              >
                <template slot-scope="scope">
                  <FullscreenOverlay
                    :show="scope.show"
                    major="content"
                    title="Content"
                    :count="major.content"
                    :isRegOpen="isRegOpen"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการใช้ความคิดสร้างสรรค์
                        คิดและเขียนคอนเทนต์เพื่อทำผลงานออกมาให้มีความสนุก
                        และน่าสนใจมากที่สุด เหมาะสำหรับผู้รักในงานเขียน
                        การเล่าเรื่อง มีความคิดสร้างสรรค์
                        และความรู้เกี่ยวกับการเขียนคอนเทนต์เป็นอย่างดี
                      </p>
                      <h3>คำถามประจำสาขา</h3>
                      <ol>
                        <li>
                          สมมติว่าน้องทำงานอยู่กรมประชาสัมพันธ์
                          ได้รับมอบหมายให้ทำคอนเทนต์ประชาสัมพันธ์ผลงานของรัฐบาลลงบนโซเชียลมีเดีย
                          เพื่อให้เยาวชนคนรุ่นใหม่รู้สึกว่ารัฐบาลยังมีผลงานที่ดีอยู่
                          จะเป็นผลงานอะไรของกระทรวงไหนก็ได้ หลายผลงาน
                          หลายกระทรวงก็ได้<br />
                          ให้น้องสร้างสรรค์คอนเทนต์ประชาสัมพันธ์ตามโจทย์นี้
                          ลงบนพื้นที่โซเชียลมีเดียใดก็ได้ แล้วนำลิงก์ URL
                          ของคอนเทนต์นั้นมาส่งเป็นคำตอบสำหรับโจทย์ข้อนี้
                        </li>
                      </ol>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major
                image="design"
                :showCount="isRegOpen"
                :count="major.design"
              >
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="design"
                    :show="scope.show"
                    :count="major.design"
                    title="Design"
                    :isRegOpen="isRegOpen"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการทำงานด้านกราฟิกดีไซน์ ออกแบบเว็บไซต์
                        รวมถึงองค์ประกอบศิลป์อื่น ๆ เพื่อสร้างผลงานให้มีสีสัน
                        และความสวยงาม เหมาะสำหรับผู้ที่มีความชอบในด้านศิลปะ
                        มีความสามารถในด้านกราฟิกดีไซน์ และการทำเว็บไซต์
                      </p>
                      <h3>คำถามประจำสาขา</h3>
                      <ol>
                        <li>
                          ให้จัดทำ Infographic เพื่อเล่าว่า
                          ทำไมน้องถึงควรได้รับการคัดเลือกเป็น 1 ใน YWC รุ่น 18
                          สาขา Web Design
                        </li>
                        <li>
                          ให้ลองเสนอ 5 ไอเดียในฝัน ว่าภายในระยะ 10
                          ปีข้างหน้าจะมีเว็บหรือแอป Service อะไรได้ใหม่
                          จากผลของการเปลี่ยนแปลงพฤติกรรม, สถานการณ์,
                          เทคโนโลยีในอนาคต
                        </li>
                        <li>
                          ให้ยกตัวอย่างเว็บหรือแอป Corporate/Brand
                          พร้อมเขียนวิเคราะห์ข้อดี-ข้อด้อย
                          โดยวิเคราะห์ให้เป็นรูปธรรม
                          ที่ลึกซึ้งเกี่ยวข้องกับที่มาของการออกแบบ / ผลกระทบ /
                          แนวทางแก้ไข
                        </li>
                        <li>
                          ส่ง Portfolio การออกแบบผลงานที่เคยทำมาใน ไม่จำกัดจำนวน
                          โดยมีขอบเขตคือเป็น เว็บหรือแอป Corporate/Brand/Service
                          หรือ Graphic Design
                        </li>
                      </ol>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major
                image="marketing"
                :showCount="isRegOpen"
                :count="major.marketing"
              >
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="marketing"
                    :show="scope.show"
                    :count="major.marketing"
                    title="Marketing"
                    :isRegOpen="isRegOpen"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการวางแผนกลยุทธ์การขายสินค้า การวิเคราะห์
                        และการหาความต้องการของลูกค้า
                        เพื่อนำมาสร้างผลงานมาให้ตอบโจทย์ความต้องการของลูกค้ามากที่สุด
                        รวมไปถึงการสร้างรายได้ให้กับธุรกิจ
                        เหมาะสำหรับผู้ที่ชอบการคิด วิเคราะห์
                        มีความรู้เบื้องต้นเกี่ยวกับการทำธุรกิจ และการตลาด
                      </p>
                      <h3>คำถามประจำสาขา</h3>
                      <ol>
                        <li>น้องเคยเรียนวิชาทางการตลาดมาหรือไม่</li>
                        <li>
                          จงระบุชื่อวิชาทางการตลาดต่าง ๆ
                          ที่ได้ศึกษามาแล้วในความเข้าใจของท่าน
                          หรือที่ท่านคิดว่ามีความเกี่ยวข้องกับศาสตร์ทางการตลาด
                          ไม่ว่าจะเป็นวิชาหลัก หรือวิชาเสริมในสถาบันการศึกษา
                        </li>
                        <li>
                          จงอธิบายว่าจะทำอย่างไรในการทำแผนการตลาดเว็บไซต์
                          เพื่อช่วยเหลือทีมในค่ายให้เป็นผู้ชนะการแข่งขันได้
                        </li>
                        <li>
                          จงอธิบายว่านักการตลาดคืออะไร มีหน้าที่อะไร
                          แตกต่างหรือเหมือนกับนักการตลาดดิจิทัลอย่างไร
                        </li>
                        <li>
                          ตำแหน่งนักการตลาด ในทีมของ YWC มีหน้าที่ทำอะไร
                          มีความสำคัญอย่างไรกับทีม ต้องทำอะไรบ้าง
                        </li>
                        <li>
                          น้องคิดอย่างไรกับ "เว็บไซต์" ในยุคปัจจุบัน
                          เว็บไซต์ยังมีความสำคัญอยู่ไหม อย่างไร
                          ในยุคที่มีการเปลี่ยนแปลง พัฒนาทางเทคโนโลยี
                          รวมทั้งการแพร่ระบาดของโควิด ที่เกิดขึ้น
                        </li>
                        <li>
                          แนบผลงานพร้อมอธิบายท้ายผลงานว่าน้องเคยมีประสบการณ์การทำงานด้านการตลาดอะไรบ้าง
                          ผลออกมาเป็นอย่างไร และอยากปรับปรุงตรงไหนอีก
                        </li>
                      </ol>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major
                image="programming"
                :showCount="isRegOpen"
                :count="major.programming"
              >
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="programming"
                    :show="scope.show"
                    :count="major.programming"
                    title="Programming"
                    :isRegOpen="isRegOpen"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการเขียนโค้ดสร้างเว็บไซต์ ไม่ว่าจะเป็น
                        HTML, CSS ,JS หรืออื่น ๆ เพื่อสร้างเว็บไซต์
                        ออกมาให้สามารถใช้งานได้จริง
                        เหมาะสำหรับผู้ที่มีความสามารถ
                        และความรู้ในการเขียนโปรแกรมได้ดี
                      </p>
                      <h3>คำถามประจำสาขา</h3>
                      <ol>
                        <li>
                          ให้น้องเล่าประสบการณ์การทำงานเกี่ยวกับการทำหรือพัฒนาเว็บไซต์
                          รวมถึงเหตุผลที่ชอบการพัฒนาเว็บไซต์
                          (สามารถแปะลิงก์ผลงานที่เคยทำไว้ได้)
                        </li>
                        <li>
                          ให้น้องเลือก Technology, Library หรือแนวคิดใหม่ ๆ
                          ในการทำเว็บมาหนึ่งอย่างพร้อมกับอธิบายว่าคืออะไร
                          และทำไมถึงตัดสินใจเลือกอันนี้
                        </li>
                        <li>
                          ให้ออกแบบระบบกรอกและส่งใบสมัครค่าย YWC#19
                          พร้อมระบบตรวจใบสมัครโดยคณะกรรมการ โดยให้ระบุ Feature
                          ที่อยากให้มี, เทคโนโลยีที่จะเลือกใช้,
                          โครงสร้างของฐานข้อมูล และ wireframe ของหน้าจอแบบคร่าว
                          ๆ
                        </li>
                        <li>
                          มี Code CSS ใดที่เป็นไปได้บ้าง ในการจัดให้ div#center
                          อยู่ตรงกลางภายใน div#wrapper (สามารถตอบได้มากกว่า 1
                          รูปแบบ)<br />
                        </li>
                      </ol>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
          </a-row>
        </MajorsList>
      </section>
    </MajorsWrapper>
  </MajorsSection>
</template>

<script>
import styled from 'vue-styled-components'
import BackdropText from '~/components/ywc18/BackdropText.vue'
import SectionName from '~/components/ywc18/SectionName.vue'
const MajorsSection = styled.div`
  position: relative;
  min-height: 800px;
  margin: 0 0 50px;
  @media screen and (min-width: 1440px) {
    min-height: 900px;
  }
`
const MajorsBackground = styled.div`
  ::before {
    content: '';
    display: block;
    position: absolute;
    background: url(${require('~/assets/images/ywc18/paper-muan-top.png')});
    background-position: top right;
    background-size: contain;
    width: 192px;
    height: 377px;
    top: -50px;
    left: 0;
    z-index: 1;
    @media screen and (max-width: 425px) {
      width: 120px;
      height: 240px;
    }
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    background: url(${require('~/assets/images/ywc18/paper-muan-bottom.png')});
    background-position: top left;
    background-size: contain;
    width: 116px;
    height: 320px;
    bottom: -55px;
    right: 0;
    @media screen and (max-width: 425px) {
      width: 90px;
      height: 262px;
    }
  }
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 93, 41, 0.88) 0%,
    rgba(248, 151, 66, 0.5) 100%
  );
  .backdrop__wrapper {
    box-sizing: border-box;
    padding-top: 42px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`
const Cover = styled.div`
  background: url(${require('~/assets/images/ywc18/section-top.png')}),
    url(${require('~/assets/images/ywc18/section-bottom.png')});
  background-repeat: no-repeat, no-repeat;
  background-size: 1920px auto, 1920px auto;
  background-position: top center, bottom center;
  width: 100%;
  height: calc(100% + 1px);
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (min-width: 1920px) {
    background-repeat: no-repeat, no-repeat;
    background-size: 100% auto, 100% auto;
    background-position: top center, bottom center;
  }
`
const MajorsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 160px 0;
  .section__name--subtitle {
    letter-spacing: 0.16em;
    font-family: Barlow, system-ui, -apple-system, sans-sreif;
    font-weight: 400;
    font-style: italic;
  }
  @media screen and (max-width: 325px) {
    padding: 150px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 240px 0 200px;
  }
  @media screen and (min-width: 2560px) {
    padding: 250px 0;
  }
`

const MajorsList = styled.div`
  margin: 0;
  margin-top: 50px;
  justify-items: center;
  justify-content: center;
  padding: 0 15px;
`

class CountMajorRegistant {
  programming = 0
  design = 0
  marketing = 0
  content = 0
}

export default {
  components: {
    MajorsBackground,
    BackdropText,
    Cover,
    SectionName,
    MajorsWrapper,
    MajorsSection,
    MajorsList,
    Major: () => import('~/components/ywc18/Major'),
    FullscreenOverlay: () => import('~/components/ywc18/FullscreenOverlay'),
  },
  data() {
    return {
      major: new CountMajorRegistant(),
      isRegOpen: true,
    }
  },
  mounted() {
    this.fetchCountRegistant().then((major) => {
      this.major = major
    })
  },
  methods: {
    fetchCountRegistant() {
      return this.$axios
        .get('https://api-prod.ywc18.ywc.in.th/users/stat')
        .then(({ status, data }) => {
          if (status === 200) {
            return data.payload
          }
          return new CountMajorRegistant()
        })
        .catch(() => {
          return new CountMajorRegistant()
        })
    },
  },
}
</script>

<style></style>
