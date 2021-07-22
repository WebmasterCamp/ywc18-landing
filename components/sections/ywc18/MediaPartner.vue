<template>
  <section>
    <SectionName title="MEDIA PARTNER & PARTER" bgRight style="margin-bottom: 0;" />
    <div class="media-partner-wrapper">
      <SponsorCircle
        v-for="(partner, index) in media_partners"
        :key="index"
        :fileName="`sponsors/${partner.img}`"
        :link="partner.link"
        :alt="partner.alt"
        :class="partner.class"
        size="sm"
        :transparent="true"
      />
    </div>
    <NuxtLink to="/press" style="text-decoration: none;" v-if="false">
      <Button size="lg">ร่วมประชาสัมพันธ์</Button>
    </NuxtLink>
    <div style="margin-top:150px;"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
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
      media_partners: [
        {
          class: ['mp-content-shifu'],
          img: '4-1-content-shifu.svg',
          alt: 'Content Shifu',
          link: 'https://contentshifu.com/',
        },
        {
          class: ['mp-j-mat'],
          img: '4-2-J-MAT.svg',
          alt: 'J_MAT',
          link: 'https://www.facebook.com/SMARTJMAT/',
        },
        {
          class: ['mp-toffy'],
          img: '4-3-toffy.svg',
          alt: 'ท็อฟฟี่เป็นตุ๊ดซ่อมคอม',
          link: 'https://www.facebook.com/toffieisitsupport/',
        },
        {
          class: ['mp-songsue'],
          img: '4-4-songsue.svg',
          alt: 'Songsue',
          link: 'https://www.songsue.co/',
        },
        {
          class: ['mp-grappik'],
          img: '4-5-Grappik.svg',
          alt: 'Grappik',
          link: 'https://www.grappik.com/',
        },
        {
          class: ['mp-Pantip'],
          img: '3-2-Pantip.svg',
          alt: 'Pantip',
          link: 'https://www.pantip.com',
        },
        {
          class: ['mp-dek-d'],
          img: '3-3-Dek-D.svg',
          alt: 'Dek-D',
          link: 'https://www.dek-d.com/',
        },
        {
          class: ['mp-meestory'],
          img: '4-8-meestory.svg',
          alt: 'Mee Story',
          link: 'https://www.facebook.com/2bearstalk/',
        },
        {
            class: ['sp-cpall'],
            img: '3-9-cpall.svg',
            alt: 'CPALL',
            link: 'https://www.cpall.co.th/',
          },
          {
            class: ['sp-pandt'],
            img: '3-4-P-and-T.svg',
            alt: 'P&T Hosting',
            link: 'https://www.pathosting.co.th',
          },
          {
            class: ['sp-shippop'],
            img: '3-10-shippop.svg',
            alt: 'Shippop',
            link: 'https://www.shippop.com/',
          },
      ],
    }
  },
}
</script>

<style lang="scss">
.mp-content-shifu,
.mp-songsue,
.mp-j-mat {
  width: 90px !important;
  height: 90px;
  max-height: 90px;
  a picture {
    width: 90px !important;
    height: 90px;
  }
}
.mp-songsue {
  width: 70px !important;
  height: 70px;
  max-height: 70px;
  a picture {
    width: 70px !important;
    height: 70px;
  }
}
.mp-grappik {
  width: 100px !important;
  height: 100px;
  max-height: 100px;
  a picture {
    width: 100px !important;
    height: 100px;
  }
}
.media-partner-wrapper {
  width: 100%;
  max-width: 660px; // 550
  min-width: 220px;
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  margin: 15px auto 70px;
  flex-wrap: wrap;

  //////////////////////////////////////////////////
  @media screen and (max-width: 736px) {
    display: grid;
    width: 70%;
    max-width: 300px;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    & > div:last-child {
      grid-column: 1 / 3;
    }
  }
}
</style>
