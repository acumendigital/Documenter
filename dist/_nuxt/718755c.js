(window.webpackJsonp=window.webpackJsonp||[]).push([[3,10,13,14],{328:function(I,t,e){var content=e(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[I.i,content,""]]),content.locals&&(I.exports=content.locals);(0,e(26).default)("4afe37f4",content,!0,{sourceMap:!1})},331:function(I,t,e){var content=e(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[I.i,content,""]]),content.locals&&(I.exports=content.locals);(0,e(26).default)("ff54750a",content,!0,{sourceMap:!1})},332:function(I,t,e){"use strict";e(328)},333:function(I,t,e){var c=e(25)(!1);c.push([I.i,"\n.container[data-v-73701b42] {\r\n  height: 254px;\r\n  margin-right: 24px;\r\n  margin-top: 32px;\n}\n.image img[data-v-73701b42] {\r\n  margin-bottom: 0 !important;\n}\n.content[data-v-73701b42] {\r\n  width: 236px;\r\n  /* height: 132px; */\r\n  background: #fbfbfb;\r\n border: 1px solid #9999bc;\r\n  border-radius: 8px;\r\n  padding: 16px;\n}\n.content h3[data-v-73701b42] {\r\n  padding-bottom: 4px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #4568D1;\r\n  font-weight: 500;\n}\n.content p[data-v-73701b42] {\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  color: #8d9091;\n}\r\n\r\n",""]),I.exports=c},334:function(I,t,e){var content=e(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[I.i,content,""]]),content.locals&&(I.exports=content.locals);(0,e(26).default)("d4059760",content,!0,{sourceMap:!1})},344:function(I,t,e){"use strict";e.r(t);var c={name:"Introduction",props:{header:String,content:String,link:String}},o=(e(332),e(9)),component=Object(o.a)(c,(function(){var I=this,t=I._self._c;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("h3",[I._v(I._s(I.header))]),I._v(" "),t("p",[I._v("\n        "+I._s(I.content)+"\n      ")])])])])}),[],!1,null,"73701b42",null);t.default=component.exports},352:function(I,t,e){"use strict";e(331)},353:function(I,t,e){var c=e(25)(!1);c.push([I.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.editor{border:1px dashed #ccc;border-radius:8px;padding-left:32px;width:632px}.editor .quill-editor{width:632px;height:129px;font-size:32px;font-weight:700;line-height:40px;color:#071439}",""]),I.exports=c},354:function(I,t,e){"use strict";e(334)},355:function(I,t,e){var c=e(25)(!1);c.push([I.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.normal-text-container .normal-text .quill-editor{width:713px}",""]),I.exports=c},367:function(I,t,e){"use strict";e.r(t);e(345),e(346),e(347);var c={components:{quillEditor:e(348).quillEditor},data:function(){return{editorOption:{theme:"bubble",bounds:"#edit-quill",placeholder:"Page Title"},content:"",editing:!0}},methods:{onEditorFocus:function(I){I.format("bold",!0),I.format("size","huge"),this.editing=!0},onEditorChange:function(I){var t=I.quill,html=I.html;I.text;this.content=html,t.format("bold",!0),t.format("size","big")},onEditorBlur:function(I){I.blur(),this.editing=!1},enterPressed:function(){this.$emit("enter-pressed"),console.log("I pressed enter")}}},o=(e(352),e(9)),component=Object(o.a)(c,(function(){var I=this,t=I._self._c;return t("div",{staticClass:"code-block-container"},[t("div",{ref:"editor",class:{editor:I.editing},attrs:{id:"edit-quill"}},[t("quill-editor",{ref:"myQuillEditor",attrs:{options:I.editorOption},on:{focus:function(t){return I.onEditorFocus(t)},blur:function(t){return I.onEditorBlur(t)},ready:function(t){return I.onEditorFocus(t)}},model:{value:I.content,callback:function(t){I.content=t},expression:"content"}})],1)])}),[],!1,null,null,null);t.default=component.exports},368:function(I,t,e){var content=e(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[I.i,content,""]]),content.locals&&(I.exports=content.locals);(0,e(26).default)("50177409",content,!0,{sourceMap:!1})},376:function(I,t,e){"use strict";e.r(t);e(345),e(346),e(347);var c={components:{quillEditor:e(348).quillEditor},data:function(){return{content:"",editorOption:{theme:"bubble",bounds:"#edit-quill",placeholder:"Write something enlightening..."}}},methods:{onEditorBlur:function(I){I.blur(),this.editing=!1}}},o=(e(354),e(9)),component=Object(o.a)(c,(function(){var I=this,t=I._self._c;return t("div",{staticClass:"normal-text-container"},[t("div",{staticClass:"normal-text"},[t("quill-editor",{attrs:{options:I.editorOption},on:{blur:function(t){return I.onEditorBlur(t)}},model:{value:I.content,callback:function(t){I.content=t},expression:"content"}})],1)])}),[],!1,null,null,null);t.default=component.exports},388:function(I,t,e){var map={"./Code&Res.svg":389,"./Code-table.svg":390,"./Divider.svg":391,"./Image.svg":392,"./Link page.svg":393,"./Note.svg":394,"./Table.svg":395,"./Warning.svg":396,"./card.svg":397,"./code-block.svg":398,"./text.svg":399};function c(I){var t=o(I);return e(t)}function o(I){if(!e.o(map,I)){var t=new Error("Cannot find module '"+I+"'");throw t.code="MODULE_NOT_FOUND",t}return map[I]}c.keys=function(){return Object.keys(map)},c.resolve=o,I.exports=c,c.id=388},389:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04LjUgMTguOTdIOEM0IDE4Ljk3IDIgMTcuOTcgMiAxMi45N1Y3Ljk2OTk3QzIgMy45Njk5NyA0IDEuOTY5OTcgOCAxLjk2OTk3SDE2QzIwIDEuOTY5OTcgMjIgMy45Njk5NyAyMiA3Ljk2OTk3VjEyLjk3QzIyIDE2Ljk3IDIwIDE4Ljk3IDE2IDE4Ljk3SDE1LjVDMTUuMTkgMTguOTcgMTQuODkgMTkuMTIgMTQuNyAxOS4zN0wxMy4yIDIxLjM3QzEyLjU0IDIyLjI1IDExLjQ2IDIyLjI1IDEwLjggMjEuMzdMOS4yOTk5OSAxOS4zN0M5LjEzOTk5IDE5LjE1IDguNzggMTguOTcgOC41IDE4Ljk3WiIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik04IDguNzAwMDFMNiAxMC43TDggMTIuNyIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNiA4LjcwMDAxTDE4IDEwLjdMMTYgMTIuNyIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMyA4LjM3TDExIDEzLjAzIiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},390:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05LjAwMDAyIDEzQzguMzQwMDIgMTMuMzMgNy43OTAwMiAxMy44MiA3LjM4MDAyIDE0LjQzQzcuMTUwMDIgMTQuNzggNy4xNTAwMiAxNS4yMiA3LjM4MDAyIDE1LjU3QzcuNzkwMDIgMTYuMTggOC4zNDAwMiAxNi42NyA5LjAwMDAyIDE3IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNS4yMSAxM0MxNS44NyAxMy4zMyAxNi40MiAxMy44MiAxNi44MyAxNC40M0MxNy4wNiAxNC43OCAxNy4wNiAxNS4yMiAxNi44MyAxNS41N0MxNi40MiAxNi4xOCAxNS44NyAxNi42NyAxNS4yMSAxNyIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOSAyMkgxNUMyMCAyMiAyMiAyMCAyMiAxNVY5QzIyIDQgMjAgMiAxNSAySDlDNCAyIDIgNCAyIDlWMTVDMiAyMCA0IDIyIDkgMjJaIiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0yLjIyOTk4IDguMDFMMjEuNDUgOCIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="},391:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0zIDQuNUgyMSIgc3Ryb2tlPSIjQ0NDQ0NDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMyA5LjVIMjEiIHN0cm9rZT0iI0NDQ0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTMgMTQuNUgyMSIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMyAxOS41SDIxIiBzdHJva2U9IiNDQ0NDQ0MiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"},392:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05IDIySDE1QzIwIDIyIDIyIDIwIDIyIDE1VjlDMjIgNCAyMCAyIDE1IDJIOUM0IDIgMiA0IDIgOVYxNUMyIDIwIDQgMjIgOSAyMloiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTkgMTBDMTAuMTA0NiAxMCAxMSA5LjEwNDU3IDExIDhDMTEgNi44OTU0MyAxMC4xMDQ2IDYgOSA2QzcuODk1NDMgNiA3IDYuODk1NDMgNyA4QzcgOS4xMDQ1NyA3Ljg5NTQzIDEwIDkgMTBaIiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0yLjY3MDA0IDE4Ljk1TDcuNjAwMDQgMTUuNjRDOC4zOTAwNCAxNS4xMSA5LjUzMDA0IDE1LjE3IDEwLjI0IDE1Ljc4TDEwLjU3IDE2LjA3QzExLjM1IDE2Ljc0IDEyLjYxIDE2Ljc0IDEzLjM5IDE2LjA3TDE3LjU1IDEyLjVDMTguMzMgMTEuODMgMTkuNTkgMTEuODMgMjAuMzcgMTIuNUwyMiAxMy45IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"},393:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNC45OSAxNy41SDE2LjVDMTkuNTIgMTcuNSAyMiAxNS4wMyAyMiAxMkMyMiA4Ljk4IDE5LjUzIDYuNSAxNi41IDYuNUgxNC45OSIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOSA2LjVINy41QzQuNDcgNi41IDIgOC45NyAyIDEyQzIgMTUuMDIgNC40NyAxNy41IDcuNSAxNy41SDkiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTggMTJIMTYiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},394:function(I,t,e){I.exports=e.p+"img/Note.51b402d.svg"},395:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05IDIySDE1QzIwIDIyIDIyIDIwIDIyIDE1VjlDMjIgNCAyMCAyIDE1IDJIOUM0IDIgMiA0IDIgOVYxNUMyIDIwIDQgMjIgOSAyMloiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEyIDJWMjIiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTIgMTJIMjIiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},396:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMiA5VjE0IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMi4wMDAxIDIxLjQxSDUuOTQwMDVDMi40NzAwNSAyMS40MSAxLjAyMDA1IDE4LjkzIDIuNzAwMDUgMTUuOUw1LjgyMDA2IDEwLjI4TDguNzYwMDYgNUMxMC41NDAxIDEuNzkgMTMuNDYwMSAxLjc5IDE1LjI0MDEgNUwxOC4xODAxIDEwLjI5TDIxLjMwMDEgMTUuOTFDMjIuOTgwMSAxOC45NCAyMS41MjAxIDIxLjQyIDE4LjA2MDEgMjEuNDJIMTIuMDAwMVYyMS40MVoiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTExLjk5NDUgMTdIMTIuMDAzNSIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},397:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjUgNEgxNi41QzE3LjEyIDQgMTcuNjcgNC4wMiAxOC4xNiA0LjA5QzIwLjc5IDQuMzggMjEuNSA1LjYyIDIxLjUgOVYxNUMyMS41IDE4LjM4IDIwLjc5IDE5LjYyIDE4LjE2IDE5LjkxQzE3LjY3IDE5Ljk4IDE3LjEyIDIwIDE2LjUgMjBINy41QzYuODggMjAgNi4zMyAxOS45OCA1Ljg0IDE5LjkxQzMuMjEgMTkuNjIgMi41IDE4LjM4IDIuNSAxNVY5QzIuNSA1LjYyIDMuMjEgNC4zOCA1Ljg0IDQuMDlDNi4zMyA0LjAyIDYuODggNCA3LjUgNFoiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEzLjUgMTBIMTciIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTcgMTUuNUg3LjAySDE3IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMC4wOTQ2IDEwSDEwLjEwMzYiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik03LjA5NDYgMTBINy4xMDM1OSIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},398:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04IDEwTDYgMTJMOCAxNCIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNiAxMEwxOCAxMkwxNiAxNCIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaIiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEzIDkuNjY5OThMMTEgMTQuMzMiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="},399:function(I,t){I.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xLjk4OTk5IDUuOTNWNC40MkMxLjk4OTk5IDMuNCAyLjgxOTk5IDIuNTcgMy44Mzk5OSAyLjU3SDE2Ljc2QzE3Ljc4IDIuNTcgMTguNjEgMy40IDE4LjYxIDQuNDJWNS45MyIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTAuMyAxOC4xVjMuMzIiIHN0cm9rZT0iIzhEOTA5MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTYuOTAwMDIgMTguMUgxMi40OCIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTMuNjgwMSAxMC4zNEgyMC42OTAxQzIxLjQyMDEgMTAuMzQgMjIuMDEwMSAxMC45MyAyMi4wMTAxIDExLjY2VjEyLjQ2IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNi4wOCAyMS40M1YxMC44NyIgc3Ryb2tlPSIjOEQ5MDkxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTMuOTM5OSAyMS40M0gxOC4yMTk5IiBzdHJva2U9IiM4RDkwOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K"},400:function(I,t,e){"use strict";e(368)},401:function(I,t,e){var c=e(25)(!1);c.push([I.i,"body[data-v-2f9ce4e7]{box-sizing:border-box;margin:0}body[data-v-2f9ce4e7]::-webkit-scrollbar{width:.1em}.reusable-block-container[data-v-2f9ce4e7]{position:relative}.block-modal-container[data-v-2f9ce4e7]{position:absolute;top:64px;left:0;z-index:2;box-shadow:0px 3px 20px 5px rgba(69,104,209,.1);border-radius:8px;padding:32px;width:288px}.block-modal-container .block-modal ul[data-v-2f9ce4e7]{padding-left:0;display:grid;grid-template-columns:auto auto auto;justify-content:space-between;gap:32px}.block-modal-container .block-modal ul li[data-v-2f9ce4e7]{list-style-type:none;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:6px;width:64px}.block-modal-container .block-modal ul li[data-v-2f9ce4e7]:hover,.block-modal-container .block-modal ul li[data-v-2f9ce4e7]:focus{background-color:#d5d5d5}.block-modal-container .block-modal ul li img[data-v-2f9ce4e7]{width:24px}.block-modal-container .block-modal ul li p[data-v-2f9ce4e7]{font-weight:400;font-size:9px;line-height:16px;text-align:center;color:#8d9091;width:48px;text-align:center}",""]),I.exports=c},421:function(I,t,e){"use strict";e.r(t);e(37);var c=e(344),o=e(376),n={components:{ThePageTitleBlock:e(367).default,Notes:c.default,TheNormalText:o.default},data:function(){return{blockLists:[{name:"Text",imgSrc:"text"},{name:"Card",imgSrc:"card"},{name:"Code Block",imgSrc:"code-block"},{name:"Code Table",imgSrc:"Code-table"},{name:"Code & Res",imgSrc:"Code&Res"},{name:"Table",imgSrc:"Table"},{name:"Image",imgSrc:"Image"},{name:"Warning",imgSrc:"Warning"},{name:"Note",imgSrc:"Note"},{name:"Divider",imgSrc:"Divider"},{name:"Link page",imgSrc:"Link page"}],showModal:!1}},props:{blockType:{type:String,default:"normal-text"}},methods:{enterPressed:function(){this.$emit("enter-pressed"),console.log("I pressed enter")}}},l=(e(400),e(9)),component=Object(l.a)(n,(function(){var I=this,t=I._self._c;return t("div",{staticClass:"reusable-block-container",on:{keydown:function(t){return!t.type.indexOf("key")&&I._k(t.keyCode,"enter",13,t.key,"Enter")?null:I.enterPressed.apply(null,arguments)}}},[t("the-normal-text",{directives:[{name:"show",rawName:"v-show",value:"normal-text"==I.blockType,expression:"blockType == 'normal-text'"}]}),I._v(" "),t("the-page-title-block",{directives:[{name:"show",rawName:"v-show",value:"page-title"==I.blockType,expression:"blockType == 'page-title'"}]}),I._v(" "),t("notes",{directives:[{name:"show",rawName:"v-show",value:"notes"==I.blockType,expression:"blockType == 'notes'"}],attrs:{header:"Note Header",content:"In the eighteenth century the German philosopher Immanuel Kant developed a theoryorganizing experience "}}),I._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"block-modal-container"},[t("div",{staticClass:"block-modal"},[t("ul",I._l(I.blockLists,(function(c,o){return t("li",{key:o},[t("img",{attrs:{src:e(388)("./".concat(c.imgSrc,".svg")),alt:c.name}}),I._v(" "),t("p",[I._v(I._s(c.name))])])})),0)])])],1)}),[],!1,null,"2f9ce4e7",null);t.default=component.exports;installComponents(component,{Notes:e(344).default})}}]);