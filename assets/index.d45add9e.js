import{aT as u,aD as i,ah as l,aP as r,aQ as n,bs as m,an as v,c7 as p,n as _}from"./index.454062da.js";import{B as b}from"./BatchScorecardsV2Table.ebcf8572.js";import"./AppTanStackTable.e669837e.js";import"./createOnChangeFn.76ad9211.js";import"./chevron-up.736f4142.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.cb713303.js";import"./ScorecardStatusBadge.af59d156.js";import"./createSimpleTable.1e321f89.js";const f={create(t){const a=u();return i(e=>r.post(`${n}/companies/${t.value}/batch/generate/scorecards-v2`,e).then(s=>s.data),{onSuccess(){a.invalidateQueries(["companies",t,"batch","generate","scorecards-v2"],{exact:!0})}})},read(t,a){return l(["companies",t,"batch","scorecards","status-v2",a],()=>r.get(`${n}/companies/${t.value}/batch/scorecards/status-v2/${a.value}`).then(e=>e.data))},delete(t,a){const e=u();return i(()=>r.delete(`${n}/companies/${t.value}/batch/generate/scorecards-v2/${a.value}`).then(s=>s.data),{onSuccess(){e.invalidateQueries(["companies",t,"batch","generate","scorecards-v2",a],{exact:!0})}})},list(t){return l(["companies",t,"batch","scorecards","status-v2"],()=>r.get(`${n}/companies/${t.value}/batch/scorecards/status-v2`).then(a=>a.data))}},c={};c.setup=(t,a)=>{const e=p("id"),s=p("subscriptionId"),o=f.list(e);return{id:e,subscriptionId:s,batchQuery:o}};c.components=Object.assign({BackButton:m,PlusSvg:v,BatchScorecardsV2Table:b},c.components);var h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseTablePageLayout",{scopedSlots:t._u([{key:"backButton",fn:function(){return[e("BackButton",{attrs:{link:`/admin/companies/${t.accountId}/subscriptions/${t.subscriptionId}/integrations`}})]},proxy:!0},{key:"overline",fn:function(){return[t._v("Black Kite")]},proxy:!0},{key:"title",fn:function(){return[t._v("Batch Scorecards")]},proxy:!0},{key:"button",fn:function(){return[e("BaseButton",{staticClass:"space-x-1",attrs:{to:"./new",append:""}},[e("PlusSvg",{staticClass:"-ml-1 w-5"}),e("span",[t._v("Batch")])],1)]},proxy:!0},{key:"table",fn:function(){return[e("BaseVueQuery",{attrs:{query:t.batchQuery},scopedSlots:t._u([{key:"success",fn:function(s){var o=s.data;return[e("BatchScorecardsV2Table",{attrs:{id:t.id,"sub-id":t.subscriptionId,batches:o}})]}}])})]},proxy:!0}])})},y=[];const d={};var B=_(c,h,y,!1,x,null,null,null);function x(t){for(let a in d)this[a]=d[a]}const q=function(){return B.exports}();export{q as default};
