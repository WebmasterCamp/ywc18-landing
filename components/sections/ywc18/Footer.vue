<template>
  <div class="footer">
    <p>
      Copyright 2003 - 2020. Young Webmaster Camp,
      <br />in associate with Thai Webmaster Association. All right reserved.
    </p>
    <div class="outlink">
      <nuxt-link to="/policy">Privacy Policy</nuxt-link> |
      <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 2.5rem;
  p {
    font-family: Barlow, system-ui, -apple-system, sans-sreif;
    font-style: normal;
    font-weight: normal;
    margin: auto;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
    @media screen and (max-width: 425px) {
      font-size: 12px;
      max-width: 350px;
    }
  }
}
.outlink {
  margin-top: 0.75em;
  a {
    font-size: 14px;
    font-family: Barlow, system-ui, -apple-system, sans-sreif;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
