<template>
  <div class="container">
    <div class="beware">
      <img src="~/assets/images/danger.svg" />
      <p>
        BEWARE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint occaecati cupiditate non provident, similique
        sunt in culpa qui officia deserunt mollitia animi, id est laborum et
        dolorum fuga. Et harum quidem
      </p> -->
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
    return {}
  },

  methods: {},
}
</script>
<style scoped>
.container {
  position: relative;
  background: red;
}
.beware {
  background: #fff1e9;
  border: 1px solid #ea8d51;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  /* width: 784px; */
}
.beware p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #ea8d51;
  width: 704px;
  padding-left: 16px;
}
</style>