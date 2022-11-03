import{D as k}from"./document-arrow-down.2aec0021.js";import{B as $}from"./BlackKitePerformanceReportDisplay.2142669d.js";import{B}from"./BundleSolutionDisplay.4cdaf57c.js";import{ag as y,aP as l,aQ as d,c as v,n as g,b$ as S}from"./index.81c86bc2.js";import{F as b}from"./FileSaver.min.1548b2ad.js";import"./BlackKiteSummaryOverview.89c0a976.js";import"./BlackKiteProgressBar.26c8976c.js";import"./ToolTip.8de4e4ec.js";import"./exclamation-triangle.54812a62.js";import"./GradeLetterDisplay.a4c32af6.js";import"./ratingScoreDescription.dc21462c.js";import"./BlackKiteRiskVectorsDisplay.de1596bc.js";import"./CmmcAnalysisDisplay.451538c5.js";import"./BasicModal.de961957.js";import"./useCompanyWishlistItems.9b9cd74a.js";import"./cloneDeep.eda26601.js";import"./_Uint8Array.7d11601c.js";import"./keys.6296f61a.js";import"./_baseAssignValue.4fdec594.js";import"./_copyArray.56331c81.js";const D={get(e){async function n(){const{data:t}=await l.get(`${d}/companies/${e.value}/black-kite/mapped-entity/latest-scorecard`);return t}return y(["companies",e,"black-kite","mapped-entity","latest-scorecard"],n)}},w={get(e){async function n(){const{data:t}=await l.get(`${d}/companies/${e.value}/black-kite/mapped-entity/performance`);return t}return y(["companies",e,"black-kite","mapped-entity","performance"],n)}},s={};s.props={id:{key:"id",required:!0,type:String},value:{key:"value",required:!0,type:null},isLoading:{key:"isLoading",required:!1,type:Boolean,default:!1}};s.setup=(e,n)=>{const t=e;return{converted:v(()=>Object.entries(t.value).map(([a,r])=>({id:a,type:r.title,description:r.description,products:r.groups.flatMap(o=>[o.main,o.option])})))}};s.components=Object.assign({BundleSolutionDisplay:B},s.components);var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BundleSolutionDisplay",{attrs:{id:e.id,bundle:e.converted,"is-loading":e.isLoading}})},x=[];const _={};var E=g(s,h,x,!1,Q,null,null,null);function Q(e){for(let n in _)this[n]=_[n]}const R=function(){return E.exports}(),u={};u.setup=(e,n)=>{const t=S("id"),c=w.get(t),a=D.get(t),r=v(()=>"");async function o(i){const p=encodeURIComponent(t.value),m=await l(`${d}/companies/${p}/scorecards/${i}/pdf`,{responseType:"blob"});b.exports.saveAs(m.data,`Scorecard-${t.value}-${i}.pdf`)}return{id:t,performanceQuery:c,scorecardQuery:a,scorecardErrorMessage:r,downloadFile:o}};u.components=Object.assign({BlackKitePerformanceReportDisplay:$,BundleSolutionDisplayV2:R,DocumentDownloadSvg:k},u.components);function q(e){if(e==null)throw new TypeError("Cannot destructure undefined")}var C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ClientOnly",[t("BaseVueQuery",{attrs:{query:e.performanceQuery},scopedSlots:e._u([{key:"success",fn:function(c){var a=c.data;return[t("BlackKitePerformanceReportDisplay",{attrs:{value:a}},[t("div",[t("BaseVueQuery",{attrs:{query:e.scorecardQuery},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.data,i=o.id,p=o.data.bundle;return[t("div",{staticClass:"space-y-6"},[t("BaseTypography",{attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Solution Options Based on Risk Rating ")]),t("BundleSolutionDisplayV2",{attrs:{id:e.id,value:p}}),t("BaseButton",{staticClass:"space-x-1",attrs:{shape:"rectangle"},on:{click:function(m){return e.downloadFile(i)}}},[t("span",[e._v("Download Scorecard")]),t("DocumentDownloadSvg",{staticClass:"h-auto w-4 xl:w-5"})],1)],1)]}},{key:"error",fn:function(r){return q(r),[e._v(e._s(e.scorecardErrorMessage))]}}],null,!0)})],1)])]}}])})],1)],1)},M=[];const f={};var j=g(u,C,M,!1,F,null,null,null);function F(e){for(let n in f)this[n]=f[n]}const ne=function(){return j.exports}();export{ne as default};