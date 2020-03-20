<template>
  <a-card hoverable style="width: 15%;height:160px;" :bordered="false">
    <img
      alt="example"
      src="https://image.gcores.com/3a0bbdfd-f6c5-4073-82a5-73ffa500c417.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_720/quality,q_90"
      slot="cover"
      style="height: 70px;border-radius:4px;"
    />
    <!-- <template class="ant-card-actions" slot="actions">
      <a-icon type="setting" key="setting" />
      <a-icon type="edit" key="edit" />
      <a-icon type="ellipsis" key="ellipsis" />
    </template> -->
      <p>card content</p>
      <p>card content</p>
  </a-card>
</template>
<script>
  export default {
    name: 'article',
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
