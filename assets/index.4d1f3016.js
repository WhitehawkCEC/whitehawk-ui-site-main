import{F as g}from"./FormButton.105c370d.js";import{L as k,bs as w,ca as d,c7 as D,d as n,cG as R,aF as A,aK as F,du as K,n as $}from"./index.5987d026.js";import{A as T}from"./AccountCreateInputInDepthBlackKiteCmmcV2Input.684f7f61.js";import{u as E}from"./useCompanyScorecardTemplates.7eef29ab.js";import{u as L}from"./useUsers.5de5cf24.js";import{e as c}from"./attributeValue.ea53a720.js";import{s as M}from"./index.69b58fd2.js";import{b as V}from"./index.ef59d86f.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./arrow-path.24b87f73.js";import"./CollapsibleSection.be80fc6d.js";import"./_baseIteratee.58f5c353.js";import"./_Uint8Array.52779f33.js";import"./keys.ff2b10cf.js";import"./_baseIsEqual.31d667c1.js";import"./_arrayMap.dcea68f3.js";import"./lodash.5e055760.js";import"./index.b5740f78.js";import"./index.ebbce841.js";import"./ToolTip.e4e13e40.js";import"./GradeLetterDisplay.3e92f7f2.js";import"./ratingScoreDescription.3b48b1ea.js";import"./ObjectDisplay.99639dd4.js";import"./StatusInput.d5d31f9d.js";import"./DynamicForm.33bee6e9.js";import"./useProducts.c26f3762.js";import"./useScorecardTemplates.eee77497.js";import"./useBlackKiteEntities.e9b05e0a.js";const i={};i.setup=(a,r)=>{const t=d("id"),s=d("subscriptionId"),m=L.list(),u=D.read(t),v=E.get(t),y=n(()=>{if(u.data.value){const{id:o,name:e}=u.data.value;return{id:o,name:e}}}),_=n(()=>{var o;return(o=m.data.value)==null?void 0:o.map(e=>({id:{value:c(e,"sub")},name:c(e,"name")||"",title:c(e,"custom:title")||"",email:c(e,"email"),phone:c(e,"phone_number")||""})).find(e=>e.email==="consultingservices@whitehawk.com")}),l=new Date,h=l.getUTCFullYear(),I=`Q${Math.ceil((l.getMonth()+1)/4)}`,p=M(n(()=>{var o;return{template:{value:((o=v.data.value)==null?void 0:o.split("/")[1])||""},data:{buyer:{company:y.value},analyst:_.value,status:{state:R.State.IN_PROGRESS,year:h,quarter:V(I)}}}})),b=n(()=>Boolean(m.data.value&&u.data.value)),C=A(),S=F(),x=K.create(t,s);async function B(){if(p.value){const o={scorecardInput:{oneofKind:"bk",bk:p.value}},{response:e}=await x.mutateAsync(o);e.scorecardId&&(C.success("Successfully created scorecard."),S.push(`/admin/companies/${t.value}/subscriptions/${s.value}/integrations/2/scorecards/in-depth/${e.scorecardId.value}`))}}return{accountId:t,scorecard:p,ready:b,createScorecard:B}};i.components=Object.assign({LoadingSpinner:k,BackButton:w,AccountCreateInputInDepthBlackKiteCmmcV2Input:T,FormButton:g},i.components);var j=function(){var a=this,r=a.$createElement,t=a._self._c||r;return a.ready?t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("div",{staticClass:"flex flex-col -space-y-1"},[t("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[a._v(" Black Kite ")]),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[a._v(" In-Depth Scorecard ")])],1)],1),t("BaseSimpleCard",[t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),a.createScorecard.apply(null,arguments)}}},[t("AccountCreateInputInDepthBlackKiteCmmcV2Input",{attrs:{"account-id":a.accountId},model:{value:a.scorecard,callback:function(s){a.scorecard=s},expression:"scorecard"}}),t("FormButton",{attrs:{action:"create"}})],1)])],1):t("LoadingSpinner")},q=[];const f={};var G=$(i,j,q,!1,N,null,null,null);function N(a){for(let r in f)this[r]=f[r]}const ht=function(){return G.exports}();export{ht as default};
