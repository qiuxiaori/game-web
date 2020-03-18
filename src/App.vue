<template>
  <div id="app">
    <Layout>
      <Header>header</Header>
      <Layout class="body-container">
        <Body></Body>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  </div>
</template>
<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Body
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans','Josefin Sans',"Noto Serif SC",sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* margin: auto 0; */
  padding: 0;
  background-color: #d0f3f0;
}
</style>
