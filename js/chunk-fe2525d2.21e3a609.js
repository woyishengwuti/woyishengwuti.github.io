(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe2525d2"],{"178b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"chart-container"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("h4",[t._v("设备总数： 100")])])],1),e("el-row",[e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartColumn"}})]),e("el-col",{attrs:{span:12}},[e("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"chartPie"}})])],1)],1)},r=[],n=e("164e"),o=e.n(n),s={name:"device",data:function(){return{chartColumn:null,chartBar:null,chartLine:null,chartPie:null}},methods:{drawColumnChart:function(){this.chartColumn=o.a.init(document.getElementById("chartColumn")),this.chartColumn.setOption({color:["#3398DB"],title:{text:"接入设备分类统计"},tooltip:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["设备类型统计","设备厂家统计"],axisTick:{alignWithLabel:!0}},yAxis:[{type:"value"}],series:[{name:"数量",type:"bar",data:[85,120],barWidth:50,barMaxWidth:50}]})},drawBarChart:function(){this.chartBar=o.a.init(document.getElementById("chartBar")),this.chartBar.setOption({title:{text:"Bar Chart",subtext:"数据来自网络"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]})},drawLineChart:function(){this.chartLine=o.a.init(document.getElementById("chartLine")),this.chartLine.setOption({title:{text:"Line Chart"},tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]})},drawPieChart:function(){this.chartPie=o.a.init(document.getElementById("chartPie")),this.chartPie.setOption({title:{text:"设备数量",subtext:"备注说明",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["纳入采集的设备数量","未纳入采集的设备数量"]},series:[{name:"按运行状态分类",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:135,name:"纳入采集的设备数量"},{value:1548,name:"未纳入采集的设备数量"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},normal:{color:function(t){var a=["#1A8FED","#FE8463","#FE8463"];return a[t.dataIndex]}}}})},drawCharts:function(){this.drawColumnChart(),this.drawPieChart()}},mounted:function(){this.drawCharts()},updated:function(){this.drawCharts()}},l=s,c=(e("8aa8"),e("2877")),h=Object(c["a"])(l,i,r,!1,null,"3e55f752",null);a["default"]=h.exports},5601:function(t,a,e){},"8aa8":function(t,a,e){"use strict";var i=e("5601"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-fe2525d2.21e3a609.js.map