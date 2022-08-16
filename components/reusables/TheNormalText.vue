<template>
  <div class="normal-text-container">
    <div class="normal-text">
        <quill-editor
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @change="showOptions"
            @ready="onEditorReady($event)"
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
    data(){
        return{
            content: "",
            editorOption: {
                    theme: 'bubble',
                    bounds: '#edit-quill',
                    placeholder: "+   Press O for options",
                },
        }
    },
    methods:{
        onEditorBlur(quill){
            quill.blur();
            this.editing = false;
      },
      onEditorReady(quill){
            quill.focus();
            quill.enable();
            this.editing = true;
            console.log("Quill is ready");
      },
      showOptions(){
        if(this.content == '<p>o</p>' || this.content == '<p>O</p>'){
            this.$emit('show-options')
            console.log("O was pressed");
        }
        else{
            this.$emit('hide-options');
        }
      }
    }
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