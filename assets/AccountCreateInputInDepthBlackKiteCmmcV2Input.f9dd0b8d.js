import{R as Pe}from"./arrow-path.24b87f73.js";import{T as Ne}from"./TransitionExpand.280fe370.js";import{C as X}from"./CollapsibleSection.65676e63.js";import{b1 as ee,aB as _,b as Me,d as u,n as m,ax as k,ay as Le,dr as Q,br as Ke,cv as Ge,ah as Ue,aP as Je,aQ as Qe,dp as We,cq as He,ds as Y,bT as Ye}from"./index.47f616cd.js";import{b as ze}from"./_baseIteratee.728cd119.js";import{a as Ve,b as Ze,c as Xe}from"./_baseIsEqual.b1f05b3e.js";import{j as et}from"./_Uint8Array.87a897ff.js";import{l as tt}from"./lodash.9f1bdeda.js";import{a as st,b as rt,c as W,d as x}from"./index.bbd90a98.js";import{G as te}from"./GradeLetterDisplay.bbd61748.js";import{c as nt,B as at,a as ot,b as ct,d as lt}from"./BlackKiteProgressBar.663e2842.js";import{b as it}from"./ratingScoreDescription.3b48b1ea.js";import{T as ut}from"./ToolTip.fe3f6a79.js";import{O as pt}from"./ObjectDisplay.29cedf96.js";import{A as dt,S as mt}from"./StatusInput.0315b73f.js";import{u as ft}from"./useProducts.6710e276.js";import{u as yt}from"./useScorecardTemplates.b3161b93.js";import{u as vt}from"./useBlackKiteEntities.c921ac31.js";import{u as _t}from"./useUsers.d79d8d18.js";function xt(e,s,t,r){for(var n=e.length,l=t+(r?1:-1);r?l--:++l<n;)if(s(e[l],l,e))return l;return-1}var gt=xt;function kt(e){return e!==e}var $t=kt;function ht(e,s,t){for(var r=t-1,n=e.length;++r<n;)if(e[r]===s)return r;return-1}var bt=ht,Ct=gt,St=$t,Bt=bt;function At(e,s,t){return s===s?Bt(e,s,t):Ct(e,St,t)}var It=At,jt=It;function Rt(e,s){var t=e==null?0:e.length;return!!t&&jt(e,s,0)>-1}var Et=Rt;function Dt(e,s,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(s,e[r]))return!0;return!1}var qt=Dt;function Ot(){}var Vt=Ot,z=et,Tt=Vt,wt=Ve,Ft=1/0,Pt=z&&1/wt(new z([,-0]))[1]==Ft?function(e){return new z(e)}:Tt,Nt=Pt,Mt=Ze,Lt=Et,Kt=qt,Gt=Xe,Ut=Nt,Jt=Ve,Qt=200;function Wt(e,s,t){var r=-1,n=Lt,l=e.length,c=!0,a=[],o=a;if(t)c=!1,n=Kt;else if(l>=Qt){var i=s?null:Ut(e);if(i)return Jt(i);c=!1,n=Gt,o=new Mt}else o=s?[]:a;e:for(;++r<l;){var d=e[r],f=s?s(d):d;if(d=t||d!==0?d:0,c&&f===f){for(var p=o.length;p--;)if(o[p]===f)continue e;s&&o.push(f),a.push(d)}else n(o,f,t)||(o!==a&&o.push(f),a.push(d))}return a}var Ht=Wt,Yt=ze,zt=Ht;function Zt(e,s){return e&&e.length?zt(e,Yt(s)):[]}var Te=Zt;const C={};C.props={value:{key:"value",required:!1,type:null},products:{key:"products",required:!0,type:Array}};C.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=Me(),c=u({get(){var p;return l.value||((p=n.value)==null?void 0:p.manufacturer)},set(p){l.value=p,n.value=null}}),a=u(()=>{const p=[];for(const{manufacturer:y}of t.products)p.push(y);return Te(p,"id").sort((y,v)=>y.name.localeCompare(v.name))}),o=u(()=>[{text:"",value:null},...a.value.map(p=>({key:p.id,text:p.name,value:p}))]),i=u(()=>c.value?t.products.filter(p=>{var y,v;return((y=p.manufacturer)==null?void 0:y.id)===((v=c.value)==null?void 0:v.id)}):[]),d=u(()=>[{text:"",value:null},...i.value.map(p=>({key:p.id,text:p.name,value:p}))]),f=u(()=>{var p;return(p=n.value)==null?void 0:p.description});return{proxy:n,manufacturer:c,manufacturerOptions:o,productOptions:d,description:f}};C.components=Object.assign({SimpleSelect:ee},C.components);var Xt=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col space-y-3"},[t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Manufacturer ")]),t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.manufacturerOptions},model:{value:e.manufacturer,callback:function(r){e.manufacturer=r},expression:"manufacturer"}})],1),t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Name ")]),t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.productOptions},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}})],1),t("BaseLabel",{staticClass:"flex flex-col space-y-1"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Description ")]),t("BaseTextarea",{staticClass:"block w-full read-only:bg-gray-50",attrs:{readonly:"",rows:"5"},model:{value:e.description,callback:function(r){e.description=r},expression:"description"}})],1)],1)},es=[];const ue={};var ts=m(C,Xt,es,!1,ss,null,null,null);function ss(e){for(let s in ue)this[s]=ue[s]}const rs=function(){return ts.exports}(),S={};S.props={value:{key:"value",required:!1,type:null},title:{key:"title",required:!0,type:String},products:{key:"products",required:!0,type:Array}};S.setup=(e,s)=>{const t=e,r=s.emit,n=k(t,r),l=u({get(){return n.value.category},set(i){n.value.category=i,n.value.main=void 0,n.value.option=void 0}}),c=u(()=>{const i=[];for(const d of t.products)for(const f of d.categories)i.push(f);return Te(i,"id").sort((d,f)=>d.name.localeCompare(f.name))}),a=u(()=>[{text:"",value:null},...c.value.map(i=>({key:i.id,text:i.name,value:i}))]),o=u(()=>n.value.category?t.products.filter(i=>i.categories.some(d=>{var f;return d.id===((f=n.value.category)==null?void 0:f.id)})):[]);return{proxy:n,category:l,categoryOptions:a,filteredProductsByCategory:o}};S.components=Object.assign({SimpleSelect:ee,ProductBundleGroupInput:rs},S.components);var ns=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"flex flex-col divide-y"},[t("span",{staticClass:"p-4 text-sm font-semibold uppercase tracking-wider text-gray-600"},[e._v(" "+e._s(e.title)+" ")]),t("BaseLabel",{staticClass:"p-4"},[t("span",{staticClass:"block text-sm font-medium leading-5 text-gray-700"},[e._v(" Category ")]),t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.categoryOptions},model:{value:e.category,callback:function(r){e.category=r},expression:"category"}})],1),t("div",{staticClass:"flex flex-col space-y-4 divide-y lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:divide-y-0 lg:divide-x"},[t("div",{staticClass:"flex-1 p-4"},[t("fieldset",{staticClass:"space-y-2"},[t("legend",{staticClass:"font-display font-semibold"},[e._v("Main")]),t("ProductBundleGroupInput",{attrs:{products:e.filteredProductsByCategory},model:{value:e.proxy.main,callback:function(r){e.$set(e.proxy,"main",r)},expression:"proxy.main"}})],1)]),t("div",{staticClass:"flex-1 p-4"},[t("fieldset",{staticClass:"space-y-2"},[t("legend",{staticClass:"font-display font-semibold"},[e._v("Option")]),t("ProductBundleGroupInput",{attrs:{products:e.filteredProductsByCategory},model:{value:e.proxy.option,callback:function(r){e.$set(e.proxy,"option",r)},expression:"proxy.option"}})],1)])])],1)},as=[];const pe={};var os=m(S,ns,as,!1,cs,null,null,null);function cs(e){for(let s in pe)this[s]=pe[s]}const ls=function(){return os.exports}(),B={};B.props={value:{key:"value",required:!0,type:Array},numProducts:{key:"numProducts",required:!0,type:Number},products:{key:"products",required:!0,type:Array}};B.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:Le(t,r)}};B.components=Object.assign({BundleGroupInput:ls},B.components);var is=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"divide-y"},e._l(e.numProducts,function(r){return t("BundleGroupInput",{key:r-1,attrs:{products:e.products,title:`Product ${r}`},model:{value:e.proxy[r-1],callback:function(n){e.$set(e.proxy,r-1,n)},expression:"proxy[num - 1]"}})}),1)},us=[];const de={};var ps=m(B,is,us,!1,ds,null,null,null);function ds(e){for(let s in de)this[s]=de[s]}const ms=function(){return ps.exports}(),A={};A.props={value:{key:"value",required:!0,type:null},numProducts:{key:"numProducts",required:!0,type:Number},products:{key:"products",required:!0,type:Array}};A.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:k(t,r)}};A.components=Object.assign({CollapsibleSection:X,BundleGroupsInput:ms},A.components);var fs=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" "+e._s(e.proxy.title)+" Product Options ")])]},proxy:!0},{key:"content",fn:function(){return[t("BundleGroupsInput",{attrs:{products:e.products,"num-products":e.numProducts},model:{value:e.proxy.groups,callback:function(r){e.$set(e.proxy,"groups",r)},expression:"proxy.groups"}})]},proxy:!0}])})},ys=[];const me={};var vs=m(A,fs,ys,!1,_s,null,null,null);function _s(e){for(let s in me)this[s]=me[s]}const xs=function(){return vs.exports}(),I={};I.props={value:{key:"value",required:!0,type:Object},products:{key:"products",required:!0,type:Array}};I.setup=(e,s)=>{const t=e,r=s.emit,n=k(t,r),l=u(()=>t.products.map(c=>{const{id:a,name:o,description:i,manufacturer:d,categories:f}=c;return{id:a,name:o,description:i,manufacturer:d,categories:f}}));return{proxy:n,productOptions:l}};I.components=Object.assign({BundleSolutionEntryInput:xs},I.components);var gs=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"divide-y"},[t("BundleSolutionEntryInput",{attrs:{products:e.productOptions,"num-products":2},model:{value:e.proxy.BASIC,callback:function(r){e.$set(e.proxy,"BASIC",r)},expression:"proxy.BASIC"}}),t("BundleSolutionEntryInput",{attrs:{products:e.productOptions,"num-products":3},model:{value:e.proxy.BALANCED,callback:function(r){e.$set(e.proxy,"BALANCED",r)},expression:"proxy.BALANCED"}}),t("BundleSolutionEntryInput",{attrs:{products:e.productOptions,"num-products":4},model:{value:e.proxy.ADVANCED,callback:function(r){e.$set(e.proxy,"ADVANCED",r)},expression:"proxy.ADVANCED"}})],1)},ks=[];const fe={};var $s=m(I,gs,ks,!1,hs,null,null,null);function hs(e){for(let s in fe)this[s]=fe[s]}const bs=function(){return $s.exports}();function g(e){return e===void 0?Q.BundleSolutionEntry.create():{title:e.title,description:e.description,groups:e.groups.map(s=>Cs(s))}}function Cs(e){const{category:s,main:t,option:r}=e;return{category:{id:{value:(s==null?void 0:s.id)||""},name:(s==null?void 0:s.name)||""},main:{id:{value:(t==null?void 0:t.id)||""},name:(t==null?void 0:t.name)||"",description:t==null?void 0:t.description,manufacturer:{id:{value:(t==null?void 0:t.manufacturer.id)||""},name:(t==null?void 0:t.manufacturer.name)||""},categories:ye((t==null?void 0:t.categories)||[])},option:{id:{value:(r==null?void 0:r.id)||""},name:(r==null?void 0:r.name)||"",description:r==null?void 0:r.description,manufacturer:{id:{value:(r==null?void 0:r.manufacturer.id)||""},name:(r==null?void 0:r.manufacturer.name)||""},categories:ye((r==null?void 0:r.categories)||[])}}}function ye(e){return e.map(({id:s,name:t})=>({id:{value:s},name:t}))}function Z(e){if(e===void 0)throw new Error("Bundles are undefined");return{title:e.title,description:e.description,groups:e.groups.map(s=>Ss(s))}}function Ss(e){var n,l,c,a,o,i,d,f,p;const{category:s,main:t,option:r}=e;return{category:{id:((n=s==null?void 0:s.id)==null?void 0:n.value)||"",name:(s==null?void 0:s.name)||""},main:{id:((l=t==null?void 0:t.id)==null?void 0:l.value)||"",name:(t==null?void 0:t.name)||"",description:t==null?void 0:t.description,manufacturer:{id:((a=(c=t==null?void 0:t.manufacturer)==null?void 0:c.id)==null?void 0:a.value)||"",name:((o=t==null?void 0:t.manufacturer)==null?void 0:o.name)||""},categories:ve((t==null?void 0:t.categories)||[])},option:{id:((i=r==null?void 0:r.id)==null?void 0:i.value)||"",name:(r==null?void 0:r.name)||"",description:r==null?void 0:r.description,manufacturer:{id:((f=(d=r==null?void 0:r.manufacturer)==null?void 0:d.id)==null?void 0:f.value)||"",name:((p=r==null?void 0:r.manufacturer)==null?void 0:p.name)||""},categories:ve((r==null?void 0:r.categories)||[])}}}function ve(e){return e.map(({id:s,name:t})=>({id:(s==null?void 0:s.value)||"",name:t}))}function Bs(e){const s=[];for(const t of Object.entries(e)){const[r,n]=t;s.push({domain:st(r),domainDisplayValue:n.displayValue,levels:As(n.levels)})}return s}function As(e){const s=[];for(const[t,r]of Object.entries(e))s.push({level:rt(t),averageStarLevel:r.averageStarLevel});return s}const j={};j.props={value:{key:"value",required:!0,type:null},products:{key:"products",required:!0,type:Array}};j.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=u({get(){return{BASIC:Z(t.value.essential),BALANCED:Z(t.value.balanced),ADVANCED:Z(t.value.premier)}},set(a){a&&(n.value={essential:g(a.BASIC),balanced:g(a.BALANCED),premier:g(a.ADVANCED)})}}),c=u(()=>{const a=[];for(const o of t.products)for(const i of o.categories)a.push(i);return tt.exports.uniqBy(a,"id").sort((o,i)=>o.name.localeCompare(i.name))});return{bundle:l,productCategories:c}};j.components=Object.assign({BundleSolutionInput:bs},j.components);var Is=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BundleSolutionInput",{attrs:{products:e.products,"product-categories":e.productCategories},model:{value:e.bundle,callback:function(r){e.bundle=r},expression:"bundle"}})},js=[];const _e={};var Rs=m(j,Is,js,!1,Es,null,null,null);function Es(e){for(let s in _e)this[s]=_e[s]}const Ds=function(){return Rs.exports}(),R={};R.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};R.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=u(()=>[{text:"",value:null},...t.options.map(c=>({value:c}))]);return{proxy:n,formattedOptions:l}};R.components=Object.assign({SimpleSelect:ee},R.components);var qs=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"grid divide-y xl:col-span-2"},e._l(e.proxy.length,function(r){return t("BaseLabel",{key:r,staticClass:"flex flex-col p-4 lg:grid lg:items-center xl:grid-cols-3"},[t("span",[e._v("Focus Area "+e._s(r))]),t("div",{staticClass:"xl:col-span-2"},[t("SimpleSelect",{staticClass:"w-full",attrs:{options:e.formattedOptions},model:{value:e.proxy[r-1],callback:function(n){e.$set(e.proxy,r-1,n)},expression:"proxy[i - 1]"}})],1)])}),1)},Os=[];const xe={};var Vs=m(R,qs,Os,!1,Ts,null,null,null);function Ts(e){for(let s in xe)this[s]=xe[s]}const ws=function(){return Vs.exports}(),E={};E.props={value:{key:"value",required:!1,type:null},order:{key:"order",required:!1,type:null}};E.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=u({get(){const a=[];if(t.value)for(const o of Object.values(t.value))a.push(W(o));return a},set(a){n.value={first:x(a[0]||""),second:x(a[1]||""),third:x(a[2]||"")}}}),c=u(()=>{var a;return((a=t.order)==null?void 0:a.values.map(o=>W(o)))||[]});return{focusAreas:l,options:c}};E.components=Object.assign({BlackKiteFocusAreasInput:ws},E.components);var Fs=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BlackKiteFocusAreasInput",{attrs:{options:e.options||[]},model:{value:e.focusAreas,callback:function(r){e.focusAreas=r},expression:"focusAreas"}})},Ps=[];const ge={};var Ns=m(E,Fs,Ps,!1,Ms,null,null,null);function Ms(e){for(let s in ge)this[s]=ge[s]}const Ls=function(){return Ns.exports}(),D={};D.props={value:{key:"value",required:!0,type:null}};D.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:k(t,r)}};D.components=Object.assign({GradeLetterDisplay:te},D.components);var Ks=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.proxy?t("section",{staticClass:"divide-y"},e._l(e.proxy,function(r,n){return t("div",{key:n,staticClass:"divide-y"},[t("div",{staticClass:"flex flex-row justify-start space-x-2 p-4"},[t("BaseTypography",{staticClass:"text-gray-700",attrs:{component:"h4",variant:"p1"}},[e._v(" "+e._s(n)+": ")]),t("GradeLetterDisplay",{attrs:{grade:r.gradeLetter}})],1),t("div",{staticClass:"p-4"},[t("BaseTextarea",{staticClass:"w-full",attrs:{rows:"3"},model:{value:r.standardNote,callback:function(l){e.$set(r,"standardNote",l)},expression:"riskVector.standardNote"}})],1)])}),0):e._e()},Gs=[];const ke={};var Us=m(D,Ks,Gs,!1,Js,null,null,null);function Js(e){for(let s in ke)this[s]=ke[s]}const Qs=function(){return Us.exports}(),q={};q.props={value:{key:"value",required:!1,type:null}};q.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r);return{riskVectors:u({get(){const c=new Map;if(t.value)for(const a of t.value.values){const o=W(a.riskVector),i=a.analysis;!c.get(o)&&i&&c.set(o,i)}return Object.fromEntries(c)},set(c){const a=[];for(const[o,i]of Object.entries(c))a.push({riskVector:x(o),analysis:i});n.value={values:a}}})}};q.components=Object.assign({CollapsibleSection:X,BlackKiteRiskVectorPerformance:Qs},q.components);var Ws=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Risk Vector Performance ")])]},proxy:!0},{key:"content",fn:function(){return[t("BlackKiteRiskVectorPerformance",{model:{value:e.riskVectors,callback:function(r){e.riskVectors=r},expression:"riskVectors"}})]},proxy:!0}])})},Hs=[];const $e={};var Ys=m(q,Ws,Hs,!1,zs,null,null,null);function zs(e){for(let s in $e)this[s]=$e[s]}const Zs=function(){return Ys.exports}(),O={};O.props={value:{key:"value",required:!1,type:null}};O.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r);return{riskVectors:u({get(){const c=new Map;if(t.value)for(const a of t.value.values){const o=W(a.riskVector),i=a.analysis;!c.get(o)&&i&&c.set(o,i)}return Object.fromEntries(c)},set(c){const a=[];for(const[o,i]of Object.entries(c))a.push({riskVector:x(o),analysis:i});n.value={values:a}}})}};O.components=Object.assign({BlackKiteRiskVectorsDisplay:nt},O.components);var Xs=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"p-4"},[t("BlackKiteRiskVectorsDisplay",{model:{value:e.riskVectors,callback:function(r){e.riskVectors=r},expression:"riskVectors"}})],1)},er=[];const he={};var tr=m(O,Xs,er,!1,sr,null,null,null);function sr(e){for(let s in he)this[s]=he[s]}const rr=function(){return tr.exports}(),V={};V.props={value:{key:"value",required:!0,type:null}};V.setup=(e,s)=>{const t=e,r=new Set(["NIST 800-53 R5","CIS CSC-20","CMMC 2.0","NIST 800-171"]),n=u(()=>t.value.entries.map(o=>({StandardCode:c(o.fields.StandardCode)||"",Completeness:a(o.fields.Completeness)||0,Compliance:a(o.fields.Compliance)||0,Confidence:a(o.fields.Confidence)||0}))),l=u(()=>n.value.filter(o=>r.has(o.StandardCode)));function c(o){return(o==null?void 0:o.kind.oneofKind)==="stringValue"?o.kind.stringValue:void 0}function a(o){return(o==null?void 0:o.kind.oneofKind)==="numberValue"?o.kind.numberValue:void 0}return{filtered:l}};V.components=Object.assign({BlackKiteDonut:at},V.components);var nr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"grid items-center justify-center pt-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},e._l(e.filtered,function(r){return t("li",{key:r.StandardCode,staticClass:"mx-auto"},[t("BlackKiteDonut",{attrs:{value:r}})],1)}),0)},ar=[];const be={};var or=m(V,nr,ar,!1,cr,null,null,null);function cr(e){for(let s in be)this[s]=be[s]}const lr=function(){return or.exports}(),T={};T.props={grade:{key:"grade",required:!0,type:null},modules:{key:"modules",required:!0,type:Array},title:{key:"title",required:!0,type:String}};T.setup=(e,s)=>({});T.components=Object.assign({GradeLetterDisplay:te},T.components);var ir=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-3"},[t("div",{staticClass:"flex items-center justify-between lg:justify-start lg:space-x-4"},[t("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.title)+" ")]),t("GradeLetterDisplay",{attrs:{grade:e.grade}})],1),t("div",{staticClass:"grid gap-y-2 pl-2 lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-0"},e._l(e.modules,function(r){return t("div",{key:r.Name,staticClass:"flex items-center justify-between 2xl:justify-start 2xl:space-x-4"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(r.Name)+": ")]),t("GradeLetterDisplay",{attrs:{grade:r.GradeLetter}})],1)}),0)])},ur=[];const Ce={};var pr=m(T,ir,ur,!1,dr,null,null,null);function dr(e){for(let s in Ce)this[s]=Ce[s]}const mr=function(){return pr.exports}(),w={};w.props={summary:{key:"summary",required:!0,type:null}};w.setup=(e,s)=>({});w.components=Object.assign({BlackKiteSummarySection:mr},w.components);var fr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BlackKiteSummarySection",{attrs:{grade:e.summary.Reputation.GradeLetter,modules:e.summary.Reputation.Modules,title:"Reputation"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Privacy.GradeLetter,modules:e.summary.Privacy.Modules,title:"Privacy"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Resiliency.GradeLetter,modules:e.summary.Resiliency.Modules,title:"Resiliency"}}),t("BlackKiteSummarySection",{attrs:{grade:e.summary.Safeguard.GradeLetter,modules:e.summary.Safeguard.Modules,title:"Safeguard"}})],1)},yr=[];const Se={};var vr=m(w,fr,yr,!1,_r,null,null,null);function _r(e){for(let s in Se)this[s]=Se[s]}const xr=function(){return vr.exports}(),F={};F.props={score:{key:"score",required:!0,type:Number},date:{key:"date",required:!0,type:String},description:{key:"description",required:!1,type:String}};F.setup=(e,s)=>{const t=e;return{ratingScoreDescription:u(()=>it(t.score))}};F.components=Object.assign({BlackKiteProgressBar:ot,GradeLetterDisplay:te,DateIsoStringDisplay:Ke,BlackKiteGradeDescriptions:ct},F.components);var gr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col justify-center space-y-4 p-8 lg:flex-row lg:justify-around lg:space-x-6 lg:space-y-0 xl:space-x-12"},[t("div",{staticClass:"flex flex-col items-center justify-center"},[t("div",{staticClass:"relative w-56"},[t("BlackKiteProgressBar",{attrs:{score:e.score,"max-score":100}})],1),t("div",{staticClass:"absolute flex flex-col items-center space-y-2"},[t("span",{staticClass:"text-5xl font-bold tracking-wide"},[e._v(" "+e._s(e.score)+" ")]),t("GradeLetterDisplay",{attrs:{grade:e.score}}),e.date?t("div",{staticClass:"flex flex-col items-center justify-center text-gray-500"},[t("BaseTypography",{attrs:{variant:"overline"}},[e._v("Last updated:")]),t("BaseTypography",{attrs:{variant:"overline"}},[t("DateIsoStringDisplay",{attrs:{value:e.date,format:"date"}})],1)],1):e._e()],1)]),t("div",{staticClass:"grid gap-4 text-center lg:grid-cols-3 lg:text-left xl:grid-cols-4 xl:items-center xl:gap-0"},[t("div",{staticClass:"grid gap-5 lg:col-span-2 xl:col-span-3"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h5"}},[e._v(" Cyber Risk ")]),t("div",{staticClass:"grid gap-2 text-gray-600"},[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" The Cyber Risk measures a company\u2019s relative security effectiveness. ")]),e.description?[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.description)+" ")])]:[t("BaseTypography",{attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.ratingScoreDescription)+" ")])]],2)],1),t("BlackKiteGradeDescriptions")],1)])},kr=[];const Be={};var $r=m(F,gr,kr,!1,hr,null,null,null);function hr(e){for(let s in Be)this[s]=Be[s]}const br=function(){return $r.exports}();function b(e){const s=e;return Ge.Struct.fromJson(s)}const P={};P.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};P.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r);return{summary:u({get(){return t.performance.reports.summary},set(c){c&&(n.value={json:b(c)})}})}};P.components=Object.assign({BlackKiteSummaryDescription:br,BlackKiteReportSummary:xr},P.components);var Cr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.summary?t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Summary Report ")]),t("div",{staticClass:"flex flex-col divide-y"},[t("BlackKiteSummaryDescription",{attrs:{score:parseInt(e.summary.GradeOver100),date:e.summary.LastUpdatedAt}}),t("div",{staticClass:"p-4"},[t("BlackKiteReportSummary",{attrs:{summary:e.summary}})],1)],1)],1):e._e()},Sr=[];const Ae={};var Br=m(P,Cr,Sr,!1,Ar,null,null,null);function Ar(e){for(let s in Ae)this[s]=Ae[s]}const Ir=function(){return Br.exports}(),N={};N.props={value:{key:"value",required:!1,type:null},performance:{key:"performance",required:!0,type:null}};N.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r);return{risk:u({get(){return t.performance.reports.risk},set(c){c&&(n.value={json:b(c)})}})}};N.components=Object.assign({CollapsibleSection:X,BlackKiteReportRisk:lt},N.components);var jr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("CollapsibleSection",{scopedSlots:e._u([{key:"title",fn:function(){return[t("BaseTypography",{staticClass:"py-4 pl-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" FAIR Report ")])]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"p-4"},[t("BlackKiteReportRisk",{attrs:{risk:e.risk}})],1)]},proxy:!0}])})},Rr=[];const Ie={};var Er=m(N,jr,Rr,!1,Dr,null,null,null);function Dr(e){for(let s in Ie)this[s]=Ie[s]}const qr=function(){return Er.exports}(),M={};M.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};M.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:_(t,r)}};M.components=Object.assign({ToolTip:ut,ObjectDisplay:pt},M.components);var Or=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center space-x-1 after:ml-0.5 after:text-red-700 after:content-['*']"},[t("span",[e._v("Supplier")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}},e._l(e.options,function(r){return t("option",{key:r.id,domProps:{value:r}},[e._v(" "+e._s(r.name)+" ")])}),0)],1)])},Vr=[];const je={};var Tr=m(M,Or,Vr,!1,wr,null,null,null);function wr(e){for(let s in je)this[s]=je[s]}const Fr=function(){return Tr.exports}(),L={};L.props={value:{key:"value",required:!1,type:null},entities:{key:"entities",required:!0,type:Array}};L.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=u(()=>t.entities.map(c=>({id:c.CompanyId,name:c.CompanyName})).sort((c,a)=>c.name.localeCompare(a.name))||[]);return{proxy:n,options:l}};L.components=Object.assign({SupplierEntryInput:Fr},L.components);var Pr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("SupplierEntryInput",{attrs:{options:e.options},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}})},Nr=[];const Re={};var Mr=m(L,Pr,Nr,!1,Lr,null,null,null);function Lr(e){for(let s in Re)this[s]=Re[s]}const Kr=function(){return Mr.exports}(),Gr={get(){return Ue(["random-bundle-solution"],()=>Je.get(`${Qe}/random-bundle-solution`).then(e=>e.data))}},K={};K.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},products:{key:"products",required:!0,type:Array}};K.setup=(e,s)=>{const t=e,r=s.emit,n=k(t,r),l=u(()=>{var v,J;const y=[];return(v=n.value.supplier)!=null&&v.id||y.push("Select a supplier"),((J=n.value.status)==null?void 0:J.state)===We.State.DELIVERED&&y.push('The status of this scorecard has already been marked as "Delivered."'),{allowed:y.length===0,reasons:y}}),c=u(()=>t.id),a=u({get(){var y,v;return(v=(y=t.value)==null?void 0:y.supplier)==null?void 0:v.id},set(y){y&&n.value.supplier&&(n.value.supplier.id=y)}}),o=He.get(c,a),i=u(()=>o.data.value),d=Gr.get(),f=u(()=>d.data.value);function p(){if(o.data.value&&d.data.value){const{cmmcAnalysis:y,focusAreaOrder:v,ratingScoreDetails:J,reports:H,riskVectors:we}=o.data.value,{BASIC:re,BALANCED:ne,ADVANCED:ae}=d.data.value,[oe,ce,le]=v,$=[];for(const h of v)$.push(x(h));const ie=[];for(const[h,Fe]of Object.entries(we))ie.push({riskVector:x(h),analysis:Fe});n.value.cmmcAnalysis={entries:Bs(y)},n.value.reports={summary:{json:b(H.summary)},risk:{json:b(H.risk)},compliance:{entries:H.compliance.map(h=>b(h))}},n.value.ratingScore={description:J.description||""},n.value.riskVectors={values:ie},n.value.focusAreaOrder={values:$},n.value.focusAreas={first:$[0]||Y.RiskVector.UNSPECIFIED,second:$[1]||Y.RiskVector.UNSPECIFIED,third:$[2]||Y.RiskVector.UNSPECIFIED},n.value.bundle={essential:oe&&re?g(re[oe]):Q.BundleSolutionEntry.create(),balanced:ce&&ne?g(ne[ce]):Q.BundleSolutionEntry.create(),premier:le&&ae?g(ae[le]):Q.BundleSolutionEntry.create()},r("update-data")}}return{proxy:n,canUpdateData:l,performance:i,random:f,updateData:p}};K.components=Object.assign({AnalystInput:dt,SupplierInput:Kr,RefreshSvg:Pe,TransitionExpand:Ne,SummaryReport:Ir,SummaryRiskReport:qr,RiskVectorAnalysisOverview:rr,FocusAreas:Ls,RiskVectorAnalysis:Zs,BundleSolution:Ds,SummaryComplianceReportDisplay:lr,StatusInput:mt},K.components);var Ur=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Analyst Information ")]),t("AnalystInput",{attrs:{users:e.users},model:{value:e.proxy.analyst,callback:function(r){e.$set(e.proxy,"analyst",r)},expression:"proxy.analyst"}}),t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Supplier Information ")]),t("SupplierInput",{attrs:{entities:e.entities},model:{value:e.proxy.supplier,callback:function(r){e.$set(e.proxy,"supplier",r)},expression:"proxy.supplier"}}),t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Update Data ")]),e.canUpdateData.allowed?t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"w-full space-x-2 lg:w-auto",attrs:{type:"button",disabled:!e.canUpdateData.allowed},on:{click:e.updateData}},[t("RefreshSvg",{staticClass:"-ml-1 w-4 xl:w-5"}),t("span",[e._v("Update")])],1)],1):t("div",[t("BaseAlert",{staticClass:"rounded-none shadow-none",attrs:{type:"warn"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Update Unavailable")]},proxy:!0},{key:"message",fn:function(){return[t("ul",{staticClass:"flex list-inside list-disc flex-col space-y-1"},e._l(e.canUpdateData.reasons,function(r){return t("li",{key:r},[e._v(" "+e._s(r)+" ")])}),0)]},proxy:!0}],null,!1,4159848379)})],1),t("TransitionExpand",[e.performance&&e.random?t("div",{staticClass:"divide-y"},[e.proxy.reports?[t("SummaryReport",{attrs:{"v-model":e.proxy.reports.summary,performance:e.performance}}),t("SummaryRiskReport",{attrs:{"v-model":e.proxy.reports.risk,performance:e.performance}})]:e._e(),e.proxy.focusAreaOrder?t("div",{staticClass:"grid divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Recommended Focus Areas ")]),t("div",{staticClass:"flex flex-col divide-y lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:grid-cols-3"},[t("RiskVectorAnalysisOverview",{model:{value:e.proxy.riskVectors,callback:function(r){e.$set(e.proxy,"riskVectors",r)},expression:"proxy.riskVectors"}}),t("FocusAreas",{attrs:{order:e.proxy.focusAreaOrder},model:{value:e.proxy.focusAreas,callback:function(r){e.$set(e.proxy,"focusAreas",r)},expression:"proxy.focusAreas"}})],1)],1):e._e(),e.proxy.riskVectors?[t("RiskVectorAnalysis",{model:{value:e.proxy.riskVectors,callback:function(r){e.$set(e.proxy,"riskVectors",r)},expression:"proxy.riskVectors"}})]:e._e(),e.proxy.bundle?[t("BundleSolution",{attrs:{products:e.products},model:{value:e.proxy.bundle,callback:function(r){e.$set(e.proxy,"bundle",r)},expression:"proxy.bundle"}})]:e._e(),e.proxy.reports&&e.proxy.reports.compliance?[t("div",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Compliance ")]),t("SummaryComplianceReportDisplay",{attrs:{value:e.proxy.reports.compliance}})],1)]:e._e()],2):e._e()]),t("StatusInput",{model:{value:e.proxy.status,callback:function(r){e.$set(e.proxy,"status",r)},expression:"proxy.status"}})],1)},Jr=[];const Ee={};var Qr=m(K,Ur,Jr,!1,Wr,null,null,null);function Wr(e){for(let s in Ee)this[s]=Ee[s]}const Hr=function(){return Qr.exports}(),se={};se.props={value:{key:"value",required:!1,type:null,default:void 0},templates:{key:"templates",required:!0,type:Array}};se.setup=(e,s)=>{const t=e,r=s.emit,n=_(t,r),l=u(()=>t.templates.map(({key:c})=>({value:c.split("/")[1]||""})));return{proxy:n,options:l}};var Yr=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("span",{staticClass:"after:ml-0.5 after:text-red-700 after:content-['*']"},[e._v(" Template ")]),t("BaseSelect",{staticClass:"flex flex-col lg:col-span-2",model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}},e._l(e.options,function(r,n){return t("option",{key:n,domProps:{value:r}},[e._v(" "+e._s(r.value)+" ")])}),0)],1)},zr=[];const De={};var Zr=m(se,Yr,zr,!1,Xr,null,null,null);function Xr(e){for(let s in De)this[s]=De[s]}const en=function(){return Zr.exports}(),G={};G.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!1,type:null},users:{key:"users",required:!0,type:Array},entities:{key:"entities",required:!0,type:Array},products:{key:"products",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array}};G.setup=(e,s)=>{const t=e,r=s.emit;return{proxy:k(t,r)}};G.components=Object.assign({TemplateInput:en,DataInput:Hr},G.components);var tn=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" Scorecard Template ")]),t("TemplateInput",{attrs:{templates:e.templates},model:{value:e.proxy.template,callback:function(r){e.$set(e.proxy,"template",r)},expression:"proxy.template"}}),t("DataInput",{attrs:{id:e.id,users:e.users,entities:e.entities,products:e.products},model:{value:e.proxy.data,callback:function(r){e.$set(e.proxy,"data",r)},expression:"proxy.data"}})],1)},sn=[];const qe={};var rn=m(G,tn,sn,!1,nn,null,null,null);function nn(e){for(let s in qe)this[s]=qe[s]}const an=function(){return rn.exports}(),U={};U.props={value:{key:"value",required:!1,type:null},accountId:{key:"accountId",required:!0,type:String}};U.setup=(e,s)=>{const t=e,r=s.emit,n=Ye(t),l=_(t,r),c=[ft.list(),yt.list(),vt.list(n.accountId)],a=_t.list();return{proxy:l,queries:c,users:a}};U.components=Object.assign({ScorecardInput:an},U.components);var on=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseVueQueries",{attrs:{queries:e.queries},scopedSlots:e._u([{key:"success",fn:function(r){var n=r[0],l=r[1],c=r[2];return[t("ScorecardInput",{attrs:{id:e.accountId,users:e.users.data.value||[],entities:c,products:n,templates:l},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}})]}}])})},cn=[];const Oe={};var ln=m(U,on,cn,!1,un,null,null,null);function un(e){for(let s in Oe)this[s]=Oe[s]}const Rn=function(){return ln.exports}();export{Rn as A};
