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
              <Major image="content">
                <template slot-scope="scope">
                  <FullscreenOverlay
                    :show="scope.show"
                    major="content"
                    title="Content"
                    :count="0"
                    :isRegOpen="false"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการใช้ความคิดสร้างสรรค์
                        คิดและเขียนคอนเทนต์เพื่อทำผลงานออกมาให้มีความสนุก
                        และน่าสนใจมากที่สุด เหมาะสำหรับผู้รักในงานเขียน
                        การเล่าเรื่อง มีความคิดสร้างสรรค์
                        และความรู้เกี่ยวกับการเขียนคอนเทนต์เป็นอย่างดี
                      </p>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="design">
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="design"
                    :show="scope.show"
                    :count="0"
                    title="Design"
                    :isRegOpen="false"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการทำงานด้านกราฟิกดีไซน์ ออกแบบเว็บไซต์
                        รวมถึงองค์ประกอบศิลป์อื่น ๆ เพื่อสร้างผลงานให้มีสีสัน
                        และความสวยงาม เหมาะสำหรับผู้ที่มีความชอบในด้านศิลปะ
                        มีความสามารถในด้านกราฟิกดีไซน์ และการทำเว็บไซต์
                      </p>
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="marketing">
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="marketing"
                    :show="scope.show"
                    :count="0"
                    title="Marketing"
                    :isRegOpen="false"
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
                    </template>
                  </FullscreenOverlay>
                </template>
              </Major>
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="programming">
                <template slot-scope="scope">
                  <FullscreenOverlay
                    major="programming"
                    :show="scope.show"
                    :count="0"
                    title="Programming"
                    :isRegOpen="false"
                  >
                    <template v-slot:content>
                      <p>
                        หน้าที่ในทีมคือการเขียนโค้ดสร้างเว็บไซต์ ไม่ว่าจะเป็น
                        <span>html, css ,js</span> หรืออื่น ๆ เพื่อสร้างเว็บไซต์
                        ออกมาให้สามารถใช้งานได้จริง
                        เหมาะสำหรับผู้ที่มีความสามารถ
                        และความรู้ในการเขียนโปรแกรมได้ดี
                      </p>
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
  background: url(${require('~/assets/images/ywc18/paper-ripped-bg.png')}),
    url(${require('~/assets/images/ywc18/paper-ripped-bg-bottom.png')});
  background-repeat: no-repeat, no-repeat;
  background-size: 1920px auto, 1920px auto;
  background-position: top center, bottom center;
  width: 100%;
  height: 100%;
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
    padding: 200px 0;
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
}
</script>

<style></style>
