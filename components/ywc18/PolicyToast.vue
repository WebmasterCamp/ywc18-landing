<template>
  <transition name="fade" mode="out-in">
    <section
      class="container policy-toast"
      :class="{ showToast: !isAccepted && !isInit }"
    >
      <div class="policy-detail">
        เว็บไซต์ของเรามีการเก็บ Cookies เพื่อการทำ Analytics
        โปรดศึกษาและยอมรับนโยบายข้อมูลส่วนบุคคล
        <NuxtLink to="/policy" class="policy-detail__link">
          (อ่านข้อมูลเพิ่มเติม)</NuxtLink
        >
      </div>
      <a-button type="primary" @click="acceptPolicy">ยอมรับ</a-button>
    </section>
  </transition>
</template>

<script>
import antDesignVueButton from '~/plugins/ant-design-vue-button'
export default {
  created() {
    antDesignVueButton()
    this.isInit = false
  },
  mounted() {
    const isAccepted = window.localStorage.getItem('accepted_policy')
    if (isAccepted) {
      this.isAccepted = true
    }
  },
  methods: {
    acceptPolicy() {
      this.isAccepted = true
      window.localStorage.setItem('accepted_policy', '1')
    },
  },
  data: () => ({ isAccepted: false, isInit: true }),
}
</script>

<style lang="scss">
@import '~assets/css/global.scss';
.policy-toast {
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  bottom: 15px;
  left: 50%;
  width: 768px;
  max-width: calc(100vw - 30px);
  margin-left: -384px;
  background: white;
  z-index: 1010;
  border-radius: 4px;
  color: #333;
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  padding: 8px 8px;
  font-family: Barlow, Anuphan, system-ui, -apple-system, sans-sreif;
  font-weight: 500;
  box-shadow: 0 0 3px #eee;
  display: none;
  @media screen and (max-width: 768px) {
    margin-left: calc(-50% + 15px);
  }
  .policy-detail {
    margin-right: 15px;
    padding-left: 8px;
    &__link {
      text-decoration: none;
      color: $primary-color;
    }
  }
  &.showToast {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
