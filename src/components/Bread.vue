<template>
  <a-breadcrumb separator=" " class="">
    <a-breadcrumb-item><a href=""> 游戏 </a></a-breadcrumb-item>
    <a-breadcrumb-item><a href=""> 二次元 </a></a-breadcrumb-item>
    <a-breadcrumb-item><a href=""> 文章 </a></a-breadcrumb-item>
    <a-breadcrumb-item><a href=""> 讨论区 </a></a-breadcrumb-item>
    <a-breadcrumb-item><a href=""> 关于本站 </a></a-breadcrumb-item>
  </a-breadcrumb>
</template>


<script>
  export default {
    name: 'bread',
    data() {
      return {
        current: ['mail'],
       
        form: this.$form.createForm(this),
        drawerVisible: false,
        newUser: {}
      };
    },
  };
</script>

<style scoped>
.xr-bread {
   font-family: Open Sans,Helvetica Neue,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
 }
</style>
