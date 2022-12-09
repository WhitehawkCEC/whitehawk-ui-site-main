import{b_ as T,c as y,aR as h,aO as S,aP as w,n as A,bV as M,am as I,b$ as q,r as c,c0 as P,aE as F}from"./index.4709eb08.js";import{B}from"./BasicConfirmModal.ba3856d4.js";import{A as k,T as D}from"./AppTanStackTable.d8b24e50.js";import{I as E}from"./IsoDateTimeDisplay.378a9664.js";import{c as N}from"./createOnChangeFn.1fa7fd09.js";import{F as V}from"./FileSaver.min.93b535d0.js";import{u as R}from"./createSimpleTable.17dc8a78.js";import"./BasicModal.ada1aee4.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.4517576d.js";import"./chevron-up.736f4142.js";function j(e){switch(e){case T.QuestionnaireType.CANNED:return"Canned";case T.QuestionnaireType.CUSTOM:return"Custom";default:return"N/A"}}const u={};u.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};u.setup=(e,n)=>{const s=e,p=n.emit,f=y(()=>s.questionnaires),a=N(),i=[a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),a.accessor("type",{header:()=>"Type",cell:t=>j(t.getValue()),enableColumnFilter:!1}),a.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),a.accessor(t=>{var o;return(o=t.meta)==null?void 0:o.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:t=>h(E,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:t})=>{var o;return h(D,{props:{actions:[{id:"edit",to:`/admin/custom-questionnaires/${(o=t.original.id)==null?void 0:o.value}`},{id:"download",async action(){var d;const{data:_}=await S(`${w}/custom-questionnaires/${(d=t.original.id)==null?void 0:d.value}/download`,{responseType:"blob"}),v=`${t.original.fileUrl}.xlsx`;V.exports.saveAs(_,v)}},{id:"delete",action(){t.original&&p("delete",t.original)}}]}})}})];return{instance:R(f,i)}};u.components=Object.assign({AppTanStackTable:k},u.components);var L=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("AppTanStackTable",{attrs:{table:e.instance}})},O=[];const C={};var U=A(u,L,O,!1,H,null,null,null);function H(e){for(let n in C)this[n]=C[n]}const z=function(){return U.exports}(),m={};m.setup=(e,n)=>{const s=q.list(),p=y(()=>s.data.value||[]),f=c("Doing so will affect the following questionnaires:"),a=c("You are not able to delete this questionnaire:"),i=c(!1),r=c(),t=c();function o(l){var g;r.value=l,t.value=(g=l.id)==null?void 0:g.value,i.value=!0}const _=P.get(t),v=y(()=>{var l;return((l=_.data.value)==null?void 0:l.questionnairePreference)||[]}),d=F(),$=q.delete();async function Q(){if(r.value)await $.mutateAsync({questionnaireId:r.value.id}),b(),d.success("Questionnaire successfully deleted");else throw new Error("Invalid request.")}function b(){i.value=!1}return{questionnaires:p,message:f,deletionRestrictionMessage:a,isModalVisible:i,selected:r,setPayload:o,affectedItems:v,deleteQuestionnaire:Q,closeModal:b}};m.components=Object.assign({BaseTablePageLayout:M,PlusSvg:I,QuestionnairesTable:z,BasicConfirmModal:B},m.components);var G=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"new",append:""}},[s("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),s("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("QuestionnairesTable",{attrs:{questionnaires:e.questionnaires},on:{delete:e.setPayload}})]},proxy:!0}])}),e.isModalVisible&&e.selected?s("BasicConfirmModal",{attrs:{name:e.selected.name,message:e.message,"deletion-restriction-message":e.deletionRestrictionMessage,type:"Preference Questionnaires","items-affected":e.affectedItems},on:{delete:e.deleteQuestionnaire,close:e.closeModal}}):e._e()],1)},Y=[];const x={};var J=A(m,G,Y,!1,K,null,null,null);function K(e){for(let n in x)this[n]=x[n]}const le=function(){return J.exports}();export{le as default};
