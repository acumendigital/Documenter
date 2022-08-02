<template>
  <div>
    <div class="container">
      <div
        class="content"
        @click="
          clicked = true
          $router.push('#')"
      >
        <img src="~/assets/images/slider.svg" />
        <p>
          {{ title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    title: String,
  },
}
</script>
<style scoped>
.container {
  margin-top: 24px;
}
.image img {
  margin-bottom: 0 !important;
}
.content {
  display: flex;
  align-items: center;
  /* width: 788px; */
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 0 16px;
  cursor: pointer;
}
.content p {
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #51545c;
  padding-left: 26.75px;
}
.content:hover {
  background: #f5f7fc;
}
.content p:hover {
  color: #9999bc;
}
</style>
