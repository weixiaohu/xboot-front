webpackJsonp([9],{"/qTI":function(e,t){},u7d1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("Row",[s("Col",[s("Card",[s("Form",{staticClass:"search-form",attrs:{inline:"","label-width":70}},[s("Form-item",{attrs:{label:"搜索日志"}},[s("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"请输入搜索关键词"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),e._v(" "),s("Form-item",{staticStyle:{"margin-left":"-35px"}},[s("Button",{attrs:{type:"primary",icon:"search"},on:{click:e.getLogList}},[e._v("全文检索")]),e._v(" "),s("Button",{attrs:{type:"ghost"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),e._v(" "),s("Row",{staticClass:"operation"},[s("Button",{attrs:{type:"error",icon:"trash-a"},on:{click:e.clearAll}},[e._v("清空全部")]),e._v(" "),s("Button",{attrs:{type:"ghost",icon:"trash-a"},on:{click:e.delAll}},[e._v("批量删除")]),e._v(" "),s("Button",{attrs:{type:"ghost",icon:"refresh"},on:{click:e.getLogList}},[e._v("刷新")])],1),e._v(" "),s("Row",[s("Alert",{attrs:{"show-icon":""}},[e._v("\n                        已选择 "),s("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" 项\n                        "),s("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),e._v(" "),s("Row",{staticClass:"margin-top-10 searchable-table-con1"},[s("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data},on:{"on-selection-change":e.changeSelect}})],1),e._v(" "),s("Row",{staticClass:"code-row-bg page",attrs:{type:"flex",justify:"end"}},[s("Page",{attrs:{current:this.pageNumber,total:e.total,"page-size":this.pageSize,"page-size-opts":[10,20,50,100],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=s("Z0/y")({name:"role-manage",data:function(){var e=this;return{loading:!0,selectList:[],selectCount:0,searchKey:"",columns:[{type:"selection",width:60,align:"center"},{title:"操作名称",key:"name",sortable:!0},{title:"请求类型",key:"requestType",width:120,align:"center",sortable:!0,filters:[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"DELETE",value:"DELETE"}],filterMultiple:!1,filterMethod:function(e,t){return"GET"===e?"GET"===t.requestType:"POST"===e?"POST"===t.requestType:"DELETE"===e?"DELETE"===t.requestType:void 0}},{title:"请求路径",key:"requestUrl"},{title:"请求参数",width:200,key:"requestParam"},{title:"登录用户",key:"username",sortable:!0},{title:"IP",key:"ip",sortable:!0},{title:"IP信息",key:"ipInfo",sortable:!0},{title:"耗时(毫秒)",key:"costTime",width:130,sortable:!0,align:"center",filters:[{label:"≤1000毫秒",value:0},{label:">1000毫秒",value:1}],filterMultiple:!1,filterMethod:function(e,t){return 0===e?t.costTime<=1e3:1===e?t.costTime>1e3:void 0}},{title:"创建时间",key:"createTime",sortable:!0},{title:"操作",key:"action",width:100,align:"center",render:function(t,s){return t("div",[t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.remove(s.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0}},methods:{init:function(){this.getLogList()},changePage:function(e){this.pageNumber=e,this.getLogList()},changePageSize:function(e){this.pageSize=e,this.getLogList()},getLogList:function(){var e=this;this.loading=!0;var t="",s="";""===this.searchKey?(s="/log/getAllByPage",t={pageNumber:this.pageNumber,pageSize:this.pageSize}):(s="/log/search",t={key:this.searchKey,pageNumber:this.pageNumber,pageSize:this.pageSize}),this.getRequest(s,t).then(function(t){e.loading=!1,!0===t.success&&(e.data=t.result.content,e.total=t.result.totalElements)})},handleReset:function(){this.searchKey="",this.getLogList()},remove:function(e){var t=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除该条数据?",onOk:function(){t.deleteRequest("/log/delByIds",{ids:e.id}).then(function(e){!0===e.success&&(t.$Message.success("删除成功"),t.init())})}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(e){this.selectList=e,this.selectCount=e.length},delAll:function(){var e=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var t="";e.selectList.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1),e.deleteRequest("/log/delByIds",{ids:t}).then(function(t){!0===t.success&&(e.$Message.success("删除成功"),e.init())})}})},clearAll:function(){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要彻底清空删除所有条数据?",onOk:function(){e.loading=!0;var t="";e.selectList.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1),e.deleteRequest("/log/delAll").then(function(t){e.loading=!1,!0===t.success&&(e.$Message.success("删除成功"),e.init())})}})}},mounted:function(){this.$Notice.info({title:"提示",desc:"若出现报错说明未启动Elasticsearch或ES发送错误，请勿惊慌"}),this.init()}},i,!1,function(e){s("/qTI")},null,null);t.default=a.exports}});
//# sourceMappingURL=9.aef13b75def4899096e0.js.map