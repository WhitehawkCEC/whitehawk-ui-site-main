import{d as l,aF as x,aS as u,br as A,aP as f,aQ as _,n as h,bs as I,an as w,ca as b}from"./index.b0bcf7b8.js";import{A as T,R as B}from"./RowSelectionInput.ff217d39.js";import{A as R,T as C}from"./AppTanStackTable.cd9aeee9.js";import{c as F}from"./createOnChangeFn.f8dcdac4.js";import{F as P}from"./FileSaver.min.d9fd36a8.js";import{u as j}from"./createSimpleTable.5fe7daf8.js";import{u as q}from"./useSnapshotScorecards.8ad38c82.js";import"./magnifying-glass.b7cbe8fe.js";import"./arrow-down-tray.793d581e.js";import"./chevron-up.736f4142.js";const c={};c.props={id:{key:"id",required:!0,type:String},subId:{key:"subId",required:!0,type:String},scorecards:{key:"scorecards",required:!0,type:Array}};c.setup=(e,o)=>{const s=e,n=l(()=>s.id),a=l(()=>s.subId),$=l(()=>s.scorecards),y=x(),r=F(),g=[r.display({id:"select",header:({table:t})=>u(T,{props:{table:t}}),cell:({row:t})=>u(B,{props:{row:t}})}),r.accessor(t=>t.company.name,{id:"company",header:()=>"Company",enableColumnFilter:!1}),r.accessor("id",{header:()=>"Scorecard ID",enableColumnFilter:!1}),r.accessor("updatedAt",{header:()=>"Last Updated",cell:t=>u(A,{props:{value:t.getValue(),format:"date"}}),enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:t})=>u(C,{props:{actions:[{id:"view",to:`/admin/companies/${n.value}/subscriptions/${a.value}/integrations/6/scorecards/snapshot/${t.original.id}`},{id:"download",async action(){const i=await f(`${_}/companies/${s.id}/scorecards/${t.original.id}/docx`,{responseType:"blob"}),m=`${t.original.company.name} - Snapshot - ${t.id}.docx`;P.exports.saveAs(i.data,m)}},{id:"archive",async action(){(await f.delete(`${_}/companies/${s.id}/snapshot-scorecards/${t.original.id}`)).status===200&&y.success("Archived Scorecard Successfully")}}]}})})],p=j($,g),k=[{id:"archive",async action(){const t=p.getSelectedRowModel().rows;for(const i of t){const m=i.original.id;await f.delete(`${_}/companies/${s.id}/snapshot-scorecards/${m}`)}y.success("Archived Scorecard(s) Successfully")},isDisabled:l(()=>p.getSelectedRowModel().rows.length===0)}];return{instance:p,bulkActions:k}};c.components=Object.assign({AppTanStackTable:R},c.components);var D=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("AppTanStackTable",{attrs:{table:e.instance,"table-actions":e.bulkActions}})},M=[];const S={};var E=h(c,D,M,!1,H,null,null,null);function H(e){for(let o in S)this[o]=S[o]}const V=function(){return E.exports}(),d={};d.setup=(e,o)=>{const s=b("id"),n=b("subscriptionId"),a=q.list(s);return{id:s,subscriptionId:n,scorecards:a}};d.components=Object.assign({BackButton:I,PlusSvg:w,SnapshotScorecardsTable:V},d.components);var L=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("BaseTablePageLayout",{scopedSlots:e._u([{key:"backButton",fn:function(){return[s("BackButton",{attrs:{link:`/admin/companies/${e.id}/subscriptions/${e.subscriptionId}/integrations`}})]},proxy:!0},{key:"overline",fn:function(){return[e._v("WhiteHawk")]},proxy:!0},{key:"title",fn:function(){return[e._v("Snapshot Scorecards")]},proxy:!0},{key:"button",fn:function(){return[s("BaseButton",{staticClass:"space-x-2",attrs:{type:"button",to:"new",append:""}},[s("PlusSvg",{staticClass:"-ml-1 w-5"}),s("span",[e._v("Scorecard")])],1)]},proxy:!0},{key:"table",fn:function(){return[s("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(n){var a=n.data;return[s("SnapshotScorecardsTable",{attrs:{id:e.id,"sub-id":e.subscriptionId,scorecards:a}})]}}])})]},proxy:!0}])})},N=[];const v={};var O=h(d,L,N,!1,Q,null,null,null);function Q(e){for(let o in v)this[o]=v[o]}const se=function(){return O.exports}();export{se as default};
