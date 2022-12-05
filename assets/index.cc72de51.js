import{b_ as g,c as v,aK as Q,aS as h,aP as S,aQ as M,n as q,bV as w,an as F,r as u,b$ as P,c0 as T,aF as B}from"./index.eb352f97.js";import{B as I}from"./BasicConfirmModal.cb2cf23f.js";import{A as k,T as D}from"./AppTanStackTable.2853a1f1.js";import{I as N}from"./IsoDateTimeDisplay.67fab97a.js";import{c as V}from"./createOnChangeFn.41be0cad.js";import{F as E}from"./FileSaver.min.cdb537ed.js";import{u as R}from"./createSimpleTable.581e9907.js";import"./BasicModal.00165be1.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.8b04df52.js";import"./chevron-up.736f4142.js";function j(e){switch(e){case g.QuestionnaireType.CANNED:return"Canned";case g.QuestionnaireType.CUSTOM:return"Custom";default:return"N/A"}}const d={};d.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};d.setup=(e,n)=>{const t=e,i=n.emit,p=v(()=>t.questionnaires),o=V(),r=Q(),f=[o.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),o.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),o.accessor("type",{header:()=>"Type",cell:s=>j(s.getValue()),enableColumnFilter:!1}),o.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),o.accessor(s=>{var a;return(a=s.meta)==null?void 0:a.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:s=>h(N,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:s})=>h(D,{props:{actions:[{id:"edit",action(){var a;r.push(`/admin/custom-questionnaires/${(a=s.original.id)==null?void 0:a.value}`)}},{id:"download",async action(){const{data:a}=await S(`${M}/${s.original.fileUrl}`,{responseType:"blob"}),_=`${s.original.name}-custom-questionnaire.xlsx`;E.exports.saveAs(a,_)}},{id:"delete",action(){s.original&&i("delete",s.original)}}]}})})];return{instance:R(p,f)}};d.components=Object.assign({AppTanStackTable:k},d.components);var L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AppTanStackTable",{attrs:{table:e.instance}})},U=[];const C={};var O=q(d,L,U,!1,G,null,null,null);function G(e){for(let n in C)this[n]=C[n]}const H=function(){return O.exports}(),m={};m.setup=(e,n)=>{const t=u(),i=u(),p=u("Doing so will affect the following questionnaires:"),o=u("You are not able to delete this questionnaire:"),r=u(!1);function f(l){var c;i.value=l,t.value=(c=l.id)==null?void 0:c.value,r.value=!0}const y=v(()=>{var l,c;return(c=(l=P.get(t==null?void 0:t.value).data)==null?void 0:l.value)==null?void 0:c.questionnairePreference}),s=T.list(),a=T.delete(),_=v(()=>s.data.value||[]),$=B();async function A(){if(i.value)await a.mutateAsync({questionnaireId:i.value.id}),b(),$.success(`Questionnaire  ${i.value.description} successfully deleted`);else throw new Error("Invalid request.")}function b(){r.value=!1}return{selected:i,message:p,deletionRestrictionMessage:o,isModalVisible:r,setPayload:f,affectedItemsGet:y,questionnaires:_,deleteQuestionnaire:A,closeModal:b}};m.components=Object.assign({BaseTablePageLayout:w,PlusSvg:F,QuestionnairesTable:H,BasicConfirmModal:I},m.components);var z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"new",append:""}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[t("QuestionnairesTable",{attrs:{questionnaires:e.questionnaires},on:{delete:e.setPayload}})]},proxy:!0}])}),e.isModalVisible&&e.selected?t("BasicConfirmModal",{attrs:{name:e.selected.name,message:e.message,"deletion-restriction-message":e.deletionRestrictionMessage,type:"Preference Questionnaires","items-affected":e.affectedItemsGet},on:{delete:e.deleteQuestionnaire,close:e.closeModal}}):e._e()],1)},K=[];const x={};var Y=q(m,z,K,!1,J,null,null,null);function J(e){for(let n in x)this[n]=x[n]}const le=function(){return Y.exports}();export{le as default};
