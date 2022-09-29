import{br as I,r as y,b_ as _,d as b,aG as L,ab as T,aP as h,aQ as w,n as S,aq as R,cR as F,cI as P}from"./index.181068a8.js";import{A as V}from"./AppVueGoodTable.7bc68eda.js";import{S as G}from"./StatusBadge.15b8e31e.js";import{F as M}from"./FileSaver.min.8162a01b.js";import{A as N}from"./AggregateLicenseDisplay.0943c27f.js";import{u as O}from"./useAccountGroupScorecardOrders.31ed1d11.js";var U=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{d:"M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5zM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z","clip-rule":"evenodd"}})])};const j={render:U},d={};d.props={scorecards:{key:"scorecards",required:!0,type:Array}};d.setup=(e,r)=>{const t=e,o=[{label:"License Type",field:"licenseType"},{label:"Scorecard ID",field:"id"},{label:"Company Name",field:"name"},{label:"Company Domain",field:"domain"},{label:"Status",field:"status"},{label:"Created At",field:"createdAt"},{label:"Updated At",field:"updatedAt"},{label:"Expires At",field:"expiresAt"},{label:"Download Report",field:"report",sortable:!1}],s=y(!1),a=y([]),c=_("id"),i=b(()=>t.scorecards.filter(n=>n.status.state!=="Archived")),u=b(()=>i.value.map(n=>{const{licenseType:p,id:v,company:f,status:g,log:l}=n;return{licenseType:p,id:v,name:f.name,domain:f.domain,status:g.state,createdAt:l.receivedAt,updatedAt:l.updatedAt,expiresAt:l.expiresAt}}));function C({selectedRows:n}){a.value=n}async function $(n){const{id:p,name:v,createdAt:f}=n,g=T(f).toLocaleString(),l=await h.get(`${w}/scorecards/${p}/pdf`,{responseType:"blob"}),B=`${v} Scorecard ${g} ${p}.pdf`;M.exports.saveAs(l.data,B)}const D=L();async function k(){s.value=!0;for(const n of a.value)await h.put(`${w}/scorecard-orders/${n.id}/status`,{state:"Archived",date:new Date().toISOString()});D.success("Archived Scorecard Successfully"),s.value=!1}return{columns:o,clicked:s,selected:a,id:c,rows:u,selectionChanged:C,downloadFile:$,archiveSelected:k}};d.components=Object.assign({AppVueGoodTable:V,StatusBadge:G,DateIsoStringDisplay:I,ArchiveSvg:j},d.components);var q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-4"},[t("AppVueGoodTable",{attrs:{columns:e.columns,rows:e.rows,"select-options":{enabled:!0},"sort-options":{enabled:!0}},on:{"on-selected-rows-change":e.selectionChanged},scopedSlots:e._u([{key:"table-row",fn:function(o){var s=o.row,a=o.column,c=o.formattedRow;return[a.field==="status"?[t("StatusBadge",{attrs:{value:c[a.field]}})]:a.field==="createdAt"?[t("DateIsoStringDisplay",{attrs:{value:s.createdAt,format:"date"}})]:a.field==="updatedAt"?[t("DateIsoStringDisplay",{attrs:{value:s.updatedAt,format:"date"}})]:a.field==="expiresAt"?[s.expiresAt===void 0?t("span",{staticClass:"text-red-500"},[e._v(" Date N/A ")]):t("span",[t("DateIsoStringDisplay",{attrs:{value:s.expiresAt,format:"date"}})],1)]:a.field==="view"?[t("BaseLink",{attrs:{to:`/admin/companies/${e.id}/scorecards/portfolio/groups/${s.id}`}},[e._v(" View ")])]:a.field==="report"?[t("span",{staticClass:"inline-flex h-full w-full rounded-md shadow-sm"},[t("button",{staticClass:"rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600 focus:border-blue-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",attrs:{type:"button",disabled:s.status!=="Completed"},on:{click:function(i){return e.downloadFile(s)}}},[e._v(" Download ")])])]:[e._v(" "+e._s(c[a.field])+" ")]]}},{key:"table-actions",fn:function(){return[t("div",{staticClass:"pr-1"},[t("span",{staticClass:"inline-flex rounded-md shadow-sm"},[t("button",{staticClass:"focus:ring-blue inline-flex items-center space-x-2 rounded-md border border-transparent bg-blue-500 px-3 py-1 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:border-blue-700 focus:outline-none active:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button",disabled:e.selected.length===0||e.clicked},on:{click:e.archiveSelected}},[t("ArchiveSvg",{staticClass:"h-5 w-5 text-white"}),t("span",{staticClass:"hidden lg:block"},[e._v("Archive")])],1)])])]},proxy:!0}])})],1)},z=[];const A={};var E=S(d,q,z,!1,H,null,null,null);function H(e){for(let r in A)this[r]=A[r]}const Q=function(){return E.exports}(),m={};m.setup=(e,r)=>{const t=_("id"),o=_("groupId"),s=F.get(t,o),a=b(()=>{var i,u;return((u=(i=s.data.value)==null?void 0:i.value)==null?void 0:u.groupLicenses)||P.AggregateLicenseUsage.create()}),c=O.list(t,o);return{id:t,groupId:o,summary:s,aggregateLicenseUsage:a,scorecards:c}};m.components=Object.assign({AggregateLicenseDisplay:N,PortfolioScorecardsTable:Q,PlusSvg:R},m.components);var J=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"space-y-6"},[t("BaseVueQuery",{attrs:{query:e.summary},scopedSlots:e._u([{key:"success",fn:function(){return[t("AggregateLicenseDisplay",{attrs:{"license-usage":e.aggregateLicenseUsage}})]},proxy:!0}])}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Scorecards ")]),t("BaseVueQuery",{attrs:{query:e.scorecards},scopedSlots:e._u([{key:"success",fn:function(o){var s=o.data;return[t("PortfolioScorecardsTable",{attrs:{scorecards:s}})]}}])}),t("div",{staticClass:"p-4"},[t("div",{staticClass:"lg:inline-flex"},[t("BaseButton",{staticClass:"w-full space-x-2 md:w-auto",attrs:{to:`/admin/companies/${e.id}/scorecards/portfolio/groups/${e.groupId}/new`,"display-type":"info"}},[t("PlusSvg",{staticClass:"h-auto w-4 xl:w-5"}),t("span",[e._v("New Report")])],1)],1)])],1)],1)},K=[];const x={};var W=S(m,J,K,!1,X,null,null,null);function X(e){for(let r in x)this[r]=x[r]}const re=function(){return W.exports}();export{re as default};