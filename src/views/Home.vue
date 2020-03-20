<template>
  <div id="app">
      <layout class='main'>
        <Bread class='breadLayout'></Bread>
        <!-- <Body></Body> -->
        <div class='carouselLayout'>
          <Carousel class='carouselMain'></Carousel>
          <Ad1 class='adMain'></Ad1>
        </div>
        <div class='articleLayout'>
          <div class='articleContainer'>
            <Article class='articleMain'></Article>
            <Article class='articleMain'></Article>
            <Article class='articleMain'></Article>
          </div>
        </div>
        
        <a href=""  class='asmr'>ASMR   <a-icon type="right" /></a>
        <div class='asmrLayout'>
          <div class='asmrContainer'>
            <Asmr class='asmrMain'></Asmr>
            <Asmr class='asmrMain'></Asmr>
            <Asmr class='asmrMain'></Asmr>
            <Asmr class='asmrMain'></Asmr>
            <Asmr class='asmrMain'></Asmr>
          </div>
        </div>
      </layout>
      <!-- <Layout class="body-container">
      </Layout> -->
      <layout class='footerLayout'>
        <Footer class='footerMain'>footer</Footer>
      </layout>
  </div>
</template>
<script>

import Footer from '../components/Footer.vue'
// import Body from './components/Body.vue'
import Bread from '../components/Bread.vue'
import Carousel from '../components/Carousel.vue'
import Ad1 from '../components/Ad1.vue'
import Article from '../components/Article.vue'
import Asmr from '../components/Asmr.vue'

export default {
  name: 'App',
  components: {
    Footer,
    // Body,
    Bread,
    Carousel,
    Ad1,
    Article,
    Asmr
  }
}
</script>

<style>
#app {
  font-family: Open Sans,Helvetica Neue,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;;
  /* text-align: center; */
  margin: 0;
  padding: 0;
  background-color: #f7f7f8;
}
.breadLayout {
  width: 100%;
  background-color: #f7f7f8;
  padding: 0 16%;
  height: 60px;
  margin: auto 0;
  text-align: center;
  position: absolute;
  top: 60px;
  line-height: 60px;
}
.headerLayout {
  width: 100%;
  height: 60px;
  padding-top: 11px;
  line-height: 60px;
  position: absolute;
  margin: auto 0;
  text-align: center;
}
.carouselLayout {
  top: 120px;
  padding: 0 18%;
  width: 100%;
  position: absolute;
  background-color: #f7f7f8;
}

.carouselMain {
  padding: 5px 8px;
  width: 66%;
  float: left;
}
.adMain {
  width: 33%;
  height: 430px;
  padding: 5px 8px;
  border-radius: 5px;
}

.articleLayout {
  top: 550px;
  margin: auto 0;
  text-align: center;
  padding: 0 18%;
  width: 100%;
  position: absolute;
  background-color: #f7f7f8;
}
.articleContainer {
  width: 100%;
  margin: auto 0;
  text-align: center;
  padding: 1px;
}
.articleMain {
  margin: 5px 1% 40px 1%;
  float: left;
}
.asmrLayout {
  top: 945px;
  padding: 0 18%;
  width: 100%;
  position: absolute;
  background-color: #ffffff;
}

.asmr {
  padding: 5px 21%;
  top: 890px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: black;
  width: 100%;
  line-height: 40px;
  position: absolute;
}

.asmrContainer {
  margin: auto 0;
  text-align: center;
  width: 100%;
  padding: 0 1%;
}
.asmrMain {
  margin: 5px 2.5% 40px 2.5%;
  float: left;
}

.footerLayout {
  position: absolute;
  top: 1500px;
  width: 100%;
  background-color: #f7f7f8;
  height: 455px;
  padding: 3% 18%;
}
.footerMain {
  padding: 1px 2px;
}
</style>
