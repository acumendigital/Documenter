<template>
  <div class="page-ctn">
    <div class="background">
      <div class="lhs"></div>
      <div class="rhs"></div>
    </div>
    <div class="backdrop">
      <div class="main-container">
        <div class="sub-container">
          <img class="documenter-icon" src="~assets/images/documenter-icon.svg" alt="">
          <h2 class="welcome-user">Hello Prudence,</h2>
          <p class="user-details">Set your username and  password</p>
          <div class="input-container">
            <input id="username" v-model="username" type="text" placeholder="Username">
            <input id="password" v-model="password" type="text" placeholder="Password">
            <input id="update-password" v-model="password" type="text" placeholder="Confirm Password">
            <button class="submit">Continue</button>
          </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"AuthPage",
    layout:"AuthLayout"
  }
</script>

<style scoped>
.background{
  height: 100vh;
  display: flex;
}
.lhs{
  flex-basis: 50%;
  background-color: #FFF;
}
.rhs{
  flex-basis: 50%;
  background-color: #4568D1;
  border-radius: 80px 0px 0px 0px;;
}
.backdrop{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-container{
  width: 40%;
}
.sub-container{
  width: 90%;
  border-radius: 40px;
  background-color: #FFF;
  box-shadow: 0px 4px 31px 1px rgba(69, 104, 209, 0.17);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}
.documenter-icon{
  margin: 2rem 0 2.7rem 0;
}
.welcome-user{
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  line-height: 56px;
  font-family: 'DM Sans Bold';
  color: #000;
  margin-bottom: .5rem;
}
.user-details{
  font-weight: 400;
  color: #777777;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 2.5rem;
  font-family: 'DM Sans Regular';
}
input{
  border: none;
  background-color: #F8F8F8;
  /* padding: 14px 0 13px 32px; */
  padding-left: 32px;
  color: #7D7D7D;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}
.input-container{
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 80%;
}
.submit{
  width: 100%;
  height: 48px;
  background-color: #4568D1;
  border-radius: 8px;
  font-weight: 400;
  line-height: 24px;
  font-size: 14px;
  color: #FFF;
  text-align: center;
  border: none;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>