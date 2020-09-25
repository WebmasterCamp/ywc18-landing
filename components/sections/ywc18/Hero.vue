<template>
  <section class="hero">
    <div class="container">
      <Picture
        fileName="ywc18/ywc18-logo-orange.svg"
        alt="YWC18 Logo"
        class="ywc-logo"
      />
      <Picture
        fileName="ywc18/new-normal"
        alt="Theme Logo"
        class="theme-logo"
      />
      <Button to="https://register.ywc18.ywc.in.th/" v-if="isRegOpen"
        >สมัครค่าย</Button
      >
      <SponsorBox />
    </div>
  </section>
</template>

<script>
import Picture from '~/components/Picture.vue'
import Button from '~/components/ywc18/Button.vue'
import { OPEN_REGISTRATION } from '~/utils/const'
import SponsorBox from '~/components/SponsorBox.vue'
export default {
  components: {
    Picture,
    SponsorBox,
    Button,
  },
  data: () => ({ isRegOpen: false }),
  mounted() {
    this.isRegOpen = new Date() > new Date(OPEN_REGISTRATION)
  },
}
</script>

<style lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
        180deg,
        rgba(6, 22, 37, 0.85) 38.54%,
        #061625 100%
      )
      no-repeat top center,
    url(/images/ywc18/bg/hero-bg.jpg) no-repeat center center;
  background-size: cover;
  padding: 0;

  .container {
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    @media screen and (min-width: 1921px) {
      padding-top: 300px;
    }
  }
}
.ywc-logo {
  margin-bottom: 1em;
  @media screen and (max-width: 425px) {
    width: 70% !important;
    margin: auto;
    margin-bottom: 1em;
    img {
      width: 100%;
    }
  }
  img {
    width: 243px;
    height: auto;
  }
}
.theme-logo {
  margin-bottom: 55px;
  img {
    width: 588px;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 450px !important;
    }
  }
}
.hero-paper {
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 1920px;
  max-width: unset !important;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
