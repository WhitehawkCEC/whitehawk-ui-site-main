import{aB as i,n as l}from"./index.8f31c2ce.js";const n={};n.props={value:{key:"value",required:!0,type:null},tabs:{key:"tabs",required:!0,type:null}};n.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:i(t,r)}};var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"divide-y overflow-x-auto"},[t("div",{staticClass:"flex"},e._l(e.tabs,function(r){return t("label",{key:r,staticClass:"cursor-pointer px-6 pb-2 pt-3",class:e.value===r?"border-b-2 border-prime-navy text-prime-navy":"text-gray-500"},[t("BaseTypography",{staticClass:"capitalize",attrs:{variant:"p2"}},[e._v(" "+e._s(r)+" ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"hidden",attrs:{type:"radio"},domProps:{value:r,checked:e._q(e.proxy,r)},on:{change:function(o){e.proxy=r}}})],1)}),0),t("div",{staticClass:"p-4"},[e.value?e._t("content"):e._e()],2)])},p=[];const a={};var u=l(n,c,p,!1,v,null,null,null);function v(e){for(let s in a)this[s]=a[s]}const d=function(){return u.exports}();export{d as T};
