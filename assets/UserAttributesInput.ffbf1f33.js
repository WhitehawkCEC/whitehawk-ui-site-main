import{I as i,A as l}from"./InternationalPhoneNumberInput.ded47362.js";import{D as c}from"./DynamicForm.1119b985.js";import{aB as p,az as d,n as _}from"./index.bf67f21b.js";const n={};n.props={value:{key:"value",required:!0,type:null}};n.setup=(e,t)=>{const a=e,o=t.emit,r=p(a,o),u=[{name:"name",label:"Full Name",component:{is:"BaseInput",attrs:{autocomplete:"name",required:!0}}},{name:"email",label:"Business Email",component:{is:"BaseInput",attrs:{type:"email",autocomplete:"email",required:!0}}},{name:"company_name",label:"Company Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"website_url",label:"Company URL",component:{is:"BaseInput",attrs:{required:!0}}},{name:"custom:title",label:"Title",component:{is:"BaseInput",attrs:{required:!0}}},{name:"phone_number",label:"Phone Number",component:{is:i}},{name:"address",label:"Address",component:{is:l}},{name:"comments",label:"Message",component:{is:"BaseTextarea",attrs:{required:!0}}}];return d(()=>a.value,s=>{s&&(r.value.customer_id=s.customer_id,r.value.product_id=s.product_id,r.value.quantity=s.quantity)},{immediate:!0}),{proxy:r,schema:u}};n.components=Object.assign({DynamicForm:c},n.components);var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(o){e.proxy=o},expression:"proxy"}})},b=[];const m={};var v=_(n,y,b,!1,f,null,null,null);function f(e){for(let t in m)this[t]=m[t]}const q=function(){return v.exports}();export{q as U};