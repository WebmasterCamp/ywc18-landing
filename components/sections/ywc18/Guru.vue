<template>
  <section class="guru__wrapper">
    <SectionName title="Guru" class="guru-header" subTitle="วิทยากร" />
    <div class="current-guru__wrapper">
      <Cover class="cover" />
      <CurrentGuru>
        <div class="container guru-detail">
          <div class="guru-img__wrapper">
            <transition name="guru-img" mode="out-in">
              <template v-for="(img, index) in guruImages">
                <Picture
                  :fileName="`guru/${gurus[currentGuru].img}`"
                  :key="`guru-${index}`"
                  v-if="gurus[currentGuru].img === img"
                  class="guru-image"
                />
              </template>
            </transition>
          </div>
          <div>
            <transition name="guru-detail" mode="out-in">
              <div
                class="guru-content"
                :key="`guru-detail-${gurus[currentGuru].img}`"
              >
                <h1>{{ gurus[currentGuru].name }}</h1>
                <p v-html="gurus[currentGuru].role" />
                <div
                  v-for="major in gurus[currentGuru].majors"
                  :class="`major major-${major}`"
                  :key="major"
                >
                  {{ major }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </CurrentGuru>
    </div>
    <Gurus class="container">
      <div
        v-for="(g, idx) in gurus"
        :id="`gurupic-${idx}`"
        :key="`guru-${idx}`"
        :title="g.name"
        @click="selectGuru(idx)"
      >
        <Picture :fileName="`guru/${g.img}`" :alt="g.name" />
        <div
          v-for="major in g.majors"
          :class="`major major-${major}`"
          :key="`${idx + major}`"
        />
      </div>
    </Gurus>
  </section>
</template>

<style scoped>
section {
  padding: 0;
}
.guru-header {
  margin-bottom: 0;
}
</style>
<style lang="scss">
.guru__wrapper,
.current-guru__wrapper {
  position: relative;
}
.guru-cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 1920px;

  /* Fixed center */
  margin-left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 800px;
  }
  @media screen and (min-width: 1920px) {
    width: 101%;
  }

  .bg {
    img {
      width: 101%;
      object-fit: cover;
    }
  }

  /* Block draging image cover  */
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>

<script>
import styled from 'vue-styled-components'
import SectionName from '~/components/ywc18/SectionName.vue'
import Picture from '~/components/Picture.vue'

const Cover = styled.div`
  background: url(${require('~/assets/images/ywc18/section-guru-top.png')}),
    url(${require('~/assets/images/ywc18/section-guru-bottom.png')});
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: calc(100% + 2px);
  top: -1px;
  background-repeat: no-repeat;
  background-size: 1920px auto, 1920px auto;
  background-position: center -60px, center 310px;
  @media screen and (max-width: 960px) {
    background-position: top, bottom;
    background-size: 1500px auto, 1500px auto;
  }
  @media screen and (max-width: 768px) {
    background-size: 1000px auto, 1000px auto;
  }
  @media screen and (max-width: 425px) {
    background-size: 700px auto, 700px auto;
  }
  @media screen and (min-width: 1961px) {
    background-size: 100% auto, 100% auto;
  }
`

