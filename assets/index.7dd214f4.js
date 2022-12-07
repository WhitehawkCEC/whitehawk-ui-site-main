import{c as p,aS as x,n as S,an as $,c8 as g,r as _,d0 as v,aF as C}from"./index.99fb95af.js";import{B as P}from"./BasicConfirmModal.1dd58788.js";import{A as T,T as Q}from"./AppTanStackTable.544ccedd.js";import{c as q}from"./createOnChangeFn.49edfed1.js";import{u as A}from"./createSimpleTable.09673503.js";import"./BasicModal.c59295b6.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.048025e9.js";import"./chevron-up.736f4142.js";const c={};c.props={accountId:{key:"accountId",required:!0,type:String},value:{key:"value",required:!0,type:Array}};c.setup=(e,t)=>{const n=e,o=t.emit,i=p(()=>n.accountId),u=p(()=>n.value),r=q(),d=[r.accessor(s=>{var a;return(a=s.questionnaire)==null?void 0:a.questionnaireName},{id:"questionnaireName",header:()=>"Questionnaire",enableColumnFilter:!1}),r.accessor(s=>{var a;return(a=s.bundleSet)==null?void 0:a.bundleSetName},{id:"bundleSetName",header:()=>"Bundle Set",enableColumnFilter:!1}),r.accessor(s=>s.preferenceDescription,{id:"description",header:()=>"Description",enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:s})=>{var a;return x(Q,{props:{actions:[{id:"edit",to:`/admin/companies/${i.value}/settings/questionnaires/${(a=s.original.preferenceId)==null?void 0:a.value}`},{id:"delete",action(){s.original&&o("delete",s.original)}}]}})}})];return{instance:A(u,d)}};c.components=Object.assign({AppTanStackTable:T},c.components);var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},k=[];const y={};var B=S(c,M,k,!1,F,null,null,null);function F(e){for(let t in y)this[t]=y[t]}const D=function(){return B.exports}(),l={};l.setup=(e,t)=>{const n=g("id"),o=_(),i=_(!1);function u(h){o.value=h,i.value=!0}const r=v.list(n),d=p(()=>r.data.value||[]),f=v.delete(n),s=C();async function a(){if(o.value)await f.mutateAsync(o.value),m(),s.success(`Questionnaire  ${o.value.preferenceDescription} successfully deleted`);else throw new Error("Invalid request.")}function m(){i.value=!1}return{id:n,selected:o,isModalVisible:i,setPayload:u,preferences:d,deleteQuestionnaire:a,closeModal:m}};l.components=Object.assign({PlusSvg:$,QuestionnairePreferencesTable:D,BasicConfirmModal:P},l.components);var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Company Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"space-x-1",attrs:{to:"new",append:""}},[n("PlusSvg",{staticClass:"w-5"}),n("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("QuestionnairePreferencesTable",{attrs:{"account-id":e.id,value:e.preferences},on:{delete:e.setPayload}})]},proxy:!0}])}),e.isModalVisible&&e.selected?n("BasicConfirmModal",{attrs:{name:e.selected.preferenceDescription},on:{delete:e.deleteQuestionnaire,close:e.closeModal}}):e._e()],1)},N=[];const b={};var j=S(l,I,N,!1,w,null,null,null);function w(e){for(let t in b)this[t]=b[t]}const K=function(){return j.exports}();export{K as default};