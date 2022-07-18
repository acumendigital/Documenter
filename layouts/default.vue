<template>
    <div class="user-layout-container">
        <div class="sidebar-left-layout">
            <TheUserSidebar />
        </div>
        <div class="main-content">
            <the-search-bar />
            <Nuxt/>
        </div>
        <div class="sidebar-right-layout">
            <the-right-sidebar />
        </div>
    </div>
</template>

<script>
import TheRightSidebar from '~/components/TheRightSidebar.vue';
import TheSearchBar from '~/components/TheSearchBar.vue';
import TheUserSidebar from '~/components/TheUserSidebar.vue';
export default {
  components: { TheUserSidebar, TheSearchBar, TheRightSidebar },
    name: 'userLayout',
}
</script>

<style lang="scss">
    .user-layout-container{
        @include flex-center;
        font-family: 'HankenSans Regular';
        .sidebar-left-layout{
            width: 270px;
            border-right: 1px solid #CCCCCC;
            height: 100vh;
             background: #fff;
        }
        .main-content{
            width: 100%;
            // padding: 0px 56px;
            height: 100vh;
            overflow-y: auto;
            overflow-x: none;
        }
        .sidebar-right-layout{
            width: 270px;
            border-left: 1px solid #CCCCCC;
            height: 100vh;
             background: #fff;
        }
    }
</style>