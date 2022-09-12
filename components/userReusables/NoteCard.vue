<template>
  <div class="container">
    <div class="introNote">
      <div><img src="~/assets/images/alarm.svg" /></div>
      <div>
        <p v-html="componentDetails.content"></p>
      </div>
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
    return {}
  },

  methods: {},
}
</script>
<style scoped>
.container {
  position: relative;
  margin: 20px 0;
  height: auto;
}
.introNote {
  background: #efefef;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  width: 730px;
}
.introNote p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #9999bc;
  width: auto;
  padding-left: 16px;
}
</style>