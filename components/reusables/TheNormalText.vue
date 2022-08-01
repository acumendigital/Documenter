<template>
  <div class="normal-text-container">
    <div class="normal-text">
        <quill-editor
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
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
                    placeholder: "Write something enlightening...",
                },
        }
    },
    methods:{
        onEditorBlur(quill){
            quill.blur();
            this.editing = false;
      },
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