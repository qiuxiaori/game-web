<template>
  <div class="about">
    <layout class='main'>
      <Body></Body>
    </layout>
  </div>
</template>

<script>

import Body from '../components/Body.vue'
export default {
  name: 'App',
  components: {
    Body
  }
}
</script>
<style scoped>

.about {
  width: 100%;
  height: 100px;
  padding-top: 11px;
  line-height: 60px;
  position: absolute;
  top: 60px;
}
</style>