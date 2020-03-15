<template>
  <div>
    <a-menu v-model="current" mode="horizontal" class="header">
      <a-menu-item key="home" class="home"> 首页 </a-menu-item>
      <a-menu-item key="ns"> <a-icon type="wallet" /> NS游戏 </a-menu-item>
      <a-menu-item key="pc"> <a-icon type="laptop" /> PC游戏 </a-menu-item>
      <a-menu-item key="ps"> <a-icon type="database" /> PS游戏 </a-menu-item>
      <a-menu-item key="me" class='user'>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data() {
      return {
        current: ['mail'],
      };
    },
  };
</script>

<style>
.header {
  padding: 0 15%;
  background-color:  #01474b;
  color: #ffffff;
  box-shadow: 0px 2px 8px #013436f5 ;
}
.home {
  margin-right: 5%;
  font-size: 26px;
}
.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected {
  color: #15d1dbf5;
}
.user {
  margin-left: 50%;
}
</style>
