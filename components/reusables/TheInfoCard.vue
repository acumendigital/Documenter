<template>
  <div class="note-container">
    <div class="note">
        <div class="note-icon">
            <img src="~/assets/images/info.svg" alt="Alarm">
        </div>
        <div class="note-content" :class="{ blurred : !editing }">
            <quill-editor
                v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @change="showOptions"
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
    data(){
        return{
            content: "",
            editorOption: {
                    theme: 'bubble',
                    bounds: '#edit-quill',
                    placeholder: "NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint ",
                },
                editing: false
        }
    },
    methods:{
        onEditorBlur(quill){
            quill.blur();
            if(this.content == ""){
                this.editing = false;
            }
            
      },
      onEditorChange(){
        if(this.content == ""){
            this.editing = false;
        } else {
            this.editing = true;
        }
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
      }
    }
}
</script>

<style lang="scss" scoped>
    .note-container{
        padding: 24px;
        .note{
            /* Dark 05 */
            background: #EFEFEF;
            /* Dark 04 */
            border: 1px solid #CCCCCC;
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