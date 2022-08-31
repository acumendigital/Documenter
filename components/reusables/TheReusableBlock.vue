<template>
    <div class="reusable-block-container"  @keydown.enter="enterPressed" @click="updateIndex">
        <the-normal-text
         @show-options="showOptions" 
         @hide-options="hideOptions" 
         v-show="blockDisplayed == 'Text'" 
         @update-block-index="updateIndex"
        />
        <the-page-title-block v-show="blockDisplayed == 'page-title'" />
        <!-- <the-code-block-with-tabs v-show="blockDisplayed == 'Code Block'" /> -->
        <the-notes-container v-show="blockDisplayed == 'Note'"  />
        <the-warning-card v-show="blockDisplayed == 'Warning'" />
        <the-info-card v-show="blockDisplayed == 'Info'" />
        <the-divider-component v-show="blockDisplayed == 'Divider'" />
        <the-code-block v-show="blockDisplayed == 'Code Block'" />
    </div>
</template>

<script>
import Notes from '../Notes.vue'
import TheCodeBlock from './TheCodeBlock.vue';
import TheCodeBlockWithTabs from '../userReusables/TheCodeBlockWithTabs.vue';
import TheDividerComponent from './TheDividerComponent.vue';
import TheInfoCard from './TheInfoCard.vue';
import TheNormalText from './TheNormalText.vue';
import TheNotesContainer from './TheNotesContainer.vue';
import ThePageTitleBlock from './ThePageTitleBlock.vue'
import TheWarningCard from './TheWarningCard.vue';
export default {
    components: { ThePageTitleBlock, Notes, TheNormalText, TheCodeBlockWithTabs, TheNotesContainer, TheWarningCard, TheInfoCard, TheDividerComponent, TheCodeBlock },
    data(){
        return{
            showModal: false,
            blockDisplayed: 'Text'
        }  
    },
    props:{
        blockType:{
            type: String,
            default: 'Text'
        },
        index:{
            type: Number
        }
    },
    watch:{
        // Watcher to detect changes in the props value
        blockType:{
            handler(newValue, oldValue){
                this.blockToDisplay(newValue);
            }
        }
    },
    methods:{
        // Event handler for the enter button
        enterPressed(){
            this.$emit('enter-pressed');
            console.log('I pressed enter');
        },
        // Event handler when an option is picked from the options modal
        blockToDisplay(block){
            this.blockDisplayed = block;
            this.hideOptions();
            console.log("Block changed to " + block);
        },
        // Event handler to emit the show-options event to parent component
        showOptions(){
            this.$emit('show-options');
        },
        // Event handler to emit the hide-options event to parent component
        hideOptions(){
            this.$emit('hide-options');
        },
        updateIndex(){
            this.$emit('update-block-index', this.index);
        }
    }
}
</script>

<style lang="scss" scoped>
.reusable-block-container{
    position: relative;
    margin-top: 10px;
}
</style>