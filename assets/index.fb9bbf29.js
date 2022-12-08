import{b_ as g,c as m,aR as T,aO as Q,aP as S,n as q,bV as M,am as w,r as u,b$ as P,c0 as h,aE as F}from"./index.f9aabd94.js";import{B}from"./BasicConfirmModal.d8d9a1ae.js";import{A as D,T as I}from"./AppTanStackTable.5da2a33c.js";import{I as k}from"./IsoDateTimeDisplay.79c29231.js";import{c as E}from"./createOnChangeFn.826f72eb.js";import{F as N}from"./FileSaver.min.cb9cac21.js";import{u as V}from"./createSimpleTable.a2a2ef51.js";import"./BasicModal.c564ea4e.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.b5ac7a01.js";import"./chevron-up.736f4142.js";function R(e){switch(e){case g.QuestionnaireType.CANNED:return"Canned";case g.QuestionnaireType.CUSTOM:return"Custom";default:return"N/A"}}const d={};d.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};d.setup=(e,n)=>{const t=e,o=n.emit,f=m(()=>t.questionnaires),a=E(),r=[a.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),a.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),a.accessor("type",{header:()=>"Type",cell:s=>R(s.getValue()),enableColumnFilter:!1}),a.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),a.accessor(s=>{var i;return(i=s.meta)==null?void 0:i.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:s=>T(k,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),a.display({id:"actions",header:"Actions",cell:({row:s})=>{var i;return T(I,{props:{actions:[{id:"edit",to:`/admin/custom-questionnaires/${(i=s.original.id)==null?void 0:i.value}`},{id:"download",async action(){const{data:_}=await Q(`${S}/${s.original.fileUrl}`,{responseType:"blob"}),v=`${s.original.name}-custom-questionnaire.xlsx`;N.exports.saveAs(_,v)},isDisabled:m(()=>!0)},{id:"delete",action(){s.original&&o("delete",s.original)}}]}})}})];return{instance:V(f,r)}};d.components=Object.assign({AppTanStackTable:D},d.components);var j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},L=[];const C={};var O=q(d,j,L,!1,U,null,null,null);function U(e){for(let n in C)this[n]=C[n]}const G=function(){return O.exports}(),p={};p.setup=(e,n)=>{const t=u(),o=u(),f=u("Doing so will affect the following questionnaires:"),a=u("You are not able to delete this questionnaire:"),r=u(!1);function y(l){var c;o.value=l,t.value=(c=l.id)==null?void 0:c.value,r.value=!0}const s=m(()=>{var l,c;return(c=(l=P.get(t==null?void 0:t.value).data)==null?void 0:l.value)==null?void 0:c.questionnairePreference}),i=h.list(),_=h.delete(),v=m(()=>i.data.value||[]),$=F();async function A(){if(o.value)await _.mutateAsync({questionnaireId:o.value.id}),b(),$.success(`Questionnaire  ${o.value.description} successfully deleted`);else throw new Error("Invalid request.")}function b(){r.value=!1}return{selected:o,message:f,deletionRestrictionMessage:a,isModalVisible:r,setPayload:y,affectedItemsGet:s,questionnaires:v,deleteQuestionnaire:A,closeModal:b}};p.components=Object.assign({BaseTablePageLayout:M,PlusSvg:w,QuestionnairesTable:G,BasicConfirmModal:B},p.components);var H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"new",append:""}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("QuestionnairesTable",{attrs:{questionnaires:e.questionnaires},on:{delete:e.setPayload}})]},proxy:!0}])}),e.isModalVisible&&e.selected?t("BasicConfirmModal",{attrs:{name:e.selected.name,message:e.message,"deletion-restriction-message":e.deletionRestrictionMessage,type:"Preference Questionnaires","items-affected":e.affectedItemsGet},on:{delete:e.deleteQuestionnaire,close:e.closeModal}}):e._e()],1)},z=[];const x={};var Y=q(p,H,z,!1,J,null,null,null);function J(e){for(let n in x)this[n]=x[n]}const re=function(){return Y.exports}();export{re as default};