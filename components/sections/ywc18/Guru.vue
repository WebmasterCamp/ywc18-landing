<template>
  <section>
    <SectionName title="Guru" />
    <CurrentGuru>
      <div class="container">
        <Picture :fileName="`guru/${gurus[currentGuru].img}`" />
        <div class="guru-content">
          <h1>{{ gurus[currentGuru].name }}</h1>
          <p v-html="gurus[currentGuru].role" />
          <div v-if="gurus[currentGuru].major" :class="`major major-${gurus[currentGuru].major}`">
            {{ gurus[currentGuru].major }}
          </div>
        </div>
      </div>
      <Picture class="bg bg-top" fileName="ywc18/paper-guru-top" />
      <Picture class="bg bg-bottom" fileName="ywc18/paper-guru-bottom" />
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
        <div :class="`major major-${g.major}`" />
      </div>
    </Gurus>
  </section>
</template>

<style scoped>
section {
  padding: 0;
}
</style>

<script>
import styled from 'vue-styled-components'
import SectionName from '~/components/ywc18/SectionName.vue'
import Picture from '~/components/Picture.vue'

const CurrentGuru = styled.div`
  background: 
    url(/images/ywc18/bg/guru-typo.svg),
    linear-gradient(100.19deg, #f66b3f -0.48%, #f89742 47.88%, #fe5722 96.18%);
  background-blend-mode: color-dodge;
  background-size: 60% auto, contain;
  background-position: left center;
  background-repeat: no-repeat;
  padding: 120px 0 30px;
  position: relative;

  @media screen and (max-width: 960px) {
    background: linear-gradient(100.19deg, #f66b3f -0.48%, #f89742 47.88%, #fe5722 96.18%);
    padding: 80px 0 0;
    margin-bottom: 30px;
  }

  > .bg {
    width: 100%;
    position: absolute;
    left: 0;

    &.bg-top {
      top: -5px;
    }

    &.bg-bottom {
      bottom: -10px;
    }
  }

  > .container {
    display: flex;

    @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
    }

    img {
      width: 400px;
      max-width: 80%;
      margin: 0 50px;

      @media screen and (max-width: 960px) {
        margin: 0;
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

export default {
  components: {
    SectionName,
    Picture,
    CurrentGuru,
    Gurus,
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
          major: 'programming',
        },
        {
          img: 2,
          name: 'อัครวุฒิ ตำราเรียง (บัง)',
          role: `กรรมการผู้จัดการ บ.มาร์เวลิค เอ็นจิ้น จก.<br>กรรมการควบคุมจริยธรรม สมาคมผู้ดูแลเว็บไทย`,
        },
        {
          img: 3,
          name: 'อภิศิลป์ ตรุงกานนท์ (บอย)',
          role: `Co-founder & Chief Product Officer, Pantip.com`,
          major: 'content',
        },
        {
          img: 4,
          name: 'ขจร เจียรนัยพานิชย์ (เอ็ม)',
          role: `Blogger & Managing Director : Mango Zero, MacThai, RAiNMaker`,
          major: 'content',
        },
        {
          img: 5,
          name: 'ณปสก สันติสุนทรกูล (ปอล)',
          role: `COO, Dek-D Intertactive Co., Ltd.`,
          major: 'design',
        },
        {
          img: 6,
          name: 'คนที่หนึ่ง แสงหิรัญ (หนึ่ง)',
          role: `อาจารย์ประจำภาควิชาการออกแบบนิเทศศิลป์<br>คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ`,
          major: 'design',
        },
        {
          img: 7,
          name: 'อินทนนท์ ปัญญาโสภา (เบนซ์)',
          role: `ผู้ก่อตั้งเว็บไซต์ Grappik`,
          major: 'design',
        },
        {
          img: 8,
          name: 'เจริญ ลักษณ์เลิศกุล (เจ)',
          role: `Associate Director - Strategic planning<br>หน่วยงาน Online Station (True Digital Group)`,
          major: 'marketing',
        },
        {
          img: 9,
          name: 'จักรพงษ์ คงมาลัย (ปอง)',
          role: `Managing Director, Moonshot Digital Co., Ltd`,
          major: 'content',
        },
        {
          img: 10,
          name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี (ปันเจ)',
          role: `C-3PO at Cleverse`,
          major: 'programming',
        },
        {
          img: 11,
          name: 'เมธปริยา คำนวนวุฒิ (ว่าน)',
          role: `Head of Marketing, Lnw co., Ltd`,
          major: 'marketing',
        },
      ],
    }
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
