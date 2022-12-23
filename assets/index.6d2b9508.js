import{F as $e}from"./FormButton.632b2021.js";import{df as be,aB as x,d as u,n as d,dg as C,dh as _,b1 as z,ah as he,aP as ge,aQ as Ce,ax as ve,cp as Ae,L as Re,bs as Ee,c7 as Z,di as Ie,c4 as Be,aF as De,aK as qe,dj as Oe}from"./index.c94f3a51.js";import{S as Ve}from"./arrow-path.5187a52b.js";import{T as je}from"./TransitionExpand.36fdeb72.js";import{d as Fe,C as Te,b as Ne,c as Pe,B as Me,a as we}from"./ComplianceSummaryInput.6e5c7292.js";import{l as Qe}from"./lodash.8c7e5ccd.js";import{t as Ue,a as Ke,b as Le,c as I,d as Ge}from"./index.200776c5.js";import{C as ye}from"./CollapsibleSection.783a07bc.js";import{c as Ye,d as Je}from"./BlackKiteProgressBar.44d25366.js";import{T as _e}from"./ToolTip.bdbafabe.js";import{O as xe}from"./ObjectDisplay.190fef1a.js";import{e as k}from"./attributeValue.ea53a720.js";import{D as ze}from"./DynamicForm.770d20f9.js";import{u as He}from"./useCompanyScorecardTemplates.8b0e228c.js";import{u as We}from"./useScorecardTemplates.21da2af6.js";import{u as Xe}from"./useBlackKiteEntities.3908ca5d.js";import{u as Ze}from"./useUsers.005c0bed.js";import{s as et}from"./index.adb65b34.js";import"./arrow-down-on-square.bf61cdc5.js";import"./trash.78f57a7a.js";import"./GradeLetterDisplay.9ec6eff8.js";import"./ratingScoreDescription.3b48b1ea.js";import"./_baseIteratee.e3cc5f4d.js";import"./_Uint8Array.9bcecd38.js";import"./keys.6fcd6fd0.js";import"./_baseIsEqual.766e87e5.js";import"./_arrayMap.dcea68f3.js";import"./index.ebbce841.js";function tt(e){return e.map(r=>{var t,s;return{id:((t=r.id)==null?void 0:t.value)||"",name:r.name,description:r.description,manufacturer:rt(r.manufacturer),type:st(r.type),features:nt(r.features),categories:at(r.categories),reseller:{name:((s=r.reseller)==null?void 0:s.name)||""},price:r.price}})}function rt(e){var r;if(e===void 0)throw new Error("undefined manufacturer");return{id:((r=e.id)==null?void 0:r.value)||"",name:e.name}}function st(e){var r;if(e===void 0)throw new Error("undefined manufacturer");return{id:((r=e.id)==null?void 0:r.value)||"",name:e.name}}function nt(e){return e.map(r=>{var t;return{id:((t=r.id)==null?void 0:t.value)||"",name:r.name}})}function at(e){return e.map(r=>{var t;return{id:((t=r.id)==null?void 0:t.value)||"",name:r.name}})}function A(e){return e===void 0?be.BundleSolutionEntry.create():{title:e.title,description:e.description,groups:ot(e.groups)}}function ot(e){return e.map(({category:r,main:t,option:s})=>({category:{id:{value:r.id},name:r.name},main:{id:{value:(t==null?void 0:t.id)||""},name:(t==null?void 0:t.name)||"",description:t==null?void 0:t.description,manufacturer:{id:{value:(t==null?void 0:t.manufacturer.id)||""},name:(t==null?void 0:t.manufacturer.name)||""},categories:ct(t==null?void 0:t.categories)},option:{id:{value:(s==null?void 0:s.id)||""},name:(s==null?void 0:s.name)||"",description:s==null?void 0:s.description,manufacturer:{id:{value:(s==null?void 0:s.manufacturer.id)||""},name:(s==null?void 0:s.manufacturer.name)||""},categories:[]}}))}function ct(e){if(e===void 0)throw new Error("Product Category is undefined");return e.map(({id:r,name:t})=>({id:{value:r},name:t}))}function lt(e){const r=[];for(const t of Object.values(e))r.push({domain:Ue(t.displayValue),domainDisplayValue:t.displayValue,levels:it(t.levels)});return r}function it(e){const r=[];for(const[t,s]of Object.entries(e))r.push({level:Ke(t),averageStarLevel:s.averageStarLevel});return r}const B={};B.props={value:{key:"value",required:!1,type:null},products:{key:"products",required:!0,type:Array},random:{key:"random",required:!0,type:null},performance:{key:"performance",required:!0,type:null}};B.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u({get(){const{BASIC:o,BALANCED:c,ADVANCED:p}=t.random,[b,h,m]=t.performance.focusAreaOrder;if(b&&h&&m){const v=o[b],S=c[h],$=p[m];if(v&&S&&$)return{BASIC:v,BALANCED:S,ADVANCED:$}}},set(o){o&&(n.value={essential:A(o.BASIC),balanced:A(o.BALANCED),premier:A(o.ADVANCED)})}}),a=u(()=>tt(t.products)),i=u(()=>{const o=[];for(const c of a.value)for(const p of c.categories)o.push(p);return Qe.exports.uniqBy(o,"id").sort((c,p)=>c.name.localeCompare(p.name))});return{bundle:l,converted:a,productCategories:i}};B.components=Object.assign({BundleSolutionInput:Fe},B.components);var ut=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BundleSolutionInput",{attrs:{products:e.converted,"product-categories":e.productCategories},model:{value:e.bundle,callback:function(s){e.bundle=s},expression:"bundle"}})},pt=[];const ee={};var mt=d(B,ut,pt,!1,dt,null,null,null);function dt(e){for(let r in ee)this[r]=ee[r]}const ft=function(){return mt.exports}(),D={};D.props={value:{key:"value",required:!0,type:null},performance:{key:"performance",required:!0,type:null}};D.setup=(e,r)=>{const t=["NIST 800-53 R5","CIS CSC-20","CMMC 2.0","NIST 800-171"],s=e,n=r.emit,l=x(s,n);return{compliance:u({get(){if(s.performance){const{compliance:i}=s.performance.reports,o={};for(const c of i){const{StandardCode:p}=c;t.includes(p)&&(o[p]={report:c})}return o}},set(i){i&&(l.value=i)}})}};D.components=Object.assign({ComplianceSummaryInput:Te},D.components);var vt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.compliance?t("div",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Compliance ")]),t("ComplianceSummaryInput",{model:{value:e.compliance,callback:function(s){e.compliance=s},expression:"compliance"}})],1):e._e()},yt=[];const te={};var _t=d(D,vt,yt,!1,xt,null,null,null);function xt(e){for(let r in te)this[r]=te[r]}const kt=function(){return _t.exports}(),q={};q.props={value:{key:"value",required:!1,type:null},order:{key:"order",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};q.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u({get(){const[o,c,p]=t.performance.focusAreaOrder;if(o&&c&&p)return[o,c,p]},set(o){if(o){const c=i(o);n.value={first:c[0]||C.RiskVector.UNSPECIFIED,second:c[1]||C.RiskVector.UNSPECIFIED,third:c[2]||C.RiskVector.UNSPECIFIED}}}}),a=u(()=>{var o;return(o=t.order)==null?void 0:o.values.map(c=>Le(c))});function i(o){const c=[];for(const p of o)p&&c.push(I(p));return c}return{focusAreas:l,options:a}};q.components=Object.assign({BlackKiteFocusAreasInput:Ne},q.components);var St=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BlackKiteFocusAreasInput",{attrs:{options:e.options||[]},model:{value:e.focusAreas,callback:function(s){e.focusAreas=s},expression:"focusAreas"}})},$t=[];const re={};var bt=d(q,St,$t,!1,ht,null,null,null);function ht(e){for(let r in re)this[r]=re[r]}const gt=function(){return bt.exports}(),O={};O.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};O.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s);return{riskVectors:u({get(){return t.performance.riskVectors},set(a){const i=[];for(const[o,c]of Object.entries(a))i.push({riskVector:I(o),analysis:c});n.value={values:i}}})}};O.components=Object.assign({CollapsibleSection:ye,BlackKiteRiskVectorPerformance:Pe},O.components);var Ct=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Risk Vector Performance ")])]},proxy:!0},{key:"content",fn:function(){return[t("BlackKiteRiskVectorPerformance",{model:{value:e.riskVectors,callback:function(s){e.riskVectors=s},expression:"riskVectors"}})]},proxy:!0}])})},At=[];const se={};var Rt=d(O,Ct,At,!1,Et,null,null,null);function Et(e){for(let r in se)this[r]=se[r]}const It=function(){return Rt.exports}(),V={};V.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};V.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s);return{riskVectors:u({get(){return t.performance.riskVectors},set(a){const i=[];for(const[o,c]of Object.entries(a))i.push({riskVector:I(o),analysis:c});n.value={values:i}}})}};V.components=Object.assign({BlackKiteRiskVectorsDisplay:Ye},V.components);var Bt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-4"},[t("BlackKiteRiskVectorsDisplay",{model:{value:e.riskVectors,callback:function(s){e.riskVectors=s},expression:"riskVectors"}})],1)},Dt=[];const ne={};var qt=d(V,Bt,Dt,!1,Ot,null,null,null);function Ot(e){for(let r in ne)this[r]=ne[r]}const Vt=function(){return qt.exports}();function E(e){return JSON.parse(JSON.stringify(e))}const j={};j.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};j.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s);return{summary:u({get(){return t.performance.reports.summary},set(a){a&&(n.value={json:E(a)})}})}};j.components=Object.assign({BlackKiteSummaryDescription:Me,BlackKiteReportSummary:we},j.components);var jt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.summary?t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Summary Report ")]),t("div",{staticClass:"flex flex-col divide-y"},[t("BlackKiteSummaryDescription",{attrs:{score:parseInt(e.summary.GradeOver100),date:e.summary.LastUpdatedAt}}),t("div",{staticClass:"p-4"},[t("BlackKiteReportSummary",{attrs:{summary:e.summary}})],1)],1)],1):e._e()},Ft=[];const ae={};var Tt=d(j,jt,Ft,!1,Nt,null,null,null);function Nt(e){for(let r in ae)this[r]=ae[r]}const Pt=function(){return Tt.exports}(),F={};F.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};F.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s);return{risk:u({get(){return t.performance.reports.risk},set(a){a&&(n.value={json:E(a)})}})}};F.components=Object.assign({CollapsibleSection:ye,BlackKiteReportRisk:Je},F.components);var Mt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" FAIR Report ")])]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"p-4"},[t("BlackKiteReportRisk",{attrs:{risk:e.risk}})],1)]},proxy:!0}])})},wt=[];const oe={};var Qt=d(F,Mt,wt,!1,Ut,null,null,null);function Ut(e){for(let r in oe)this[r]=oe[r]}const Kt=function(){return Qt.exports}(),T={};T.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};T.setup=(e,r)=>{const t=e,s=r.emit;return{proxy:x(t,s)}};T.components=Object.assign({ToolTip:_e,ObjectDisplay:xe},T.components);var Lt=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center space-x-1 after:content-['*'] after:ml-0.5 after:text-red-700"},[t("span",[e._v("Supplier")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},e._l(e.options,function(s){return t("option",{key:s.id,domProps:{value:s}},[e._v(" "+e._s(s.name)+" ")])}),0)],1)])},Gt=[];const ce={};var Yt=d(T,Lt,Gt,!1,Jt,null,null,null);function Jt(e){for(let r in ce)this[r]=ce[r]}const zt=function(){return Yt.exports}(),N={};N.props={value:{key:"value",required:!1,type:null},entities:{key:"entities",required:!0,type:Array}};N.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u(()=>t.entities.map(a=>({id:a.CompanyId,name:a.CompanyName})).sort((a,i)=>a.name.localeCompare(i.name))||[]);return{proxy:n,options:l}};N.components=Object.assign({SupplierEntryInput:zt},N.components);var Ht=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("SupplierEntryInput",{attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},Wt=[];const le={};var Xt=d(N,Ht,Wt,!1,Zt,null,null,null);function Zt(e){for(let r in le)this[r]=le[r]}const er=function(){return Xt.exports}(),P={};P.props={value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array}};P.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u(()=>t.users.map(a=>({id:{value:k(a,"sub")},name:k(a,"name")||"",title:k(a,"custom:title")||"",email:k(a,"email"),phone:k(a,"phone_number")||""})).sort((a,i)=>a.email.localeCompare(i.email)));return{proxy:n,options:l}};P.components=Object.assign({ToolTip:_e,ObjectDisplay:xe},P.components);var tr=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center space-x-1 after:content-['*'] after:ml-0.5 after:text-red-700"},[t("span",[e._v("Analyst")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("BaseSelect",{staticClass:"lg:col-span-2",attrs:{required:""},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},e._l(e.options,function(s,n){return t("option",{key:n,domProps:{value:s}},[e._v(" "+e._s(s.email)+" ")])}),0)],1)},rr=[];const ie={};var sr=d(P,tr,rr,!1,nr,null,null,null);function nr(e){for(let r in ie)this[r]=ie[r]}const ar=function(){return sr.exports}(),M={};M.props={value:{key:"value",required:!1,type:null}};M.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u(()=>new Date().getFullYear()),a=u(()=>new Array(10).fill(l.value).map((p,b)=>({value:l.value-5+b}))),i=u(()=>[{text:"In Progress",value:_.State.IN_PROGRESS},{text:"Products Needed",value:_.State.PRODUCTS_NEEDED},{text:"Ready for QA",value:_.State.READY_FOR_QA},{text:"Delivered",value:_.State.DELIVERED},{text:"Complete",value:_.State.COMPLETE}]),o=u(()=>[{text:"Q1",value:_.Quarter.Q1},{text:"Q2",value:_.Quarter.Q2},{text:"Q3",value:_.Quarter.Q3},{text:"Q4",value:_.Quarter.Q4},{text:"Other",value:_.Quarter.OTHER}]),c=[{name:"state",label:"State",component:{is:z,attrs:{required:!0,options:i.value}}},{name:"year",label:"Year",component:{is:z,attrs:{required:!0,options:a.value}}},{name:"quarter",label:"Quarter",component:{is:z,attrs:{required:!0,options:o.value}}}];return{proxy:n,schema:c}};M.components=Object.assign({DynamicForm:ze},M.components);var or=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},cr=[];const ue={};var lr=d(M,or,cr,!1,ir,null,null,null);function ir(e){for(let r in ue)this[r]=ue[r]}const ur=function(){return lr.exports}(),pr={get(){return he(["random-bundle-solution"],()=>ge.get(`${Ce}/random-bundle-solution`).then(e=>e.data))}},w={};w.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},products:{key:"products",required:!0,type:Array}};w.setup=(e,r)=>{const t=e,s=r.emit,n=ve(t,s),l=u(()=>{var v,S;const m=[];return(v=n.value.supplier)!=null&&v.id||m.push("Select a supplier"),((S=n.value.status)==null?void 0:S.state)===_.State.DELIVERED&&m.push('The status of this scorecard has already been marked as "Delivered."'),{allowed:m.length===0,reasons:m}}),a=u(()=>t.id),i=u({get(){var m,v;return(v=(m=t.value)==null?void 0:m.supplier)==null?void 0:v.id},set(m){m&&n.value.supplier&&(n.value.supplier.id=m)}}),o=Ae.get(a,i),c=u(()=>o.data.value),p=pr.get(),b=u(()=>p.data.value);function h(){if(o.data.value&&p.data.value){const{cmmcAnalysis:m,focusAreaOrder:v,ratingScoreDetails:S,reports:$,riskVectors:G}=o.data.value,{BASIC:Y,BALANCED:y,ADVANCED:f}=p.data.value,[J,U,ke]=v,R=[];for(const g of v)R.push(I(g));const Se=["NIST 800-53 R5","CIS CSC-20","CMMC 2.0","NIST 800-171"],W={};for(const g of $.compliance){const{StandardCode:K}=g;Se.includes(K)&&(W[K]={report:g})}const X=[];for(const[g,K]of Object.entries(G))X.push({riskVector:I(g),analysis:K});n.value.cmmcAnalysis={entries:lt(m)},n.value.reports={summary:{json:E($.summary)},risk:{json:E($.risk)},compliance:{json:E($.compliance)}},n.value.ratingScore={description:S.description||""},n.value.riskVectors={values:X},n.value.focusAreaOrder={values:R},n.value.focusAreas={first:R[0]||C.RiskVector.UNSPECIFIED,second:R[1]||C.RiskVector.UNSPECIFIED,third:R[2]||C.RiskVector.UNSPECIFIED},n.value.compliance=W,n.value.bundle={essential:A(Y[J||""]),balanced:A(y[U||""]),premier:A(f[ke||""])},s("update-data")}}return{proxy:n,canUpdateData:l,performance:c,random:b,updateData:h}};w.components=Object.assign({AnalystInput:ar,SupplierInput:er,RefreshSvg:Ve,TransitionExpand:je,SummaryReport:Pt,SummaryRiskReport:Kt,RiskVectorAnalysisOverview:Vt,FocusAreas:gt,RiskVectorAnalysis:It,BundleSolution:ft,ComplianceSummaryV2:kt,StatusInput:ur},w.components);var mr=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Analyst Information ")]),t("AnalystInput",{attrs:{users:e.users},model:{value:e.proxy.analyst,callback:function(s){e.$set(e.proxy,"analyst",s)},expression:"proxy.analyst"}}),t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Supplier Information ")]),t("SupplierInput",{attrs:{entities:e.entities},model:{value:e.proxy.supplier,callback:function(s){e.$set(e.proxy,"supplier",s)},expression:"proxy.supplier"}}),t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Update Data ")]),e.canUpdateData.allowed?t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{type:"button",disabled:!e.canUpdateData.allowed},on:{click:e.updateData}},[t("RefreshSvg",{staticClass:"-ml-1 w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1):t("div",[t("BaseAlert",{staticClass:"shadow-none rounded-none",attrs:{type:"warn"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Update Unavailable")]},proxy:!0},{key:"message",fn:function(){return[t("ul",{staticClass:"flex list-inside list-disc flex-col space-y-1"},e._l(e.canUpdateData.reasons,function(s){return t("li",{key:s},[e._v(" "+e._s(s)+" ")])}),0)]},proxy:!0}],null,!1,4159848379)})],1),t("TransitionExpand",[e.performance&&e.random?t("div",{staticClass:"divide-y"},[e.proxy.reports?[t("SummaryReport",{attrs:{"v-model":e.proxy.reports.summary,performance:e.performance}}),t("SummaryRiskReport",{attrs:{"v-model":e.proxy.reports.risk,performance:e.performance}})]:e._e(),e.proxy.focusAreaOrder?t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Recommended Focus Areas ")]),t("div",{staticClass:"flex flex-col divide-y lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:grid-cols-3"},[t("RiskVectorAnalysisOverview",{attrs:{performance:e.performance},model:{value:e.proxy.riskVectors,callback:function(s){e.$set(e.proxy,"riskVectors",s)},expression:"proxy.riskVectors"}}),t("FocusAreas",{attrs:{order:e.proxy.focusAreaOrder,performance:e.performance},model:{value:e.proxy.focusAreas,callback:function(s){e.$set(e.proxy,"focusAreas",s)},expression:"proxy.focusAreas"}})],1)],1):e._e(),e.proxy.riskVectors?[t("RiskVectorAnalysis",{attrs:{performance:e.performance},model:{value:e.proxy.riskVectors,callback:function(s){e.$set(e.proxy,"riskVectors",s)},expression:"proxy.riskVectors"}})]:e._e(),e.proxy.bundle?[t("BundleSolution",{attrs:{products:e.products,random:e.random,performance:e.performance},model:{value:e.proxy.bundle,callback:function(s){e.$set(e.proxy,"bundle",s)},expression:"proxy.bundle"}})]:e._e(),e.proxy.compliance?[t("ComplianceSummaryV2",{attrs:{performance:e.performance},model:{value:e.proxy.compliance,callback:function(s){e.$set(e.proxy,"compliance",s)},expression:"proxy.compliance"}})]:e._e()],2):e._e()]),t("StatusInput",{model:{value:e.proxy.status,callback:function(s){e.$set(e.proxy,"status",s)},expression:"proxy.status"}})],1)},dr=[];const pe={};var fr=d(w,mr,dr,!1,vr,null,null,null);function vr(e){for(let r in pe)this[r]=pe[r]}const yr=function(){return fr.exports}(),H={};H.props={value:{key:"value",required:!1,type:null,default:void 0},templates:{key:"templates",required:!0,type:Array}};H.setup=(e,r)=>{const t=e,s=r.emit,n=x(t,s),l=u(()=>t.templates.map(({key:a})=>({value:a.split("/")[1]||""})));return{proxy:n,options:l}};var _r=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"after:content-['*'] after:ml-0.5 after:text-red-700"},[e._v(" Template ")]),t("BaseSelect",{staticClass:"flex flex-col lg:col-span-2",model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}},e._l(e.options,function(s,n){return t("option",{key:n,domProps:{value:s}},[e._v(" "+e._s(s.value)+" ")])}),0)],1)},xr=[];const me={};var kr=d(H,_r,xr,!1,Sr,null,null,null);function Sr(e){for(let r in me)this[r]=me[r]}const $r=function(){return kr.exports}(),Q={};Q.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},products:{key:"products",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array}};Q.setup=(e,r)=>{const t=e,s=r.emit;return{proxy:ve(t,s)}};Q.components=Object.assign({TemplateInput:$r,DataInput:yr},Q.components);var br=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Scorecard Template ")]),t("TemplateInput",{attrs:{templates:e.templates},model:{value:e.proxy.template,callback:function(s){e.$set(e.proxy,"template",s)},expression:"proxy.template"}}),t("DataInput",{attrs:{id:e.id,users:e.users,entities:e.entities,products:e.products},model:{value:e.proxy.data,callback:function(s){e.$set(e.proxy,"data",s)},expression:"proxy.data"}})],1)},hr=[];const de={};var gr=d(Q,br,hr,!1,Cr,null,null,null);function Cr(e){for(let r in de)this[r]=de[r]}const Ar=function(){return gr.exports}(),L={};L.setup=(e,r)=>{const t=Z("id"),s=Z("subscriptionId"),n=[Ie.list(),We.list(),Xe.list(t)],l=Ze.list(),a=Be.read(t),i=He.get(t),o=u(()=>{if(a.data.value){const{id:y,name:f}=a.data.value;return{company:y,name:f}}}),c=u(()=>{var y;return(y=l.data.value)==null?void 0:y.map(f=>({id:{value:k(f,"sub")},name:k(f,"name")||"",title:k(f,"custom:title")||"",email:k(f,"email"),phone:k(f,"phone_number")||""})).find(f=>f.email==="consultingservices@whitehawk.com")}),p=new Date,b=p.getUTCFullYear(),h=`Q${Math.ceil((p.getMonth()+1)/4)}`,m=et(u(()=>{var y;return{template:{value:((y=i.data.value)==null?void 0:y.split("/")[1])||""},data:{buyer:{company:o.value},analyst:c.value,status:{state:_.State.IN_PROGRESS,year:b,quarter:Ge(h)}}}})),v=u(()=>Boolean(l.data.value&&a.data.value)),S=De(),$=qe(),G=Oe.create(t,s);async function Y(){var y,f;if(m.value){const J={scorecardInput:{oneofKind:"bk",bk:m.value}},{response:U}=await G.mutateAsync(J);U.scorecardId&&(S.success("Successfully created scorecard."),$.push(`/admin/companies/${t.value}/subscriptions/${s.value}/integrations/2/entities/${(f=(y=m.value.data)==null?void 0:y.supplier)==null?void 0:f.id}/scorecards/in-depth/${U.scorecardId}`))}}return{accountId:t,queries:n,users:l,scorecard:m,ready:v,createScorecard:Y}};L.components=Object.assign({LoadingSpinner:Re,BackButton:Ee,ScorecardInput:Ar,FormButton:$e},L.components);var Rr=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.ready?t("section",{staticClass:"space-y-6"},[t("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4"},[t("BackButton"),t("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[e._v(" Create Scorecard ")])],1),t("BaseSimpleCard",[t("form",{staticClass:"divide-y",on:{submit:function(s){return s.preventDefault(),e.createScorecard.apply(null,arguments)}}},[t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(s){var n=s[0],l=s[1],a=s[2];return[t("ScorecardInput",{attrs:{id:e.accountId,users:e.users.data.value||[],entities:a,products:n,templates:l},model:{value:e.scorecard,callback:function(i){e.scorecard=i},expression:"scorecard"}})]}}])}),t("FormButton",{attrs:{action:"create","is-valid-form":!1}})],1)])],1):t("LoadingSpinner")},Er=[];const fe={};var Ir=d(L,Rr,Er,!1,Br,null,null,null);function Br(e){for(let r in fe)this[r]=fe[r]}const as=function(){return Ir.exports}();export{as as default};
