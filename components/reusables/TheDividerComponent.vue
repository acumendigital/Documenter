<template>
  <div class="divider-container">
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  props:{
    index: Number
  },
  data(){
    return{
      blockType: 'Divider',
    }
  },
}
</script>

<style lang="scss" scoped>
    .divider-container{
        .divider{
            width: 100%;
            height: 0px;
            background: #EFEFEF;
            border: 1px solid #EFEFEF;
        }
    }
</style>