<template>
    <div class="reusable-block-container" :class="{ active : editing }"  @keydown.enter="enterPressed" @click="updateIndex">
        <the-normal-text
         @show-options="showOptions" 
         @hide-options="hideOptions" 
         @update-edit="updateEdit"
         v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Text'" 
         @update-block-index="updateIndex"
         :index='index'
        />
        <the-page-title-block v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'page-title'" :index='index' @update-edit="updateEdit" />
        <the-notes-container v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Note'" :index='index' @update-edit="updateEdit" />
        <the-warning-card v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Warning'" :index='index' @update-edit="updateEdit" />
        <the-info-card v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Info'" :index='index' @update-edit="updateEdit" />
        <the-divider-component v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Divider'" :index='index' @update-edit="updateEdit" />
        <the-code-block v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code Block'" :index='index' @update-edit="updateEdit" />
        <admin-codeblock-with-response v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code & Res'" :index='index' @update-edit="updateEdit" />
        <the-card v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Card'" :index='index' @update-edit="updateEdit" />
        <admin-code-block-with-tabs v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code Table'" :index='index' @update-edit="updateEdit" />
        <div class="help-btns">
            <div class="edit">
                <img :src="require(`~/assets/images/edit.svg`)" alt="edit">
            </div>
            <div class="copy">
                <img :src="require(`~/assets/images/copy.svg`)" alt="copy">
            </div>
            <div class="delete">
                <img :src="require(`~/assets/images/delete.svg`)" alt="delete">
            </div>
        </div>
    </div>
</template>

<script>
import AdminCodeblockWithResponse from './AdminCodeblockWithResponse.vue';
import AdminCodeBlockWithTabs from './AdminCodeBlockWithTabs.vue';
import TheCard from './TheCard.vue';
import TheCodeBlock from './TheCodeBlock.vue';
import TheDividerComponent from './TheDividerComponent.vue';
import TheInfoCard from './TheInfoCard.vue';
import TheNormalText from './TheNormalText.vue';
import TheNotesContainer from './TheNotesContainer.vue';
import ThePageTitleBlock from './ThePageTitleBlock.vue'
import TheWarningCard from './TheWarningCard.vue';
export default {
    components: { ThePageTitleBlock, TheNormalText, TheNotesContainer, TheWarningCard, TheInfoCard, TheDividerComponent, TheCodeBlock, AdminCodeblockWithResponse, TheCard, AdminCodeBlockWithTabs },
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
                console.log(newValue);
            }
        },
    },
    data(){
        return{
            showModal: false,
            blockDisplayed: `Text ${this.index}`,
            editing: false, 
        }  
    },
    mounted(){
        // Set the blockdisplayed to the current blocktype
        // Used a regex to match all group of characters without a space and a digit
        this.blockDisplayed = this.blockType.replace(/\s([^a-z])$/, '');
        // window.localStorage.removeItem('vuex');
    },
    methods:{
        updateEdit(editState){
            this.editing = editState
        },
        // Event handler for the enter button
        enterPressed(){
            this.$emit('enter-pressed');
            console.log('I pressed enter');
        },
        // Event handler when an option is picked from the options modal
        blockToDisplay(block){
            // Used a regex to match all group of characters without a space and a digit
            this.blockDisplayed = block.replace( /\s([^a-z])$/, '');
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
        },
        async onEditBlock(block){
            let reqArray = await this.$axios.put(`/page_section/${block.id}`, block.payload)
            console.log(reqArray, block.payload);
        },
    },
}
</script>

<style lang="scss" scoped>
.reusable-block-container{
    position: relative;
    margin-top: 10px;
    .help-btns{
        display: none;
    }
}
.active{
    padding: 16px 29.4px;
    border: 2px dashed #EFEFEF;
    border-radius: 5px;
    position: relative;
    .help-btns{
        position: absolute;
        bottom: -12px;
        right: 10px;
        display: flex;
        gap: 26px;
        img{
            cursor: pointer;
        }
    }
}
</style>