<template>
  <div class="main">
    <div class="admin-sidebar">
      <AdminSidebar />
    </div>
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
  font-family: 'HankenSans Regular';
}
.admin-sidebar{
  overflow-y: auto;
  overflow-x: none;
}
.main-content{
  background-color: #FFF;
  padding: 61px 100px;
}
.main-layout{
  overflow-y: auto;
  overflow-x: none;
  width: calc(100% -270px);
  margin-left: 270px;
}
</style>