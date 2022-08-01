<template>
  <div class="admin-editable-area">
    <the-page-title-block />
    <the-reusable-block @enter-pressed="increaseBlocks" v-for="(block, index) in blockProperty" :key="index" :blockType="block.blockType" />
    <!-- <div class="option-block">
        <p @click="increaseBlocks">+ Press O for options</p>
    </div> -->
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
                {id: 1, blockType: 'normal-text'},
            ]
        }
    },
    methods:{
        increaseBlocks(){
            let newBlock = {id: this.noOfBlocks++, blockType: 'normal-text'};
            this.blockProperty.push(newBlock);
        }
    }
}
</script>

<style>

</style>