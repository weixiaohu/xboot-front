webpackJsonp([16],{"1tUB":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("3cXf"),c=e.n(a),n=e("uAC3"),i=e.n(n),o=e("TVG1"),r=e("2sCs"),l=e.n(r),u={name:"access_index",data:function(){return{accessCode:"",switchValue:!1}},computed:{avatarPath:function(){return localStorage.avatorImgPath}},methods:{init:function(){var t=JSON.parse(i.a.get("access"));null!==t&&""!==t&&1===t.length?this.accessCode=t[0]:this.accessCode=t,"0"==this.accessCode?this.switchValue=!1:this.switchValue=!0},changeAccess:function(t){var s=this;t?(this.accessCode=1,i.a.set("access",1)):(this.accessCode=0,i.a.set("access",0));var e=[],a=localStorage.accessMenus;""!==a&&null!==a&&void 0!==a?(a=JSON.parse(a),o.a.initRouterNode(e,a),this.$store.commit("updateMenulist",e.filter(function(t){return t.children.length>0}))):l.a.get("/menu/getAllList").then(function(t){var a=t.result;o.a.initRouterNode(e,a),s.$store.commit("updateMenulist",e.filter(function(t){return t.children.length>0})),localStorage.accessMenus=c()(t.result)})}},mounted:function(){this.init()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"access"},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contact"}}),t._v("\n                    当前用户\n                ")],1),t._v(" "),e("div",{staticClass:"access-user-con access-current-user-con"},[e("img",{attrs:{src:t.avatarPath,alt:""}}),t._v(" "),e("p",[t._v("当前用户权限值(多个以数组显示):"),e("b",[t._v(t._s(t.accessCode))])])])])],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contacts"}}),t._v("\n                    不同权限用户的不同菜单\n                ")],1),t._v(" "),e("div",{staticClass:"access-user-con access-change-access-con"},[e("Col",{attrs:{span:"8"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("i-switch",{attrs:{value:t.switchValue,size:"large"},on:{"on-change":t.changeAccess}})],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("p",[t._v("您可以通过左侧的开关来切换当前用户的权限值，然后观察左侧菜单栏的变化，如果当前用户的权限值包含"),e("b",[t._v(" 0 ")]),t._v("，则左侧菜单栏会显示‘权限测试页’这一项。")])])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var h=e("Z0/y")(u,d,!1,function(t){e("j3mW"),e("78MN")},null,null);s.default=h.exports},"78MN":function(t,s){},j3mW:function(t,s){}});
//# sourceMappingURL=16.578b61912b63dd0cae63.js.map