import{F as v}from"./FormButton.284fdcf6.js";import{A as d}from"./ApiTokenInput.1267e4c8.js";import{ax as g,d as m,n as _,ca as k,d6 as l,d7 as y,aF as T}from"./index.87a2880c.js";import{s as h}from"./index.50223927.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./arrow-top-right-on-square.b063d2af.js";import"./ApiKeyDescriptionDisplay.cc7d7754.js";const i={};i.props={value:{key:"value",required:!1,type:null}};i.setup=(t,e)=>{const n=t,o=e.emit,a=g(n,o);return{apiToken:m({get(){var c;const s=(c=n.value)==null?void 0:c.apiTokenMaybe;if((s==null?void 0:s.oneofKind)==="apiToken")return s.apiToken},set(s){s?a.value.apiTokenMaybe={oneofKind:"apiToken",apiToken:s}:a.value.apiTokenMaybe={oneofKind:void 0}}})}};i.components=Object.assign({ApiTokenInput:d},i.components);var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-8"},[n("ApiTokenInput",{model:{value:t.apiToken,callback:function(o){t.apiToken=o},expression:"apiToken"}})],1)},C=[];const p={};var x=_(i,b,C,!1,B,null,null,null);function B(t){for(let e in p)this[e]=p[e]}const $=function(){return x.exports}(),r={};r.setup=(t,e)=>{const n=k("id"),o=l.get(n),a=h(m(()=>o.data.value||y.create())),u=T(),s=l.set(n);async function c(){await s.mutateAsync(a.value),u.success("Successfully updated config.")}return{config:a,submit:c}};r.components=Object.assign({BitsightConfigInput:$,FormButton:v},r.components);var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseSimpleCard",{staticClass:"divide-y"},[n("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Configure Bitsight ")]),n("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)}}},[n("div",{staticClass:"p-4"},[n("BaseLabel",{staticClass:"space-y-1"},[n("span",[t._v("API Token:")]),n("BitsightConfigInput",{model:{value:t.config,callback:function(o){t.config=o},expression:"config"}})],1)],1),n("FormButton",{attrs:{action:"save"}})],1)],1)},A=[];const f={};var F=_(r,I,A,!1,S,null,null,null);function S(t){for(let e in f)this[e]=f[e]}const q=function(){return F.exports}();export{q as default};