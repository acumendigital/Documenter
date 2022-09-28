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
            <input type="text" v-model="tabs.tabName" placeholder="new tab" />
          </li>
          <li @click="createTab" v-show="tabList.length < 4">
            + Add column
          </li>
        </ul>
      </div>
      <div class="code-block">
        <div class="code-block-img">
          <div class="codeContent">
            <textarea v-model="tabList[tabIndex].codeMirrorContent" @change="updateCodemirrorContent" ref="syntaxTab"></textarea>
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
  props:{
    index: Number
  },
  data() {
    return {
      content: '',
      // The only way to assign the same ref to multiple elements is to use a v-for
      tabList: [{tabName: '', codeMirrorContent: ''}],
      codeMirrorInstance: '',
      tabIndex: 0,
      blockType: 'Code Table',
    }
  },

  mounted() {
    this.codeMirrorInstance = CodeMirror.fromTextArea(this.$refs.syntaxTab, {
      theme: 'dracula',
      mode: 'javascript',
      refresh: true,
    })
    // Setting the first tab to active by default
    this.$refs.tab[0].className = 'active'
    this.codeMirrorInstance.on('change', this.updateCodemirrorContent);
  },
  methods: {
    isClicked(e) {
      // Removing the active class from all li tabs
      for (let i = 0; i < this.$refs.tab?.length; i++) {
        this.$refs.tab[i].className = ''
      }
      // Setting the class of selected tab to active
      e.currentTarget.className = 'active'
      console.log(e)
    },
    createTab(){
        if(this.tabList.length < 4){
            this.tabList.push({tabName: "", codeMirrorContent: ""});
            this.tabIndex++;
            this.codeMirrorInstance.getDoc().setValue(this.tabList[this.tabIndex].codeMirrorContent)
        }
    },
    updateCodemirrorContent(){
        this.tabList[this.tabIndex].codeMirrorContent = this.codeMirrorInstance.getValue();
        this.updateStoreIndex;
    },
    updateStoreIndex(){
        this.$store.commit('setBlockProperty', {index: this.index, blockState:{title: `${this.blockType} ${this.index}`, content: this.codeMirrorContent, note: "", order: `${this.index}`}})
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-code-block-container {
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
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
          input{
            border: none;
            background: transparent;
            outline: none;
            text-align: center;
            width: 55px;
          }
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
