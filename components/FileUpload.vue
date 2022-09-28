<template>
  <div>
    <div class="first-container">
      <div class="first-section">
        <img v-if="ImageURL" :src="newImage" alt="">
        <label v-else class="file-upload" for="file">Upload file</label>
        <input @input="ImageUpload" type="file" id="file" accept="image/*">  
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
    props: {
      index:{
        type: Number
      },
      imageURLProp:{
        type: String
      }
    },
    watch:{
        // Watcher to detect changes in the props value
        imageURLProp:{
            handler(newValue, oldValue){
                this.changeImage(newValue);
            }
        },
        index:{
          handler(newValue, oldValue){
            this.pcIndex = newValue;
          }
        }
    },
    data(){
      return {
        Image: null,
        ImageURL: null,
        newImage: null,
        pcIndex: this.index,
      } 
    },
    methods: {
        PageHeaderClick(){
          this.$refs.textarea.focus()
        },
        ImageUpload(e){
          this.Image = e.target.files[0]
          this.ImageURL = URL.createObjectURL(this.Image)
          console.log("This is the pc index:", this.pcIndex);
          this.$emit('update-image', {index: this.pcIndex, url: URL.createObjectURL(this.Image)});
        },
        changeImage(imgURL){
          this.newImage = imgURL;
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