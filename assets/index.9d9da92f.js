import{d as A,a_ as i,n as S,bs as P,aP as $,aQ as B}from"./index.e627960d.js";import{A as I}from"./AppTanStackTable.9bda351a.js";import{u as V,c as j,i as u,r as O,h as q,g as G,a as U,f as E,e as N,d as z,b as H}from"./createOnChangeFn.7e56f0c4.js";import{m as x}from"./multiSet.dcd15b85.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";const L=[{text:"0-1",isInRange(e){return e>=0&&e<=1}},{text:"2-5",isInRange(e){return e>=2&&e<=5}},{text:"6 and more",isInRange(e){return e>=6}}],p={};p.props={products:{key:"products",required:!0,type:Array}};p.setup=(e,a)=>{const n=e,g=A(()=>n.products.map(t=>{const{id:r,name:o,manufacturer:c,categories:s,type:T,price:b}=t,w=m(c.id),f=L.find(_=>_.isInRange(w));return{id:r,product:{name:o,productCount:w,countGroup:f==null?void 0:f.text},manufacturer:c,categories:s.map(({name:_})=>_),type:T,price:b}}).sort((t,r)=>t.product.name.localeCompare(r.product.name)));function m(t){const r=[];for(const o of n.products)t===o.manufacturer.id&&r.push(o);return r.length}const l=j(),k=[l.accessor("product",{header:()=>"Product",cell:t=>t.getValue().name,filterFn(t,r,o){return t.original.product.countGroup===o}}),l.accessor(t=>t.manufacturer.name,{id:"manufacturer",header:()=>"Manufacturer"}),l.accessor("categories",{header:()=>"Categories",cell:t=>t.getValue().join(", "),filterFn:"arrIncludes"}),l.accessor(t=>t.type.name,{id:"type",header:()=>"Product Type"}),l.accessor("price",{header:()=>"Price Range",filterFn:"equalsString"})],h=i([]),v=i({pageIndex:0,pageSize:10}),R=i(""),F=i([]),C=i({});return{instance:V({get data(){return g.value},columns:k,state:{get sorting(){return h.value},get pagination(){return v.value},get globalFilter(){return R.value},get columnFilters(){return F.value},get rowSelection(){return C.value}},onSortingChange:u(h),onPaginationChange:u(v),onColumnFiltersChange:u(F),onGlobalFilterChange:u(R),globalFilterFn:(t,r,o,c)=>{const s=O(t.getValue(r),o,{threshold:q.CONTAINS});return c(s),s.passed},onRowSelectionChange:u(C),getCoreRowModel:G(),getFacetedRowModel:U(),getSortedRowModel:E(),getFacetedUniqueValues(t,r){const o=H();return r==="product"?()=>{const c=t.getColumn(r).getFacetedRowModel();return x(c.flatRows.flatMap(s=>s.original.product.countGroup?[s.original.product.countGroup]:[]))}:r==="categories"?()=>{const c=t.getColumn(r).getFacetedRowModel();return x(c.flatRows.flatMap(s=>s.original.categories?s.original.categories:[]))}:o(t,r)},getPaginationRowModel:N(),getFilteredRowModel:z()})}};p.components=Object.assign({AppTanStackTable:I},p.components);var Q=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("AppTanStackTable",{attrs:{table:e.instance}})},D=[];const M={};var J=S(p,Q,D,!1,K,null,null,null);function K(e){for(let a in M)this[a]=M[a]}const W=function(){return J.exports}(),d={};d.setup=(e,a)=>({promises:Promise.all([$.get(`${B}/products`)])});d.components=Object.assign({BackButton:P,AdminAdhocMarketplaceTable:W},d.components);var X=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("section",{staticClass:"space-y-8"},[n("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-2"},[n("BackButton",{attrs:{link:".."}}),n("div",{staticClass:"flex flex-col -space-y-1"},[n("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[e._v(" Adhoc Report ")]),n("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[e._v("Marketplace")])],1)],1),e.promises?n("BasePromise",{attrs:{promise:e.promises},scopedSlots:e._u([{key:"success",fn:function(g){var m=g.result,l=m[0];return[n("AdminAdhocMarketplaceTable",{attrs:{products:l.data}})]}}],null,!1,486391857)}):e._e()],1)},Y=[];const y={};var Z=S(d,X,Y,!1,ee,null,null,null);function ee(e){for(let a in y)this[a]=y[a]}const le=function(){return Z.exports}();export{le as default};
