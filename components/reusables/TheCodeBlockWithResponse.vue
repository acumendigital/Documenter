<template>
  <div class="container">
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
          <textarea v-model="codeContent" ref="syntax"></textarea>
        </div>
      </div>
      <div class="white" v-if="checkbox"><Response /></div>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
import Response from '~/components/reusables/Response.vue'
export default {
  components: {
    Response,
  },
  data() {
    return {
      checkbox: false,
      codeContent:
        '  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      codeMirrorInstance: '',
    }
  },
  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntax, {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      autoRefresh: true,
      firstLineNumber: 1,
      lineNumbers: true,
      smartIndent: true,
      lineWrapping: true,
      indentWithTabs: true,
      refresh: true,
      readOnly: 'true',
    })
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    },
  },
}
</script>
<style scoped>
.codeContent {
  width: 735px;
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
