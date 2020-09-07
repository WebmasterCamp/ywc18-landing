<template>
  <section>
    <SectionName title="SPONSOR" subTitle="ผู้สนับสนุนค่าย YWC18" bgLeft />
    <SponsorGroup style="margin-top: 70px;">
      <LogoBadge
        v-for="(sponsor, index) in sponsors.vip"
        :key="index"
        :fileName="`ywc18/sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        size="lg"
      />
    </SponsorGroup>
    <SponsorGroup v-if="sponsors.gold.length > 0">
      <LogoBadge
        v-for="(sponsor, index) in sponsors.gold"
        :key="index"
        :fileName="`ywc18/sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        size="md"
      />
    </SponsorGroup>
    <SponsorGroup v-if="sponsors.gold.length > 0">
      <LogoBadge
        v-for="(sponsor, index) in sponsors.silver"
        :key="index"
        :fileName="`ywc18/sponsors/${sponsor.img}`"
        :link="sponsor.link"
        :alt="sponsor.alt"
        size="sm"
      />
    </SponsorGroup>
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
    margin-top: 100px;
  }
}
</style>

<script>
import styled from 'vue-styled-components'
import Button from '~/components/ywc18/Button.vue'
import SectionName from '~/components/ywc18/SectionName.vue'
import LogoBadge from '~/components/ywc18/LogoBadge.vue'

const SponsorGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 60px auto;

  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`

export default {
  components: {
    Button,
    SectionName,
    LogoBadge,
    SponsorGroup,
  },
  data() {
    return {
      sponsors: {
        vip: [
          {
            img: 'TWA.svg',
            alt: 'Thai Webmaster Association',
            link: 'https://www.webmaster.or.th',
          },
        ],
        gold: [],
        silver: [],
      },
    }
  },
}
</script>
