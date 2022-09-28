<template>
  <div class="main-container">
    <div class="button-links">
      <button class="save">Save</button>
      <button class="publish" @click="onPublish">Publish</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'AdminHeader',
    methods:{
      async onPublish() {
        let uniqueId = new Set(this.$store.state.pageSectionRes);
        let requestArrays = this.$store.state.blockProperty.map(async pageSection => {
          console.log(uniqueId.has(pageSection.title.replace( /\D*/, '')));
          if(!uniqueId.has(pageSection.title.replace( /\D*/, ''))){
            try {
                var addPageSectionsRes = await this.$axios({
                method: 'POST',
                url: `/page_section/${process.env.PAGE_ID}`,
                data: pageSection
              })
              console.log(addPageSectionsRes);
              this.$store.commit('addPageSection', addPageSectionsRes.data.data.title.replace( /\D*/, ''));
            } catch (error) {
              console.log(error);
            }
          }
        })

        
        // Regex to get only digit .replace( /\D*/, '')
      },
    }
  }
</script>

<style scoped>
.main-container{
  padding: 2.6rem 0 0 50.8rem;
  /* position: fixed; */
}
.button-links{
  display: flex;
  column-gap: 1.5rem;
}
.save{
  color: #EA8D51;
  border: none;
  background: none;
  /* font-size: 1px; */
  font-weight: 400;
  line-height: 1.1rem;
  cursor: pointer;
}
.publish{
  width: 138px;
  height: 40px;
  background-color: #4568D1;
  text-align: center;
  border-radius: 30px;
  color: #FFF;
  border: none;
  cursor: pointer;
}
</style>