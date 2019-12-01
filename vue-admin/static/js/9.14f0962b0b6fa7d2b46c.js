webpackJsonp([9],{1063:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(244),i=r(o),l=a(669),n=r(l),s=a(668);t.default={name:"task",data:function(){return{filters:{name:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{param1:"厂家",param2:"设备型号",param3:"设备类型",param4:"注册日期",param5:"序列号",param6:"安装位置",param7:"机构",param8:"IP",param9:"GIS"},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{param1:"厂家",param2:"设备型号",param3:"设备类型",param4:"注册日期",param5:"序列号",param6:"安装位置",param7:"机构",param8:"IP",param9:"GIS"},options:[{value:"选项1",label:"未执行"},{value:"选项2",label:"暂停"},{value:"选项3",label:"执行中"}],value:""}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},handleCurrentChange:function(e){this.page=e,this.getUsers()},getUsers:function(){var e=this,t={page:this.page,name:this.filters.name};this.listLoading=!0,(0,s.getDeviceLists)(t).then(function(t){e.total=t.data.total,e.users=t.data.users,e.listLoading=!1})},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e={id:t.id};(0,s.removeUser)(e).then(function(e){a.listLoading=!1,a.$message({message:"删除成功",type:"success"}),a.getUsers()})}).catch(function(){})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,i.default)({},t)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t=(0,i.default)({},e.editForm);t.birth=t.birth&&""!=t.birth?n.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,s.editUser)(t).then(function(t){e.editLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0;var t=(0,i.default)({},e.addForm);t.birth=t.birth&&""!=t.birth?n.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,s.addUser)(t).then(function(t){e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})})})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var a={ids:t};(0,s.batchRemoveUser)(a).then(function(t){e.listLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()})}).catch(function(){})}},mounted:function(){this.getUsers()}}},1081:function(e,t,a){t=e.exports=a(578)(),t.push([e.i,".pagination[data-v-47c43602]{padding:10px;margin:10px 0}","",{version:3,sources:["D:/Desktop/新建文件夹/src/views/collectInfo/task/task.vue"],names:[],mappings:"AACA,6BACE,aAAc,AACd,aAAiB,CAClB",file:"task.vue",sourcesContent:["\n.pagination[data-v-47c43602] {\n  padding: 10px;\n  margin: 10px 0px;\n}\n"],sourceRoot:""}])},1101:function(e,t,a){var r=a(1081);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(579)("6a299988",r,!0)},1121:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-col",{attrs:{span:6}},[a("el-form-item",[a("span",[e._v("任务状态：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUsers}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.getUsers}},[e._v("导出")])],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{prop:"param1",label:"任务名称","min-width":"10%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"param2",label:"任务周期","min-width":"10%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"param3",label:"任务类型","min-width":"10%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"param4",label:"执行结果","min-width":"10%"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("暂停")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("执行")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("关联设备")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"pagination",attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":10,total:e.total,background:""},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"关联设备",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"厂家",prop:"param1"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param1,callback:function(t){e.$set(e.editForm,"param1",t)},expression:"editForm.param1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备型号",prop:"param2"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param2,callback:function(t){e.$set(e.editForm,"param2",t)},expression:"editForm.param2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备类型",prop:"param3"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param3,callback:function(t){e.$set(e.editForm,"param3",t)},expression:"editForm.param3"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注册日期",prop:"param4"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param4,callback:function(t){e.$set(e.editForm,"param4",t)},expression:"editForm.param4"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"序列号",prop:"param5"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param5,callback:function(t){e.$set(e.editForm,"param5",t)},expression:"editForm.param5"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"安装位置",prop:"param6"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param6,callback:function(t){e.$set(e.editForm,"param6",t)},expression:"editForm.param6"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构",prop:"param7"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param7,callback:function(t){e.$set(e.editForm,"param7",t)},expression:"editForm.param7"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"IP",prop:"param8"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param8,callback:function(t){e.$set(e.editForm,"param8",t)},expression:"editForm.param8"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"GIS",prop:"param9"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.param9,callback:function(t){e.$set(e.editForm,"param9",t)},expression:"editForm.param9"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"厂家",prop:"param1"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param1,callback:function(t){e.$set(e.addForm,"param1",t)},expression:"addForm.param1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备型号",prop:"param2"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param2,callback:function(t){e.$set(e.addForm,"param2",t)},expression:"addForm.param2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"设备类型",prop:"param3"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param3,callback:function(t){e.$set(e.addForm,"param3",t)},expression:"addForm.param3"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注册日期",prop:"param4"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param4,callback:function(t){e.$set(e.addForm,"param4",t)},expression:"addForm.param4"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"序列号",prop:"param5"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param5,callback:function(t){e.$set(e.addForm,"param5",t)},expression:"addForm.param5"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"安装位置",prop:"param6"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param6,callback:function(t){e.$set(e.addForm,"param6",t)},expression:"addForm.param6"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机构",prop:"param7"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param7,callback:function(t){e.$set(e.addForm,"param7",t)},expression:"addForm.param7"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"IP",prop:"param8"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param8,callback:function(t){e.$set(e.addForm,"param8",t)},expression:"addForm.param8"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"GIS",prop:"param9"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.param9,callback:function(t){e.$set(e.addForm,"param9",t)},expression:"addForm.param9"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},589:function(e,t,a){a(1101);var r=a(243)(a(1063),a(1121),"data-v-47c43602",null);e.exports=r.exports},668:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addUser=t.editUser=t.batchRemoveUser=t.removeUser=t.getDeviceLists=t.getUserListPage=t.getUserList=t.requestLogin=void 0;var r=a(152),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.requestLogin=function(e){return o.default.post("/login",e).then(function(e){return e.data})},t.getUserList=function(e){return o.default.get("/user/list",{params:e})},t.getUserListPage=function(e){return o.default.get("/user/listpage",{params:e})},t.getDeviceLists=function(e){return o.default.get("/deviceLists",{params:e})},t.removeUser=function(e){return o.default.get("/user/remove",{params:e})},t.batchRemoveUser=function(e){return o.default.get("/user/batchremove",{params:e})},t.editUser=function(e){return o.default.get("/user/edit",{params:e})},t.addUser=function(e){return o.default.get("/user/add",{params:e})}},669:function(e,t,a){"use strict";function r(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var o=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),r="";return null!=a&&(r=a[2]),t=null,a=null,null==r||""==r||"undefined"==r?"":r},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(o,function(t){switch(t.charAt(0)){case"y":return r(e.getFullYear(),t.length);case"M":return r(e.getMonth()+1,t.length);case"d":return r(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return r(e.getHours(),t.length);case"m":return r(e.getMinutes(),t.length);case"s":return r(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(o),r=e.match(/(\d)+/g);if(a.length==r.length){for(var i=new Date(1970,0,1),l=0;l<a.length;l++){var n=parseInt(r[l]);switch(a[l].charAt(0)){case"y":i.setFullYear(n);break;case"M":i.setMonth(n-1);break;case"d":i.setDate(n);break;case"h":i.setHours(n);break;case"m":i.setMinutes(n);break;case"s":i.setSeconds(n)}}return i}return null}}}}});
//# sourceMappingURL=9.14f0962b0b6fa7d2b46c.js.map