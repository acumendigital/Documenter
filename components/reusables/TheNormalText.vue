<template>
  <div class="normal-text-container">
    <div class="normal-text">
        <quill-editor
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @change="showOptions"
            @ready="onEditorReady($event)"
            ref="quill"
        />
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
            type: Number,
        }
    },
    data(){
        return{
            content: this.$store.state.blockProperty[this.index].content,
            editorOption: {
                    theme: 'bubble',
                    bounds: '#edit-quill',
                    placeholder: "+   Press O for options",
                },
                blockType: 'Text'
        }
    },
    mounted(){
        this.onEditorReady(this.$refs.quill.quill);
        this.$emit('update-block-index');
        // this.content = blockContent(this.index);
    },
    methods:{
        updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}})
    },
        onEditorBlur(quill){
            quill.blur();
            this.editing = false;
      },
      onEditorReady(quill){
        // This helps to call the focus method after the view has been rendered on the screen.
            setTimeout(() => { 
                quill.focus();
            }, 250);
            this.editing = true;
      },
      showOptions(){
        if(this.content == '<p>o</p>' || this.content == '<p>O</p>'){
            this.$emit('show-options')
        }
        else{
            this.$emit('hide-options');
        }
        this.updateStoreIndex();
        console.log("I should run");
      }
    },
    // computed:{
    //     blockContent(){
    //         return this.$store.getters.blockContent;
    //     }
    // }
}
</script>

<style lang="scss">
    .normal-text-container{
        .normal-text{
            .quill-editor{
                width: 713px; 
            }
        }
    }
</style>