const CurrentGuru = styled.div`
  font-family: Barlow, Anuphan, system-ui, -apple-system, sans-sreif;
  background: url(/images/ywc18/bg/guru-typo.svg),
    linear-gradient(100.19deg, #f66b3f -0.48%, #f89742 47.88%, #fe5722 96.18%);
  background-blend-mode: color-dodge;
  background-size: 60% auto, contain;
  background-position: left center;
  background-repeat: no-repeat;
  padding: 110px 0 30px;
  height: 620px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    background: linear-gradient(
      100.19deg,
      #f66b3f -0.48%,
      #f89742 47.88%,
      #fe5722 96.18%
    );
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 65px 0 30px;
    height: 660px;
  }
  @media screen and (max-width: 425px) {
    padding: 34px 0 30px;
    height: 525px;
  }

  @media screen and (min-width: 1950px) {
    padding: 170px 0 30px;
    height: 680px;
  }

  .guru-detail {
    position: relative;
    display: grid;
    grid-template-columns: auto 50%;
    gap: 30px;
    height: 450px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      display: flex !important;
      flex-direction: column-reverse;
      height: auto !important;
      align-items: center;
    }
    @media screen and (max-width: 425px) {
      height: 550px !important;
      padding: 50px 15px;
      justify-content: space-between;
    }

    .guru-img__wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      @media screen and (max-width: 960px) {
        justify-content: center !important;
      }

      .guru-image {
        margin-bottom: 20px;
        img {
          max-width: 80% !important;
          @media screen and (max-width: 425px) {
            width: 350px;
            max-width: 75% !important;
          }
        }
      }
    }

    .guru-content {
      text-align: left;
      margin-top: 90px;
      @media screen and (max-width: 425px) {
        margin-top: 40px !important;
      }

      > h1 {
        color: #002144;
        font-size: 38px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 12px;

        @media screen and (max-width: 1048px) {
          font-size: 30px;
        }

        @media screen and (max-width: 960px) {
          font-size: 24px;
        }
        @media screen and (max-width: 768px) {
          font-size: 24px;
          text-align: center;
          margin-bottom: 8px;
        }
      }

      > p {
        color: #002144;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;

        @media screen and (max-width: 960px) {
          font-size: 16px;
          font-weight: 400;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
          text-align: center;
        }
      }

      > .major {
        color: #002144;
        background: #f0f0f0;
        border-radius: 2px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
        width: fit-content;
        padding-left: 30px;
        padding-right: 20px;
        position: relative;

        &:first-letter {
          text-transform: uppercase;
        }

        &:before {
          content: '';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          left: 10px;

          @media screen and (max-width: 960px) {
            width: 8px;
            height: 8px;
            left: 8px;
          }
        }

        &.major-programming:before {
          background: #123e84;
        }

        &.major-design:before {
          background: #e8b72e;
        }

        &.major-marketing:before {
          background: #11631d;
        }

        &.major-content:before {
          background: #8c0d1c;
        }

        @media screen and (max-width: 768px) {
          font-size: 14px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 10px;
        }
      }
    }
  }
`

const Gurus = styled.div`
  display: block;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;

  > div {
    display: inline-block;
    margin: 12px;
    width: 125px;
    user-select: none;
    cursor: pointer;

    img {
      background: url(/images/ywc18/bg/guru.png);
      background-size: cover;
      background-position: center;
      user-drag: none;
    }

    > .major {
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin: 10px auto 0;

      &.major-programming {
        background: #123e84;
      }

      &.major-design {
        background: #e8b72e;
      }

      &.major-marketing {
        background: #11631d;
      }

      &.major-content {
        background: #8c0d1c;
      }

      @media screen and (max-width: 960px) {
        width: 8px;
        height: 8px;
        margin-top: 8px;
      }
    }

    @media screen and (max-width: 960px) {
      width: 80px;
    }
  }

  @media screen and (max-width: 960px) {
    white-space: nowrap;
    text-align: left;
  }
`

