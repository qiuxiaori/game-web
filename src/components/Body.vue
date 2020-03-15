<template>
  <div class="body">
    <div class="container">
      <div class='games'>
        <div class="games-type"><a href="">NS游戏</a></div>
        <a-divider />
        <div class='games-body'>
          <a-list itemLayout="vertical" :grid="{ column: 6 }" :dataSource="data" size="small">
            <a-list-item slot="renderItem" slot-scope="item">
               <a-card hoverable style="width:155px">
                  <img
                    alt="example"
                    src="../../public/animal.jpg"
                    slot="cover"
                  />
                  <a-card-meta :title="item.title">
                    <template slot="description"
                      ></template
                    >
                  </a-card-meta>
                </a-card>
            </a-list-item>
          </a-list>
        </div>
      </div>
      
      <div class='ad'></div>
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
        data
      };
    },
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
  font-size: 20px;
  position: relative;
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
</style>
