(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-sidebar-container"},[e("div",{staticClass:"right-sidebar"},[e("div",{staticClass:"nav-link"},[e("img",{attrs:{src:n(291),alt:"clipboard export"}}),t._v(" "),e("p",[t._v("Export as PDF")])]),t._v(" "),e("div",{staticClass:"topics"},[e("h2",[t._v("Topics")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Topic 1")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Topic 2")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Topic 3")])])])])])])}],o={},l=(n(292),n(9)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,null,null);e.default=component.exports},134:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"search-bar-container"},[t("div",{staticClass:"search-bar"},[t("input",{attrs:{type:"search",placeholder:"Search"}}),this._v(" "),t("img",{attrs:{src:n(294),alt:"search"}})])])}],o={},l=(n(295),n(9)),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),r,!1,null,null,null);e.default=component.exports},135:function(t,e,n){"use strict";n.r(e);var r={props:{linkDetails:{type:Object}}},o=(n(298),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"sidebar-link"},[e("a",{attrs:{href:"#"}},[t._v(t._s(t.linkDetails.linkName))]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.linkDetails.subTopic.length>0,expression:"linkDetails.subTopic.length > 0"}],staticClass:"sub-sidebar-list"},t._l(t.linkDetails.subTopic,(function(n,r){return e("li",{key:r,staticClass:"sub-sidebar-link"},[e("a",{attrs:{href:"#"}},[t._v(t._s(n))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},183:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("994d0322",content,!0,{sourceMap:!1})},184:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5c2537ac",content,!0,{sourceMap:!1})},185:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6c550280",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5ff7910e",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("67b2d84f",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0c7e8fd5",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("861c5732",content,!0,{sourceMap:!1})},190:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0f3c4dfe",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var r={name:"AdminLayout"},o=(n(285),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"admin-sidebar"},[e("AdminSidebar")],1),t._v(" "),e("div",{staticClass:"main-layout"},[e("div",{staticClass:"header"},[e("AdminHeader")],1),t._v(" "),e("div",{staticClass:"main-content"},[e("Nuxt")],1)])])}),[],!1,null,"34f38c70",null);e.a=component.exports;installComponents(component,{AdminSidebar:n(324).default,AdminHeader:n(325).default})},207:function(t,e,n){"use strict";var r=n(133),o=n(134),l={components:{TheUserSidebar:n(65).default,TheSearchBar:o.default,TheRightSidebar:r.default},name:"userLayout"},d=(n(302),n(9)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-layout-container"},[e("div",{staticClass:"sidebar-left-layout"},[e("TheUserSidebar")],1),t._v(" "),e("div",{staticClass:"main-content"},[e("the-search-bar"),t._v(" "),e("Nuxt")],1),t._v(" "),e("div",{staticClass:"sidebar-right-layout"},[e("the-right-sidebar")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheUserSidebar:n(65).default,TheSearchBar:n(134).default,TheRightSidebar:n(133).default})},208:function(t,e,n){"use strict";var r={components:{TheUserSidebar:n(65).default},name:"userLayout"},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-layout-container"},[e("div",{staticClass:"sidebar-left-layout"},[e("TheUserSidebar")],1),t._v(" "),e("div",{staticClass:"main-content"},[e("Nuxt")],1),t._v(" "),e("div",{staticClass:"sidebar-right-layput"})])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheUserSidebar:n(65).default})},209:function(t,e,n){n(210),t.exports=n(211)},276:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("f52d43e0",content,!0,{sourceMap:!1})},277:function(t,e,n){var r=n(25),o=n(278),l=n(279),d=n(280),c=n(281),f=n(282),h=n(283),C=n(284),v=r(!1),m=o(l),x=o(d),k=o(c),y=o(f),M=o(h),I=o(C);v.push([t.i,'@font-face {\r\n    font-family: "HankenSans Regular";\r\n    src: url('+m+");\r\n    src: url("+m+') format("embedded-opentype"),\r\n      url('+m+') format("truetype");\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: "HankenSans Black";\r\n    src: url('+x+");\r\n    src: url("+x+') format("embedded-opentype"),\r\n      url('+x+') format("truetype");\r\n  }\r\n  @font-face {\r\n    font-family: "HankenSans Bold";\r\n    src: url('+k+");\r\n    src: url("+k+') format("embedded-opentype"),\r\n      url('+k+') format("truetype");\r\n  }\r\n  @font-face {\r\n    font-family: "HankenSans Italic";\r\n    src: url('+y+");\r\n    src: url("+y+') format("embedded-opentype"),\r\n      url('+y+') format("truetype");\r\n  }\r\n  @font-face {\r\n    font-family: "HankenSans Light";\r\n    src: url('+M+");\r\n    src: url("+M+') format("embedded-opentype"),\r\n      url('+M+') format("truetype");\r\n  }\r\n  @font-face {\r\n    font-family: "HankenSans Medium";\r\n    src: url('+I+");\r\n    src: url("+I+') format("embedded-opentype"),\r\n      url('+I+') format("truetype");\r\n  }',""]),t.exports=v},279:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Regular.2daf2f5.otf"},280:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Black.162f5ac.otf"},281:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Bold.07c2dd9.otf"},282:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Italic.ac33d75.otf"},283:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Light.82b46f1.otf"},284:function(t,e,n){t.exports=n.p+"fonts/HankenSans-Medium.0bdf84b.otf"},285:function(t,e,n){"use strict";n(183)},286:function(t,e,n){var r=n(25)(!1);r.push([t.i,"\n.main[data-v-34f38c70]{\r\n  display: flex;\r\n  font-family: 'HankenSans Regular';\n}\n.admin-sidebar[data-v-34f38c70]{\r\n  overflow-y: auto;\r\n  overflow-x: none;\n}\n.main-content[data-v-34f38c70]{\r\n  background-color: #FFF;\r\n  padding: 61px 100px;\n}\n.main-layout[data-v-34f38c70]{\r\n  overflow-y: auto;\r\n  overflow-x: none;\n}\r\n",""]),t.exports=r},287:function(t,e,n){"use strict";n(184)},288:function(t,e,n){var r=n(25)(!1);r.push([t.i,"\n.main-container[data-v-31fa3b1e]{\r\n  width: 270px;\r\n  height: 4243px;\r\n  border-right: 1px solid #CCCCCC;\r\n  padding-top: 2.5rem;\r\n  /* position: fixed; */\n}\n.documenter-icon[data-v-31fa3b1e]{\r\n  padding: 0 3rem 0 3.5rem;\n}\n.top-section[data-v-31fa3b1e]{\r\n  padding: 4.5rem 0 2rem 0;\r\n  border-bottom: 1px solid #CCCCCC;\n}\n.test[data-v-31fa3b1e]{\r\n  padding-left: 3.5rem;\n}\n.dropdown-links[data-v-31fa3b1e]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1.5rem;\r\n  padding-top: 1.5rem;\n}\n.page-section[data-v-31fa3b1e]{\r\n  display: flex;\r\n  column-gap: 8rem;\r\n  cursor: pointer;\n}\n.page-header[data-v-31fa3b1e]{\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 1.1rem;\r\n  margin: 0;\r\n  color: #9999BC;\r\n  font-family: 'HankenSans Regular';\n}\n.bottom-section[data-v-31fa3b1e]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 2rem;\r\n  padding: 2rem 0 0 3.5rem;\n}\n.trash-section[data-v-31fa3b1e],.help-section[data-v-31fa3b1e],.settings-section[data-v-31fa3b1e]{\r\n  display: flex;\r\n  column-gap: 1rem;\n}\r\n",""]),t.exports=r},289:function(t,e,n){"use strict";n(185)},290:function(t,e,n){var r=n(25)(!1);r.push([t.i,"\n.main-container[data-v-7114e40b]{\r\n  padding: 2.6rem 7.1rem 0 53.8rem;\n}\n.button-links[data-v-7114e40b]{\r\n  display: flex;\r\n  column-gap: 1.5rem;\n}\n.save[data-v-7114e40b]{\r\n  color: #EA8D51;\r\n  border: none;\r\n  background: none;\r\n  /* font-size: 1px; */\r\n  font-weight: 400;\r\n  line-height: 1.1rem;\r\n  cursor: pointer;\n}\n.publish[data-v-7114e40b]{\r\n  width: 138px;\r\n  height: 40px;\r\n  background-color: #4568D1;\r\n  text-align: center;\r\n  border-radius: 30px;\r\n  color: #FFF;\r\n  border: none;\r\n  cursor: pointer;\n}\r\n",""]),t.exports=r},291:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDZIMTRDMTYgNiAxNiA1IDE2IDRDMTYgMiAxNSAyIDE0IDJIMTBDOSAyIDggMiA4IDRDOCA2IDkgNiAxMCA2WiIgc3Ryb2tlPSIjOTk5OUJDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDIySDlDNCAyMiAzIDIwIDMgMTZWOS45OTk5OUMzIDUuNDM5OTkgNC42NyA0LjE5OTk5IDggNC4wMTk5OSIgc3Ryb2tlPSIjOTk5OUJDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2IDQuMDE5OTlDMTkuMzMgNC4xOTk5OSAyMSA1LjQyOTk5IDIxIDkuOTk5OTlWMTUiIHN0cm9rZT0iIzk5OTlCQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNSAxOVYxNkgxOCIgc3Ryb2tlPSIjOTk5OUJDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDIyTDE1LjA0IDE2LjA0IiBzdHJva2U9IiM5OTk5QkMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},292:function(t,e,n){"use strict";n(186)},293:function(t,e,n){var r=n(25)(!1);r.push([t.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.right-sidebar-container .right-sidebar{padding-top:147px}.right-sidebar-container .right-sidebar .nav-link{display:flex;justify-content:center;align-items:center;gap:19px;padding-bottom:51px;border-bottom:.5px solid #ccc}.right-sidebar-container .right-sidebar .nav-link img{width:24px;height:24px}.right-sidebar-container .right-sidebar .nav-link p{font-size:16px;line-height:18px;color:#9999bc}.right-sidebar-container .right-sidebar .topics{padding-left:48px;margin-top:36px}.right-sidebar-container .right-sidebar .topics h2{font-weight:400;font-size:14px;line-height:18px;color:#4568d1}.right-sidebar-container .right-sidebar .topics ul{display:flex;flex-direction:column;gap:32px;padding-left:0px;margin-top:36px}.right-sidebar-container .right-sidebar .topics ul li{list-style-type:none}.right-sidebar-container .right-sidebar .topics ul li a{text-decoration:none;font-weight:400;font-size:14px;line-height:18px;color:#9999bc}",""]),t.exports=r},294:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjY2NjYgMTRDMTEuMTY0NSAxNCAxNCAxMS4xNjQ1IDE0IDcuNjY2NjhDMTQgNC4xNjg4NyAxMS4xNjQ1IDEuMzMzMzQgNy42NjY2NiAxLjMzMzM0QzQuMTY4ODYgMS4zMzMzNCAxLjMzMzMzIDQuMTY4ODcgMS4zMzMzMyA3LjY2NjY4QzEuMzMzMzMgMTEuMTY0NSA0LjE2ODg2IDE0IDcuNjY2NjYgMTRaIiBzdHJva2U9IiNDQ0NDQ0MiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0LjY2NjcgMTQuNjY2N0wxMy4zMzMzIDEzLjMzMzMiIHN0cm9rZT0iI0NDQ0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},295:function(t,e,n){"use strict";n(187)},296:function(t,e,n){var r=n(25)(!1);r.push([t.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.search-bar-container{margin-left:56px;padding-top:40px;padding-bottom:65px}.search-bar-container .search-bar{padding:8px 40px;border:1px solid #ccc;border-radius:8px;width:40vh;display:flex;justify-content:center;align-items:center}.search-bar-container .search-bar input{border:rgba(0,0,0,0);width:90%;outline:none;border:none}",""]),t.exports=r},297:function(t,e,n){t.exports=n.p+"img/documenterLogo.450d10f.svg"},298:function(t,e,n){"use strict";n(188)},299:function(t,e,n){var r=n(25)(!1);r.push([t.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.sidebar-link{list-style-type:none}.sidebar-link a{color:#9999bc;text-decoration:none}.sidebar-link a:hover{color:#d53120}.sidebar-link .active{color:#d53120}.sidebar-link .sub-sidebar-list{display:flex;flex-direction:column;gap:10px !important;margin-top:32px;padding-left:20px}.sidebar-link .sub-sidebar-link{list-style-type:none}.sidebar-link .sub-sidebar-link a{font-weight:400;font-size:14px;line-height:18px}",""]),t.exports=r},300:function(t,e,n){"use strict";n(189)},301:function(t,e,n){var r=n(25)(!1);r.push([t.i,"body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.sidebar-container{display:flex;justify-content:center;align-items:center;padding:40px 49px 56px}.sidebar-container .brand-logo{padding-bottom:72px;width:165px;height:32px;position:sticky;top:0;left:0}.sidebar-container .sidebar-links ul{display:flex;flex-direction:column;gap:40px}",""]),t.exports=r},302:function(t,e,n){"use strict";n(190)},303:function(t,e,n){var r=n(25)(!1);r.push([t.i,'body{box-sizing:border-box;margin:0}body::-webkit-scrollbar{width:.1em}.user-layout-container{display:flex;justify-content:center;align-items:center;font-family:"HankenSans Regular"}.user-layout-container .sidebar-left-layout{width:270px;border-right:1px solid #ccc;height:100vh;overflow-y:auto;overflow-x:none}.user-layout-container .main-content{width:100%;height:100vh;overflow-y:auto;overflow-x:none}.user-layout-container .sidebar-right-layout{width:270px;border-left:1px solid #ccc;height:100vh;background:#fff}',""]),t.exports=r},324:function(t,e,n){"use strict";n.r(e);var r={name:"AdminSidebar",data:function(){return{pageDropDownIsVisible:!1}},methods:{pageButton:function(){this.pageDropDownIsVisible=!this.pageDropDownIsVisible}}},o=(n(287),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("svg",{staticClass:"documenter-icon",attrs:{width:"165",height:"32",viewBox:"0 0 165 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M41.232 26H45.576C50.952 26 54 23.072 54 17.84C54 12.392 51.024 9.44 45.6 9.44H41.232V26ZM43.344 24.08V11.336H45.552C49.8 11.336 51.864 13.448 51.864 17.72C51.864 22.016 49.728 24.08 45.288 24.08H43.344ZM61.4833 26.24C64.6033 26.24 66.8833 24.104 66.8833 20.192C66.8833 16.256 64.6033 14.144 61.4833 14.144C58.3393 14.144 56.1073 16.256 56.1073 20.192C56.1073 24.104 58.3393 26.24 61.4833 26.24ZM61.4833 24.488C59.4433 24.488 58.0753 23.12 58.0753 20.192C58.0753 17.264 59.4433 15.872 61.4833 15.872C63.5473 15.872 64.9153 17.264 64.9153 20.192C64.9153 23.12 63.5473 24.488 61.4833 24.488ZM74.1111 26.24C76.3191 26.24 77.9511 25.112 78.7911 23.048L77.1111 22.376C76.6071 23.6 75.5751 24.488 74.1111 24.488C71.8071 24.488 70.9671 22.256 70.9671 20.168C70.9671 18.128 71.8071 15.848 74.1351 15.848C75.4311 15.848 76.5591 16.592 77.0871 17.96L78.8151 17.24C77.9511 15.272 76.3191 14.096 74.0871 14.096C70.6791 14.096 68.9511 16.904 68.9511 20.168C68.9511 23.408 70.6791 26.24 74.1111 26.24ZM90.5886 14.288H88.5966V21.128C88.5966 22.976 87.3486 24.32 85.5006 24.32C84.0366 24.32 83.1486 23.456 83.1486 21.584V14.288H81.1326V21.92C81.1326 24.512 82.5966 26.192 85.0686 26.192C86.6046 26.192 87.7326 25.472 88.4286 24.296H88.5966V26H90.5886V14.288ZM94.2381 26H96.2301V19.136C96.2301 17.336 96.9501 15.848 98.8461 15.848C100.478 15.848 101.102 16.976 101.102 18.56V26H103.094V19.136C103.094 17.312 103.838 15.848 105.686 15.848C107.366 15.848 107.99 17.048 107.99 18.584V26H109.982V18.416C109.982 15.8 108.902 14.096 106.286 14.096C104.606 14.096 103.574 14.768 102.806 16.208H102.662C102.062 14.72 100.862 14.072 99.4701 14.072C97.9341 14.072 96.9021 14.84 96.2781 15.92H96.2061V14.288H94.2381V26ZM122.769 20.072C122.769 17.12 121.473 14.144 117.777 14.144C114.153 14.144 112.521 17.024 112.521 20.192C112.521 23.432 114.249 26.144 118.017 26.144C119.649 26.144 121.185 25.64 122.409 24.296L121.017 23.312C120.201 24.08 119.145 24.368 118.065 24.368C115.689 24.368 114.705 22.736 114.561 20.792H122.721C122.745 20.696 122.769 20.504 122.769 20.072ZM117.729 15.872C119.841 15.872 120.777 17.432 120.801 19.424H114.513C114.609 17.672 115.401 15.872 117.729 15.872ZM125.457 26H127.449V19.088C127.449 17.144 128.745 15.824 130.569 15.824C132.033 15.824 132.921 16.64 132.921 18.632V26H134.913V18.368C134.913 15.752 133.401 14.096 130.977 14.096C129.393 14.096 128.241 14.84 127.569 15.992H127.449V14.288H125.457V26ZM141.473 26H143.225V24.368H142.073C140.897 24.368 140.489 23.912 140.489 22.52V15.8H143.441V14.288H140.489V10.64H138.497V13.304C138.497 13.928 138.137 14.288 137.489 14.288H136.649V15.8H138.497V22.904C138.497 24.992 139.457 26 141.473 26ZM154.832 20.072C154.832 17.12 153.536 14.144 149.84 14.144C146.216 14.144 144.584 17.024 144.584 20.192C144.584 23.432 146.312 26.144 150.08 26.144C151.712 26.144 153.248 25.64 154.472 24.296L153.08 23.312C152.264 24.08 151.208 24.368 150.128 24.368C147.752 24.368 146.768 22.736 146.624 20.792H154.784C154.808 20.696 154.832 20.504 154.832 20.072ZM149.792 15.872C151.904 15.872 152.84 17.432 152.864 19.424H146.576C146.672 17.672 147.464 15.872 149.792 15.872ZM157.519 26H159.511V20.288C159.511 17.288 160.999 16.04 162.631 16.04C163.039 16.04 163.471 16.112 163.927 16.28V14.312C163.543 14.192 163.135 14.12 162.727 14.12C161.239 14.12 160.111 14.984 159.583 16.328H159.511V14.288H157.519V26Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M29.9119 16.8123L28.4659 15.4949C28.0116 15.1061 27.4276 14.9071 26.8326 14.9376C26.238 14.9684 25.677 15.2267 25.2643 15.6603L16.127 25.8857L15.0322 32L20.9444 30.2692L30.0817 20.0368C30.485 19.5866 30.6944 18.9932 30.6638 18.3867C30.6328 17.7807 30.3647 17.2118 29.9179 16.8056L29.9119 16.8123Z",fill:"#D53120"}}),t._v(" "),e("path",{attrs:{d:"M1.89649 27.1329V4.48957C1.89649 3.80639 2.16539 3.15127 2.64398 2.66831C3.12258 2.18529 3.77166 1.91391 4.44859 1.91391H21.1832C21.8601 1.91391 22.5092 2.18529 22.9878 2.66831C23.4664 3.15132 23.7353 3.8064 23.7353 4.48957V13.7702H25.6316L25.632 4.48957C25.6304 3.29923 25.1612 2.1583 24.3271 1.31653C23.4934 0.47471 22.3625 0.00121526 21.1831 0H4.4485C3.26905 0.0011868 2.13856 0.47471 1.30449 1.31653C0.470759 2.15835 0.00160552 3.29923 0 4.48957V27.1329C0.00156799 28.3233 0.470759 29.4645 1.30449 30.3059C2.13861 31.1478 3.26905 31.6213 4.4485 31.6229H12.8191V29.7087H4.4485C3.77156 29.7087 3.12244 29.4373 2.6439 28.9543C2.1653 28.4712 1.8964 27.8162 1.8964 27.133L1.89649 27.1329Z",fill:"#D53120"}})]),t._v(" "),e("div",{staticClass:"top-section"},[e("div",{staticClass:"test"},[e("div",{staticClass:"page-section",on:{click:t.pageButton}},[e("h1",{staticClass:"page-header"},[t._v("Pages")]),t._v(" "),e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 12H18",stroke:"#4568D1","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M12 18V6",stroke:"#4568D1","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),e("transition",[t.pageDropDownIsVisible?e("div",{staticClass:"dropdown-links"},[e("h1",{staticClass:"page-header"},[t._v("Sample page")]),t._v(" "),e("h1",{staticClass:"page-header"},[t._v("Sample page 1")])]):t._e()])],1)]),t._v(" "),e("div",{staticClass:"bottom-section"},[e("div",{staticClass:"trash-section"},[e("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.75 4.485C13.2525 4.2375 10.74 4.11 8.235 4.11C6.75 4.11 5.265 4.185 3.78 4.335L2.25 4.485",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M14.1375 6.855L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.59255C4.50005 16.5 4.43255 15.585 4.35005 14.4075L3.86255 6.855",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M7.74756 12.375H10.2451",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M7.125 9.375H10.875",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),e("h1",{staticClass:"page-header"},[t._v("Trash")])]),t._v(" "),e("div",{staticClass:"settings-section"},[e("svg",{attrs:{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.5 8.66V7.34C1.5 6.56 2.1375 5.915 2.925 5.915C4.2825 5.915 4.8375 4.955 4.155 3.7775C3.765 3.1025 3.9975 2.225 4.68 1.835L5.9775 1.0925C6.57 0.739998 7.335 0.949998 7.6875 1.5425L7.77 1.685C8.445 2.8625 9.555 2.8625 10.2375 1.685L10.32 1.5425C10.6725 0.949998 11.4375 0.739998 12.03 1.0925L13.3275 1.835C14.01 2.225 14.2425 3.1025 13.8525 3.7775C13.17 4.955 13.725 5.915 15.0825 5.915C15.8625 5.915 16.5075 6.5525 16.5075 7.34V8.66C16.5075 9.44 15.87 10.085 15.0825 10.085C13.725 10.085 13.17 11.045 13.8525 12.2225C14.2425 12.905 14.01 13.775 13.3275 14.165L12.03 14.9075C11.4375 15.26 10.6725 15.05 10.32 14.4575L10.2375 14.315C9.5625 13.1375 8.4525 13.1375 7.77 14.315L7.6875 14.4575C7.335 15.05 6.57 15.26 5.9775 14.9075L4.68 14.165C3.9975 13.775 3.765 12.8975 4.155 12.2225C4.8375 11.045 4.2825 10.085 2.925 10.085C2.1375 10.085 1.5 9.44 1.5 8.66Z",stroke:"#9999BC","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),e("h1",{staticClass:"page-header"},[t._v("Settings")])]),t._v(" "),e("div",{staticClass:"help-section"},[e("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12.75 13.8225H9.75L6.41249 16.0425C5.91749 16.3725 5.25 16.02 5.25 15.42V13.8225C3 13.8225 1.5 12.3225 1.5 10.0725V5.57249C1.5 3.32249 3 1.82249 5.25 1.82249H12.75C15 1.82249 16.5 3.32249 16.5 5.57249V10.0725C16.5 12.3225 15 13.8225 12.75 13.8225Z",stroke:"#9999BC","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M8.99998 8.51999V8.36252C8.99998 7.85252 9.315 7.58251 9.63 7.36501C9.9375 7.15501 10.245 6.88501 10.245 6.39001C10.245 5.70001 9.68998 5.14499 8.99998 5.14499C8.30998 5.14499 7.755 5.70001 7.755 6.39001",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M8.99662 10.3125H9.00337",stroke:"#9999BC","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),e("h1",{staticClass:"page-header"},[t._v("Help")])])])])}),[],!1,null,"31fa3b1e",null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r={name:"AdminHeader"},o=(n(289),n(9)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"button-links"},[e("button",{staticClass:"save"},[t._v("Save")]),t._v(" "),e("button",{staticClass:"publish"},[t._v("Publish")])])])}],!1,null,"7114e40b",null);e.default=component.exports},65:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this._self._c;return t("div",{staticClass:"brand-logo"},[t("img",{attrs:{src:n(297),alt:"Document Logo"}})])}],o={name:"theUserSidebar",components:{SidebarLink:n(135).default},data:function(){return{links:[{linkName:"Introduction",subTopic:["Sub Topic","Another sub topic"]},{linkName:"Get Started",subTopic:[]},{linkName:"Usage",subTopic:[]},{linkName:"Integration",subTopic:[]},{linkName:"Guides",subTopic:[]},{linkName:"Libraries",subTopic:[]}]}}},l=(n(300),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-container"},[e("div",{staticClass:"sidebar"},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-links"},[e("ul",t._l(t.links,(function(link,t){return e("sidebar-link",{key:t,attrs:{linkDetails:link}})})),1)])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{SidebarLink:n(135).default})}},[[209,16,4,17]]]);