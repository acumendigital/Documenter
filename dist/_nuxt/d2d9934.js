(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{362:function(o,n,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,r(29).default)("c6e42100",content,!0,{sourceMap:!1})},368:function(o,n,r){var c=r(28)(!1);c.push([o.i,"/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n",""]),o.exports=c},382:function(o,n,r){var content=r(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,r(29).default)("6f2291a9",content,!0,{sourceMap:!1})},414:function(o,n,r){o.exports=r.p+"img/copyToClipboard.287f9db.svg"},415:function(o,n,r){"use strict";r(382)},416:function(o,n,r){var c=r(28)(!1);c.push([o.i,"\n.container[data-v-1c62b370] {\r\n  position: relative;\r\n  margin: 20px 0;\n}\n.copy[data-v-1c62b370] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 20px;\r\n  cursor: pointer;\r\n  z-index: 3;\n}\n.copy img[data-v-1c62b370] {\r\n  background: #4568d1;\r\n  padding: 8px;\r\n  border-radius: 200px;\r\n  padding: 8px;\n}\n.copyMessage[data-v-1c62b370] {\r\n  width: 120px;\r\n  background: rgb(13, 14, 13);\n}\n.copyMessage p[data-v-1c62b370] {\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\n}\r\n",""]),o.exports=c},437:function(o,n,r){"use strict";r.r(n);r(90);var c=r(361),e=(r(363),r(362),r(364),{props:{componentDetails:{type:Object}},data:function(){return{codeContent:"",codeMirrorInstance:"",codeCopied:!1}},mounted:function(){this.codeMirrorInstance=c.fromTextArea(this.$refs.syntax,{theme:"dracula",mode:"javascript",autoRefresh:!0,smartIndent:!0,lineWrapping:!0,indentWithTabs:!0,refresh:!0,readOnly:"true"}),this.codeContent=this.componentDetails.content},methods:{copyToClipboard:function(){var o=this;console.log("kemi");var n=document.querySelector(".code__ctn .CodeMirror-code"),r=document.createElement("textarea");r.value=this.codeContent,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.codeCopied=!0,setTimeout((function(){o.codeCopied=!1}),3e3),console.log(r),console.log(n),console.log(this.codeContent)}}}),t=(r(415),r(11)),component=Object(t.a)(e,(function(){var o=this,n=o._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"copy",on:{click:o.copyToClipboard}},[n("img",{attrs:{src:r(414)}})]),o._v(" "),n("div",{staticClass:"codeContent kemi"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:o.componentDetails.content,expression:"componentDetails.content"}],ref:"syntax",domProps:{value:o.componentDetails.content},on:{input:function(n){n.target.composing||o.$set(o.componentDetails,"content",n.target.value)}}})]),o._v(" "),o.codeCopied?n("div",{staticClass:"copyMessage"},[n("p",[o._v("Copied")])]):o._e()])}),[],!1,null,"1c62b370",null);n.default=component.exports}}]);