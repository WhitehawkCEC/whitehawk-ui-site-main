import{as as l,c as r,cc as n,n as u}from"./index.d7842beb.js";import{I as m}from"./IsoDateTimeDisplay.0ee36ac5.js";const a={};a.props={value:{key:"value",required:!0,type:null}};a.setup=(e,s)=>{const t=e,c=r(()=>t.value.start||n.IsoDateTime.create()),i=r(()=>t.value.end||n.IsoDateTime.create());return{start:c,end:i}};a.components=Object.assign({IsoDateTimeDisplay:m,ArrowRightSvg:l},a.components);var p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"flex items-center space-x-2"},[t("IsoDateTimeDisplay",{attrs:{format:"date",value:e.start}}),t("ArrowRightSvg",{staticClass:"h-auto w-4"}),t("IsoDateTimeDisplay",{attrs:{format:"date",value:e.end}})],1)},_=[];const o={};var v=u(a,p,_,!1,f,null,null,null);function f(e){for(let s in o)this[s]=o[s]}const g=function(){return v.exports}();export{g as D};
