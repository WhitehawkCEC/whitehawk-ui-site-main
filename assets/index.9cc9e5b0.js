import{F as y}from"./FormButton.51c30109.js";import{S}from"./SubscriptionPartialUpdateRequestInput.49020063.js";import{b$ as p,c5 as l,aZ as I,aA as h,c as x,aI as C,aF as R,n as g}from"./index.70bf5aa2.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./SlugInput.34e3791d.js";import"./FormValidation.fcce8505.js";import"./index.8ffa1277.js";import"./DynamicForm.bba0b850.js";const i={};i.setup=(t,n)=>{const e=p("id"),a=p("subscriptionId"),m=l.read(e,a),o=I();h(()=>m.data.value,s=>{s&&(o.value={accountId:s.accountId,subscriptionId:s.subscriptionId,name:s.name})},{immediate:!0});const f=x(()=>{var r,u;const s=o.value;return Boolean(s&&((r=s.subscriptionId)==null?void 0:r.value)&&s.name&&((u=s.accountId)==null?void 0:u.value))}),v=C(),_=l.update(e,a),c=R();async function b(){if(o.value){const{response:s}=await _.mutateAsync(o.value);s?(c.success("Successfully updated subscription."),v.push(`/client/companies/${e.value}/subscriptions`)):c.error("Something went wrong.")}}return{update:o,isValid:f,updateSubscription:b}};i.components=Object.assign({SubscriptionPartialUpdateRequestInput:S,FormButton:y},i.components);var B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"space-y-6"},[e("BaseSimpleCard",{staticClass:"divide-y"},[e("BaseTypography",{staticClass:"p-4",attrs:{component:"h4",variant:"subtitle3"}},[t._v(" Update Subscription Name ")]),e("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),t.updateSubscription.apply(null,arguments)}}},[t.update?e("SubscriptionPartialUpdateRequestInput",{model:{value:t.update,callback:function(a){t.update=a},expression:"update"}}):t._e(),e("FormButton",{attrs:{action:"update","is-valid-form":t.isValid}})],1)],1)],1)},F=[];const d={};var U=g(i,B,F,!1,A,null,null,null);function A(t){for(let n in d)this[n]=d[n]}const E=function(){return U.exports}();export{E as default};