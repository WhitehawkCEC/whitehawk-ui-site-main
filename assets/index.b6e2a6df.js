import{bY as u,c as d,aI as h,aF as g,bZ as _,aS as l,aP as q,aQ as C,n as f,bT as S,ao as A}from"./index.6b53b582.js";import{A as $,T as F}from"./AppTanStackTable.ba8406a0.js";import{I as Q}from"./IsoDateTimeDisplay.ce26933c.js";import{c as w}from"./createOnChangeFn.50c11d3a.js";import{F as k}from"./FileSaver.min.39fe1100.js";import{u as N}from"./createSimpleTable.7eac68ab.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.17b4ec8d.js";import"./chevron-up.736f4142.js";function B(e){switch(e){case u.QuestionnaireType.CANNED:return"Canned";case u.QuestionnaireType.CUSTOM:return"Custom";default:return"N/A"}}const r={};r.props={questionnaires:{key:"questionnaires",required:!0,type:Array}};r.setup=(e,t)=>{const n=e,c=d(()=>n.questionnaires),o=w(),y=h(),v=g(),b=_.delete(),T=[o.accessor("name",{header:()=>"Name",enableColumnFilter:!1}),o.accessor("industry",{header:()=>"Industry",enableColumnFilter:!1}),o.accessor("type",{header:()=>"Type",cell:s=>B(s.getValue()),enableColumnFilter:!1}),o.accessor("description",{header:()=>"Description",enableColumnFilter:!1}),o.accessor(s=>{var a;return(a=s.meta)==null?void 0:a.updatedAt},{id:"updatedAt",header:()=>"Updated At",cell:s=>l(Q,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:s})=>l(F,{props:{actions:[{id:"edit",action(){var a;y.push(`/admin/custom-questionnaires/${(a=s.original.id)==null?void 0:a.value}`)}},{id:"download",async action(){const{data:a}=await q(`${C}/${s.original.fileUrl}`,{responseType:"blob"}),x=`${s.original.name}-custom-questionnaire.xlsx`;k.exports.saveAs(a,x)}},{id:"delete",async action(){await b.mutateAsync({questionnaireId:s.original.id}),v.success("Successfully deleted custom questionnaire.")}}]}})})];return{instance:N(c,T)}};r.components=Object.assign({AppTanStackTable:$},r.components);var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTanStackTable",{attrs:{table:e.instance}})},I=[];const p={};var P=f(r,D,I,!1,j,null,null,null);function j(e){for(let t in p)this[t]=p[t]}const E=function(){return P.exports}(),i={};i.setup=(e,t)=>{const n=_.list();return{questionnaires:d(()=>n.data.value||[])}};i.components=Object.assign({BaseTablePageLayout:S,PlusSvg:A,QuestionnairesTable:E},i.components);var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Questionnaires")]},proxy:!0},{key:"button",fn:function(){return[n("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:"new",append:""}},[n("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),n("span",[e._v("Questionnaire")])],1)]},proxy:!0},{key:"table",fn:function(){return[n("QuestionnairesTable",{attrs:{questionnaires:e.questionnaires}})]},proxy:!0}])})},L=[];const m={};var M=f(i,U,L,!1,O,null,null,null);function O(e){for(let t in m)this[t]=m[t]}const X=function(){return M.exports}();export{X as default};
