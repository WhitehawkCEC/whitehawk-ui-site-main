import{F as d}from"./FormButton.443a6555.js";import{B as f}from"./BackButton.e90e26bd.js";import{bJ as v,n as c,bX as i,aY as b,aF as g,aI as y}from"./index.7b120442.js";import{S as h}from"./SlugInput.37cc2689.js";import{d as B}from"./index.1c2548e9.js";import{u as S}from"./useAccountSubscriptionGroups.35cbc1f4.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./chevron-left.0808b01b.js";import"./FormValidation.907ef868.js";import"./DynamicForm.54ce95a5.js";const C=[{name:"id",label:"ID",component:{is:h,attrs:{required:!0}}},{name:"name",label:"Name",component:{is:v,attrs:{required:!0}}}],I=B(C);let x,F;const a={};var $=c(I,x,F,!1,k,null,null,null);function k(t){for(let n in a)this[n]=a[n]}const E=function(){return $.exports}(),s={};s.setup=(t,n)=>{const e=i("id"),o=i("subscriptionId"),r=b({id:{value:""},name:""}),p=S.create(e,o),l=g(),m=y();async function _(){await p.mutateAsync({group:r.value}),l.success("Created group"),m.push({path:`../${r.value.id.value}`,append:!0})}return{id:e,subscriptionId:o,groupEdit:r,submit:_}};s.components=Object.assign({BackButton:f,SubscriptionGroupInput:E,FormButton:d},s.components);var R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"space-y-6"},[e("BackButton",{attrs:{link:`/admin/companies/${t.id}/subscriptions/${t.subscriptionId}/groups`}}),e("BaseSimpleCard",{staticClass:"divide-y overflow-hidden"},[e("BaseTypography",{staticClass:"block p-4",attrs:{variant:"subtitle3"}},[t._v(" Create Subscription Group ")]),e("form",{staticClass:"divide-y",on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)}}},[e("SubscriptionGroupInput",{model:{value:t.groupEdit,callback:function(o){t.groupEdit=o},expression:"groupEdit"}}),e("FormButton",{attrs:{action:"create"}})],1)],1)],1)},G=[];const u={};var j=c(s,R,G,!1,w,null,null,null);function w(t){for(let n in u)this[n]=u[n]}const Y=function(){return j.exports}();export{Y as default};
