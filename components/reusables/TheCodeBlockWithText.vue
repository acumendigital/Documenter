<template>
  <div class="codeContent">
    <textarea v-model="codeContent" ref="syntax"></textarea>
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
        '  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }'
    }
  },
  mounted() {
    CodeMirror.fromTextArea(this.$refs.syntax, {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      readOnly: 'true'
    })
  },
}
</script>


</style>
