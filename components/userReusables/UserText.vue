<template>
  <div class="container">
    <div class="header" >
      <!-- <h2>{{ title }}</h2> -->
      <h2>{{componentDetails.title}}</h2>
      <p>
        {{componentDetails.content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    componentDetails:{
      type: Object
    }
  },
  data() {
    return {
      documentation: [],
      pageSection: [],
      title: '',
    }
  },

  created() {
    // this.getPage()
  },

  methods: {
    // async getPage() {
    //   const response = await this.$axios.get(
    //     'https://robin-doc.herokuapp.com/api/v1/page/63161ddfe6b8691a7df2878b'
    //   )
    //   console.log(response.data)
    //   console.log(response.data.data.title)
    //   this.title = response.data.data.title
    //   console.log(response.data.data.page_sections)
    //   this.pageSection = response.data.data.page_sections
    // },
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
