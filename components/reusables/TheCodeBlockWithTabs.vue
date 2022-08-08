<template>
  <div class="tabs-code-block-container">
    <div class="tabs-code-block">
      <div class="tabs-container">
        <ul ref="tabList">
          <li
            @click="isClicked"
            v-for="(tabs, index) in tabList"
            :key="index"
            ref="tab"
          >
            {{ tabs }}
          </li>
        </ul>
      </div>
      <div class="code-block">
        <div class="code-block-img">
          <div class="codeContent">
            <textarea v-model="cancel" ref="syntaxTab"></textarea>
          </div>
        </div>
      </div>
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
      cancel:
        '  // \n // \n\n import CANCEL from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      upload:
        '  // \n // \n\n import UPLOAD from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      forward:
        '  // \n // \n\n import FORWARD from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
      complete:
        '  // \n // \n\n import COMPLETE from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',

      // The only way to assign the same ref to multiple elements is to use a v-for
      tabList: ['Cancel', 'Upload', 'Forward', 'Complete'],
      codeMirrorInstance: '',
    }
  },

  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntaxTab, {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      refresh: true,
    })
    // Setting the first tab to active by default
    this.$refs.tab[0].className = 'active'
  },
  methods: {
    isClicked(e) {
      // Removing the active class from all li tabs
      for (let i = 0; i < this.$refs.tab?.length; i++) {
        this.$refs.tab[i].className = ''
      }
      // Setting the class of selected tab to active
      e.currentTarget.className = 'active'
      console.log(e.currentTarget.innerText)
      const currentTab = e.currentTarget.innerText
      if (currentTab === 'Cancel') {
        this.codeMirrorInstance.getDoc().setValue(this.cancel)
      } else if (currentTab === 'Upload') {
        this.codeMirrorInstance.getDoc().setValue(this.upload)
      } else if (currentTab === 'Forward') {
        this.codeMirrorInstance.getDoc().setValue(this.forward)
      } else if (currentTab === 'Complete') {
        this.codeMirrorInstance.getDoc().setValue(this.complete)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-code-block-container {
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  .tabs-code-block {
    .tabs-container {
      ul {
        @include flex-center;
        justify-content: flex-start;
        gap: 32px;
        padding-left: 8px;
        margin-top: 0px;
        margin-bottom: 18px;
        border-bottom: 1px solid #efefef;
        padding: 16px 37px 0px 24px;
        li {
          list-style-type: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #8d9091;
          padding-bottom: 8px;
          cursor: pointer;
        }
        .active {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #071439;
          border-bottom: 2px solid #4568d1;
        }
      }
    }
    .code-block {
      padding: 0px 37px 24px 16px;
      .code-block-img {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
