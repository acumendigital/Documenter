<template>
  <div class="codeContent">
    <textarea v-model="codeContent" id="syntax"></textarea>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  data() {
    return {
      codeContent:
        '  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      // The only way to assign the same ref to multiple elements is to use a v-for
      tabList: ['Cancel', 'Upload', 'Forward', 'Complete'],
    }
  },
  mounted() {
    CodeMirror.fromTextArea(document.getElementById('syntax'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
    })
  },
}
</script>

<style lang="css" scoped>
.codeContent {
  width: 788px;
  /* height: 288px; */
  background: #151718;
  border-radius: 8px;
}
textarea {
  resize: none;
  border-radius: 8px;
}
</style>
