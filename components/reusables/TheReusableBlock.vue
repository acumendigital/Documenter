<template>
    <div class="reusable-block-container"  @keydown.enter="enterPressed">
        <the-normal-text v-show="blockType == 'normal-text'" />
        <the-page-title-block v-show="blockType == 'page-title'" />
        <notes :header="'Note Header'" :content="'In the eighteenth century the German philosopher Immanuel Kant developed a theoryorganizing experience '" v-show="blockType == 'notes'" />
        <div class="block-modal-container" v-show="false">
            <div class="block-modal">
                <ul>
                    <li v-for="(block, index) in blockLists" :key="index">
                        <img :src="require(`~/assets/images/block-modal/${block.imgSrc}.svg`)" :alt="block.name">
                        <p>{{block.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Notes from '../Notes.vue'
import TheNormalText from './TheNormalText.vue';
import ThePageTitleBlock from './ThePageTitleBlock.vue'
export default {
    components: { ThePageTitleBlock, Notes, TheNormalText },
    data(){
        return{
            blockLists: [
                {name: 'Text', imgSrc: 'text'},
                {name: 'Card', imgSrc: 'card'},
                {name: 'Code Block', imgSrc: 'code-block'},
                {name: 'Code Table', imgSrc: 'Code-table'},
                {name: 'Code & Res', imgSrc: 'Code&Res'},
                {name: 'Table', imgSrc: 'Table'},
                {name: 'Image', imgSrc: 'Image'},
                {name: 'Warning', imgSrc: 'Warning'},
                {name: 'Note', imgSrc: 'Note'},
                {name: 'Divider', imgSrc: 'Divider'},
                {name: 'Link page', imgSrc: 'Link page'},
            ],
            showModal: false
        }
        
    },
    props:{
        blockType:{
            type: String,
            default: 'normal-text'
        }
    },
    methods:{
        enterPressed(){
            this.$emit('enter-pressed');
            console.log('I pressed enter');
        }
    }
}
</script>

<style lang="scss" scoped>
.reusable-block-container{
    position: relative;
}
    .block-modal-container{
        position: absolute;
        top: 64px;
        left: 0;
        z-index: 2;
        box-shadow: 0px 3px 20px 5px rgba(69, 104, 209, 0.1);
        border-radius: 8px;
        padding: 32px;
        width: 288px;
        .block-modal{
            ul{
                padding-left: 0;
                display: grid;
                grid-template-columns: auto auto auto;
                justify-content: space-between;
                gap: 32px;
                li{
                    list-style-type: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 6px;
                    width: 64px;
                    &:hover, &:focus{
                        background-color: #d5d5d5;
                        // p{
                        //     color: white;
                        // }
                    }
                    img{
                        width: 24px;
                    }
                    p{
                        font-weight: 400;
                        font-size: 9px;
                        line-height: 16px;
                        text-align: center;
                        color: #8D9091;
                        width: 48px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>