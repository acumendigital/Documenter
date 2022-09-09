<template>
  <div class="container">
    <div class="introNote">
      <img src="~/assets/images/alarm.svg" />
      <!-- <p>
        NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint
      </p> -->
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
    return {}
  },

  methods: {},
}
</script>
<style scoped>
.container {
  position: relative;
  margin: 20px 0;
}
.introNote {
  background: #efefef;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  width: 730px;
  margin-bottom: 174px;
  margin-left: 56px;
}
.introNote p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #9999bc;
  width: 704px;
  padding-left: 16px;
}
</style>