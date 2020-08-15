<template>
  <section class="ywc18-hero">
    <div class="container">
      <div class="logo__wrapper">
        <Picture
          fileName="ywc18/ywc18-logo"
          alt="18th Young Webmaster Camp"
          class="ywc18-logo"
        />
      </div>
      <p class="coming-soon">COMING SOON</p>

      <div class="slogan">
        <img src="images/ywc18/arrow-left.svg" class="arrow-left" alt="" />
        <span>For all webmasters</span>
        <img src="images/ywc18/arrow-right.svg" class="arrow-right" alt="" />
        <p>Young Webmaster Camp is on its way</p>
      </div>

      <div class="what-is-ywc">
        YWC <span class="secondary-text">คืออะไร</span>
      </div>

      <div class="copyright">
        <p>copyright 2003 - 2020. Young Webmaster Camp.</p>
        <p>in associate with thai webmaster association. all right reserved.</p>
      </div>
    </div>
    <div class="social-icon__wrapper"></div>
  </section>
</template>

<script>
import Picture from '~/components/Picture.vue'
export default {
  components: { Picture },
}
</script>

<style lang="scss">
.ywc18-hero {
  background: url(/images/ywc18/bg/paper1.png), url(/images/ywc18/bg/paper2.png),
    url(/images/ywc18/bg/hero.png);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, bottom right, center center;
  background-size: 400px, 400px, cover;
  width: 100%;
  height: 100vh;
  padding: 0;

  .logo__wrapper {
    padding-right: 28px;
    .ywc18-logo {
      width: 530px;
      margin: 0 auto;
    }
  }

  .slogan,
  .copyright,
  .coming-soon,
  .what-is-ywc {
    font-family: 'Barlow';
    text-transform: uppercase;
  }
  .copyright {
    font-weight: 400;
    p {
      margin: 0;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.3em;
      color: #f2f6fc;
    }
  }
  .what-is-ywc,
  .slogan {
    font-weight: 500;
  }

  .slogan {
    margin-bottom: 44px;
    span,
    p {
      font-size: 22px;
      font-style: italic;
      line-height: 27px;
      letter-spacing: 0.085em;
      margin: 0;
      color: #ff5d29;
    }
    .arrow-left {
      margin-right: 6px;
    }
    .arrow-right {
      margin-left: 6px;
    }
  }
  .coming-soon {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.5em;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .what-is-ywc {
  }
}
</style>
