<template>
  <ButtonLink v-if="link">
    <slot />
  </ButtonLink>
  <Button v-else @click="$emit('click')">
    <slot />
  </Button>
</template>
<script>
import styled from 'vue-styled-components'
const ButtonStyle = `
display: inline-block;
width: fit-content;
background: #FF5D29;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
border-radius: 100px;
border: none;
outline: none;
padding: .5em 1em;
transition: all 0.3s;

cursor: pointer;
user-select: none;

font-family: 'Anuphan', system-ui, -apple-system, sans-sreif;
font-weight: 600;
font-size: 20px;
text-align: center;
color: white;

&:hover {
  background: #E65525;
}
&:active {
  background: #E65525;
}
&:disabled {
  background: whitesmoke;
  color: gray;
  cursor: not-allowed;
}
`
const Button = styled(`button`)`
  ${ButtonStyle}
`
const ButtonLink = styled(`a`)`
  ${ButtonStyle}
  text-decoration: none;
`
export default {
  components: {
    Button,
    ButtonLink,
  },
  props: {
    link: { type: Boolean, default: false },
  },
}
</script>
