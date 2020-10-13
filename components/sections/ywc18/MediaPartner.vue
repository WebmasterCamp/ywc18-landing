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
    <NuxtLink to="#" style="text-decoration: none;" v-if="false">
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
          class: ['mp-content-shifu'],
          img: '4-1-content-shifu.svg',
          alt: 'Content Shifu',
          link: 'https://contentshifu.com/',
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
.media-partner-wrapper {
  width: 100%;
  max-width: 420px;
  min-width: 220px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 15px auto 70px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(1, auto);

  // HANDLE 7 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  // @media screen and (min-width: 737px) {
  //   grid-row-gap: 0px;
  //   & > div:last-child {
  //     grid-column: 2 / 3;
  //   }
  // }
  //////////////////////////////////////////////////
  @media screen and (max-width: 736px) {
    width: 70%;
    max-width: 300px;
    grid-template-columns: repeat(1, auto);
    grid-column-gap: 20px;
    & > div {
      height: 75px;
    }
  }
}
</style>
