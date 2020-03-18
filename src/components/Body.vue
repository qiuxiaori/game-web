<template>
  <div class="body">
    <div class="container">
      <div class='games'>
        <div class="games-type"><a href="">NS游戏</a></div>
        <a-divider />
        <div class='games-body'>
          <a-list itemLayout="vertical" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6 }" :dataSource="data" size="small">
            <a-list-item slot="renderItem" slot-scope="item">
               <a-card hoverable @click="gameShow" size="small">
                  <img
                    alt="example"
                    src="../../public/animal.jpg"
                    slot="cover"
                  />
                  <a-card-meta :title="item.title">
                    <template slot="description"></template>
                  </a-card-meta>
                </a-card>
            </a-list-item>
          </a-list>
        </div>
      </div>
      
      <div class='ad'></div>

      
        <a-modal v-model="gameVisible" @ok="gameOk" :footer='null' width="1200px" centered>
        <Layout>
          <div class="games-title">动物森友会</div>
          <a-divider />
          <Layout class="body-container"><div class="game-main">
            <div class="cover">
              <img alt="example" src="../../public/animal.jpg" slot="cover"/>
            </div>
            <div class="info">
              <div class="info-item">
                <div>英文名 : Animal Crossing</div>
              </div>
              <div class="info-item">
                <div>别名 : 动物之森，动物森林</div>
              </div>
              <div class="info-item">
                <div>发行商 : 任天堂</div>
              </div>
              <div class="info-item">
                <div>发售商 : 任天堂</div>
              </div>
              <div class="info-item">
                <div>发售时间 : 2001年</div>
              </div>
              <div class="info-item">
                <div>类型 : 模拟经营</div>
              </div>
              <div class="info-item">
                <div>平台 : NS</div>
              </div>
            </div>
          </div>
        </Layout>
          <div class="game-source">
            <a-tabs @change="callback" type="card">
              <a-tab-pane tab="相册" key="1">Content of Tab Pane 1</a-tab-pane>
              <a-tab-pane tab="视频" key="2">Content of Tab Pane 2</a-tab-pane>
              <a-tab-pane tab="下载资源" key="3">Content of Tab Pane 3</a-tab-pane>
            </a-tabs>
          </div>
      </Layout>
        
    </a-modal>
    </div>
  </div>
</template>


<script>
const data = [];

for (let i =0; i < 8; i ++) {
  data.push({ title: 'title' + `${i}`})
}
  export default {
    name: 'body',
    data() {
      return {
        current: ['mail'],
        data,
        gameVisible: false
      };
    },
    methods: {
      gameOk() {
        this.gameVisible = false
      },
      gameShow() {
        this.gameVisible = true
      }
    }
  };
</script>

<style>

.body {
  min-height: 1000px;
  margin-top: 8px;
  padding: 0 15%;
}
.container {
  background-color: #ffffff;
}
.games {
  background-color: #ffffff;
  float: left;
  width: 76%;
  border: rgb(228, 227, 227) 0.5px solid;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.games-type {
  height: 15px;
  font-size: 18px;
  font-weight: 550;
  position: relative;
  margin-left: 1%;
}
.games-type a {
  color: #003033;
}


.games-type a:hover {
  color: #43afb4;
}

.games-body {
  margin-top: 25px;
}
.ad {
  background-color: #ffffff;
  min-height: 1000px;
  width: 23%;
  float: right;
  border: rgb(228, 227, 227) 0.5px solid;
}

.ant-card-body {
  height: 30px;
}


.container {
  background-color: #ffffff;
}
.games {
  background-color: #ffffff;
  min-height: 800px;
  float: left;
  width: 76%;
  border: rgb(228, 227, 227) 0.5px solid;
  padding: 15px 25px;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.games-title {
  height: 15px;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  margin: 0 auth;
  text-align: center;
  color: #003033;
}


.cover {
  float: left;
  margin-right: 20px;
  height: 300px;
}

.info {
  font-size: 15px;
  margin-left: 15px;
  padding: 5px 8px;
  width: 100%;
  height: 300px;
}

.info-item {
  float: left;
  position: inherit;
  width: 40%;
  margin: 2px;
}
.games-type a:hover {
  color: #43afb4;
}

.games-body {
  margin-top: 25px;
}

.game-source {
  width: 100%;
  height: 450px;
}
.ad {
  background-color: #ffffff;
  min-height: 800px;
  width: 23%;
  float: right;
  border: rgb(228, 227, 227) 0.5px solid;
}

.ant-card-body {
  height: 30px;
}
</style>
