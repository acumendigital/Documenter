<template>
  <div class="container">
    <div class="codeContent">
      <textarea v-model="content" ref="syntax" placeholder="Enter code response here"></textarea>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/display/placeholder.js'
export default {
  props:{
    storeIndex:{
      type: Number
    }
  },
  data() {
    return {
      content: this.$store.state.blockProperty[index].note,
      codeMirrorInstance: '',
    }
  },
  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntax, {
      theme: 'xq-light',
      mode: 'javascript',
      autoRefresh: true,
      firstLineNumber: 1,
      smartIndent: true,
      lineWrapping: true,
      indentWithTabs: true,
      refresh: true,
    })
    this.codeMirrorInstance.on('change', this.updateCodemirrorContent);
    this.codeMirrorInstance.on('blur', () => {
      this.onEditBlock();
    });
  },
  methods:{
    async onEditBlock(){
        let reqArray = this.$store.state.minPageSectionRes
        reqArray = reqArray.filter(res => res.id == this.index)
        let reqArrayRes = reqArray.length != 0 ? await this.$axios.put(`/page_section/${reqArray[0].pageSectionId}`, {note: this.content}) : null
        console.log(reqArrayRes);
      },
    updateCodemirrorContent(){
        this.content = this.codeMirrorInstance.getValue();
        this.updateStoreIndex();
    },
    updateStoreIndex(){
        this.$store.commit('setCodeBlockResponsebyIndex', {index: this.index, responseContent: this.content})
    }
  }
}
</script>
<style scoped>
.codeContent {
  width: 735px;
}
</style>
