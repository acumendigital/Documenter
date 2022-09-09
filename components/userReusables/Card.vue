<template>
  <div>
    <div class="container">
      <div class="content">
        <h3 v-html="componentDetails.content" ></h3>
        <p v-html="componentDetails.note"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    header: String,
    content: String,
    link: String,
    componentDetails: {
      type: Object,
    },
  },
}
</script>
<style scoped>
.container {
  height: 254px;
  margin-right: 24px;
  margin-top: 32px;
}
.image img {
  margin-bottom: 0 !important;
}
.content {
  /* width: 236px; */
  /* height: 132px; */
  background: #fbfbfb;
  border: 1px solid #9999bc;
  border-radius: 8px;
  padding: 16px;
}
.content h3 {
  padding-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #4568d1;
  font-weight: 500;
}
.content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #8d9091;
}
</style>