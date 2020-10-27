<template>
  <section>
    <SectionName title="MEDIA PARTNER" bgRight style="margin-bottom: 0;" />
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
    <NuxtLink to="/press" style="text-decoration: none;">
      <Button size="lg">ร่วมประชาสัมพันธ์</Button>
    </NuxtLink>
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
          class: ['mp-toffy'],
          img: '4-3-toffy.svg',
          alt: 'ท็อฟฟี่เป็นตุ๊ดซ่อมคอม',
          link: 'https://www.facebook.com/toffieisitsupport/',
        },
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
      ],
    }
  },
}
</script>

<style lang="scss">
.mp-content-shifu {
  width: 90px !important;
  height: 90px;
  max-height: 90px;
  a picture {
    width: 90px !important;
    height: 90px;
  }
}
.mp-j-mat {
  width: 90px !important;
  height: 90px;
  max-height: 90px;
  a picture {
    width: 90px !important;
    height: 90px;
  }
}
.media-partner-wrapper {
  width: 100%;
  max-width: 380px;
  min-width: 220px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 15px auto 70px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(3, auto);

  //////////////////////////////////////////////////
  @media screen and (max-width: 736px) {
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
