<template>
  <div class="container">
    <div class="header">
      <h1>{{ title }}Introduction</h1>
      <h3>{{ componentDetails.title }}</h3>
      <p v-html="componentDetails.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    componentDetails: {
      type: Object,
    },
  },
  data() {
    return {
      title: '',
    }
  },
}
</script>
<style scoped>
.container {
  position: relative;
}
.header h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.header p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 713px;
  padding: 16px 0 48px 0;
}
</style>