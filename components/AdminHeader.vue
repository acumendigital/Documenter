<template>
  <div class="main-container">
    <div class="button-links">
      <button class="save">Save</button>
      <button class="publish">Publish</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'AdminHeader'
  }
</script>

<style scoped>
.main-container{
  padding: 2.6rem 7.1rem 0 53.8rem;
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