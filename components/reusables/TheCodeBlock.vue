<template>
  <div class="code-block-container">
    <textarea
      name="code-block"
      id="code-block"
      ref="codeBlock"
      cols="30"
      rows="5"
    ></textarea>
  </div>
</template>

<script>
import * as Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  data() {
    return {
      code: '',
      codeMirrorInstance: '',
    }
  },
  mounted() {
    this.codeMirrorInstance = Codemirror.fromTextArea(this.$refs.codeBlock, {
      // lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      autocompletion: true,
    })
  },
}
</script>

<style lang="css" scoped>
.CodeMirror {
  height: auto;
  border-radius: 8px;
  padding: 16px;
  border: 2px solid red;
}
</style>
