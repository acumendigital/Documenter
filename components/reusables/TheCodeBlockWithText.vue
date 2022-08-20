<template>
  <div class="container">
    <div class="copy" @click="copyToClipboard">
      <img src="~/assets/images/copyToClipboard.svg" />
    </div>
    <div class="codeContent kemi">
      <textarea v-model="codeContent" ref="syntax"></textarea>
    </div>
    <div class="copyMessage" v-if="codeCopied">
      <p>Copied</p>
    </div>
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
      codeMirrorInstance: '',
      codeCopied: false,
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
    copyToClipboard() {
      console.log('kemi')
      const codeContainer = document.querySelector(
        '.code__ctn .CodeMirror-code'
      )
      const newElement = document.createElement('textarea')
      newElement.value = this.codeContent
      document.body.appendChild(newElement)
      newElement.select()
      document.execCommand('copy')
      document.body.removeChild(newElement)
      this.codeCopied = true
      setTimeout(() => {
        this.codeCopied = false
      }, 3000)
      console.log(newElement)
      console.log(codeContainer)
      console.log(this.codeContent)
    },
  },
}
</script>
<style scoped>
.container {
  position: relative;
}
.copy {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  z-index: 3;
}
.copy img {
  background: #4568d1;
  padding: 8px;
  border-radius: 200px;
  padding: 8px;
}
.copyMessage {
   width: 120px;
  background: rgb(13, 14, 13);
}
.copyMessage p{
   font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
}
</style>
