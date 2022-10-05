<template>
  <div class="code-block-container">
    <textarea
      name="code-block"
      id="code-block"
      ref="codeBlock"
      cols="30"
      rows="5"
      v-model="codeMirrorContent"
    ></textarea>
  </div>
</template>

<script>
import * as Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  props:{
    index: {
      type: Number
    }
  },
  data() {
    return {
      code: '',
      codeMirrorInstance: '',
      blockType: 'Code Block',
      codeMirrorContent: this.$store.state.blockProperty[this.index].content
    }
  },
  mounted() {
    this.codeMirrorInstance = Codemirror.fromTextArea(this.$refs.codeBlock, {
      // lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      lineWrapping: true,
      autocompletion: true,
    })
    this.codeMirrorInstance.on('change', this.updateCodemirrorContent);
    this.codeMirrorInstance.on('blur', () => {
      this.$emit('update-edit', false)
      this.onEditBlock(); 
    });
    this.codeMirrorInstance.on('focus', () => this.$emit('update-edit', true));
    // this.codeMirrorInstance.getDoc().setValue(this.$store.state.blockProperty[this.index].content)

  },
  methods:{
    updateCodemirrorContent(){
        this.codeMirrorContent = this.codeMirrorInstance.getValue();
        this.$emit('update-edit', true)
        this.updateStoreIndex();
    },
    updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: `${this.blockType} ${this.index}`, content: this.codeMirrorContent, note: "", order: `${this.index}`}})
    },
    async onEditBlock(){
        let reqArray = this.$store.state.minPageSectionRes
        reqArray = reqArray.filter(res => res.id == this.index)
        let reqArrayRes = reqArray.length != 0 ? await this.$axios.put(`/page_section/${reqArray[0].pageSectionId}`, {title: `${this.blockType} ${this.index}`, content: this.codeMirrorContent, note: "", order: `${this.index}`}) : null
        console.log(reqArrayRes);
      },
  }
}
</script>

<style lang="css">
.CodeMirror {
  height: auto;
  border-radius: 8px;
  padding: 16px;
}
</style>
