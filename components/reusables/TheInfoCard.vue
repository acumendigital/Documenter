<template>
  <div class="note-container">
    <div class="note">
        <div class="note-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1733 14.6664C10.1333 14.6664 10.0867 14.6598 10.0467 14.6464C8.70667 14.2664 7.3 14.2664 5.96 14.6464C5.71333 14.7131 5.45333 14.5731 5.38667 14.3264C5.31333 14.0798 5.46 13.8198 5.70667 13.7531C7.21333 13.3264 8.8 13.3264 10.3067 13.7531C10.5533 13.8264 10.7 14.0798 10.6267 14.3264C10.56 14.5331 10.3733 14.6664 10.1733 14.6664Z" fill="#51545C"/>
                <path d="M12.8067 4.24001C12.1133 2.84001 10.7733 1.80667 9.22 1.46667C7.59333 1.10667 5.92667 1.49334 4.65333 2.52001C3.37333 3.54001 2.64667 5.06667 2.64667 6.70001C2.64667 8.42667 3.68 10.2333 5.24 11.28V11.8333C5.23333 12.02 5.22667 12.3067 5.45333 12.54C5.68667 12.78 6.03333 12.8067 6.30667 12.8067H9.72667C10.0867 12.8067 10.36 12.7067 10.5467 12.52C10.8 12.26 10.7933 11.9267 10.7867 11.7467V11.28C12.8533 9.88667 14.1533 6.94667 12.8067 4.24001ZM9.14667 7.74667L8.43333 8.98667C8.34 9.14667 8.17333 9.24001 8 9.24001C7.91333 9.24001 7.82667 9.22001 7.75333 9.17334C7.51333 9.03334 7.43333 8.72667 7.56667 8.49334L8.13333 7.50667H7.57333C7.24 7.50667 6.96667 7.36001 6.82 7.11334C6.67333 6.86001 6.68667 6.55334 6.85333 6.26001L7.56667 5.02001C7.70667 4.78001 8.01333 4.70001 8.24667 4.83334C8.48667 4.97334 8.56667 5.28001 8.43333 5.51334L7.86667 6.50001H8.42667C8.76 6.50001 9.03333 6.64667 9.18 6.89334C9.32667 7.14667 9.31333 7.46001 9.14667 7.74667Z" fill="#51545C"/>
            </svg>
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