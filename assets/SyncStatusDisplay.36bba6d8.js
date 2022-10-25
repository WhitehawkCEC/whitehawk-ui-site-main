import{T as h}from"./check-circle.48e4a9f5.js";import{c as i,cN as g,n as l,br as x,af as S,cG as C}from"./index.5601926e.js";var w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5z","clip-rule":"evenodd"}})])};const $={render:w},p={};p.props={value:{key:"value",required:!1,type:Boolean}};p.setup=(t,s)=>{const e=t;return{display:i(()=>{switch(e.value){case!0:return{icon:h,iconColor:"text-green-600"};case!1:return{icon:g,iconColor:"text-red-500"};default:return{icon:$,iconColor:"text-gray-500"}}})}};var T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(t.display.icon,{tag:"Component",staticClass:"w-5",class:t.display.iconColor})},B=[];const u={};var D=l(p,T,B,!1,k,null,null,null);function k(t){for(let s in u)this[s]=u[s]}const Y=function(){return D.exports}(),n={};n.props={header:{key:"header",required:!0,type:String},sync:{key:"sync",required:!0,type:null}};n.setup=(t,s)=>({});n.components=Object.assign({DateIsoStringDisplay:x},n.components);var I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-col space-y-1"},[e("BaseTypography",{attrs:{variant:"h5",component:"h2"}},[t._v(" "+t._s(t.header)+" ")]),e("BaseTypography",{staticClass:"space-x-2 uppercase text-gray-500",attrs:{variant:"overline"}},[e("span",[t._v("Last Synced:")]),t.sync.syncDate?e("DateIsoStringDisplay",{attrs:{value:t.sync.syncDate}}):e("span",[t._v("-")])],1),e("BaseTypography",{staticClass:"space-x-2 uppercase text-gray-500",attrs:{variant:"overline"}},[e("span",[t._v("Synced Reports:")]),e("span",[t._v(" "+t._s(t.sync.syncedReports?t.sync.syncedReports:"-")+" ")])])],1)},R=[];const _={};var b=l(n,I,R,!1,E,null,null,null);function E(t){for(let s in _)this[s]=_[s]}const G=function(){return b.exports}();function J(t){if(t.startsWith("http")||t.startsWith("www")||t.startsWith("https")){const s=new URL(t).hostname;return d(s)}else{const s=`https://www.${t}`,e=new URL(s).hostname;return d(e)}}function d(t){return t.startsWith("www.")?t.replace("www.",""):t}var M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{d:"M12 9a1 1 0 0 1-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5z"}}),e("path",{attrs:{d:"M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 0 0 1 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7.002 7.002 0 0 1 6.003-6.93z"}})])};const j={render:M};var L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5z","clip-rule":"evenodd"}})])};const z={render:L},c={};c.props={syncInfo:{key:"syncInfo",required:!0,type:null}};c.setup=(t,s)=>({});c.components=Object.assign({DateIsoStringDisplay:x},c.components);var A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("dl",{staticClass:"grid gap-4 sm:grid-cols-3 sm:px-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 2xl:px-6"},[e("div",{staticClass:"flex flex-col space-y-1 xl:flex-row xl:items-center xl:space-y-0 xl:space-x-2 2xl:flex-col 2xl:items-start 2xl:space-y-1 2xl:space-x-0"},[e("dt",[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._t("title")],2)],1),e("dd",[e("BaseTypography",{staticClass:"capitalize text-gray-700",attrs:{variant:"p1"}},[t._t("mappedValue")],2)],1)]),e("div",{staticClass:"flex flex-col space-y-1 xl:flex-row xl:items-center xl:space-y-0 xl:space-x-2 2xl:flex-col 2xl:items-start 2xl:space-y-1 2xl:space-x-0"},[e("dt",[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Last Synced: ")])],1),e("dd",[e("BaseTypography",{staticClass:"text-gray-700",attrs:{variant:"p1"}},[t.syncInfo.syncDate?e("DateIsoStringDisplay",{attrs:{value:t.syncInfo.syncDate}}):[t._v("-")]],2)],1)]),e("div",{staticClass:"flex flex-col space-y-1 xl:flex-row xl:items-center xl:space-y-0 xl:space-x-2 2xl:flex-col 2xl:items-start 2xl:space-y-1 2xl:space-x-0"},[e("dt",[e("BaseTypography",{staticClass:"uppercase text-gray-500",attrs:{variant:"overline"}},[t._v(" Synced Reports: ")])],1),e("dd",[e("BaseTypography",{staticClass:"text-gray-700",attrs:{variant:"p1"}},[t._v(" "+t._s(t.syncInfo.syncedReports?t.syncInfo.syncedReports:"-")+" ")])],1)])])},O=[];const v={};var V=l(c,A,O,!1,q,null,null,null);function q(t){for(let s in v)this[s]=v[s]}const F=function(){return V.exports}(),o={};o.props={syncStatus:{key:"syncStatus",required:!0,type:null},syncType:{key:"syncType",required:!0,type:null}};o.setup=(t,s)=>{const e=t,y=i(()=>{var a,r;return{syncDate:(a=e.syncStatus.source)==null?void 0:a.syncDate,syncedReports:(r=e.syncStatus.source)==null?void 0:r.syncedReports}}),m=i(()=>{var a,r;return{syncDate:(a=e.syncStatus.target)==null?void 0:a.syncDate,syncedReports:(r=e.syncStatus.target)==null?void 0:r.syncedReports}});return{SyncType:C.SyncType,sourceSyncInfo:y,targetSyncInfo:m}};o.components=Object.assign({BarChartSvg:S,SyncInfoDescriptionList:F,PieChartSvg:j,DesktopSvg:z},o.components);var U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"grid gap-4 xl:grid-cols-2"},[t.syncType===t.SyncType.BLACK_KITE_TO_CYBER_ONE?e("BaseSimpleCard",{staticClass:"space-y-4 p-4"},[e("div",{staticClass:"flex items-center space-x-4"},[e("span",{staticClass:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prime-teal"},[e("BarChartSvg",{staticClass:"w-6 text-white"})],1),e("BaseTypography",{attrs:{variant:"subtitle3",component:"h3"}},[t._v(" Black Kite ")])],1),e("SyncInfoDescriptionList",{attrs:{"sync-info":t.sourceSyncInfo},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Ecosystem:")]},proxy:!0},{key:"mappedValue",fn:function(){return[t._v(" "+t._s(t.syncStatus.source&&t.syncStatus.source.mappedSource?t.syncStatus.source.mappedSource:"-")+" ")]},proxy:!0}],null,!1,3524325233)})],1):t.syncType===t.SyncType.SUPPLY_WISDOM_TO_CYBER_ONE?e("BaseSimpleCard",{staticClass:"space-y-4 p-4"},[e("div",{staticClass:"flex items-center space-x-4"},[e("span",{staticClass:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600"},[e("PieChartSvg",{staticClass:"w-6 text-white"})],1),e("BaseTypography",{attrs:{variant:"subtitle3",component:"h3"}},[t._v(" Supply Wisdom ")])],1),e("SyncInfoDescriptionList",{attrs:{"sync-info":t.sourceSyncInfo},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Target:")]},proxy:!0},{key:"mappedValue",fn:function(){return[t._v(" "+t._s(t.syncStatus.source&&t.syncStatus.source.mappedSource?t.syncStatus.source.mappedSource:"-")+" ")]},proxy:!0}])})],1):t._e(),e("BaseSimpleCard",{staticClass:"space-y-4 p-4"},[e("div",{staticClass:"flex items-center space-x-4"},[e("span",{staticClass:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800"},[e("DesktopSvg",{staticClass:"w-6 text-white"})],1),e("BaseTypography",{attrs:{variant:"subtitle3",component:"h3"}},[t._v(" CyberOne ")])],1),e("SyncInfoDescriptionList",{attrs:{"sync-info":t.targetSyncInfo},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Mapped Asset:")]},proxy:!0},{key:"mappedValue",fn:function(){return[t._v(" "+t._s(t.syncStatus.target&&t.syncStatus.target.mappedTarget?t.syncStatus.target.mappedTarget:"-")+" ")]},proxy:!0}])})],1)],1)},W=[];const f={};var P=l(o,U,W,!1,H,null,null,null);function H(t){for(let s in f)this[s]=f[s]}const Q=function(){return P.exports}();export{Y as S,G as V,Q as a,J as p};