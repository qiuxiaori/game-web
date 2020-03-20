<template>
  <img
  alt="example"
  src="https://image.gcores.com/c242fda7-9065-4989-b658-5cfbdf2cedd0.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_2000,h_2000/quality,q_90"
  slot="cover"
  class='ad'
  />
</template>

<script>
  export default {
    name: 'ad',
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
.ad {
  width: 32%;
  text-align: center;
  height: 430px;
  line-height: 430px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
