<template>
  <section class="container what-is-ywc__container">
    <div class="what-is-ywc__wrapper">
      <div>
        <div class="what-is-ywc__heading">
          <h1>
            ชีวิตในโลก<span>โลกใบใหม่</span><br />
            ออกแบบได้ ด้วย<span>ตัวคุณ</span>
          </h1>
        </div>
        <div class="what-is-ywc__arrow">
          <img src="~/assets/images/ywc18/arrow-right-long.svg" alt="" />
        </div>
        <div class="what-is-ywc__description">
          <p>
            เชิญชวนนิสิตนักศึกษาทั่วประเทศ มาร่วมเป็นส่วนหนึ่งในการสร้าง
            เว็บไซต์จากการใช้ความรู้ และความสามารถ เพื่อสร้างทางออก
            <span style="white-space:nowrap;"
              >ให้กับวิถีชีวิตที่เปลี่ยนแปลงไป</span
            >
            หลังจากสถานการณ์ COVID-19 ของคนในสังคม
            ให้พบเจอกับโลกใบใหม่ที่ดีกว่าเดิม จากการ ร่วมกันคิด
            ร่วมกันสร้างสรรค์ และร่วมออกแบบไปด้วยกัน
          </p>
          <p>
            โอกาสเดียวที่ตัวคุณและสังคมจะได้รับการพัฒนา<br />
            ไปพร้อม ๆ กันกับ Young Webmaster Camp ครั้งที่ 18 <br /><span
              class="text-primary"
              >“New Normal, New Web, New World”<br
            /></span>

            ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุดในประเทศไทย
          </p>
        </div>
      </div>
      <div>
        <div class="what-is-ywc__images">
          <BackdropText
            text="WHAT IS YWC ?"
            :times="6"
            gap
            highlight
            fade
            class="backdrop-text"
          />
          <div class="image">
            <Picture fileName="what-is-ywc.png"></Picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackdropText from '~/components/ywc18/BackdropText.vue'
import Picture from '~/components/Picture.vue'
export default {
  components: {
    BackdropText,
    Picture,
  },
}
</script>

<style lang="scss">
@import '~/assets/css/global.scss';
.what-is-ywc {
  &__container {
    font-family: Barlow, Anuphan;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 7.5px));
    gap: 60px 15px;
    div {
      position: relative;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: repeat(2, auto);
      div {
        &:nth-child(2) {
          order: -1;
        }
      }
    }
  }

  &__heading {
    display: flex;
    justify-content: flex-start;
    h1 {
      font-size: 40px;
      font-weight: bold;
      color: rgba(242, 246, 252, 0.9);
      line-height: 130%;
      text-align: left;
      margin-top: 0;
      margin-bottom: 1.5rem;
      span {
        color: $primary-color;
      }
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
      h1 {
        text-align: center;
      }
    }
    @media screen and (max-width: 425px) {
      h1 {
        font-size: 28px;
      }
    }
  }
  &__description {
    text-align: left;
    max-width: 520px;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: rgba(242, 246, 252, 0.9);
    @media screen and (max-width: 768px) {
      margin: auto;
    }
    p {
      color: #bdbdbd;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
      }
      margin-bottom: 2.5rem;
      span.text-primary {
        color: $primary-color;
      }
      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }
  }
  &__images {
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 324px;
    .backdrop-text {
      z-index: 0;
      top: 0;
      right: 0;
      left: unset;
      @media screen and (max-width: 768px) {
        left: 0; // center
      }
    }
    .image {
      position: absolute;
      z-index: 2;
      margin: auto;
      width: 368px;
      top: 54px;
      max-width: 100%;
      @media screen and (max-width: 768px) {
        width: 260px;
      }
    }
  }
  &__arrow {
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
}
</style>
