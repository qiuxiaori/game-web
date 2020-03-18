<template>
  <div>
    <a-menu v-model="current" mode="horizontal" class="header">
      <a-menu-item key="home" class="home"> 主页 </a-menu-item>
      <a-menu-item key="ns"> <a-icon type="wallet" /> NS游戏 </a-menu-item>
      <a-menu-item key="pc"> <a-icon type="laptop" /> PC游戏 </a-menu-item>
      <a-menu-item key="ps"> <a-icon type="database" /> PS游戏 </a-menu-item>
      <a-menu-item key="addGame"> <a-icon type="appstore" /> 添加游戏 </a-menu-item>
      <a-menu-item key="user" class='user' v-show="user" v-model="userName">{{userName}}</a-menu-item>
      <a-menu-item key="logout " class='logout' @click="logout" v-show="user">退出</a-menu-item>
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
      <a-menu-item key="register" class='register' v-show="!user" @click="showDrawer"> 注册 
        <a-drawer
          title="注册账号"
          :width="680"
          @close="onClose"
          :visible="drawerVisible"
          :bodyStyle="{paddingBottom: '80px'}"
        >
          <a-form :form="form" layout="vertical" hideRequiredMark>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="昵称">
                  <a-input
                    v-model="newUser.name"
                    v-decorator="['name', {
                      rules: [{ required: true, message: 'Please enter user name' }]
                    }]"
                    placeholder="Please enter user name"
                  />
                </a-form-item>
              </a-col>
               <a-col :span="12">
                <a-form-item label="账号">
                  <a-input
                    v-model="newUser.account"
                    v-decorator="['account', {
                      rules: [{ required: true, message: 'Please enter user name' }]
                    }]"
                    placeholder="Please enter account name"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="性别">
                  <a-select
                    v-model="newUser.sex"
                    v-decorator="['sex', {
                      rules: [{ required: true, message: 'Please select an sex' }]
                    }]"
                    placeholder="Please select an sex"
                  >
                    <a-select-option value="man"> 男 </a-select-option>
                    <a-select-option value="woman"> 女 </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="密码">
                  <a-input
                    v-model="newUser.password"
                    v-decorator="['password', {
                      rules: [{ required: true, message: 'Please enter your password' }]
                    }]"
                    placeholder="Please enter your password"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="手机号">
                  <a-input
                    v-model="newUser.phone"
                    v-decorator="['phone', {
                      rules: [{ required: true, message: 'Please enter your phone number' }]
                    }]"
                    placeholder="Please enter your phone number"
                  />
                </a-form-item>
              </a-col>
               <a-col :span="12">
                <a-form-item label="邮箱">
                  <a-input
                    v-model="newUser.email"
                    v-decorator="['email', {
                      rules: [{ required: true, message: 'Please enter your email address' }]
                    }]"
                    placeholder="Please enter your email address"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <div
            :style="{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
              zIndex: 1,
            }"
          >
            <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
            <a-button @click="register" type="primary">确认</a-button>
          </div>
        </a-drawer>
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
        userName: '',
        password: '',
        loginVisible: false,
        user: null,
        form: this.$form.createForm(this),
        drawerVisible: false,
        newUser: {}
      };
    },
    methods: {
      login () {
        this.loginVisible = false
      },
      logout () {
        this.$message.info('退出成功');
        this.user = null
      },
      showDrawer () {
        this.drawerVisible = true;
      },
      onClose () {
        this.drawerVisible = false;
      },
      register () {
        if (!this.newUser) return
         this.$axios.post('http://localhost:7001/users', { ...this.newUser })
          .then(res => {
            if (res.status === 200) {
              this.$message.info('注册成功');
              this.user = true;
              this.userName = this.newUser.name
              this.newUser = {}
            }
          })
          .catch(err => console.log(err))
        this.drawerVisible = false;
      }
    }
  };
</script>

<style>
.header {
  padding: 0 15%;
  background-color:  #064c50;
  color: #ffffff;
  box-shadow: 1px 2px 5px #00777e;
}
.home {
  margin-right: 4%;
  font-size: 26px;
}
.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected {
  color: #15d1dbf5;
}
.user {
  margin-left: 37%;
}
.login {
  margin-left: 37%;
}
</style>
