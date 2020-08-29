<template>
  <SponsorPackage>
    <div>
      <Badge :type="type">{{ type }}</Badge>
      <h1 class="package-price">
        {{ price }}
        <span>บาท</span>
      </h1>
      <ul class="benefit-list">
        <li v-for="(benefit, i) in benefits" :key="i">{{ benefit }}</li>
      </ul>
    </div>
    <div class="sponsor-button__wrapper">
      <a-button type="primary" size="large" @click="viewResponseFile">สนับสนุน YWC18</a-button>
    </div>
  </SponsorPackage>
</template>

<script>
import styled from 'vue-styled-components'
import { SPONSOT_PACKAGES } from '../../utils/const'
import antDesignVueButton from '~/plugins/ant-design-vue-button'

const SponsorPackage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 430px;
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px 14px;
  box-sizing: border-box;
  transition: all 0.25s;
  margin-bottom: 1.5rem;
  :hover {
    transform: translateY(-4px);
  }
`

const Badge = styled('div', { type: String })`
  width: 175px;
  height: 51px;
  background: url(${props =>
    require(`../../assets/images/ywc18/sponsor-${props.type}-badge.svg`)});
  color: white;
  font-family: 'Barlow Semi Condensed';
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  text-transform: uppercase;
  text-align: center;
  padding-left: 20px;
  box-sizing: border-box;
  margin: 0 auto 23px;
`

export default {
  components: { SponsorPackage, Badge },
  props: {
    type: {
      type: String,
      default: 'vip'
    }
  },
  computed: {
    benefits() {
      if (this.type && SPONSOT_PACKAGES[this.type]) {
        return SPONSOT_PACKAGES[this.type].benefits
      }
      return []
    },
    price() {
      if (this.type && SPONSOT_PACKAGES[this.type]) {
        return SPONSOT_PACKAGES[this.type].price
      }
      return ''
    }
  },
  created() {
    antDesignVueButton()
  },
  methods: {
    viewResponseFile() {
      window.open(window.location.host + '/archive/ywc18-response-proposal.pdf')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/global.scss';
.benefit-list {
  list-style: none;
  padding-left: 1.75rem;
  li {
    font-family: Anuphan;
    font-weight: 500;
    font-size: 16px;
    color: #4f4f4f;
    position: relative;
    line-height: 200%;
    &::before {
      content: '';
      display: block;
      background: url('../../assets/images/ywc18/icon/icon_check.svg');
      background-size: cover;
      width: 18px;
      height: 14px;
      position: absolute;
      top: 10px;
      left: -1.75rem;
    }
  }
}
.package-price {
  font-family: 'Barlow Semi Condensed', sans-serif !important;
  color: $primary-color;
  font-weight: bold;
  font-size: 55px;
  line-height: 100%;
  text-align: center;
  margin: 23px 0;
  span {
    font-family: Anuphan;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #4f4f4f;
    margin-left: 8px;
  }
}
.sponsor-button__wrapper {
  display: flex;
  justify-content: center;
}
</style>
