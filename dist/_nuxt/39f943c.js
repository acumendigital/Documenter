(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{360:function(t,e,n){"use strict";var o=n(12),r=n(7),c=n(5),d=n(89),l=n(21),h=n(13),f=n(151),v=n(48),C=n(88),x=n(217),m=n(3),w=n(71).f,E=n(41).f,N=n(20).f,I=n(365),y=n(366).trim,_="Number",k=r.Number,O=k.prototype,T=r.TypeError,S=c("".slice),M=c("".charCodeAt),A=function(t){var e=x(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,n,o,r,c,d,l,code,h=x(t,"number");if(C(h))throw T("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=y(h),43===(e=M(h,0))||45===e){if(88===(n=M(h,2))||120===n)return NaN}else if(48===e){switch(M(h,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(d=(c=S(h,2)).length,l=0;l<d;l++)if((code=M(c,l))<48||code>r)return NaN;return parseInt(c,o)}return+h};if(d(_,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var F,V=function(t){var e=arguments.length<1?0:k(A(t)),n=this;return v(O,n)&&m((function(){I(n)}))?f(Object(e),n,V):e},$=o?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;$.length>B;B++)h(k,F=$[B])&&!h(V,F)&&N(V,F,E(k,F));V.prototype=O,O.constructor=V,l(r,_,V,{constructor:!0})}},365:function(t,e,n){var o=n(5);t.exports=o(1..valueOf)},366:function(t,e,n){var o=n(5),r=n(30),c=n(16),d=n(367),l=o("".replace),h="["+d+"]",f=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),C=function(t){return function(e){var n=c(r(e));return 1&t&&(n=l(n,f,"")),2&t&&(n=l(n,v,"")),n}};t.exports={start:C(1),end:C(2),trim:C(3)}},367:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("e75f6c6c",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n(405)},457:function(t,e,n){var o=n(28)(!1);o.push([t.i,"body[data-v-12196515]{box-sizing:border-box;margin:0}body[data-v-12196515]::-webkit-scrollbar{width:.1em}.note-container[data-v-12196515]{padding:24px}.note-container .note[data-v-12196515]{background:#efefef;border:1px solid #ccc;border-radius:8px;display:flex;justify-content:center;align-items:center;max-width:704px;gap:18px}.note-container .note .note-content[data-v-12196515]{width:80%;height:100%;padding:5px}.note-container .note .blurred[data-v-12196515]{height:100px}.note-container .note .quill-editor[data-v-12196515]{height:100%}.note-container .note .quill-editor .ql-blank[data-v-12196515]{width:100%}.note-container .note .quill-editor .ql-editor[data-v-12196515]{max-width:100%}.note-container .note .quill-editor .ql-editor p[data-v-12196515]{max-width:90%}",""]),t.exports=o},490:function(t,e,n){"use strict";n.r(e);n(360),n(87),n(371),n(372),n(373);var o={components:{quillEditor:n(374).quillEditor},props:{index:{type:Number}},data:function(){return{content:this.$store.state.blockProperty[this.index].content,editorOption:{theme:"bubble",bounds:"#edit-quill",placeholder:"NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint "},editing:!1,blockType:"Info"}},mounted:function(){""===this.content?this.editing=!1:this.editing=!0},methods:{updateStoreIndex:function(){this.$store.commit("setBlockProperty",{index:this.index,blockState:{title:"".concat(this.blockType," ").concat(this.index),content:this.content,note:"",order:"".concat(this.index)}})},onEditorBlur:function(t){t.blur(),""==this.content&&(this.editing=!1)},onEditorChange:function(){""==this.content?this.editing=!1:this.editing=!0,this.updateStoreIndex(),console.log("Typing...")},showOptions:function(){this.onEditorChange(),"<p>o</p>"==this.content||"<p>O</p>"==this.content?(this.$emit("show-options"),console.log("O was pressed")):this.$emit("hide-options")}}},r=(n(456),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-container"},[e("div",{staticClass:"note"},[e("div",{staticClass:"note-icon"},[e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.1733 14.6664C10.1333 14.6664 10.0867 14.6598 10.0467 14.6464C8.70667 14.2664 7.3 14.2664 5.96 14.6464C5.71333 14.7131 5.45333 14.5731 5.38667 14.3264C5.31333 14.0798 5.46 13.8198 5.70667 13.7531C7.21333 13.3264 8.8 13.3264 10.3067 13.7531C10.5533 13.8264 10.7 14.0798 10.6267 14.3264C10.56 14.5331 10.3733 14.6664 10.1733 14.6664Z",fill:"#51545C"}}),t._v(" "),e("path",{attrs:{d:"M12.8067 4.24001C12.1133 2.84001 10.7733 1.80667 9.22 1.46667C7.59333 1.10667 5.92667 1.49334 4.65333 2.52001C3.37333 3.54001 2.64667 5.06667 2.64667 6.70001C2.64667 8.42667 3.68 10.2333 5.24 11.28V11.8333C5.23333 12.02 5.22667 12.3067 5.45333 12.54C5.68667 12.78 6.03333 12.8067 6.30667 12.8067H9.72667C10.0867 12.8067 10.36 12.7067 10.5467 12.52C10.8 12.26 10.7933 11.9267 10.7867 11.7467V11.28C12.8533 9.88667 14.1533 6.94667 12.8067 4.24001ZM9.14667 7.74667L8.43333 8.98667C8.34 9.14667 8.17333 9.24001 8 9.24001C7.91333 9.24001 7.82667 9.22001 7.75333 9.17334C7.51333 9.03334 7.43333 8.72667 7.56667 8.49334L8.13333 7.50667H7.57333C7.24 7.50667 6.96667 7.36001 6.82 7.11334C6.67333 6.86001 6.68667 6.55334 6.85333 6.26001L7.56667 5.02001C7.70667 4.78001 8.01333 4.70001 8.24667 4.83334C8.48667 4.97334 8.56667 5.28001 8.43333 5.51334L7.86667 6.50001H8.42667C8.76 6.50001 9.03333 6.64667 9.18 6.89334C9.32667 7.14667 9.31333 7.46001 9.14667 7.74667Z",fill:"#51545C"}})])]),t._v(" "),e("div",{staticClass:"note-content",class:{blurred:!t.editing}},[e("quill-editor",{attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},change:t.showOptions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])])}),[],!1,null,"12196515",null);e.default=component.exports}}]);