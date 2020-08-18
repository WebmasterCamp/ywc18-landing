<template>
  <section class="ywc18-hero">
    <div class="container">
      <div class="logo__wrapper">
        <Picture
          fileName="ywc18/ywc18-logo.svg"
          alt="18th Young Webmaster Camp"
          class="ywc18-logo"
        />
      </div>
      <p class="coming-soon">COMING SOON</p>

      <div class="slogan">
        <img src="images/ywc18/arrow-left.svg" class="arrow-left" alt />
        <span>For all webmasters</span>
        <img src="images/ywc18/arrow-right.svg" class="arrow-right" alt />
        <p>Young Webmaster Camp is on its way</p>
      </div>

      <a class="what-is-ywc" href="https://ywc17.ywc.in.th">
        YWC
        <span class="secondary-text">คืออะไร ?</span>
      </a>

      <div class="copyright">
        <p class="copyright__firstline">
          copyright 2003 - 2020. Young Webmaster Camp.
        </p>
        <p>in associate with thai webmaster association. all right reserved.</p>
      </div>
    </div>
    <div class="social-icon__wrapper">
      <a
        href="https://fb.com/ywcth"
        alt="Facebook YWC"
        target="_blank"
        class="social-icon__facebook"
      >
      </a>
      <a
        href="https://twitter.com/ywcth"
        alt="Twitter YWC"
        target="_blank"
        class="social-icon__twitter"
      >
      </a>
      <a
        href="https://instagram.com/ywcth"
        alt="Instagram YWC"
        target="_blank"
        class="social-icon__instagram"
      >
      </a>
    </div>
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
    url(/images/ywc18/bg/hero.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, bottom right, center center;
  background-size: 60%, 45%, cover;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;

  .logo__wrapper {
    padding-right: 28px;
    .ywc18-logo {
      width: 530px;
      margin: 0 auto;
    }
  }

  .social-icon {
    &__wrapper {
      position: absolute;
      top: 66px;
      right: 92px;
      display: grid;
      grid-template-columns: 60px 60px 60px;
      grid-template-rows: 60px;
      column-gap: 10px;
    }

    &__facebook {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url(~assets/images/ywc18/icon/ywc_facebook.svg),
        url(~assets/images/ywc18/icon/ywc_facebook_hover.svg);
      background-position: center center, center center;
      background-repeat: no-repeat, no-repeat;
      background-size: auto, 0;
      &:hover {
        background: url(~assets/images/ywc18/icon/ywc_facebook_hover.svg);
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    &__twitter {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url(~assets/images/ywc18/icon/ywc_twitter.svg),
        url(~assets/images/ywc18/icon/ywc_twitter_hover.svg);
      background-position: center center, center center;
      background-repeat: no-repeat, no-repeat;
      background-size: auto, 0;
      &:hover {
        background: url(~assets/images/ywc18/icon/ywc_twitter_hover.svg);
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
    &__instagram {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url(~assets/images/ywc18/icon/ywc_instagram.svg),
        url(~assets/images/ywc18/icon/ywc_instagram_hover.svg);
      background-position: center center, center center;
      background-repeat: no-repeat, no-repeat;
      background-size: auto, 0;
      &:hover {
        background: url(~assets/images/ywc18/icon/ywc_instagram_hover.svg);
        background-repeat: no-repeat;
        background-position: center center;
      }
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
    margin-bottom: 40px;
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
    margin-bottom: 32px;
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
    width: 260px;
    height: 74px;
    background: url(/images/ywc18/button/bg-cta.svg),
      url(/images/ywc18/button/bg-dots.png),
      url(/images/ywc18/button/bg-cta_hover.svg);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top left, bottom right, center center;
    background-size: 260px, 260px, 0;
    font-weight: 500;
    font-size: 26px;
    line-height: 62px;
    letter-spacing: 0.085em;
    color: #f2f6fc;
    margin: 0 auto 24px;
    padding-right: 12px;
    text-decoration: none;

    &:hover {
      background: url(/images/ywc18/button/bg-cta_hover.svg),
        url(/images/ywc18/button/bg-dots.png);
      background-repeat: no-repeat, no-repeat;
      background-position: top left, bottom right;
      background-size: 260px, 260px;
    }

    span {
      font-family: Anuphan;
      font-weight: 500;
    }
  }

  // Tablet
  @media screen and (max-width: 1024px) {
    .ywc18-logo {
      img {
        max-width: 50%;
      }
    }
    .copyright {
      margin-bottom: 48px;
    }
    .social-icon__wrapper {
      top: 50px;
      right: 60px;
    }
  }

  // Mobile screen
  @media screen and (max-width: 428px) {
    background: url(/images/ywc18/bg/paper1-sm.png),
      url(/images/ywc18/bg/paper2-sm.png), url(/images/ywc18/bg/hero.png);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top left, bottom right, center center;
    background-size: 100%, 100%, cover;
    padding: 115px 0;
    height: auto;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .logo__wrapper {
      padding: 8px 44px 25px;
      .ywc18-logo {
        img {
          max-width: 100%;
        }
      }
    }
    .slogan {
      margin-bottom: 24px;
      p,
      span {
        font-size: 17px;
      }
      p {
        width: 235px;
        margin: 0 auto;
      }
    }
    .coming-soon {
      margin: 0 0 22px 0;
    }

    .copyright {
      p {
        line-height: 18px;
      }

      &__firstline {
        width: 240px;
        margin: 0 auto !important;
      }
    }
    .what-is-ywc {
      transform: scale(0.8);
    }

    .social-icon__wrapper {
      transform: scale(0.55);
      top: 36px;
      right: 0;
    }
  }
}
</style>
