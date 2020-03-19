<template>
  <a-card hoverable style="width: 210px;" :bordered="false">
    <img
      alt="example"
      src="https://image.gcores.com/da11b282-25e7-4602-aa03-6af09725175f.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_800/quality,q_90"
      slot="cover"
      style="height: 90px;border-radius:5px;"
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
