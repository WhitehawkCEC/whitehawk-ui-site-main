import{bR as u,d as a,n as p}from"./index.87a2880c.js";import{b as d}from"./FormValidation.a5e2f641.js";const o={};o.props={value:{key:"value",required:!1,type:null},isReadonly:{key:"isReadonly",required:!1,type:Boolean}};o.setup=(e,n)=>{const r=e,s=n.emit,c=a({get(){var t;return(t=r.value)==null?void 0:t.value},set(t){s("input",t?{value:t}:void 0)}}),i=a(()=>r.isReadonly);return{checkSlug:d,proxy:c,readonly:i}};o.components=Object.assign({BaseInputWithValidation:u},o.components);var v=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("BaseInputWithValidation",{attrs:{validator:e.checkSlug,readonly:e.readonly},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},_=[];const l={};var m=p(o,v,_,!1,y,null,null,null);function y(e){for(let n in l)this[n]=l[n]}const g=function(){return m.exports}();export{g as S};