import{F as p}from"./FormButton.6442b573.js";import{aB as m,n as l,r as u}from"./index.a39a6b51.js";import{K as _}from"./KnownStandardCodes.dc74bde0.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const n={};n.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:null}};n.setup=(e,s)=>{const t=e,o=s.emit;return{proxy:m(t,o)}};var f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"grid gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3"},e._l(e.options,function(o){return t("BaseLabel",{key:o.frameworkId,staticClass:"flex items-center space-x-1"},[t("BaseInput",{attrs:{type:"checkbox",value:o,disabled:!0},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}}),t("span",[e._v(e._s(o.displayValue))])],1)}),1)},v=[];const c={};var y=l(n,f,v,!1,d,null,null,null);function d(e){for(let s in c)this[s]=c[s]}const x=function(){return y.exports}(),r={};r.setup=(e,s)=>({companyFrameworks:u(),frameworks:_});r.components=Object.assign({ComplianceFrameworksInput:x,FormButton:p},r.components);var k=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Company Frameworks ")]),t("form",{staticClass:"divide-y"},[t("ComplianceFrameworksInput",{attrs:{options:e.frameworks},model:{value:e.companyFrameworks,callback:function(o){e.companyFrameworks=o},expression:"companyFrameworks"}}),t("FormButton",{attrs:{action:"save"}})],1)],1)},F=[];const i={};var w=l(r,k,F,!1,C,null,null,null);function C(e){for(let s in i)this[s]=i[s]}const S=function(){return w.exports}();export{S as default};
