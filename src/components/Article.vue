<template>
  <a-card hoverable style="width: 31%;border-radius:5px;height: 280px;">
    <img
      alt="example"
      src="https://image.gcores.com/77db2587-b0bf-4e0d-af69-0bbbb4c0c021.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_2000,h_2000/quality,q_90"
      slot="cover"
      style="height: 120px;"
    />
    <!-- <template class="ant-card-actions" slot="actions">
      <a-icon type="setting" key="setting" />
      <a-icon type="edit" key="edit" />
      <a-icon type="ellipsis" key="ellipsis" />
    </template> -->
      <p>card content</p>
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
