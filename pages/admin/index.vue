<template>
  <div class="admin-editable-area">
    <the-page-title-block @enter-pressed="increaseBlocks" />
    <the-reusable-block 
        @enter-pressed="increaseBlocks" 
        @show-options="showOptionsModal" 
        @hide-options="hideOptionsModal" 
        v-for="(block, index) in blockProperty" 
        :key="index" 
        :blockType="block.blockType"
        :index="index"
        @update-block-index="updateBlockIndex(index)"
    />
    <!-- <div class="option-block">
        <p @click="increaseBlocks">+ Press O for options</p>
    </div> -->
    <div class="block-modal-container" v-show="showModal">
        <div class="block-modal">
            <ul>
                <li v-for="(block, index) in blockLists" :key="index" @click="blockToDisplay(block.name)">
                    <img :src="require(`~/assets/images/block-modal/${block.imgSrc}.svg`)" :alt="block.name">
                    <p>{{block.name}}</p>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import ThePageTitleBlock from '~/components/reusables/ThePageTitleBlock.vue';
import TheReusableBlock from '~/components/reusables/TheReusableBlock.vue'
export default {
    components: { TheReusableBlock, ThePageTitleBlock },
    layout: 'AdminLayout',
    data(){
        return{
            noOfBlocks: 1,
            blockProperty: [
                // {id: 1, blockType: 'Text'},
            ],
            showModal: false,
            blockLists: [
                {name: 'Text', imgSrc: 'text'},
                {name: 'Card', imgSrc: 'card'},
                {name: 'Code Block', imgSrc: 'code-block'},
                {name: 'Code Table', imgSrc: 'Code-table'},
                {name: 'Code & Res', imgSrc: 'Code&Res'},
                {name: 'Info', imgSrc: 'info'},
                {name: 'Image', imgSrc: 'Image'},
                {name: 'Warning', imgSrc: 'Warning'},
                {name: 'Note', imgSrc: 'Note'},
                {name: 'Divider', imgSrc: 'Divider'},
                {name: 'Link page', imgSrc: 'Link page'},
            ],
            blockDisplayed: 'Text',
            currentBlockIndex: 0,
        }
    },
    methods:{
        // This function increases the reusable block components on the editing screen
        increaseBlocks(){
            let newBlock = {id: this.noOfBlocks++, blockType: 'Text'};
            this.blockProperty.push(newBlock);
        },
        // Function triggered when the parent component receives the show-options event
        showOptionsModal(){
            this.showModal = true
        },
        // Function triggered when the parent component receives the hide-options event
        hideOptionsModal(){
            this.showModal = false;
        },
        updateBlockIndex(blockIndex){
            this.currentBlockIndex = blockIndex;
        },
        // Function triggered when an option is clicked on the options modal
        blockToDisplay(block){
            this.blockDisplayed = block;
            this.blockProperty[this.currentBlockIndex].blockType = block; 
        }
    },
    computed:{
        newBlockHandler(){
            return this.blockDisplayed;
        }
    }
}
</script>

<style lang="scss">
    .block-modal-container{
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