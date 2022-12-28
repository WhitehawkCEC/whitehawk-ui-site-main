import{R as N}from"./arrow-path.24b87f73.js";import{B as M,a as P,b as L,c as G,d as z,u as Q}from"./BundleSolutionInput.bee90787.js";import{B as H,d as J,c as W}from"./BlackKiteProgressBar.c0f52f45.js";import{C as X}from"./CollapsibleSection.d385cb59.js";import{n as f,ax as k,d as u,aP as I,aQ as R}from"./index.c629a7f0.js";import{A as Y}from"./AnalystSelect.f9a2b34f.js";import{S as Z}from"./StatusInput.9b7caa59.js";import{S as ee}from"./SupplierSelect.db8ae253.js";import{e as p}from"./attributeValue.ea53a720.js";import{T as te}from"./TemplateSelect.4dbc1966.js";const d={};d.props={value:{key:"value",required:!1,type:null}};d.setup=(e,a)=>({});d.components=Object.assign({BlackKiteDonut:H},d.components);var se=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.value?t("BlackKiteDonut",{attrs:{value:e.value.report}}):e._e()},ae=[];const T={};var re=f(d,se,ae,!1,oe,null,null,null);function oe(e){for(let a in T)this[a]=T[a]}const ne=function(){return re.exports}(),m={};m.props={value:{key:"value",required:!0,type:null}};m.setup=(e,a)=>{const t=e,s=a.emit;return{proxy:k(t,s)}};m.components=Object.assign({ComplianceSummaryEntryInput:ne},m.components);var le=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"grid items-center justify-center pt-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},e._l(e.proxy,function(s,r){return t("div",{key:r,staticClass:"mx-auto"},[t("ComplianceSummaryEntryInput",{model:{value:e.proxy[r],callback:function(c){e.$set(e.proxy,r,c)},expression:"proxy[key]"}})],1)}),0)},ie=[];const V={};var ce=f(m,le,ie,!1,pe,null,null,null);function pe(e){for(let a in V)this[a]=V[a]}const ue=function(){return ce.exports}(),y={};y.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},suppliers:{key:"suppliers",required:!0,type:Array},products:{key:"products",required:!0,type:Array}};y.setup=(e,a)=>{const t=e,s=a.emit,r=k(t,s),c=u(()=>t.users.filter(o=>p(o,"email").includes("@whitehawk")).map(o=>({id:p(o,"sub"),name:p(o,"name"),title:p(o,"custom:title"),email:p(o,"email")})).sort((o,n)=>o.email.localeCompare(n.email))),x=u(()=>{const o=[];for(const n of t.products)for(const i of n.categories)o.push(i);return Q(o,"id").sort((n,i)=>n.name.localeCompare(i.name))}),l=u(()=>{var n,i;const o=[];return(n=r.value.supplier)!=null&&n.id||o.push("Select a supplier"),((i=r.value.status)==null?void 0:i.state)==="DELIVERED"&&o.push('The status of this scorecard has already been marked as "Delivered."'),{allowed:o.length===0,reasons:o}});async function _(){var $;const[o,n]=await Promise.all([I.get(`${R}/random-bundle-solution`),I.get(`${R}/companies/${($=r.value.buyer.company)==null?void 0:$.id}/black-kite/entities/${r.value.supplier.id}/performance`)]),{BASIC:i,BALANCED:E,ADVANCED:O}=o.data,{cmmcAnalysis:w,reports:C,ratingScoreDetails:j,riskVectors:U,focusAreaOrder:S}=n.data,[g,b,h]=S,F=["NIST 800-53 R5","CIS CSC-20","CMMC 2.0","NIST 800-171"],B={};for(const A of C.compliance){const{StandardCode:D}=A;F.includes(D)&&(B[D]={report:A})}r.value.cmmcAnalysis=w,r.value.reports=C,r.value.ratingScore=j,r.value.riskVectors=U,r.value.focusAreas=[g,b,h],r.value.focusAreaOrder=S,r.value.bundle={BASIC:i[g],BALANCED:E[b],ADVANCED:O[h]},r.value.compliance=B,s("update-data")}return{proxy:r,analystOptions:c,productCategories:x,canUpdateData:l,updateData:_}};y.components=Object.assign({AnalystSelect:Y,SupplierSelect:ee,RefreshSvg:N,BlackKiteSummaryDescription:M,BlackKiteReportSummary:P,CollapsibleSection:X,BlackKiteReportRisk:J,BlackKiteRiskVectorsDisplay:W,BlackKiteFocusAreasInput:L,BlackKiteRiskVectorPerformance:G,BundleSolutionInput:z,ComplianceSummaryInput:ue,StatusInput:Z},y.components);var de=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"flex flex-col divide-y"},[t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Analyst Information ")]),t("AnalystSelect",{attrs:{options:e.analystOptions},model:{value:e.proxy.analyst,callback:function(s){e.$set(e.proxy,"analyst",s)},expression:"proxy.analyst"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" General Information ")]),t("SupplierSelect",{attrs:{options:e.suppliers},model:{value:e.proxy.supplier,callback:function(s){e.$set(e.proxy,"supplier",s)},expression:"proxy.supplier"}})],1),t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Update Data ")]),e.canUpdateData.allowed?e._e():t("BaseAlert",{attrs:{type:"warn"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Update Unavailable")]},proxy:!0},{key:"message",fn:function(){return[t("ul",{staticClass:"flex list-inside list-disc flex-col space-y-1"},e._l(e.canUpdateData.reasons,function(s){return t("li",{key:s},[e._v(" "+e._s(s)+" ")])}),0)]},proxy:!0}],null,!1,4159848379)}),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{type:"button",disabled:!e.canUpdateData.allowed},on:{click:e.updateData}},[t("RefreshSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1)],1),e.proxy.reports?t("div",[t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Summary Report ")]),t("div",{staticClass:"flex flex-col divide-y"},[t("BlackKiteSummaryDescription",{attrs:{score:parseInt(e.proxy.reports.summary.GradeOver100),date:e.proxy.reports.summary.LastUpdatedAt,description:e.proxy.ratingScore.description}}),t("div",{staticClass:"p-4"},[t("BlackKiteReportSummary",{attrs:{summary:e.proxy.reports.summary}})],1)],1),t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" FAIR Report ")])]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"p-4"},[t("BlackKiteReportRisk",{attrs:{risk:e.proxy.reports.risk}})],1)]},proxy:!0}],null,!1,3664726691)})],1)]):e._e(),t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Recommended Focus Areas ")]),e.proxy.riskVectors?t("div",{staticClass:"flex flex-col divide-y lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:grid-cols-3"},[t("div",{staticClass:"p-4"},[t("BlackKiteRiskVectorsDisplay",{model:{value:e.proxy.riskVectors,callback:function(s){e.$set(e.proxy,"riskVectors",s)},expression:"proxy.riskVectors"}})],1),t("BlackKiteFocusAreasInput",{attrs:{options:e.proxy.focusAreaOrder},model:{value:e.proxy.focusAreas,callback:function(s){e.$set(e.proxy,"focusAreas",s)},expression:"proxy.focusAreas"}})],1):e._e()],1),t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Risk Vector Performance ")])]},proxy:!0},{key:"content",fn:function(){return[t("BlackKiteRiskVectorPerformance",{model:{value:e.proxy.riskVectors,callback:function(s){e.$set(e.proxy,"riskVectors",s)},expression:"proxy.riskVectors"}})]},proxy:!0}])}),t("div",{staticClass:"flex flex-col"},[t("BundleSolutionInput",{attrs:{products:e.products,"product-categories":e.productCategories},model:{value:e.proxy.bundle,callback:function(s){e.$set(e.proxy,"bundle",s)},expression:"proxy.bundle"}})],1),t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Compliance ")]),e.proxy.compliance?t("ComplianceSummaryInput",{model:{value:e.proxy.compliance,callback:function(s){e.$set(e.proxy,"compliance",s)},expression:"proxy.compliance"}}):e._e()],1),t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Status ")]),t("StatusInput",{model:{value:e.proxy.status,callback:function(s){e.$set(e.proxy,"status",s)},expression:"proxy.status"}})],1)],1)},me=[];const K={};var ye=f(y,de,me,!1,ve,null,null,null);function ve(e){for(let a in K)this[a]=K[a]}const fe=function(){return ye.exports}(),v={};v.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},products:{key:"products",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array}};v.setup=(e,a)=>{const t=e,s=a.emit,r=k(t,s),c=u(()=>t.entities.map(l=>({id:l.CompanyId,name:l.CompanyName})).sort((l,_)=>l.name.localeCompare(_.name))||[]),x=u(()=>t.templates.map(({key:l})=>l));return{proxy:r,suppliers:c,templateOptions:x}};v.components=Object.assign({TemplateSelect:te,DataInput:fe},v.components);var xe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Template Information ")]),t("TemplateSelect",{attrs:{options:e.templateOptions},model:{value:e.proxy.template,callback:function(s){e.$set(e.proxy,"template",s)},expression:"proxy.template"}}),t("DataInput",{attrs:{users:e.users,suppliers:e.suppliers,products:e.products},model:{value:e.proxy.data,callback:function(s){e.$set(e.proxy,"data",s)},expression:"proxy.data"}})],1)},_e=[];const q={};var ke=f(v,xe,_e,!1,Ce,null,null,null);function Ce(e){for(let a in q)this[a]=q[a]}const Te=function(){return ke.exports}();export{Te as S};
