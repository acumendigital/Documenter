<template>
  <div class="main-container">
    <div class="container">
      <div class="content">
        <h3>
            <quill-editor
                v-model="content"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @ready="onEditorReady($event)"
                ref="quill"
        />
        </h3>
        <p>
          <quill-editor
                v-model="subcontent"
                :options="contentEditorOption"
                @blur="onEditorBlur($event)"
                @ready="onEditorReady($event)"
                ref="subquill"
        />
        </p>
      </div>
    </div>
    <div class="second-container">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40H60" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M40 60V20" stroke="#4568D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'Introduction',
  components:{
    quillEditor
  },
  data(){
    return{
        content: '',
        subcontent:'',
        editorOption: {
            theme: 'bubble',
            placeholder: "Write your card title here",
        },
        contentEditorOption:{
            theme: 'bubble',
            placeholder: "Write your card content here",
        },
        editing: false,
    }
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
        }, 250);
        this.editing = true;
      },
  }
}
</script>
<style scoped>
.main-container{
  display: flex;
  column-gap: 1.5rem;
}
.container {
  margin-right: 24px;
  margin-top: 32px;
  width: 236px;
}
.second-container{
  width: 236px;
  height: 132px;
  border: 1px solid #9999BC;
  background-color: #FBFBFB;
  border-radius: 8px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.content {
  background: #fbfbfb;
  border: 1px solid #9999bc;
  border-radius: 8px;
  padding: 16px;
}
.content h3 {
  padding-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #4568D1;
  font-weight: 500;
}
.content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #8d9091;
}

</style>