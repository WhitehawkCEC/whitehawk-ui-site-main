import{ay as n,n as c}from"./index.7b120442.js";const s={};s.props={value:{key:"value",required:!0,type:null}};s.setup=(e,o)=>{const a=e,t=o.emit;return{proxy:n(a,t),fields:[{label:"Street Address",name:"street_address",type:"textarea",autocomplete:"street-address",wide:!0},{label:"City",name:"locality",autocomplete:"address-level2"},{label:"State/Region",name:"region",autocomplete:"address-level1"},{label:"Postal Code",name:"postal_code",autocomplete:"postal-code"},{label:"Country",name:"country",autocomplete:"country"},{label:"Formatted Address",name:"formatted",type:"textarea",autocomplete:"formatted",wide:!0}]}};var m=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"grid gap-2 lg:grid-cols-3"},e._l(e.fields,function(t){return a("BaseLabel",{key:t.label,staticClass:"space-y-1",class:t.wide?"lg:col-span-3":""},[a("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" "+e._s(t.label)+" ")]),t.type==="textarea"?a("BaseTextarea",{staticClass:"block w-full text-sm font-medium leading-5 text-gray-700",attrs:{placeholder:t.placeholder,autocomplete:t.autocomplete},model:{value:e.proxy[t.name],callback:function(l){e.$set(e.proxy,t.name,l)},expression:"proxy[field.name]"}}):a("BaseInput",{staticClass:"w-full text-sm font-medium leading-5 text-gray-700",attrs:{placeholder:t.placeholder,autocomplete:t.autocomplete},model:{value:e.proxy[t.name],callback:function(l){e.$set(e.proxy,t.name,l)},expression:"proxy[field.name]"}})],1)}),1)},p=[];const r={};var u=c(s,m,p,!1,d,null,null,null);function d(e){for(let o in r)this[o]=r[o]}const x=function(){return u.exports}();export{x as A};
