(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{360:function(t,e,n){"use strict";var o=n(12),r=n(7),c=n(5),l=n(89),d=n(21),f=n(13),h=n(151),m=n(48),x=n(88),E=n(217),I=n(3),N=n(71).f,v=n(41).f,y=n(20).f,w=n(365),k=n(366).trim,_="Number",O=r.Number,T=O.prototype,S=r.TypeError,A=c("".slice),R=c("".charCodeAt),$=function(t){var e=E(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,o,r,c,l,d,code,f=E(t,"number");if(x(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=R(f,0))||45===e){if(88===(n=R(f,2))||120===n)return NaN}else if(48===e){switch(R(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=A(f,2)).length,d=0;d<l;d++)if((code=R(c,d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(l(_,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var M,P=function(t){var e=arguments.length<1?0:O($(t)),n=this;return m(T,n)&&I((function(){w(n)}))?h(Object(e),n,P):e},C=o?N(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;C.length>V;V++)f(O,M=C[V])&&!f(P,M)&&y(P,M,v(O,M));P.prototype=T,T.constructor=P,d(r,_,P,{constructor:!0})}},365:function(t,e,n){var o=n(5);t.exports=o(1..valueOf)},366:function(t,e,n){var o=n(5),r=n(30),c=n(16),l=n(367),d=o("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),x=function(t){return function(e){var n=c(r(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},367:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},406:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("777b4d87",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n(406)},459:function(t,e,n){var o=n(28)(!1);o.push([t.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.normal-text-container .normal-text .quill-editor{width:713px}",""]),t.exports=o},491:function(t,e,n){"use strict";n.r(e);n(360),n(87),n(90),n(371),n(372),n(373);var o={components:{quillEditor:n(374).quillEditor},props:{index:{type:Number}},data:function(){return{content:this.$store.state.blockProperty[this.index].content,editorOption:{theme:"bubble",bounds:"#edit-quill",placeholder:"+   Press O for options"},blockType:"Text"}},mounted:function(){this.onEditorReady(this.$refs.quill.quill),this.$emit("update-block-index")},methods:{updateStoreIndex:function(){this.$store.commit("setBlockProperty",{index:this.index,blockState:{title:"".concat(this.blockType," ").concat(this.index),content:this.content,note:"",order:"".concat(this.index)}})},onEditorBlur:function(t){t.blur(),this.editing=!1},onEditorReady:function(t){setTimeout((function(){t.focus()}),250),this.editing=!0},showOptions:function(){"<p>o</p>"==this.content||"<p>O</p>"==this.content?this.$emit("show-options"):this.$emit("hide-options"),this.updateStoreIndex(),console.log("I should run")}}},r=(n(458),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"normal-text-container"},[e("div",{staticClass:"normal-text"},[e("quill-editor",{ref:"quill",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},change:t.showOptions,ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);