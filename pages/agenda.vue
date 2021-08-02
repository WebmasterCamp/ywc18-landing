<template>
  <ThemeProvider>
    <InfoContainer class="agenda-info">
      <h2>
        กำหนดการโครงการอบรมเชิงปฏิบัติการ<br class="mdBreak" />
        Young Webmaster Camp ครั้งที่ 18
      </h2>
      <h3>
        วันที่ 12 - 15 สิงหาคม 2564
      </h3>
      <AgendaTable
        v-for="{ name, items } in AGENDA"
        :key="name"
        :name="name"
        :items="items"
      />
    </InfoContainer>
    <SponsorBox />
    <Footer />
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import InfoContainer from '~/components/InfoContainer.vue'
import AgendaTable from '~/components/AgendaTable.vue'
import { AGENDA } from '~/utils/const'

export default {
  layout: 'secondary',
  head() {
    return {
      title: `กำหนดการโครงการ - 18th Young Webmaster Camp`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `กำหนดการโครงการ - 18th Young Webmaster Camp`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'กำหนดการโครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 18 วันที่ 12 - 15 สิงหาคม 2564',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'กำหนดการโครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 18 วันที่ 12 - 15 สิงหาคม 2564',
        },
      ],
    }
  },
  components: {
    ThemeProvider,
    InfoContainer,
    AgendaTable,
    SponsorBox: () => import('~/components/SponsorBox'),
    Footer: () => import('~/components/sections/ywc18/Footer.vue'),
  },
  data() {
    return {
      AGENDA,
    }
  },

  // middleware({ redirect }) {
  //   return redirect('/')
  // },
}
</script>
<style lang="scss">
.secondary.agenda {
  .container {
    max-width: 1056px;
  }
  .ywc-logo {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 40px;
  }
  .section-heading {
    text-align: center;
    user-select: none;
  }
  .agenda-info {
    font-size: 18px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    h3 {
      font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
      margin: 0;
      margin-top: 25px;
      margin-bottom: 25px;
      font-size: 20px;
      font-weight: 600;
    }
    h2 {
      font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
      line-height: 1.3;
      font-size: 24px;
    }
    h2:first-of-type,
    h3:first-of-type {
      margin-top: 0px;
      text-align: center;
    }
    ol {
      padding-left: 20px;
    }
  }

  .mdBreak {
    display: none;
    @media (max-width: 874px) {
      display: block;
    }
  }

  @media print {
    .ywc-logo {
      filter: saturate(0%) brightness(0%) contrast(100%);
      margin-bottom: 16px;
    }
    .agenda-info {
      box-shadow: none;
      margin: 0;
      padding: 0;
    }
    .ant-table {
      font-size: 16px;
    }
  }
}
</style>
