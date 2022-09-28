<template>
  <div class="container">
    <button class="picture-upload">
      <img v-if="ImageURL" :src="ImageURL" alt="">
      <label v-else for="file">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40H60" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M40 60V20" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </label>
      <input ref="image" @input="ImageUpload" type="file" id="file" accept="image/*">
    </button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        ImageURL: null,
        Image: null
      }
    },
    methods: {
        ImageUpload(e){
          this.Image = e.target.files[0]
          this.ImageURL = URL.createObjectURL(this.Image)
        }
    }
  }
</script>

<style scoped>
.container{
  width: 788px;
  height: 405px;
  border: 1px solid #9999BC;
  border-radius: 8px;
}
input[type="text"]{
  border: none;
  outline: none;
  padding: 1rem 0 0 1rem;
} 
input[type="file"]{
  display: none;
} 
textarea{
  border: none;
  outline: none;
  padding: .2rem 0 0 1rem;
}
.picture-upload{
  border: none;
  background-color: #FFF;
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 150px;
}
</style>