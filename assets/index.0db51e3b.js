import{D as $}from"./document-arrow-down.2aec0021.js";import{B}from"./BlackKitePerformanceReportDisplay.6c92aec7.js";import{B as D}from"./BundleSolutionDisplay.bf1dfb3f.js";import{ag as y,aP as l,aQ as u,c as p,n as v,c8 as S}from"./index.89daa9e1.js";import{F as h}from"./FileSaver.min.f4440e0c.js";import"./BlackKiteSummaryOverview.05f61375.js";import"./BlackKiteProgressBar.51f33419.js";import"./index.ebbce841.js";import"./ToolTip.dfc717fb.js";import"./GradeLetterDisplay.a7b35f28.js";import"./TransitionExpand.bdeb7c21.js";import"./ratingScoreDescription.dc21462c.js";import"./BlackKiteRiskVectorsDisplay.00e845b5.js";import"./CmmcAnalysisDisplay.4283a37e.js";import"./BasicModal.8aa31da7.js";import"./useCompanyWishlistItems.81d3dfa5.js";import"./cloneDeep.7a3dfba9.js";import"./_Uint8Array.850ed890.js";import"./keys.b1f861a3.js";import"./_baseAssignValue.57f601f6.js";import"./_copyArray.56331c81.js";const w={get(e){async function n(){const{data:t}=await l.get(`${u}/companies/${e.value}/black-kite/mapped-entity/latest-scorecard`);return t}return y(["companies",e,"black-kite","mapped-entity","latest-scorecard"],n)}},b={get(e){async function n(){return await l.get(`${u}/companies/${e.value}/black-kite/mapped-entity/performance`).then(a=>a.data)}return y(["companies",e,"black-kite","mapped-entity","performance"],n)}},c={};c.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null},isLoading:{key:"isLoading",required:!1,type:Boolean,default:!1}};c.setup=(e,n)=>{const t=e;return{converted:p(()=>Object.entries(t.value).map(([o,r])=>({id:o,type:r.title,description:r.description,products:r.groups.flatMap(s=>[s.main,s.option])})))}};c.components=Object.assign({BundleSolutionDisplay:D},c.components);var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BundleSolutionDisplay",{attrs:{id:e.id,bundle:e.converted,"is-loading":e.isLoading}})},C=[];const _={};var E=v(c,x,C,!1,R,null,null,null);function R(e){for(let n in _)this[n]=_[n]}const M=function(){return E.exports}(),i={};i.setup=(e,n)=>{const t=S("id"),a=b.get(t),o=p(()=>a.data.value),r=w.get(t),s=p(()=>"");async function d(m){const g=encodeURIComponent(t.value),k=await l(`${u}/companies/${g}/scorecards/${m}/pdf`,{responseType:"blob"});h.exports.saveAs(k.data,`Scorecard-${t.value}-${m}.pdf`)}return{id:t,performance:o,scorecardQuery:r,scorecardErrorMessage:s,downloadFile:d}};i.components=Object.assign({BlackKitePerformanceReportDisplay:B,BundleSolutionDisplayV2:M,DocumentDownloadSvg:$},i.components);function q(e){if(e==null)throw new TypeError("Cannot destructure "+e)}var F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.performance?t("BlackKitePerformanceReportDisplay",{attrs:{value:e.performance}},[t("BaseVueQuery",{attrs:{query:e.scorecardQuery},scopedSlots:e._u([{key:"success",fn:function(a){var o=a.data,r=o.id,s=o.data.bundle;return[t("div",{staticClass:"space-y-6"},[t("div",{staticClass:"space-y-2"},[t("BaseTypography",{staticClass:"text-prime-navy",attrs:{component:"h2",variant:"h6"}},[e._v(" Solution Options Based on Risk Rating ")]),t("BundleSolutionDisplayV2",{attrs:{id:e.id,value:s}})],1),t("BaseButton",{staticClass:"space-x-1",attrs:{shape:"rectangle"},on:{click:function(d){return e.downloadFile(r)}}},[t("span",[e._v("Download Scorecard")]),t("DocumentDownloadSvg",{staticClass:"h-auto w-4 xl:w-5"})],1)],1)]}},{key:"error",fn:function(a){return q(a),[e._v(e._s(e.scorecardErrorMessage))]}}],null,!1,3251307101)})],1):e._e()},Q=[];const f={};var j=v(i,F,Q,!1,P,null,null,null);function P(e){for(let n in f)this[n]=f[n]}const re=function(){return j.exports}();export{re as default};