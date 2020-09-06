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
              <Major image="content" />
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="design" />
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="marketing" />
            </a-col>
            <a-col :xs="12" :lg="6">
              <Major image="programming" />
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
  margin: 100px 0;
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
  },
}
</script>

<style></style>
