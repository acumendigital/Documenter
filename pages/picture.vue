<template>
  <div class="main-container">
    <div class="sub-container">
      <PictureUpload v-for="card in numberOfCards" :key="card" />
      <button class="upload-button" @click="numberOfCards++">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40H60" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M40 60V20" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    layout:'AdminLayout',
    data(){
      return {
        numberOfCards: 1
      }
    }
  }
</script>

<style scoped>
.sub-container{
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 3.5rem;
  row-gap: 3.5rem;
  border: 1px dashed #CCCCCC;
  padding: 20px;
  
}
.upload-button{
  width: 788px;
  height: 405px;
  border: 1px solid #EFEFEF;
  border-radius: 0px 0px 8px 8px;
  background-color: #FBFBFB;
  cursor: pointer;
  border-radius: 8px;
}
</style>