<template>
  <div>
    <div class="first-container">
      <div class="first-section">
        <div v-if="ImageURL">
          <div v-for="image in images" :key="image">
            <img :src="image" alt="">
          </div>
        </div>
        <label v-else class="file-upload" for="file">Upload file</label>
        <input ref="image" @input="ImageUpload" type="file" id="file" accept="image/*">        
          <!-- <button class="file-upload">Upload file</button> -->
      </div>
      <div class="second-section">
        <input @keyup.enter="PageHeaderClick" type="text">
        <textarea ref="textarea" ></textarea>        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        Image: null,
        ImageURL: null,
        images: []
      }
    },
    methods: {
        PageHeaderClick(){
          this.$refs.textarea.focus()
        },
        ImageUpload(e){
          this.Image = e.target.files[0]
          this.ImageURL = URL.createObjectURL(this.Image)
          this.images.push(this.ImageURL)
        }
    }
  }
</script>

<style scoped>
.first-section{
  background-color: #F5F7FC;
  border-radius: 8px 8px 0px 0px;
  height: 113px;
  width: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
  height: 113px;
  /* object-fit: cover; */
}
input[type="file"]{
  display: none;
}
input[type="text"]{
  border: none;
  outline: none;
  background-color: #FBFBFB;
  padding: 16px 0 0 16px;
}
textarea{
  border: none;
  outline: none;
  background-color: #FBFBFB;
  padding: 4px 0 0 16px;
}
.file-upload{
  border: 1px solid #FFA500;
  padding: .5rem 2rem;
  background: none;
  border-radius: .5rem;
  color: #8D9091;
}
.second-section{
  background-color: #FBFBFB;
  height: 141px;
  border-radius: 0px 0px 8px 8px;
  width: 272px;
}
</style>