import{aN as R,n as l,a_ as M,c as i,bw as T,ad as j,bx as D,by as I,b0 as A,bz as E,bo as B}from"./index.7b120442.js";import{S as z,F as G}from"./createOnChangeFn.af5d9675.js";import{S as q}from"./magnifying-glass.b7cbe8fe.js";import{C as L}from"./chevron-left.0808b01b.js";import{T as N}from"./TransitionExpand.c6a1c219.js";const u={};u.props={instance:{key:"instance",required:!0,type:null}};u.setup=(e,n)=>({});u.components=Object.assign({XSvg:R},u.components);var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bg-gray-50"},[t("div",{staticClass:"flex flex-col space-y-1 py-2 px-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" Applied Filters ")]),t("div",{staticClass:"flex items-center justify-between space-y-1 lg:justify-end lg:space-x-1"},[t("div",{staticClass:"flex flex-col space-y-1 sm:flex-row sm:items-center sm:space-x-1 sm:space-y-0"},e._l(e.instance.getState().columnFilters,function(s){return t("ul",{key:s.id,attrs:{role:"list"}},[t("li",{staticClass:"inline-flex items-center rounded-full bg-blue-100 py-0.5 pl-2.5 pr-1"},[t("BaseTypography",{staticClass:"text-blue-700",attrs:{variant:"subtitle2"}},[e._v(" "+e._s(s.value)+" ")]),t("BaseIcon",{staticClass:"ml-1 flex-shrink-0",attrs:{type:"button",size:"xs"},on:{click:function(r){e.instance.getColumn(s.id).setFilterValue(void 0)}}},[t("span",{staticClass:"sr-only"},[e._v("Remove "+e._s(s.value)+" option")]),t("XSvg",{staticClass:"h-auto w-4"})],1)],1)])}),0),t("div",[t("BaseIcon",{attrs:{type:"button",size:"xs",color:"danger"},on:{click:function(s){return e.instance.resetColumnFilters()}}},[t("span",{staticClass:"sr-only"},[e._v("Clear all filters")]),t("XSvg",{staticClass:"h-auto w-4"})],1)],1)])],1)])},V=[];const b={};var H=l(u,O,V,!1,X,null,null,null);function X(e){for(let n in b)this[n]=b[n]}const U=function(){return H.exports}(),p={};p.props={column:{key:"column",required:!0,type:null},instance:{key:"instance",required:!0,type:null}};p.setup=(e,n)=>{const t=e,s=i({get(){return t.column.getFilterValue()},set(a){return t.column.setFilterValue(a)}}),r=i(()=>Array.from(t.column.getFacetedUniqueValues().keys()).sort().map(o=>({value:o})));return{proxy:s,options:r}};p.components=Object.assign({SimpleSelect:M},p.components);var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("SimpleSelect",{staticClass:"max-w-[12rem]",attrs:{options:e.options},model:{value:e.proxy,callback:function(s){e.proxy=s},expression:"proxy"}})},K=[];const y={};var Q=l(p,J,K,!1,W,null,null,null);function W(e){for(let n in y)this[n]=y[n]}const Y=function(){return Q.exports}(),d={};d.props={column:{key:"column",required:!0,type:null}};d.setup=(e,n)=>{function t(s,r){const a=r.getToggleSortingHandler();a==null||a(s)}return{toggleSort:t}};d.components=Object.assign({SortDirectionDisplay:z},d.components);var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"flex items-center space-x-1",attrs:{type:"button"},on:{click:function(s){return e.toggleSort(s,e.column)}}},[e._t("default"),e.column.getIsSorted()?t("SortDirectionDisplay",{attrs:{value:e.column.getIsSorted()}}):e._e()],2)},ee=[];const h={};var te=l(d,Z,ee,!1,ne,null,null,null);function ne(e){for(let n in h)this[n]=h[n]}const se=function(){return te.exports}(),v={};v.props={value:{key:"value",required:!0,type:null}};v.setup=(e,n)=>{const t=e;return{debouncedGlobalSearch:T(r=>{const a=r.target.value;t.value.setGlobalFilter(a)},1e3)}};v.components=Object.assign({SearchSvg:q,XSvg:R},v.components);var re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",{staticClass:"flex flex-1 space-x-2"},[t("span",{staticClass:"sr-only"},[e._v("Search Table")]),t("div",{staticClass:"group relative w-full"},[t("div",{staticClass:"absolute inset-y-0 left-0 flex items-center pl-2"},[t("SearchSvg",{staticClass:"w-6 text-gray-500 group-focus-within:text-blue-500"})],1),t("input",{staticClass:"w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-sm transition duration-150 ease-in-out read-only:bg-gray-200 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed",attrs:{type:"text",placeholder:"Search Table"},domProps:{value:e.value.getState().globalFilter},on:{input:function(s){return e.debouncedGlobalSearch(s)}}}),t("div",{staticClass:"absolute inset-y-0 right-0 flex items-center pr-3"},[e.value.getState().globalFilter?t("BaseIcon",{attrs:{size:"xs",color:"danger",action:"secondary"},on:{click:function(s){return e.value.resetGlobalFilter()}}},[t("XSvg",{staticClass:"w-4",attrs:{"aria-hidden":"true"}})],1):e._e()],1)])])},ae=[];const C={};var oe=l(v,re,ae,!1,le,null,null,null);function le(e){for(let n in C)this[n]=C[n]}const ie=function(){return oe.exports}();var ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"fill-rule":"evenodd",d:"M15.79 14.77a.75.75 0 0 1-1.06.02l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 1 1 1.04 1.08L11.832 10l3.938 3.71a.75.75 0 0 1 .02 1.06zm-6 0a.75.75 0 0 1-1.06.02l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 1 1 1.04 1.08L5.832 10l3.938 3.71a.75.75 0 0 1 .02 1.06z","clip-rule":"evenodd"}})])};const ue={render:ce},f={};f.props={value:{key:"value",required:!0,type:null}};f.setup=(e,n)=>{const t=e,s=i({get(){return t.value.getState().pagination.pageSize},set(a){return t.value.setPageSize(Number(a))}}),r=i(()=>[{text:"10",value:10},{text:"20",value:20},{text:"30",value:30},{text:"40",value:40},{text:"50",value:50},{text:"All",value:t.value.getFilteredRowModel().rows.length}]);return{proxy:s,perPageOptions:r}};var pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",{staticClass:"flex items-center space-x-2"},[t("BaseTypography",{staticClass:"whitespace-nowrap text-gray-500",attrs:{variant:"p2"}},[e._v(" Per page: ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.proxy,expression:"proxy"}],staticClass:"block cursor-pointer rounded-md border-gray-300 py-1 pl-3 pr-10 text-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",on:{change:function(s){var r=Array.prototype.filter.call(s.target.options,function(a){return a.selected}).map(function(a){var o="_value"in a?a._value:a.value;return o});e.proxy=s.target.multiple?r:r[0]}}},e._l(e.perPageOptions,function(s){return t("option",{key:s.text,domProps:{value:s.value}},[e._v(" "+e._s(s.text)+" ")])}),0)],1)},de=[];const w={};var ve=l(f,pe,de,!1,_e,null,null,null);function _e(e){for(let n in w)this[n]=w[n]}const ge=function(){return ve.exports}(),_={};_.props={value:{key:"value",required:!0,type:null}};_.setup=(e,n)=>{const t=e;return{paginationResultText:i(()=>{const{pageIndex:r,pageSize:a}=t.value.getState().pagination,o=t.value.getFilteredRowModel().rows.length,c=r*a,P=Math.min(c+a,o);return t.value.getPageCount()===0?"Showing 0 results":`Showing ${c+1} to ${P} of ${o} results`})}};_.components=Object.assign({PageSizeInput:ge,DoubleChevronLeftSvg:ue,ChevronLeftSvg:L,ChevronRightSvg:j,DoubleChevronRightSvg:D},_.components);var fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex items-center justify-between py-2 px-3"},[t("PageSizeInput",{attrs:{value:e.value}}),t("div",{staticClass:"flex items-center space-x-2"},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p2"}},[e._v(" "+e._s(e.paginationResultText)+" ")]),t("nav",{staticClass:"inline-flex -space-x-px"},[t("button",{staticClass:"inline-flex rounded-l-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to first page",disabled:!e.value.getCanPreviousPage()},on:{click:function(s){return e.value.setPageIndex(0)}}},[t("DoubleChevronLeftSvg",{staticClass:"w-5"}),t("span",{staticClass:"sr-only"},[e._v("First")])],1),t("button",{staticClass:"inline-flex border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to previous page",disabled:!e.value.getCanPreviousPage()},on:{click:function(s){return e.value.previousPage()}}},[t("ChevronLeftSvg",{staticClass:"w-5"}),t("span",{staticClass:"sr-only"},[e._v("Previous")])],1),t("button",{staticClass:"inline-flex border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to next page",disabled:!e.value.getCanNextPage()},on:{click:function(s){return e.value.nextPage()}}},[t("span",{staticClass:"sr-only"},[e._v("Next")]),t("ChevronRightSvg",{staticClass:"w-5"})],1),t("button",{staticClass:"inline-flex rounded-r-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50",attrs:{type:"button","aria-label":"Go to last page",disabled:!e.value.getCanNextPage()},on:{click:function(s){e.value.setPageIndex(e.value.getPageCount()-1)}}},[t("span",{staticClass:"sr-only"},[e._v("Last")]),t("DoubleChevronRightSvg",{staticClass:"w-5"})],1)])],1)],1)},me=[];const $={};var xe=l(_,fe,me,!1,be,null,null,null);function be(e){for(let n in $)this[n]=$[n]}const ye=function(){return xe.exports}(),m={};m.props={numRows:{key:"numRows",required:!0,type:Number}};m.setup=(e,n)=>({});var he=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseTypography",{staticClass:"px-3 py-2 text-gray-500",attrs:{variant:"p2",component:"p"}},[e._v(" Rows selected: "+e._s(e.numRows)+" ")])},Ce=[];const S={};var we=l(m,he,Ce,!1,$e,null,null,null);function $e(e){for(let n in S)this[n]=S[n]}const Se=function(){return we.exports}();var ke=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"}})])};const Fe={render:ke};var Re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"}})])};const Pe={render:Re};var Me=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}}),t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}})])};const Te={render:Me};var je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},e.$listeners),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z"}})])};const De={render:je},Ie={view:{icon:Te,color:"light"},edit:{icon:I,color:"base"},download:{icon:Pe,color:"info"},archive:{icon:Fe,color:"danger"},delete:{icon:A,color:"danger"},impersonate:{icon:De,color:"teal"},setFeatured:{icon:E,color:"teal"},pinProduct:{icon:B,color:"teal"}},x={};x.props={actions:{key:"actions",required:!0,type:Array}};x.setup=(e,n)=>{function t(s){return Ie[s]}return{display:t}};var Ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"inline-flex space-x-2"},e._l(e.actions,function(s){var r=s.id,a=s.action,o=s.isDisabled;return t("div",{key:r},[t("BaseIcon",{attrs:{type:"button",size:"small",color:e.display(r).color,disabled:o},on:{click:a}},[t("span",{staticClass:"sr-only"},[e._v(e._s(r))]),t(e.display(r).icon,{tag:"Component",staticClass:"h-auto w-5"})],1)],1)}),0)},Ee=[];const k={};var Be=l(x,Ae,Ee,!1,ze,null,null,null);function ze(e){for(let n in k)this[n]=k[n]}const Ge=function(){return Be.exports}(),g={};g.props={table:{key:"table",required:!0,type:null},tableActions:{key:"tableActions",required:!1,type:Array}};g.setup=(e,n)=>{const t=e,s=i(()=>{let a=!1;return t.table.getHeaderGroups().forEach(o=>o.headers.forEach(c=>{c.column.getCanFilter()&&(a=!0)})),a}),r=i(()=>{let a=0;return t.table.getHeaderGroups().forEach(o=>o.headers.forEach(c=>{a=c.depth})),a});return{hasCustomFilters:s,depth:r}};g.components=Object.assign({PaginationDisplay:ye,GlobalSearchInput:ie,TableActions:Ge,TransitionExpand:N,RowsSelectedDisplay:Se,AppliedFiltersDisplay:U,ColumnSortingHeaderDisplay:se,FlexRender:G,ColumnFilterInput:Y},g.components);var qe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"rounded-xl shadow ring-1 ring-black ring-opacity-5"},[t("div",{staticClass:"overflow-hidden rounded-xl bg-white"},[t("div",{staticClass:"overflow-x-auto"},[t("div",{staticClass:"inline-block min-w-full divide-y bg-gray-50 align-middle"},[t("PaginationDisplay",{attrs:{value:e.table}}),t("section",{staticClass:"flex items-center space-x-3 py-2 px-3"},[t("GlobalSearchInput",{attrs:{value:e.table}}),e.tableActions?t("TableActions",{attrs:{actions:e.tableActions}}):e._e()],1),t("TransitionExpand",[e.table.getFilteredSelectedRowModel().rows.length?t("RowsSelectedDisplay",{attrs:{"num-rows":e.table.getFilteredSelectedRowModel().rows.length}}):e._e()],1),t("TransitionExpand",[e.table.getState().columnFilters.length>0?t("AppliedFiltersDisplay",{attrs:{instance:e.table}}):e._e()],1),t("table",{staticClass:"min-w-full divide-y"},[t("thead",e._l(e.table.getHeaderGroups(),function(s){return t("tr",{key:s.id},e._l(s.headers,function(r){return t("th",{key:r.id,staticClass:"py-2 px-3 text-left",attrs:{colspan:r.colSpan,scope:"col"}},[r.isPlaceholder?e._e():[r.column.getCanSort()?[t("div",{staticClass:"flex h-full flex-col space-y-1 font-body text-sm text-gray-500 antialiased",class:{"h-16":e.hasCustomFilters,"text-gray-500":r.depth===1,"text-gray-700":r.depth===2}},[t("ColumnSortingHeaderDisplay",{attrs:{column:r.column}},[t("FlexRender",{attrs:{render:r.column.columnDef.header,props:r.getContext()}})],1),r.column.getCanFilter()?t("div",{staticClass:"font-normal"},[t("ColumnFilterInput",{attrs:{column:r.column,instance:e.table}})],1):e._e()],1)]:e.depth>1?[t("div",{staticClass:"-mb-4 font-display text-xs font-medium uppercase tracking-widest text-gray-500 antialiased"},[t("FlexRender",{attrs:{render:r.column.columnDef.header,props:r.getContext()}})],1)]:[t("FlexRender",{attrs:{render:r.column.columnDef.header,props:r.getContext()}})]]],2)}),0)}),0),e.table.getRowModel().rows.length>0?t("tbody",{staticClass:"divide-y divide-gray-100 bg-white"},e._l(e.table.getRowModel().rows,function(s){return t("tr",{key:s.id,staticClass:"group hover:bg-blue-50",class:{"bg-blue-50":s.getIsSelected()}},e._l(s.getVisibleCells(),function(r,a){return t("td",{key:r.id,staticClass:"relative p-3 text-sm text-gray-500 group-hover:text-blue-500",class:s.getIsSelected()&&a===0?"border-l-2 border-blue-500":""},[t("FlexRender",{attrs:{render:r.column.columnDef.cell,props:r.getContext()}})],1)}),0)}),0):t("tbody",{staticClass:"bg-white"},[t("tr",[t("td",{staticClass:"py-2 px-3 text-center",attrs:{scope:"row",colspan:"100"}},[t("BaseTypography",{staticClass:"w-full text-gray-500",attrs:{variant:"p2",component:"p"}},[e._v(" No data to display ")])],1)])]),t("tfoot",[t("tr",[t("th",{staticClass:"py-2 px-3 text-center text-gray-500",attrs:{scope:"row",colspan:"100"}},[e.table.getPageCount()!==0?[t("BaseTypography",{attrs:{variant:"p2"}},[e._v(" Page "+e._s(e.table.getState().pagination.pageIndex+1)+" of "+e._s(e.table.getPageCount())+" ")])]:[t("BaseTypography",{attrs:{variant:"p2"}},[e._v(" Page "+e._s(e.table.getState().pagination.pageIndex)+" of "+e._s(e.table.getPageCount())+" ")])]],2)])])])],1)])])])},Le=[];const F={};var Ne=l(g,qe,Le,!1,Oe,null,null,null);function Oe(e){for(let n in F)this[n]=F[n]}const Ke=function(){return Ne.exports}();export{Ke as A,Ge as T};