export default {
  components: {
    SectionName,
    Picture,
    CurrentGuru,
    Gurus,
    Cover,
  },
  data() {
    return {
      autoplay: null,
      currentGuru: 0,
      gurus: [
        {
          img: 1,
          name: 'วโรรส โรจนะ (โน้ต)',
          role: `CEO - Dek-D Interactive Co., Ltd.<br>นายกสมาคมผู้ดูแลเว็บไทย`,
          majors: ['programming'],
          order: 1,
        },
        // {
        //   img: 2,
        //   name: 'อัครวุฒิ ตำราเรียง (บัง)',
        //   role: `กรรมการผู้จัดการ บ.มาร์เวลิค เอ็นจิ้น จก.<br>กรรมการควบคุมจริยธรรม สมาคมผู้ดูแลเว็บไทย`,
        //   majors: []
        // },
        {
          img: 3,
          name: 'อภิศิลป์ ตรุงกานนท์ (บอย)',
          role: `Co-Founder & Chief Product Officer - Pantip.com`,
          majors: ['content'],
          order: 3,
        },
        {
          img: 4,
          name: 'ขจร เจียรนัยพานิชย์ (เอ็ม)',
          role: `Executive Editor - MangoZero.com & The Zero Publishing`,
          majors: ['content'],
          order: 5
        },
        {
          img: 5,
          name: 'ณปสก สันติสุนทรกูล (ปอล)',
          role: `Co-Founder & Chief Operation Officer - Dek-D Interactive Co.,Ltd.`,
          majors: ['design'],
          order: 16,
        },
        {
          img: 6,
          name: 'คนที่หนึ่ง แสงหิรัญ (หนึ่ง)',
          role: `อาจารย์ประจำภาควิชาการออกแบบนิเทศศิลป์<br>คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ`,
          majors: ['design'],
          order: 15,
        },
        {
          img: 7,
          name: 'อินทนนท์ ปัญญาโสภา (เบนซ์)',
          role: `ผู้ก่อตั้งเว็บไซต์ Grappik`,
          majors: ['design'],
          order: 7,
        },
        {
          img: 8,
          name: 'เจริญ ลักษณ์เลิศกุล (เจ)',
          role: `Associate Director - Strategic Planning<br>หน่วยงาน Online Station (True Digital Group)`,
          majors: ['marketing'],
          order: 13
        },
        {
          img: 9,
          name: 'จักรพงษ์ คงมาลัย (ปอง)',
          role: `Managing Director - Moonshot Digital Co., Ltd`,
          majors: ['content'],
          order: 6,
        },
        {
          img: 10,
          name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี (ปันเจ)',
          role: `C-3PO - Cleverse`,
          majors: ['programming'],
          order: 9,
        },
        {
          img: 11,
          name: 'เมธปริยา คำนวนวุฒิ (ว่าน)',
          role: `Head of Marketing - Lnw co., Ltd`,
          majors: ['marketing'],
          order: 12,
        },
        {
          img: 12,
          name: 'ศุภเดช สุทธิพงศ์คณาสัย (โก๋)',
          role: `Founder - VR Online Co.,Ltd. Tech<br>Blogger - Freeware.in.th, พิธีกรรายการล้ำหน้าโชว์`,
          majors: ['content'],
          order: 11,
        },
        {
          img: 13,
          name: 'วีระ เจียรนัยพาณิชย์ (โอ)',
          role: `ที่ปรึกษาด้านพัฒนากลยุทธ์ธุรกิจ SME<br> Line Certified Coach 2019`,
          majors: ['marketing'],
          order: 14,
        },
        {
          img: 14,
          name: 'ไชยพงศ์ ลาภเลี้ยงตระกูล (พงศ์)',
          role: `Co-Founder & Chief Executive Officer - 3DS Interactive`,
          majors: ['programming'],
          order: 17
        },
        {
          img: 15,
          name: 'วรัทธน์ วงศ์มณีกิจ (ตั้ง)',
          role: `Chief Product Officer - WISESIGHT`,
          majors: ['programming'],
          order: 10,
        },
        {
          img: 16,
          name: 'สุธัม ธรรมวงศ์ (ป๋อม)',
          role: `Senior Consultant & Experience Designer - ThoughtWorks`,
          majors: ['design'],
          order: 8,
        },
        {
          img: 17,
          name: 'ดร.ธีรศานต์ สหัสสพาศน์ (ไอซ์)',
          role: `ที่ปรึกษาสำนักงานบริหารนโยบายของนายกรัฐมนตรี<br>ผู้อำนวยการหลักสูตร #dnabyspu<br>คณะบริหารธุรกิจ - มหาวิทยาลัยศรีปทุม`,
          majors: ['marketing'],
          order: 4,
        },
        {
          img: 18,
          name: 'สุธีรพันธุ์ สักรวัตร (ตูน)',
          role: `ผู้ช่วยผู้จัดการใหญ่ ผู้บริหารสายงานการตลาด - ธนาคารไทยพาณิชย์<br>อุปนายกสมาคมผู้ดูแลเว็บไทย`,
          majors: ['marketing'],
          order: 2
        },
      ].sort((a, b) => a.order - b.order),
    }
  },
  computed: {
    guruImages() {
      return this.gurus.map((guru) => guru.img)
    },
  },
  created() {
    this.setAutoplay()
  },
  beforeDestroy() {
    if (this.autoplay) {
      clearInterval(this.autoplay)
    }
  },
  methods: {
    setAutoplay() {
      if (this.autoplay) {
        clearInterval(this.autoplay)
      }

      this.autoplay = setInterval(() => {
        let nextGuru = this.currentGuru + 1
        if (nextGuru >= this.gurus.length) {
          nextGuru = 0
        }
        this.currentGuru = nextGuru
        if (process.client) {
          const target = document.getElementById(`gurupic-${nextGuru}`)
          target.parentNode.scrollLeft = target.offsetLeft - 5
        }
      }, 5500)
    },
    selectGuru(id) {
      this.currentGuru = id
      this.setAutoplay()
    },
  },
}
</script>
