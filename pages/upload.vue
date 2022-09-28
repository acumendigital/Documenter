<template>
  <div class="main-container">
    <div class="sub-container">
      <FileUpload v-for="(card, index) in cards" :key="index" :index="card.id" :imageURLProp="card.imageURL" @update-image="updateCard" />
      <button class="upload-button" @click="addCard()">
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
        cards: [{
          image: null,
          imageURL: null,
          id: 0,
        },
        ],
        newIndex: 0
      }
    },
    methods: {
      addCard(){
        this.newIndex += 1;
        this.cards.push({
          image: null,
          imageURL: null,
          id: this.newIndex,
        })
      },
      updateCard(imgProps){
        this.cards[imgProps.index].imageURL = imgProps.url;
        console.log(imgProps.index);
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
input[type="file"]{
  display: none;
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
.sub-container{
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 3.5rem;
  row-gap: 3.5rem;
  border: 1px dashed #CCCCCC;
  padding: 20px;
  border-radius: 8px;
}
.subsequent-container{
  background-color: #FBFBFB;
  width: 272px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 8px 8px;
  /* margin: 0 auto; */
}
.upload-button{
  width: 272px;
  border: 1px solid #EFEFEF;
  border-radius: 0px 0px 8px 8px;
  background-color: #FBFBFB;
  cursor: pointer;
}
</style>