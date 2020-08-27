<template>
  <div class="secondary" :class="$route.name">
    <section class="container" v-show="!hideLogo">
      <div class="ywc-logo__wrapper">
        <nuxt-link
          to="/"
          class="ywc-logo"
          title="ไปยังหน้าแรกของ 18th Young Webmaster Camp"
          ><Picture
            fileName="ywc18/ywc18-logo-orange.svg"
            alt="18th Young Webmaster Camp"
        /></nuxt-link>
        <div class="ywc-logo">
          <Picture
            fileName="ywc18/ywc18-theme-logo-orange.svg"
            alt="18th Young Webmaster Camp"
          />
        </div>
      </div>
    </section>
    <nuxt />
  </div>
</template>
<script>
import Picture from '~/components/Picture.vue'
export default {
  components: {
    Picture,
  },
  head() {
    return {
      meta: [
        {
          name: 'og:url',
          content: `https://ywc18.ywc.in.th${this.$route.path}`,
        },
      ],
    }
  },
  beforeCreate() {
    if (process.client) {
      document.getElementsByTagName('body')[0].setAttribute(
        'style',
        `background: #401b19;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(#061625 0%, #061625 100%);
    background-size: cover;
    background-attachment: fixed;`
      )
    }
  },
  computed: {
    hideLogo() {
      return ['/announcement'].includes(this.$route.path)
    },
  },
}
</script>
<style lang="scss">
html {
  min-height: 100%;
}
div.secondary {
  margin-top: 57px;
  section {
    margin-top: 40px;
  }
  h1,
  h2,
  h3 {
    font-family: 'CmPrasanmit';
  }

  .ywc-logo__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    text-align: left;
  }
  .ywc-logo {
    display: block;
    width: 270px;
    height: auto;
    img {
      @media screen and (max-width: 768px) {
        width: 126px;
        height: 43.5px;
      }
    }
  }
  span.headline {
    line-height: 0;
  }
  h5.subhead {
    letter-spacing: 0.2em;
    line-height: 1.1;
    text-indent: -0.3em;
    font-family: 'CmPrasanmit';
    font-weight: normal;
    font-size: 24px;
    color: #6c6c6c;
    user-select: none;
    margin: 0;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
