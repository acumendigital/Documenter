<template>
  <div class="main">
      <AdminSidebar />
    <div class="main-layout">
      <div class="header">
        <AdminHeader />
      </div>
      <div class="main-content">
        <Nuxt />
      </div>               
    </div>
  </div>
</template>

<script>
  export default {
    name:'AdminLayout'
  }
</script>

<style scoped>
.main{
  display: flex;
}
.main-layout{
  /* width: calc(100% - 270px);
  margin-left: 270px; */
}
.main-content{
  background-color: #FFF;
}
</style>