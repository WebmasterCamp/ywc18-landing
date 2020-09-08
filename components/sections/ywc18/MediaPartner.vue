<template>
  <section>
    <SectionName title="MEDIA PARTNER" bgRight />
    <Row>
      <LogoBadge
        v-for="(media_partner, index) in media_partners"
        :key="index"
        :fileName="`ywc18/media-partners/${media_partner.img}`"
        :link="media_partner.link"
        :alt="media_partner.alt"
      />
    </Row>
    <NuxtLink to="#" style="text-decoration: none;">
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
import styled from 'vue-styled-components'
import Button from '~/components/ywc18/Button.vue'
import SectionName from '~/components/ywc18/SectionName.vue'
import LogoBadge from '~/components/ywc18/LogoBadge.vue'

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 70px auto;

  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }
`

export default {
  components: {
    Button,
    SectionName,
    LogoBadge,
    Row,
  },
  data() {
    return {
      media_partners: [
        {
          img: 'ExxonMobil.svg',
          alt: 'ExxonMobil',
          link: 'https://corporate.exxonmobil.com'
        },
        {
          img: 'TWA.svg',
          alt: 'Thai Webmaster Association',
          link: 'https://www.webmaster.or.th'
        },
        {
          img: 'IT-KMITL.svg',
          alt: 'IT KMITL',
          link: 'https://www.it.kmitl.ac.th'
        }
      ]
    }
  }
}
</script>
