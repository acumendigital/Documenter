<template>
  <div class="right-sidebar-container">
    <div class="right-sidebar">
        <div class="nav-link">
            <img src="~/assets/images/clipboard-export.svg" alt="clipboard export">
            <p>Export as PDF</p>
        </div>
        <div class="topics">
            <h2>Topics</h2>
            <ul>
                <li><a href="#">Topic 1</a></li>
                <li><a href="#">Topic 2</a></li>
                <li><a href="#">Topic 3</a></li>
            </ul>
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
                padding-bottom: 51px;
                border-bottom: 0.5px solid #CCCCCC;
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
            .topics{
                padding-left: 48px;
                margin-top: 36px;
                h2{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 18px;
                    color: #4568D1;
                    // @include flex-center;
                }
                ul{
                    // @include flex-center;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    padding-left: 0px;
                    margin-top: 36px;
                    li{
                        list-style-type: none;
                        a{
                            text-decoration: none;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 18px;
                            color: #9999BC;
                        }
                    }
                }
            }
        }
    }
</style>