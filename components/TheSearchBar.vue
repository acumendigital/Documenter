<template>
  <div class="search-bar-container">
    <div class="search-bar">
        <input type="search" placeholder="Search" />
        <img src="~/assets/images/search-normal.svg" alt="search">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .search-bar-container{
        padding-top: 40px;
        padding-bottom: 65px;
        .search-bar{
            padding: 8px 40px;
            border: 1px solid #CCCCCC;
            border-radius: 8px;
            width: 40vh;
            @include flex-center;
            input{
                border: transparent;
                width: 90%;
                outline: none;
                border: none;
            }
        }
    }
</style>