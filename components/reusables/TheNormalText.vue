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
    mounted(){
        this.onEditorReady(this.$refs.quill.quill);
        this.$emit('update-block-index');
    },
    methods:{
        onEditorBlur(quill){
            quill.blur();
            this.editing = false;
      },
      onEditorReady(quill){
        // This helps to call the focus method after the view has been rendered on the screen.
            setTimeout(() => { 
                quill.focus();
                console.log('I suppose run');
            }, 100);
            this.editing = true;
            console.log("Quill is ready", this.$refs.quill, quill);
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