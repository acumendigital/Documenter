<template>
  <div class="sidebar-container">
    <div class="sidebar">
        <div class="brand-logo">
            <img src="~/assets/images/documenterLogo.svg" alt="Document Logo">
        </div>
        <div class="sidebar-links">
            <ul>
                <li><a href="#">Introduction</a></li>
                <li><a href="#">Get started</a></li>
                <li><a href="#">Usage</a></li>
                <li><a href="#">Integration</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Libraries</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "theUserSidebar",
}
</script>

<style lang="scss">
    .sidebar-container{
        @include flex-center;
        padding: 40px 49px 56px;
        // padding-top: 40px;
        .brand-logo{
            padding-bottom: 72px;
            width: 165px;
            height: 32px;
        }
        .sidebar-links{
            ul{
                display: flex;
                flex-direction: column;
                gap: 40px;
                li{
                    list-style-type: none;
                    a{
                        color: #9999BC;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>