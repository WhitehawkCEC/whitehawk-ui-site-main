import{P as f}from"./ParentPageWithTabbedMenuItems.70ffc230.js";import{bs as b,dc as g,n as d,b$ as a,c as u}from"./index.185cf2de.js";import{d as x,u as y}from"./index.9c1b677f.js";const r={};r.props={id:{key:"id",required:!0,type:String},subscriptionId:{key:"subscriptionId",required:!0,type:String},supplier:{key:"supplier",required:!0,type:null}};r.setup=(e,s)=>({});r.components=Object.assign({BackButton:b,TruckSvg:g},r.components);var S=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"},[t("BackButton"),t("div",{staticClass:"flex items-center space-x-2"},[t("div",{staticClass:"shrink-0 rounded-full bg-blue-900 p-2"},[t("TruckSvg",{staticClass:"h-auto w-6 text-white"})],1),t("div",{staticClass:"flex flex-col"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[e._v(" Subscription Supplier ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" "+e._s(e.supplier.name)+" ")])],1)])],1)},I=[];const p={};var h=d(r,S,I,!1,$,null,null,null);function $(e){for(let s in p)this[s]=p[s]}const k=function(){return h.exports}(),o={};o.setup=(e,s)=>{const t=a("id"),n=a("subscriptionId"),i=a("supplierId"),_=u(()=>x(i.value)),m=y.read(t,n,_),v=u(()=>{const c=`/admin/companies/${encodeURIComponent(t.value)}/subscriptions/${encodeURIComponent(n.value)}/suppliers/${encodeURIComponent(i.value)}`;return[{to:`${c}`,name:"Overview"},{to:`${c}/settings`,name:"Settings"}]});return{id:t,subscriptionId:n,supplierRead:m,links:v}};o.components=Object.assign({ParentPageWithTabbedMenuItems:f,SubscriptionSupplierIdHeader:k},o.components);var C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}},[t("BaseVueQuery",{attrs:{query:e.supplierRead},scopedSlots:e._u([{key:"success",fn:function(n){var i=n.data;return[t("SubscriptionSupplierIdHeader",{attrs:{id:e.id,"subscription-id":e.subscriptionId,supplier:i}})]}}])})],1)},R=[];const l={};var B=d(o,C,R,!1,P,null,null,null);function P(e){for(let s in l)this[s]=l[s]}const w=function(){return B.exports}();export{w as default};
