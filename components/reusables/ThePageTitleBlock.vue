<template>
  <div class="code-block-container">
    <div :class="{ editor : editing }" id="edit-quill" ref="editor">
        <quill-editor 
            ref="myQuillEditor"
            v-model="content"
            :options="editorOption"
            @focus="onEditorFocus($event)"
            @blur="onEditorBlur($event)"
            @ready="onEditorFocus($event)"
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
    components: {
        quillEditor
    },
    data(){
        return{
            editorOption: {
                    theme: 'bubble',
                    bounds: '#edit-quill',
                    placeholder: "Page Title",
                },
                content: '',
                editing: true
        }
    },
    methods:{
        onEditorFocus(quill){
            quill.format('bold', true);
            quill.format('size', 'huge');
            this.editing = true;
        },
        onEditorChange({ quill, html, text }) {
            // console.log('editor change!', quill, html, text)
            this.content = html
            quill.format('bold', true);
            quill.format('size', 'big');
      },
      onEditorBlur(quill){
            quill.blur();
            this.editing = false;
      },
      enterPressed(){
            this.$emit('enter-pressed');
            console.log('I pressed enter');
        }
    }
}
</script>

<style lang="scss">
    .editor{
        border: 1px dashed #CCCCCC;
        border-radius: 8px;
        padding-left: 32px;
        width: 632px;
        .quill-editor{
            width: 632px;
            height: 129px;  
            font-size: 32px;
            font-weight: 700;
            line-height: 40px;
            color: #071439;
        }
    }
</style>