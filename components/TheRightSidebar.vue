<template>
  <div class="right-sidebar-container">
    <div class="right-sidebar">
        <div class="nav-link">
            <img src="~/assets/images/clipboard-export.svg" alt="clipboard export">
            <p>Export as PDF</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .right-sidebar-container{
        .right-sidebar{
            padding-top: 147px;
            .nav-link{
                @include flex-center;
                gap: 19px;
                img{
                    width: 24px;
                    height: 24px;
                }
                p{
                    font-size: 16px;
                    line-height: 18px;
                    color: #9999BC;
                }
            }
        }
    }
</style>