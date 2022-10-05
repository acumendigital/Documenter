<template>
  <div class="response-container">
    <div class="">
      <div class="toggle">
        <h3>Show Response</h3>
        <label class="switch">
          <input type="checkbox" @click="toggleCheckbox" />
          <div class="slider round"></div>
        </label>
      </div>
      <div class="res">
        <div class="codeContent">
          <textarea v-model="content" ref="syntax" placeholder="Enter code here" ></textarea>
        </div>
      </div>
      <div class="white" v-if="checkbox"><admin-response-block :storeIndex="index" /></div>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/display/placeholder.js'
import AdminResponseBlock from './AdminResponseBlock.vue'
export default {
  props:{
    index: {
      type: Number
    }
  },
  components: {
    AdminResponseBlock,
  },
  data() {
    return {
      checkbox: false,
      content: '',
      codeMirrorInstance: '',
      codemirrorOptions: {
        theme: 'dracula',
        mode: 'javascript',
        autoRefresh: true,
        smartIndent: true,
        lineWrapping: true,
        indentWithTabs: true,
        refresh: true,
        placeholder: "Enter code here"
      },
      blockType: 'Code & Res',
    }
  },
  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntax, this.codemirrorOptions)
    this.codeMirrorInstance.on('change', this.updateCodemirrorContent)
    this.codeMirrorInstance.on('blur', () =>{
       this.$emit('update-edit', false)
       this.onEditBlock();
       });
    this.codeMirrorInstance.on('focus', () => this.$emit('update-edit', true));
  },
  methods: {
    async onEditBlock(){
        let reqArray = this.$store.state.minPageSectionRes
        reqArray = reqArray.filter(res => res.id == this.index)
        let reqArrayRes = reqArray.length != 0 ? await this.$axios.put(`/page_section/${reqArray[0].pageSectionId}`, {title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}) : null
        console.log(reqArrayRes);
      },
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    },
    updateCodemirrorContent(){
        this.content = this.codeMirrorInstance.getValue();
        this.$emit('update-edit', true)
        this.updateStoreIndex();
    },
    updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: `${this.blockType} ${this.index}`, content: this.content, note: "", order: `${this.index}`}})
    }
  },
}
</script>
<style scoped>
.codeContent {
  width: 735px;
}

.response-container{
    background: #FBFBFB;
    border: 1px solid #EFEFEF;
    border-radius: 8px;
    padding: 24px;
}

.white {
  margin: 24px 0;
}
.toggle {
  padding: 0px 30px 0 54px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  width: 95%;
  justify-content: flex-end;
  align-items: center;
  color: #071439;
}
.switch {
  position: relative;
  display: inline-block;
  margin-left: 18px;
  width: 30px;
  height: 20px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #8d9091;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 11px;
  width: 11px;
  left: 4px;
  bottom: 4.7px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #15ae73;
}

input:focus + .slider {
  box-shadow: 0 0 1px #15ae73;
}

input:checked + .slider:before {
  -webkit-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
}

.slider.round {
  border-radius: 5px;
}

.slider.round:before {
  border-radius: 16%;
}
</style>
