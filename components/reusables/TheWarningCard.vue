<template>
  <div class="note-container">
    <div class="note">
        <div class="note-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5067 10.6134L10.24 2.93337C9.66667 1.90004 8.87333 1.33337 8 1.33337C7.12667 1.33337 6.33333 1.90004 5.76 2.93337L1.49333 10.6134C0.953334 11.5934 0.893334 12.5334 1.32667 13.2734C1.76 14.0134 2.61333 14.42 3.73333 14.42H12.2667C13.3867 14.42 14.24 14.0134 14.6733 13.2734C15.1067 12.5334 15.0467 11.5867 14.5067 10.6134ZM7.5 6.00004C7.5 5.72671 7.72667 5.50004 8 5.50004C8.27333 5.50004 8.5 5.72671 8.5 6.00004V9.33337C8.5 9.60671 8.27333 9.83337 8 9.83337C7.72667 9.83337 7.5 9.60671 7.5 9.33337V6.00004ZM8.47333 11.8067C8.44 11.8334 8.40667 11.86 8.37333 11.8867C8.33333 11.9134 8.29333 11.9334 8.25333 11.9467C8.21333 11.9667 8.17333 11.98 8.12667 11.9867C8.08667 11.9934 8.04 12 8 12C7.96 12 7.91333 11.9934 7.86667 11.9867C7.82667 11.98 7.78667 11.9667 7.74667 11.9467C7.70667 11.9334 7.66667 11.9134 7.62667 11.8867C7.59333 11.86 7.56 11.8334 7.52667 11.8067C7.40667 11.68 7.33333 11.5067 7.33333 11.3334C7.33333 11.16 7.40667 10.9867 7.52667 10.86C7.56 10.8334 7.59333 10.8067 7.62667 10.78C7.66667 10.7534 7.70667 10.7334 7.74667 10.72C7.78667 10.7 7.82667 10.6867 7.86667 10.68C7.95333 10.66 8.04667 10.66 8.12667 10.68C8.17333 10.6867 8.21333 10.7 8.25333 10.72C8.29333 10.7334 8.33333 10.7534 8.37333 10.78C8.40667 10.8067 8.44 10.8334 8.47333 10.86C8.59333 10.9867 8.66667 11.16 8.66667 11.3334C8.66667 11.5067 8.59333 11.68 8.47333 11.8067Z" fill="#EA8D51"/>
            </svg>
        </div>
        <div class="note-content" :class="{ blurred : !editing }">
            <quill-editor
                v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @change="showOptions"
                @focus="onEditorFocus($event)"
            />
        </div>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor, VueQuillEditor } from 'vue-quill-editor'
export default {
    components:{
        quillEditor
    },
    props:{
        index: {
            type: Number
        }
    },
    data(){
        return{
            content: this.$store.state.blockProperty[this.index].content,
            editorOption: {
                    theme: 'bubble',
                    bounds: '#edit-quill',
                    placeholder: "BEWARE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem ",
                },
                editing: false,
                blockType:'Warning',
        }
    },
    mounted(){
        if(this.content === ""){
            this.editing = false
            this.$emit('update-edit', false)
        } else {
            this.editing = true
            this.$emit('update-edit', true)
        }
    },
    methods:{
        updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}})
    },
    onEditorBlur(quill){
        quill.blur();
        if(this.content === ""){
            this.editing = false
        } 
        this.$emit('update-edit', false)
        this.onEditBlock();
      },
      onEditorChange(){
        if(this.content === ""){
            this.editing = false
            this.$emit('update-edit', false)
        } else {
            this.editing = true
            this.$emit('update-edit', true)
        }
        this.updateStoreIndex();
        console.log("Typing...");
      },
      showOptions(){
        this.onEditorChange();
        if(this.content == '<p>o</p>' || this.content == '<p>O</p>'){
            this.$emit('show-options')
            console.log("O was pressed");
        }
        else{
            this.$emit('hide-options');
        }
      },
      onEditorFocus(){
        this.editing = false
        this.$emit('update-edit', true)
      },
      async onEditBlock(){
        let reqArray = this.$store.state.minPageSectionRes
        reqArray = reqArray.filter(res => res.id == this.index)
        let reqArrayRes = reqArray.length != 0 ? await this.$axios.put(`/page_section/${reqArray[0].pageSectionId}`, {title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}) : null
        console.log(reqArrayRes);
      },
    },
    
}
</script>

<style lang="scss" scoped>
    .note-container{
        padding: 24px;
        .note{
            background: #FFF1E9;
            border: 1px solid #EA8D51;
            border-radius: 8px;
            @include flex-center;
            max-width: 704px;
            gap: 18px;
            .note-content{
                width: 80%;
                height: 100%;
                padding: 5px;
                // height: 100px;
                // display: flex;
                // align-items: center;
            }
            .blurred{
                height: 100px;
            }
            .quill-editor{
                // max-width: 100%;
                height: 100%;
                .ql-blank{
                    width: 100%;
                }
                .ql-editor{
                    max-width: 100%;
                    p{
                        max-width: 90%;
                    }
                }
            }
        }
    }
</style>