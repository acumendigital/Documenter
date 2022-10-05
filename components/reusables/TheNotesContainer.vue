<template>
  <div class="note-container">
    <div class="note">
        <div class="note-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 14.1667H14V10C14 6.68667 11.3133 4 7.99999 4C4.68666 4 1.99999 6.68667 1.99999 10V14.1667H1.33333C1.05999 14.1667 0.833328 14.3933 0.833328 14.6667C0.833328 14.94 1.05999 15.1667 1.33333 15.1667H14.6667C14.94 15.1667 15.1667 14.94 15.1667 14.6667C15.1667 14.3933 14.94 14.1667 14.6667 14.1667Z" fill="#071439"/>
                <path d="M8 2.50004C7.72667 2.50004 7.5 2.27337 7.5 2.00004V1.33337C7.5 1.06004 7.72667 0.833374 8 0.833374C8.27333 0.833374 8.5 1.06004 8.5 1.33337V2.00004C8.5 2.27337 8.27333 2.50004 8 2.50004Z" fill="#071439"/>
                <path d="M3.33333 3.83333C3.20667 3.83333 3.08 3.78667 2.98 3.68667L2.31333 3.02C2.12 2.82667 2.12 2.50667 2.31333 2.31333C2.50667 2.12 2.82667 2.12 3.02 2.31333L3.68667 2.98C3.88 3.17333 3.88 3.49334 3.68667 3.68667C3.58667 3.78667 3.46 3.83333 3.33333 3.83333Z" fill="#071439"/>
                <path d="M12.6667 3.83333C12.54 3.83333 12.4133 3.78667 12.3133 3.68667C12.12 3.49334 12.12 3.17333 12.3133 2.98L12.98 2.31333C13.1733 2.12 13.4933 2.12 13.6867 2.31333C13.88 2.50667 13.88 2.82667 13.6867 3.02L13.02 3.68667C12.92 3.78667 12.7933 3.83333 12.6667 3.83333Z" fill="#071439"/>
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
                    placeholder: "NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem ",
                },
                editing: false,
                blockType: 'Note'
        }
    },
    mounted(){
        if(this.content === ""){
            this.$emit('update-edit', false)
        } else {
            this.$emit('update-edit', true)
        }
    },
    methods:{
        updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: this.blockType, content: this.content, note: ""}})
    },
    onEditorBlur(quill){
        quill.blur();
        if(this.content === ""){
            this.$emit('update-edit', false)
        }
        this.$emit('update-edit', false)
        this.onEditBlock();
    },
      onEditorChange(){
        if(this.content == ""){
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
        this.editing = true
        this.$emit('update-edit', true)
        if(this.content == '<p>o</p>' || this.content == '<p>O</p>'){
            this.$emit('show-options')
            console.log("O was pressed");
        }
        else{
            this.$emit('hide-options');
        }
      },
      onEditorFocus(){
        this.editing = true
        this.$emit('update-edit', true)
      },
      async onEditBlock(){
        let reqArray = this.$store.state.minPageSectionRes
        reqArray = reqArray.filter(res => res.id == this.index)
        let reqArrayRes = reqArray.length != 0 ? await this.$axios.put(`/page_section/${reqArray[0].pageSectionId}`, {title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}) : null
        console.log(reqArrayRes);
      },
    }
}
</script>

<style lang="scss" scoped>
    .note-container{
        padding: 24px;
        .note{
            background: #DBE4FF;
            border: 1px solid #4568D1;
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