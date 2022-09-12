<template>
  <div class="container">
    <div class="note">
      <img src="~/assets/images/alarm.svg" />
      <!-- <p>
          NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem
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
  height: auto;
}
.note {
  background: #dbe4ff;
  border: 1px solid #4568d1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  /* width: 784px; */
}
.note p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #9999bc;
  width: 704px;
  padding-left: 16px;
}
</style>