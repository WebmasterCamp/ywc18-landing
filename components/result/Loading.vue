<template>
  <CenterContainer>
    <div>
      <a-spin>
        <a-icon
          slot="indicator"
          type="loading"
          style="font-size: 128px; color: #FF5D29; width:unset;height:unset;"
          spin
        />
      </a-spin>
      <br />
      <h1>โปรดรอสักครู่</h1>
    </div>
  </CenterContainer>
</template>
<script>
import CenterContainer from '~/components/CenterContainer.vue'

export default {
  components: { CenterContainer },
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin-top: 2em;
}
</style>
