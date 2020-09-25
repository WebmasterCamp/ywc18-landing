<template>
  <div class="logos-box">
    <div class="logos">
      <SponsorBadge
        fileName="sponsors/1-2-TWA-long.svg"
        alt="Thai Webmaster Association"
        link="https://www.webmaster.or.th/"
        class="horizontal"
      />
      <SponsorBadge
        fileName="sponsors/1-3-SCB-Academy.svg"
        alt="SCB Academy"
        link="#"
        class="horizontal"
        style="height: 60px;"
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
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  max-width: 320px;
  grid-row-gap: 2px;
  grid-column-gap: 40px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    max-width: 500px;
  }
}
</style>
