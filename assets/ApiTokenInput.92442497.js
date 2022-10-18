import{A as r,E as c}from"./index.2ace0c79.js";import{aB as p,c as u,n as m}from"./index.0665c8ce.js";const a={};a.props={value:{key:"value",required:!1,type:null}};a.setup=(s,t)=>{const e=s,i=t.emit,l=p(e,i);return{apiTokenValue:u({get(){var n;return((n=e.value)==null?void 0:n.value)||""},set(n){l.value={value:n}}}),description:{label:"The Bitsight API Token consists of:",items:["40 characters","Lowercase letters (a-z)","Numbers (0-9)"],example:"a9k1sdzwqr1bqmktj0xyzh1isp5leylpnkyj1kze"}}};a.components=Object.assign({ApiKeyDescriptionDisplay:r,ExternalLinkSvg:c},a.components);var v=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"flex flex-col space-y-4"},[e("ApiKeyDescriptionDisplay",{attrs:{value:s.description}}),e("BaseExternalLink",{staticClass:"space-x-2",attrs:{"display-type":"primary",href:"https://service.bitsighttech.com/app/spm/account/"}},[e("ExternalLinkSvg",{staticClass:"h-auto w-5 shrink-0"}),e("span",[s._v("Find my token")])],1),e("div",{staticClass:"flex flex-col sm:col-span-2"},[e("BaseInput",{staticClass:"w-full",model:{value:s.apiTokenValue,callback:function(i){s.apiTokenValue=i},expression:"apiTokenValue"}})],1)],1)},f=[];const o={};var k=m(a,v,f,!1,_,null,null,null);function _(s){for(let t in o)this[t]=o[t]}const T=function(){return k.exports}();export{T as A};
