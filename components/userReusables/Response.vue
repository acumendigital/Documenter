<template>
  <div class="container">
    <div class="codeContent">
      <textarea v-model="codeContent" ref="syntax"></textarea>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  data() {
    return {
      codeContent:
        '  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      codeMirrorInstance: '',
    }
  },
  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntax, {
      lineNumbers: true,
      theme: 'xq-light',
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
}
</script>
<style scoped>
.codeContent {
  width: 735px;
}
</style>
