import{D as p}from"./DynamicForm.461a2b0a.js";import{W as m,c as l,i as u,n as _}from"./index.d7842beb.js";const n={};n.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};n.setup=(e,t)=>{const o=e,r=t.emit,c=m(o,r),i=l(()=>[{name:"domain",label:"Domain",component:{is:"BaseInput",attrs:{required:!0}}},{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"licenseType",label:"License Type",component:{is:u,attrs:{required:!0,options:[...o.options.map(s=>({text:s,value:s}))]}}}]);return{proxy:c,schema:i}};n.components=Object.assign({DynamicForm:p},n.components);var y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}})},d=[];const a={};var f=_(n,y,d,!1,v,null,null,null);function v(e){for(let t in a)this[t]=a[t]}const b=function(){return f.exports}();export{b as P};
