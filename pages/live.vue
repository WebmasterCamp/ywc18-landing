<template>
  <ThemeProvider name="">
    <section class="container">
      <SectionTitle title="ถ่ายทอดสด" />
      <InfoContainer>
        <!-- <div class="live-detail">
          <p><b>Session :</b> Todo add session title</p>
        </div> -->
        <div class="facebook-responsive">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fywcth%2Fywcth%live_videos%2F&show_text=false&t=0"
            width="560"
            height="315"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </InfoContainer>
      <Footer />
    </section>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
export default {
  layout: 'secondary',
  head() {
    return {
      title: `ถ่ายทอดสด - 18th Young Webmaster Camp`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `ถ่ายทอดสด - 18th Young Webmaster Camp`,
        },
        { hid: 'og:description', property: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' }, // TODO: Add description
      ],
    }
  },
  components: {
    ThemeProvider,
    SectionTitle: () => import('~/components/ywc18/SectionHead.vue'),
    InfoContainer: () => import('~/components/InfoContainer.vue'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
  },
}
</script>

<style lang="scss">
.facebook-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.facebook-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.live-detail {
  p {
    font-family: CmPrasanmit, system-ui, -apple-system, sans-sreif;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
