<template>
  <div class="sponsor__group">
    <LogoBadge
      v-for="(sponsor, index) in sponsors"
      :key="index"
      :fileName="`ywc18/sponsors/${sponsor.img}`"
      :link="sponsor.link"
      :alt="sponsor.alt"
      size="lg"
    />
  </div>
</template>

<script>
import LogoBadge from '~/components/ywc18/LogoBadge.vue'
export default {
  components: {
    LogoBadge,
  },
  data() {
    return {
      sponsors: [
        {
          img: 'TWA.svg',
          alt: 'Thai Webmaster Association',
          link: 'https://www.webmaster.or.th',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.sponsor__group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 60px auto;

  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
}
</style>
