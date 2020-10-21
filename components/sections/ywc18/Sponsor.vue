<template>
  <section>
    <SectionName title="SPONSOR" subTitle="ผู้สนับสนุนค่าย YWC18" bgLeft />
    <div class="sponsor-vip-wrapper">
      <SponsorCircle
        :transparent="true"
        size="lg"
        v-for="(sponsor, index) in sponsors.vip"
        :key="index"
        :fileName="`sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        :class="sponsor.class"
      />
    </div>
    <div class="sponsor-gold-wrapper">
      <SponsorCircle
        :transparent="true"
        size="lg"
        v-for="(sponsor, index) in sponsors.gold"
        :key="index"
        :fileName="`sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        :class="sponsor.class"
      />
    </div>
    <div class="sponsor-silver-wrapper">
      <SponsorCircle
        v-for="(sponsor, index) in sponsors.silver"
        :key="index"
        :fileName="`sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        :class="sponsor.class"
        size="sm"
        :transparent="true"
      />
    </div>

    <NuxtLink to="/sponsor" style="text-decoration: none;">
      <Button>ร่วมสนับสนุน YWC 18</Button>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
}
</style>

<script>
import Button from '~/components/ywc18/Button.vue'
import SectionName from '~/components/ywc18/SectionName.vue'

export default {
  components: {
    Button,
    SectionName,
    SponsorCircle: () => import('~/components/SponsorCircle'),
  },
  data() {
    return {
      sponsors: {
        vip: [
          {
            class: ['sp-twa'],
            img: '1-2-TWA-long.svg',
            alt: 'Thai Webmaster Association',
            link: 'https://www.webmaster.or.th',
          },
          {
            class: ['sp-scb-academy'],
            img: '1-3-SCB-Academy.svg',
            alt: 'SCB Academy',
            link: '',
          },
        ],
        gold: [
          {
            class: ['sp-brikl'],
            img: '2-1-brikl.svg',
            alt: 'Brikl',
            link: 'https://www.brikl.com',
          },
          {
            class: ['sp-thairath'],
            img: '2-2-Thairath.svg',
            alt: 'Thairath',
            link: 'https://www.thairath.co.th',
          },
          {
            class: ['sp-lmwn'],
            img: '2-3-LMWN.svg',
            alt: 'LMWN',
            link: 'https://lmwn.com',
          },
        ],
        silver: [
          {
            class: ['sp-Pantip'],
            img: '3-2-Pantip.svg',
            alt: 'Pantip',
            link: 'https://www.pantip.com',
          },
          {
            class: ['sp-CampHUB'],
            img: '3-4-CampHUB.svg',
            alt: 'CampHUB',
            link: 'https://www.camphub.in.th',
          },
          {
            class: ['sp-rainmaker'],
            img: '3-3-Rainmaker.svg',
            alt: 'Rainmaker',
            link: 'https://www.rainmaker.in.th',
          },
          // {
          //   class: ['sp-easyrice'],
          //   img: '3-4-easyrice.png',
          //   alt: 'Easy Rice Digital Technology',
          //   link: 'https://www.easyrice.ai',
          // },
          {
            class: ['sp-pandt'],
            img: '3-4-P-and-T.svg',
            alt: 'P&T Hosting',
            link: 'https://www.pathosting.co.th',
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
section {
  margin-top: 100px;
}
@media screen and (max-width: 768px) {
  .height {
    font-size: 36px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 330px) {
  .height {
    font-size: 32px;
    box-sizing: border-box;
  }
}
</style>
<style lang="scss">
/* Vip */
.sp-twa {
  width: 250px !important;
  height: 72px;
  max-height: 72px;
  a picture {
    width: 250px !important;
    height: 72px;
  }
}
.sp-scb-academy {
  width: 270px !important;
  height: 60px;
  max-height: 60px;
  span picture {
    width: 270px !important;
    height: 60px;
  }
}
.sp-Pantip {
  a picture {
    width: 85px !important;
    height: auto !important;
  }
}
.sp-CampHUB {
  width: 100% !important;
  max-width: 140px !important;
  max-height: 24px;
  a picture {
    width: 100% !important;
    height: 22px;
  }
}
.sp-pandt {
  width: 100% !important;
  max-width: 104px !important;
  max-height: 28px;
  a picture {
    width: 100% !important;
    height: 28px;
  }
}
.sp-brikl {
  width: 100% !important;
  max-width: 220px !important;
  max-height: 84px;
  a picture {
    width: 100% !important;
    height: 84px;
  }
}
.sp-lmwn {
  width: 100% !important;
  max-width: 140px !important;
  a picture {
    width: 100% !important;
    height: auto;
  }
}
.sp-rainmaker {
  width: 100% !important;
  max-width: 60px !important;
  max-height: 60px;
  a picture {
    width: 100% !important;
    height: 60px;
  }
}
.sp-thairath {
  width: 100% !important;
  max-width: 155px !important;
  max-height: 58px;
  a picture {
    width: 100% !important;
    height: 58px;
  }
}
</style>
<style lang="scss" scoped>
.sponsor-vip-wrapper {
  width: fit-content;
  margin: auto;
  margin-bottom: 0;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-items: center;
  grid-column-gap: 32px;
  grid-row-gap: 20px;
  align-items: center;
  // HANDLE 3 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  @media screen and (max-width: 736px) {
    // & > div:last-child {
    .sp-ExxonMobil {
      order: 3;
      grid-column: 1 / 3;
    }
  }
  //////////////////////////////////////////////////
  @media screen and (min-width: 736px) {
    margin-bottom: 30px;
    grid-template-columns: repeat(2, auto);
  }
}
.sponsor-special-wrapper {
  width: 100%;
  max-width: 225px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  align-items: center;
  margin: auto;
  margin-top: 0;
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    width: 80%;
    grid-gap: 15px;
  }
  @media screen and (min-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, auto);
  }
}
.sponsor-gold-wrapper {
  width: 100%;
  max-width: 580px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, auto);
  grid-gap: 10px;
  align-items: center;
  margin: 20px auto;

  @media screen and (min-width: 375px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
}
.sponsor-silver-wrapper {
  width: 100%;
  max-width: 420px; // 560
  min-width: 220px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 15px auto 70px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(4, auto);

  // HANDLE 7 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  /* @media screen and (max-width: 737px) {
    grid-row-gap: 0px;
    & > div:last-child {
      grid-column: 1 / 3;
    }
  } */
  //////////////////////////////////////////////////
  @media screen and (max-width: 736px) {
    width: 70%;
    max-width: 300px;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 20px;
    & > div {
      height: 75px;
    }
  }
}
</style>
