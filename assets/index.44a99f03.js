import{F as d}from"./FormButton.4055a32e.js";import{aB as k,n as p,c0 as x,cZ as c,c as i,c_ as w,aF as F}from"./index.93d43f40.js";import{s as h}from"./index.c73b880f.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";const r={};r.props={value:{key:"value",required:!0,type:Array},options:{key:"options",required:!0,type:Array}};r.setup=(t,s)=>{const e=t,o=s.emit;return{proxy:k(e,o)}};var C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"grid gap-4 lg:grid-cols-2 xl:grid-cols-3"},t._l(t.options,function(o){return e("BaseLabel",{key:o.id,staticClass:"flex items-center space-x-1"},[e("BaseInput",{attrs:{type:"checkbox",value:o},model:{value:t.proxy,callback:function(a){t.proxy=a},expression:"proxy"}}),e("span",[t._v(t._s(o.code))])],1)}),1)},g=[];const u={};var $=p(r,C,g,!1,b,null,null,null);function b(t){for(let s in u)this[s]=u[s]}const B=function(){return $.exports}(),n={};n.setup=(t,s)=>{const e=x("id"),o=c.get(e),a=h(i(()=>o.data.value||[])),m=w.list(),_=i(()=>m.data.value||[]),f=F(),v=c.set(e);async function y(){await v.mutateAsync(a.value),f.success("Successfully updated frameworks.")}return{companyFrameworks:a,frameworks:_,save:y}};n.components=Object.assign({CompanyFrameworksInput:B,FormButton:d},n.components);var S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[t._v(" Company Frameworks ")]),e("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.save.apply(null,arguments)}}},[e("CompanyFrameworksInput",{attrs:{options:t.frameworks},model:{value:t.companyFrameworks,callback:function(o){t.companyFrameworks=o},expression:"companyFrameworks"}}),e("FormButton",{attrs:{action:"save"}})],1)],1)},A=[];const l={};var R=p(n,S,A,!1,j,null,null,null);function j(t){for(let s in l)this[s]=l[s]}const M=function(){return R.exports}();export{M as default};
