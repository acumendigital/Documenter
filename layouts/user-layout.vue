<template>
    <div class="user-layout-container">
        <div class="sidebar-left-layout">
            <TheUserSidebar />
        </div>
        <div class="main-content">
            <Nuxt/>
        </div>
        <div class="sidebar-right-layput">
            
        </div>
    </div>
</template>

<script>
import TheUserSidebar from '~/components/TheUserSidebar.vue';
export default {
  components: { TheUserSidebar },
    name: 'userLayout',
}
</script>

<style>

</style>