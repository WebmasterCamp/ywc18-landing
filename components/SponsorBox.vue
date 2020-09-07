<template>
  <div class="logos-box">
    <div class="logos">
      <SponsorBadge
        fileName="sponsors/1-2-TWA.svg"
        alt="Thai Webmaster Association"
        link="https://www.webmaster.or.th/"
      />
    </div>
  </div>
</template>
<script>
import SponsorBadge from '~/components/SponsorBadge.vue'
export default {
  components: {
    SponsorBadge,
  },
}
</script>

<style scoped lang="scss">
.logos-box {
  padding-bottom: 30px;
}
.logos {
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-items: center;
  max-width: 320px;
  grid-row-gap: 2px;
  grid-column-gap: 1.5rem;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, auto);
    max-width: 500px;
  }
}
</style>
