<template>
  <section class="container what-is-ywc__container">
    <div>
      <a-row :gutter="15">
        <a-col :lg="12">
          <div class="what-is-ywc__heading">
            <h1>
              ชีวิตใน<span>โลกใบใหม่</span><br />
              ออกแบบได้ด้วย<span>ตัวคุณ</span>
            </h1>
          </div>
          <div class="what-is-ywc__arrow">
            <img src="~/assets/images/ywc18/arrow-right-long.svg" alt="" />
          </div>
          <div class="what-is-ywc__description">
            <p>
              เชิญชวนนิสิตนักศึกษาทั่วประเทศ มาร่วมเป็นส่วนหนึ่งในการสร้าง
              เว็บไซต์จากการใช้ความรู้ และความสามารถ เพื่อสร้างทางออก
              ให้กับวิถีชีวิตที่เปลี่ยนแปลงไป หลังจากสถานการณ์ COVID-19
              ของคนในสังคม ให้พบเจอกับโลกใบใหม่ที่ดีกว่าเดิม จากการ ร่วมกันคิด
              ร่วมกันสร้างสรรค์ และร่วมออกแบบไปด้วยกัน
            </p>
            <p>
              โอกาสเดียวที่ตัวคุณและสังคมจะได้รับการพัฒนา<br />
              ไปพร้อม ๆ กันกับ Young Webmaster Camp ครั้งที่ 18 <br /><span
                >“New Normal, New Web, New World”<br
              /></span>

              ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุดในประเทศไทย
            </p>
          </div>
        </a-col>
        <a-col :lg="12">
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
        </a-col>
      </a-row>
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
  }
  &__description {
    text-align: left;
    max-width: 520px;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: rgba(242, 246, 252, 0.9);
    p {
      color: #bdbdbd;
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
      margin-bottom: 2.5rem;
      span {
        color: $primary-color;
      }
    }
  }
  &__images {
    position: relative;
    display: flex;
    justify-content: center;
    .backdrop-text {
      z-index: 0;
      position: absolute;
      top: 0;
      right: 0;
    }
    .image {
      position: absolute;
      z-index: 2;
      margin: auto;
      width: 368px;
      top: 54px;
      max-width: 100%;
    }
  }
  &__arrow {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
