<template>
  <div id="app">
      <layout class='headerLayout'>
        <Header>header</Header>
      </layout>
    <router-view/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
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

</style>
