<template>
  <div>
    <div class="container">
      <div class="image">
        <img src="~/assets/images/intro.svg" />
      </div>
      <div class="content">
        <h3>{{ header }}</h3>
        <p>
          {{ content }}
        </p>
        <div class="link">
        <a href="#">{{ link }}</a>
      </div>
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
  },
}
</script>
<style scoped>
.container {
  height: 254px;
  margin-right: 48px;
}
.image img {
  margin-bottom: 0 !important;
}
.content {
  width: 272px;
  height: 141px;
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 0px 0px 8px 8px;
  padding: 16px 0 0 16px;
}
.content h3 {
  padding-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #071439;
}
.content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #8d9091;
}
.link {
  margin: 16px 0 0 0;
}
.link a {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #15ae73;
}
</style>
