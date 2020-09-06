<template>
  <section class="container">
    <SectionTitle title="FOLLOW YWC" subtitle="ติดตามข่าวสารของเรา" />
    <Grid>
      <GridCol>
        <SocialBtn
          href="https://www.facebook.com/ywcth"
          target="_blank"
          title="Facebook"
        >
          <SocialIcon fileName="ywc18/social-facebook" alt="Facebook" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn href="https://m.me/ywcth" target="_blank" title="Messenger">
          <SocialIcon fileName="ywc18/social-messenger" alt="Messenger" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn
          href="https://instagram.com/ywcth"
          target="_blank"
          title="Instagram"
        >
          <SocialIcon fileName="ywc18/social-instagram" alt="Instagram" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn
          href="https://twitter.com/ywcth"
          target="_blank"
          title="Twitter"
        >
          <SocialIcon fileName="ywc18/social-twitter" alt="Twitter" />
        </SocialBtn>
      </GridCol>
    </Grid>
  </section>
</template>
<script>
import styled from 'vue-styled-components'
import SectionTitle from '~/components/ywc18/SectionTitle.vue'
import Picture from '~/components/Picture.vue'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  max-width: 416px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-gap: 32px 32px;
    grid-template-columns: auto auto;
    max-width: 192px;
  }
`
const GridCol = styled.div`
  display: inline-grid;
  margin: 0 auto;
`
const SocialBtn = styled.a`
  display: flex;
  color: rgba(242, 246, 252, 0.8);
  border: 4px solid rgba(242, 246, 252, 0.8);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  user-select: none;
  transition: all 0.15s;

  &:hover {
    color: black;
    background: rgba(242, 246, 252, 0.8);
  }
  &:hover img {
    filter: saturate(0%) brightness(0%) contrast(100%);
  }
`
const SocialIcon = styled(Picture)`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  & img {
    user-drag: none;
    vertical-align: middle;
    transform: scale(0.85);
  }
`

export default {
  components: {
    Grid,
    GridCol,
    SectionTitle,
    SocialBtn,
    SocialIcon,
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
section {
  margin-top: 70px;
}
</style>
