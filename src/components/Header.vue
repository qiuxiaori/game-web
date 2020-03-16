<template>
  <div>
    <a-menu v-model="current" mode="horizontal" class="header">
      <a-menu-item key="home" class="home"> 首页 </a-menu-item>
      <a-menu-item key="ns"> <a-icon type="wallet" /> NS游戏 </a-menu-item>
      <a-menu-item key="pc"> <a-icon type="laptop" /> PC游戏 </a-menu-item>
      <a-menu-item key="ps"> <a-icon type="database" /> PS游戏 </a-menu-item>
      <a-menu-item key="me" class='user' v-show="user">
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a-menu-item>
      <a-menu-item key="login" class='login' v-show="!user">
          <a-popover trigger="click" v-model="loginVisible">
            <template slot="content" style="width:80px">
              <a-input placeholder="请输入用户名" allowClear v-model="userName" style="margin:15px 0px;">
                <a-icon slot="prefix" type="user" />
              </a-input>
              <br/>
              <a-input placeholder="请输入密码" allowClear v-model="password" style="margin-bottom:15px;">
                <a-icon slot="prefix" type="safety" />
              </a-input>
              <a-button  size="small" style="margin-left: 25%;">重置</a-button>
              <a-button  size="small" style="margin-left: 25%;" @click="login">确定</a-button>
            </template>
            登录
          </a-popover>
      </a-menu-item>
      <a-menu-item key="logout" class='logout' v-show="!user"> 退出 </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data() {
      return {
        current: ['mail'],
        userName: '',
        password: '',
        loginVisible: false,
        user: null
      };
    },
    methods: {
      login () {
        this.$axios.post('http://localhost:7001/users', { name: this.userName })
          .then(res => {
            this.user = {
              name: res.data.name
            }
          })
          .catch(err => console.log(err))
        this.loginVisible = false
      }
    }
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
.login {
  margin-left: 50%;
}
.logout {
}
</style>
