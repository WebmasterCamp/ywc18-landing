<template>
  <SponsorPackage>
    <div>2000 บาท</div>
    <ul>
      <li v-for="(benefit, i) in benefits" :key="i">{{ benefit }}</li>
    </ul>
    <a-button type="primary" size="large">สนับสนุน YWC18</a-button>
  </SponsorPackage>
</template>

<script>
import styled from 'vue-styled-components'
import antDesignVueButton from '~/plugins/ant-design-vue-button'

const SponsorPackage = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
  transition: all 0.25s;
  :hover {
    transform: translateY(-4px);
  }
`

export default {
  props: {
    package: {
      type: String,
      default: 'vip'
    }
  },
  components: { SponsorPackage },
  computed: {
    benefits() {
      switch (this.package) {
        case 'vip':
          return ['1', '2', '3']
        case 'gold':
          return ['3', '2', '1']
        case 'silver':
          return ['1', '2', '3']
        default:
          return []
      }
    }
  },
  created() {
    antDesignVueButton()
  }
}
</script>

<style>
</style>
