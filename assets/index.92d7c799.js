import{d as u,aU as F,n as x,c as j,r as $,bv as q}from"./index.414bc0aa.js";import{A as D}from"./AppTanStackTable.5ea6169b.js";import{T as E}from"./ToolTip.0526f3d6.js";import{c as R}from"./createOnChangeFn.e11e0adc.js";import{u as z}from"./createSimpleTable.167deaed.js";import{C as O}from"./cog-8-tooth.1790889c.js";import{S as V}from"./StatisticDisplayCard.2e750729.js";import{u as G}from"./useManufacturers.88f0a673.js";import{u as L}from"./useProducts.6f5a2a2f.js";import"./magnifying-glass.b7cbe8fe.js";import"./TransitionExpand.51e70a81.js";import"./exclamation-triangle.54812a62.js";import"./chevron-up.736f4142.js";const y={};y.props={products:{key:"products",required:!0,type:Array},manufacturers:{key:"manufacturers",required:!0,type:Array}};y.setup=(t,a)=>{const e=t,c=u(()=>[...new Set(e.products.map(n=>n.manufacturer.id))]),i=u(()=>[...new Set(e.manufacturers.map(n=>n.id))]),m=u(()=>{const n=[];for(const l of c.value)i.value.includes(l)||n.push(l);return n}),_=u(()=>c.value.map(n=>({manufacturer:v(n)||"",productCount:k(n),categories:S(n),markedDeleted:m.value.includes(n)})));function v(n){var l;return(l=e.products.find(p=>p.manufacturer.id===n))==null?void 0:l.manufacturer.name}function k(n){const l=[];return e.products.map(p=>{p.manufacturer.id===n&&l.push(p)}),l.length}function S(n){const l=[];for(const p of e.products)if(p.manufacturer.id===n)for(const r of p.categories)l.push(r.name);return[...new Set(l)].join(", ")}const f=R(),b=[f.accessor("manufacturer",{header:()=>"Manufacturer",enableColumnFilter:!1}),f.accessor("productCount",{header:()=>"Product Count",enableColumnFilter:!1}),f.accessor("categories",{header:()=>"Product Categories",enableColumnFilter:!1}),f.accessor("markedDeleted",{header:()=>"Marked Deleted?",cell:n=>{if(n.getValue())return F(E,{props:{type:"warn"}},"This manufacturer has been deleted but the associated products have not.")},enableColumnFilter:!1})];return{instance:z(_,b)}};y.components=Object.assign({AppTanStackTable:D},y.components);var H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AppTanStackTable",{attrs:{table:t.instance}})},I=[];const B={};var N=x(y,H,I,!1,Q,null,null,null);function Q(t){for(let a in B)this[a]=B[a]}const U=function(){return N.exports}();var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},t.$listeners),[e("path",{attrs:{d:"M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192zm-9.031 3.88a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684zm7 8a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551z"}})])};const K={render:J},g={};g.props={title:{key:"title",required:!0,type:String},value:{key:"value",required:!0,type:Array},toFormat:{key:"toFormat",required:!1,type:Boolean}};g.setup=(t,a)=>{const e=t,c=$(!1),i=$(4),m=u(()=>c.value?e.value:e.value.slice(0,i.value));function _(v){return v.split("-").join(" ")}return{showAll:c,limit:i,toShow:m,format:_}};g.components=Object.assign({ToggleButton:j},g.components);var W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-4"},[e("BaseTypography",{attrs:{component:"h3",variant:"subtitle3"}},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"space-y-2"},[e("ul",{staticClass:"grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",attrs:{role:"list"}},t._l(t.toShow,function(c){return e("li",{key:c.description},[e("BaseSimpleCard",{staticClass:"flex flex-row items-center justify-between p-4"},[e("BaseTypography",{staticClass:"font-extrabold",attrs:{component:"p",variant:"h4"}},[t._v(" "+t._s(c.number)+" ")]),e("BaseOverline",{staticClass:"text-gray-500",class:t.toFormat?"capitalize":""},[t._v(" "+t._s(t.toFormat?t.format(c.description):c.description)+" ")])],1)],1)}),0),t.value.length>t.limit?e("div",{staticClass:"flex"},[e("BaseLabel",{staticClass:"flex cursor-pointer rounded-lg p-2 text-indigo-500 hover:bg-white hover:text-prime-indigo hover:shadow",attrs:{"aria-label":"Toggle"}},[t._v(" "+t._s(t.showAll?"View Less":"View All")+" "),e("ToggleButton",{class:t.showAll?"rotate-180 transform transition-transform duration-100":"",attrs:{"aria-label":"Categories Toggle"},model:{value:t.showAll,callback:function(c){t.showAll=c},expression:"showAll"}})],1)],1):t._e()])],1)},X=[];const M={};var Y=x(g,W,X,!1,Z,null,null,null);function Z(t){for(let a in M)this[a]=M[a]}const tt=function(){return Y.exports}(),h={};h.props={products:{key:"products",required:!0,type:Array}};h.setup=(t,a)=>{const e=t,c={title:"Total Manufacturers",component:O},i={title:"Total Products",component:K},m=u(()=>[...new Set(e.products.map(r=>r.manufacturer.id))]),_=u(()=>e.products.filter(r=>r.type)),v=u(()=>{const r=new Map;for(const s of _.value){const o=s.type.id,d=r.get(o);d?d.push(s):r.set(o,[s])}return r}),k=u(()=>{const r=[];for(const s of v.value.values()){const o=S(s);r.push({description:o.type.name,number:s.length})}return r.sort((s,o)=>s.description.localeCompare(o.description))});function S(r){return r.reduce((s,o)=>s.type.id===o.type.id?s:o)}const f=u(()=>e.products.filter(r=>{const{categories:s}=r;return s.filter(o=>o.id)})),b=u(()=>{const r=new Map;for(const s of f.value)for(const o of s.categories){const d=o.id,T=r.get(d);T?T.push(s):r.set(d,[s])}return r}),w=u(()=>{const r=[];for(const[s,o]of b.value.entries())r.push({description:s,number:o.length});return r.sort((s,o)=>s.description.localeCompare(o.description))}),n=u(()=>e.products.filter(r=>r.price)),l=u(()=>{const r=new Map;for(const s of n.value){const o=s.price,d=r.get(o);d?d.push(s):r.set(o,[s])}return r}),p=u(()=>{const r=[];for(const[s,o]of l.value.entries())r.push({description:s,number:o.length});return r.sort((s,o)=>s.description.localeCompare(o.description))});return{manufacturerSummary:c,productSummary:i,manufacturers:m,formattedProductTypes:k,formattedProductCategories:w,formattedProductPrices:p}};h.components=Object.assign({StatisticDisplayCard:V,MarketplaceProductSummary:tt},h.components);var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"grid gap-12"},[e("div",{staticClass:"grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"},[e("StatisticDisplayCard",{attrs:{value:t.manufacturerSummary,number:t.manufacturers.length}}),e("StatisticDisplayCard",{attrs:{value:t.productSummary,number:t.products.length}})],1),e("MarketplaceProductSummary",{attrs:{title:"Product Types",value:t.formattedProductTypes}}),e("MarketplaceProductSummary",{attrs:{title:"Product Categories",value:t.formattedProductCategories,"to-format":!0}}),e("MarketplaceProductSummary",{attrs:{title:"Price Ranges",value:t.formattedProductPrices}})],1)},rt=[];const P={};var st=x(h,et,rt,!1,at,null,null,null);function at(t){for(let a in P)this[a]=P[a]}const ot=function(){return st.exports}(),C={};C.setup=(t,a)=>({queries:[L.list(),G.list()]});C.components=Object.assign({BackButton:q,MarketplaceSummary:ot,AdminCannedMarketplaceTable:U},C.components);var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"},[e("BackButton",{attrs:{link:"/admin/reports"}}),e("div",{staticClass:"flex flex-col"},[e("BaseTypography",{attrs:{component:"h2",variant:"h5"}},[t._v("Marketplace")]),e("BaseTypography",{staticClass:"uppercase text-gray-600",attrs:{variant:"overline"}},[t._v(" Canned Report ")])],1)],1),e("BaseVueQueries",{attrs:{queries:t.queries},scopedSlots:t._u([{key:"success",fn:function(c){var i=c[0],m=c[1];return[e("div",{staticClass:"flex flex-col space-y-12"},[e("MarketplaceSummary",{attrs:{products:i}}),e("AdminCannedMarketplaceTable",{attrs:{products:i,manufacturers:m}})],1)]}}])})],1)},ct=[];const A={};var ut=x(C,nt,ct,!1,lt,null,null,null);function lt(t){for(let a in A)this[a]=A[a]}const St=function(){return ut.exports}();export{St as default};
