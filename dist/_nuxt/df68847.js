(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{336:function(n,t,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(26).default)("8bc9cd18",content,!0,{sourceMap:!1})},358:function(n,t,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(26).default)("9b28db0c",content,!0,{sourceMap:!1})},359:function(n,t,o){var e=o(25)(!1);e.push([n.i,'/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',""]),n.exports=e},360:function(n,t,o){"use strict";o(336)},361:function(n,t,o){var e=o(25)(!1);e.push([n.i,"\n.container[data-v-f8b21fd8] {\r\n  margin: 20px 0;\n}\n.codeContent[data-v-f8b21fd8] {\r\n  width: 735px;\n}\r\n",""]),n.exports=e},362:function(n,t,o){"use strict";o.r(t);var e=o(28),c=o(329),r=(o(330),o(358),o(331),{data:function(){return{codeContent:'  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',codeMirrorInstance:""}},mounted:function(){var n;this.codeMirrorInstance=c.fromTextArea(this.$refs.syntax,(n={lineNumbers:!0,theme:"xq-light",mode:"javascript",autoRefresh:!0,firstLineNumber:1},Object(e.a)(n,"lineNumbers",!0),Object(e.a)(n,"smartIndent",!0),Object(e.a)(n,"lineWrapping",!0),Object(e.a)(n,"indentWithTabs",!0),Object(e.a)(n,"refresh",!0),Object(e.a)(n,"readOnly","true"),n))}}),l=(o(360),o(9)),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"codeContent"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.codeContent,expression:"codeContent"}],ref:"syntax",domProps:{value:n.codeContent},on:{input:function(t){t.target.composing||(n.codeContent=t.target.value)}}})])])}),[],!1,null,"f8b21fd8",null);t.default=component.exports}}]);