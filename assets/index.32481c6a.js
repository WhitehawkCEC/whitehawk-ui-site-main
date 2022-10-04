import{B as F}from"./BackButton.dc24f629.js";import{A as j}from"./AppTanStackTable.c1ec335a.js";import{T as q}from"./ToolTip.4330ced3.js";import{c as D}from"./createOnChangeFn.6c41eff7.js";import{d as u,aS as R,n as x,c as E,r as B,bG as O,bH as V}from"./index.c5897af8.js";import{u as G}from"./createSimpleTable.b82dc20a.js";import{S as H}from"./StatisticDisplayCard.125b568d.js";import{u as z}from"./useManufacturers.c4bac09b.js";import{u as I}from"./useProducts.9f689d46.js";import"./chevron-left.0808b01b.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.03f4f6e9.js";import"./exclamation-triangle.54812a62.js";import"./chevron-up.736f4142.js";const y={};y.props={products:{key:"products",required:!0,type:Array},manufacturers:{key:"manufacturers",required:!0,type:Array}};y.setup=(t,a)=>{const e=t,c=u(()=>[...new Set(e.products.map(n=>n.manufacturer.id))]),i=u(()=>[...new Set(e.manufacturers.map(n=>n.id))]),m=u(()=>{const n=[];for(const l of c.value)i.value.includes(l)||n.push(l);return n}),_=u(()=>c.value.map(n=>({manufacturer:v(n)||"",productCount:S(n),categories:k(n),markedDeleted:m.value.includes(n)})));function v(n){var l;return(l=e.products.find(p=>p.manufacturer.id===n))==null?void 0:l.manufacturer.name}function S(n){const l=[];return e.products.map(p=>{p.manufacturer.id===n&&l.push(p)}),l.length}function k(n){const l=[];for(const p of e.products)if(p.manufacturer.id===n)for(const r of p.categories)l.push(r.name);return[...new Set(l)].join(", ")}const f=D(),b=[f.accessor("manufacturer",{header:()=>"Manufacturer",enableColumnFilter:!1}),f.accessor("productCount",{header:()=>"Product Count",enableColumnFilter:!1}),f.accessor("categories",{header:()=>"Product Categories",enableColumnFilter:!1}),f.accessor("markedDeleted",{header:()=>"Marked Deleted?",cell:n=>{if(n.getValue())return R(q,{props:{type:"warn"}},"This manufacturer has been deleted but the associated products have not.")},enableColumnFilter:!1})];return{instance:G(_,b)}};y.components=Object.assign({AppTanStackTable:j},y.components);var L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AppTanStackTable",{attrs:{table:t.instance}})},N=[];const P={};var Q=x(y,L,N,!1,J,null,null,null);function J(t){for(let a in P)this[a]=P[a]}const K=function(){return Q.exports}(),g={};g.props={title:{key:"title",required:!0,type:String},value:{key:"value",required:!0,type:Array},toFormat:{key:"toFormat",required:!1,type:Boolean}};g.setup=(t,a)=>{const e=t,c=B(!1),i=B(4),m=u(()=>c.value?e.value:e.value.slice(0,i.value));function _(v){return v.split("-").join(" ")}return{showAll:c,limit:i,toShow:m,format:_}};g.components=Object.assign({ToggleButton:E},g.components);var U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-4"},[e("BaseTypography",{attrs:{component:"h3",variant:"subtitle3"}},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"space-y-2"},[e("ul",{staticClass:"grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",attrs:{role:"list"}},t._l(t.toShow,function(c){return e("li",{key:c.description},[e("BaseSimpleCard",{staticClass:"flex flex-row items-center justify-between p-4"},[e("BaseTypography",{staticClass:"font-extrabold",attrs:{component:"p",variant:"h4"}},[t._v(" "+t._s(c.number)+" ")]),e("BaseOverline",{staticClass:"text-gray-500",class:t.toFormat?"capitalize":""},[t._v(" "+t._s(t.toFormat?t.format(c.description):c.description)+" ")])],1)],1)}),0),t.value.length>t.limit?e("div",{staticClass:"flex"},[e("BaseLabel",{staticClass:"flex cursor-pointer rounded-lg p-2 text-indigo-500 hover:bg-white hover:text-prime-indigo hover:shadow",attrs:{"aria-label":"Toggle"}},[t._v(" "+t._s(t.showAll?"View Less":"View All")+" "),e("ToggleButton",{class:t.showAll?"rotate-180 transform transition-transform duration-100":"",attrs:{"aria-label":"Categories Toggle"},model:{value:t.showAll,callback:function(c){t.showAll=c},expression:"showAll"}})],1)],1):t._e()])],1)},W=[];const $={};var X=x(g,U,W,!1,Y,null,null,null);function Y(t){for(let a in $)this[a]=$[a]}const Z=function(){return X.exports}(),h={};h.props={products:{key:"products",required:!0,type:Array}};h.setup=(t,a)=>{const e=t,c={title:"Total Manufacturers",component:O},i={title:"Total Products",component:V},m=u(()=>[...new Set(e.products.map(r=>r.manufacturer.id))]),_=u(()=>e.products.filter(r=>r.type)),v=u(()=>{const r=new Map;for(const s of _.value){const o=s.type.id,d=r.get(o);d?d.push(s):r.set(o,[s])}return r}),S=u(()=>{const r=[];for(const s of v.value.values()){const o=k(s);r.push({description:o.type.name,number:s.length})}return r.sort((s,o)=>s.description.localeCompare(o.description))});function k(r){return r.reduce((s,o)=>s.type.id===o.type.id?s:o)}const f=u(()=>e.products.filter(r=>{const{categories:s}=r;return s.filter(o=>o.id)})),b=u(()=>{const r=new Map;for(const s of f.value)for(const o of s.categories){const d=o.id,w=r.get(d);w?w.push(s):r.set(d,[s])}return r}),T=u(()=>{const r=[];for(const[s,o]of b.value.entries())r.push({description:s,number:o.length});return r.sort((s,o)=>s.description.localeCompare(o.description))}),n=u(()=>e.products.filter(r=>r.price)),l=u(()=>{const r=new Map;for(const s of n.value){const o=s.price,d=r.get(o);d?d.push(s):r.set(o,[s])}return r}),p=u(()=>{const r=[];for(const[s,o]of l.value.entries())r.push({description:s,number:o.length});return r.sort((s,o)=>s.description.localeCompare(o.description))});return{manufacturerSummary:c,productSummary:i,manufacturers:m,formattedProductTypes:S,formattedProductCategories:T,formattedProductPrices:p}};h.components=Object.assign({StatisticDisplayCard:H,MarketplaceProductSummary:Z},h.components);var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"grid gap-12"},[e("div",{staticClass:"grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},[e("StatisticDisplayCard",{attrs:{value:t.manufacturerSummary,number:t.manufacturers.length}}),e("StatisticDisplayCard",{attrs:{value:t.productSummary,number:t.products.length}})],1),e("MarketplaceProductSummary",{attrs:{title:"Product Types",value:t.formattedProductTypes}}),e("MarketplaceProductSummary",{attrs:{title:"Product Categories",value:t.formattedProductCategories,"to-format":!0}}),e("MarketplaceProductSummary",{attrs:{title:"Price Ranges",value:t.formattedProductPrices}})],1)},et=[];const M={};var rt=x(h,tt,et,!1,st,null,null,null);function st(t){for(let a in M)this[a]=M[a]}const ot=function(){return rt.exports}(),C={};C.setup=(t,a)=>({queries:[I.list(),z.list()]});C.components=Object.assign({BackButton:F,MarketplaceSummary:ot,AdminCannedMarketplaceTable:K},C.components);var at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"},[e("BackButton",{attrs:{link:"/admin/reports"}}),e("div",{staticClass:"flex flex-col"},[e("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Marketplace")]),e("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[t._v(" Canned Report ")])],1)],1),e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(c){var i=c[0],m=c[1];return[e("div",{staticClass:"flex flex-col space-y-12"},[e("MarketplaceSummary",{attrs:{products:i}}),e("AdminCannedMarketplaceTable",{attrs:{products:i,manufacturers:m}})],1)]}}])})],1)},nt=[];const A={};var ct=x(C,at,nt,!1,ut,null,null,null);function ut(t){for(let a in A)this[a]=A[a]}const kt=function(){return ct.exports}();export{kt as default};