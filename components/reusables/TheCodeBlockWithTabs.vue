<template>
  <div class="tabs-code-block-container">
    <div class="tabs-code-block">
        <div class="tabs-container">
            <ul ref="tabList">
                <li @click="isClicked" v-for="(tabs, index) in tabList" :key="index" ref='tab'>{{tabs}}</li>
            </ul>
        </div>
        <div class="code-block">
            <div class="code-block-img">
                <img src="~/assets/images/syntax-highlighter.png" alt="Code block">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tabList: ['Cancel', 'Upload', 'Forward', 'Complete']
        }
    },
    mounted(){
        this.$refs.tab[0].className = 'active';
    },
    methods:{
        isClicked(e){
            for(let i = 0; i < this.$refs.tab?.length; i++){
                this.$refs.tab[i].className = '';
            }
            e.currentTarget.className = 'active'
        }
    }
}
</script>

<style lang="scss">
    .tabs-code-block-container{
        background: #FBFBFB;
        border: 1px solid #EFEFEF;
        border-radius: 8px;
        .tabs-code-block{
            .tabs-container{
                ul{
                    @include flex-center;
                    justify-content: flex-start;
                    gap: 32px;
                    padding-left: 8px;
                    margin-top: 0px;
                    margin-bottom: 18px;
                    border-bottom: 1px solid #EFEFEF;
                    padding: 16px 37px 0px 24px;
                    li{
                        list-style-type: none;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 24px;
                        color: #8D9091;
                        padding-bottom: 8px;
                        cursor: pointer;
                    }
                    .active{
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 24px;
                        color: #071439;
                        border-bottom: 2px solid #4568D1;
                    }
                }
            }
            .code-block{
                padding: 0px 37px 24px 16px;
                .code-block-img{
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>