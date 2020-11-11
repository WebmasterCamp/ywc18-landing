<template>
  <div class="logos-box">
    <div class="logos">
      <SponsorBadge
        fileName="sponsors/1-2-TWA.svg"
        alt="Thai Webmaster Association"
        link="https://www.webmaster.or.th/"
      />
      <SponsorBadge
        fileName="sponsors/1-3-depa.svg"
        alt="depa"
        link="https://www.depa.or.th/"
        class="depa"
      />
      <SponsorBadge
        fileName="sponsors/1-3-SCB-Academy.svg"
        alt="SCB Academy"
        class="scb"
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
  .scb {
    width: 150px;
    height: 60px;
    margin-top: 6px;
    align-self: start;
    @media screen and (min-width: 768px) {
      width: 200px;
      margin-top: 4px;
    }
  }
  .depa {
    width: 70px;
    @media screen and (min-width: 768px) {
      width: 90px;
    }
  }
}
.logos {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
  max-width: 320px;
  grid-row-gap: 2px;
  grid-column-gap: 20px;
  margin: 0 auto;
  height: 80px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
    max-width: 450px;
    grid-column-gap: 40px;
  }
}
</style>
