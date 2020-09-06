<template>
  <section>
    <SectionName title="Guru" class="guru-header" />
    <CurrentGuru>
      <div class="container guru-detail">
        <transition name="guru-img" mode="out-in">
          <template v-for="(img, index) in guruImages">
            <Picture
              :fileName="`guru/${gurus[currentGuru].img}`"
              :key="`guru-${index}`"
              v-if="gurus[currentGuru].img === img"
            />
          </template>
        </transition>
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
      <Cover>
        <Picture class="bg bg-top" fileName="ywc18/paper-guru-top" />
        <Picture class="bg bg-bottom" fileName="ywc18/paper-guru-bottom" />
      </Cover>
    </CurrentGuru>
    <Gurus>
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

<script>
import styled from 'vue-styled-components'
import SectionName from '~/components/ywc18/SectionName.vue'
import Picture from '~/components/Picture.vue'

const CurrentGuru = styled.div`
  font-family: Barlow, Anuphan;
  background: url(/images/ywc18/bg/guru-typo.svg),
    linear-gradient(100.19deg, #f66b3f -0.48%, #f89742 47.88%, #fe5722 96.18%);
  background-blend-mode: color-dodge;
  background-size: 60% auto, contain;
  background-position: left center;
  background-repeat: no-repeat;
  padding: 140px 0 30px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    background: linear-gradient(
      100.19deg,
      #f66b3f -0.48%,
      #f89742 47.88%,
      #fe5722 96.18%
    );
    padding: 80px 0 0;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1950px) {
    padding: 230px 0 30px;
  }

  > .guru-detail {
    display: flex;

    @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
      padding: 30px 0;
    }

    img {
      width: 400px;
      max-width: 80%;
      margin: 0 50px;

      @media screen and (max-width: 960px) {
        margin: 0;
        max-width: 50%;
      }
      @media screen and (max-width: 425px) {
        max-width: 80%;
      }
      @media screen and (min-width: 1900px) {
        width: 430px;
      }
    }

    > .guru-content {
      text-align: left;
      margin-top: 80px;

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
      }

      > p {
        color: #002144;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5;

        @media screen and (max-width: 960px) {
          font-size: 12px;
          font-weight: 400;
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
          background: #1451c7;
        }

        &.major-design:before {
          background: #ffce21;
        }

        &.major-marketing:before {
          background: #e73239;
        }

        &.major-content:before {
          background: #00c42b;
        }

        @media screen and (max-width: 960px) {
          font-size: 10px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 10px;
        }
      }

      @media screen and (max-width: 960px) {
        text-align: center;
        margin-top: 0;
        padding: 0 15px;
      }
    }
  }
`

const Gurus = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
        background: #1451c7;
      }

      &.major-design {
        background: #ffce21;
      }

      &.major-marketing {
        background: #e73239;
      }

      &.major-content {
        background: #00c42b;
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

const Cover = styled.div`
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

  .bg-bottom {
    margin-bottom: -10px;
  }

  /* Block draging image cover  */
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
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
          role: `CEO Dek-D Interactive Co., Ltd.<br>นายกสมาคมผู้ดูแลเว็บไทย`,
          majors: ['programming'],
        },
        {
          img: 2,
          name: 'อัครวุฒิ ตำราเรียง (บัง)',
          role: `กรรมการผู้จัดการ บ.มาร์เวลิค เอ็นจิ้น จก.<br>กรรมการควบคุมจริยธรรม สมาคมผู้ดูแลเว็บไทย`,
          majors: [],
        },
        {
          img: 3,
          name: 'อภิศิลป์ ตรุงกานนท์ (บอย)',
          role: `Co-founder & Chief Product Officer, Pantip.com`,
          majors: ['content'],
        },
        {
          img: 4,
          name: 'ขจร เจียรนัยพานิชย์ (เอ็ม)',
          role: `Blogger & Managing Director : Mango Zero, MacThai, RAiNMaker`,
          majors: ['content'],
        },
        {
          img: 5,
          name: 'ณปสก สันติสุนทรกูล (ปอล)',
          role: `COO, Dek-D Intertactive Co., Ltd.`,
          majors: ['design'],
        },
        {
          img: 6,
          name: 'คนที่หนึ่ง แสงหิรัญ (หนึ่ง)',
          role: `อาจารย์ประจำภาควิชาการออกแบบนิเทศศิลป์<br>คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ`,
          majors: ['design'],
        },
        {
          img: 7,
          name: 'อินทนนท์ ปัญญาโสภา (เบนซ์)',
          role: `ผู้ก่อตั้งเว็บไซต์ Grappik`,
          majors: ['design'],
        },
        {
          img: 8,
          name: 'เจริญ ลักษณ์เลิศกุล (เจ)',
          role: `Associate Director - Strategic planning<br>หน่วยงาน Online Station (True Digital Group)`,
          majors: ['marketing'],
        },
        {
          img: 9,
          name: 'จักรพงษ์ คงมาลัย (ปอง)',
          role: `Managing Director, Moonshot Digital Co., Ltd`,
          majors: ['marketing'],
        },
        {
          img: 10,
          name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี (ปันเจ)',
          role: `C-3PO at Cleverse`,
          majors: ['programming'],
        },
        {
          img: 11,
          name: 'เมธปริยา คำนวนวุฒิ (ว่าน)',
          role: `Head of Marketing, Lnw co., Ltd`,
          majors: ['marketing'],
        },
      ],
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
