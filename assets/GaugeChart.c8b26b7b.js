import{d as _,n as d,af as k,aQ as $,bT as L,b as p,az as B,aR as j,aF as M}from"./index.b52a2fa9.js";import{B as T}from"./BasicModal.ecf5ca47.js";import{u as q}from"./useCompanyWishlistItems.a17ba0c1.js";import{c as I}from"./cloneDeep.1a2a958b.js";const g={};g.props={isLoading:{key:"isLoading",required:!1,type:Boolean},boilerplate:{key:"boilerplate",required:!1,type:String}};g.setup=(e,s)=>{const t=e;return{boilerplateArr:_(()=>t.boilerplate?t.boilerplate.split(", "):[])}};var R=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.isLoading?t("div",{staticClass:"skeleton-card relative overflow-hidden"},[e.boilerplate?t("div",[t("div",{staticClass:"flex w-full flex-col space-y-4 rounded-lg bg-white px-8 py-6"},e._l(e.boilerplateArr,function(a,n){return t("div",{key:n},[a==="title"?t("div",[t("div",{staticClass:"mb-3 h-4 w-4/6 rounded-lg bg-gray-300"})]):e._e(),a==="text"?t("div",{staticClass:"space-y-4"},[t("div",{staticClass:"h-3 w-full rounded-lg bg-gray-300"}),t("div",{staticClass:"h-3 w-3/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"h-3 w-4/6 rounded-lg bg-gray-300"})]):e._e(),a==="ratingOverview"?t("div",{staticClass:"flex flex-col items-center justify-start space-y-4 px-8 py-4 lg:flex-row lg:space-x-12 lg:space-y-0"},[e._m(0,!0),e._m(1,!0),t("div",{staticClass:"flex w-24 flex-col space-y-4"},e._l(5,function(l){return t("div",{key:l,staticClass:"h-5 w-full rounded-lg bg-gray-300"})}),0)]):e._e()])}),0)]):e._t("loading")],2):e._t("content")],2)},A=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"h-48 w-48 rounded-full bg-gray-300"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex w-full flex-col space-y-4"},[t("div",{staticClass:"h-3 w-full rounded-lg bg-gray-300"}),t("div",{staticClass:"h-3 w-3/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"h-3 w-4/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"h-3 w-5/6 rounded-lg bg-gray-300"})])}];const x={};var D=d(g,R,A,!1,E,"68341ea8",null,null);function E(e){for(let s in x)this[s]=x[s]}const z=function(){return D.exports}(),i={};i.props={product:{key:"product",required:!0,type:null}};i.setup=(e,s)=>{const t=e;return{imageUrl:_(()=>`${$}/products/${t.product.id}/image`)}};i.components=Object.assign({LazyImg:k},i.components);var F=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"m-4 flex flex-col items-center space-y-4 pt-2 lg:flex-row lg:space-x-12 lg:pt-0"},[t("div",{staticClass:"rounded-lg border border-gray-100 bg-white p-2"},[t("LazyImg",{staticClass:"h-auto w-24 object-contain",attrs:{src:e.imageUrl,alt:`${e.product.name} logo`,options:{w:500,il:!0},"options-placeholder":{w:48}}})],1),t("div",{staticClass:"flex flex-1 flex-col space-y-1"},[t("BaseTypography",{staticClass:"text-gray-700",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" "+e._s(e.product.name)+" ")]),t("ul",{staticClass:"flex flex-col justify-center lg:flex-row lg:flex-wrap lg:justify-start"},e._l(e.product.categories,function(a){return t("li",{key:a.id,staticClass:"m-1"},[t("BaseTypography",{staticClass:"whitespace-nowrap rounded bg-indigo-200 py-1 px-2 uppercase text-prime-indigo sm:px-3",attrs:{variant:"overline",component:"span"}},[e._v(" "+e._s(a.name)+" ")])],1)}),0),t("BaseTypography",{staticClass:"text-gray-600",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.product.description)+" ")])],1)])},U=[];const h={};var W=d(i,F,U,!1,O,null,null,null);function O(e){for(let s in h)this[s]=h[s]}const P=function(){return W.exports}();function S(e){switch(e){case"basic":return"essential";case"balanced":return"balanced";case"advanced":return"premier"}}const c={};c.props={id:{key:"id",required:!0,type:String},bundle:{key:"bundle",required:!0,type:null}};c.setup=(e,s)=>{const t=e,{id:a}=L(t),n=p();B(()=>t.bundle,r=>{n.value=r?[...r.products]:[]},{immediate:!0});const l=j(),f=M(),v=q.update(a);async function o(){if(n.value){a.value?await v.mutateAsync(n.value):l.set(n.value);const r=n.value.length,y=r>=2?"items":"item";f.success(`Added ${r} ${y} to the wish list`)}}return{convertBundleType:S,selected:n,addToWishList:o}};c.components=Object.assign({ProductInfo:P},c.components);var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"flex flex-col"},[t("div",{staticClass:"mx-6 justify-around space-y-2"},[t("BaseTypography",{staticClass:"capitalize text-prime-indigo",attrs:{component:"h1",variant:"h6"}},[e._v(" "+e._s(e.convertBundleType(e.bundle.type))+" ")]),t("BaseTypography",{staticClass:"text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(e.bundle.description)+" ")])],1),t("form",{staticClass:"flex min-h-0 flex-1 flex-col items-start space-y-6 p-0 md:p-4",on:{submit:function(a){return a.preventDefault(),e.addToWishList.apply(null,arguments)}}},[t("ul",{staticClass:"flex flex-col space-y-8 divide-y-2 overflow-y-scroll rounded-md bg-gray-50 shadow-inner sm:divide-y-0 sm:p-4"},e._l(e.bundle.products,function(a){return t("li",{key:a.id,staticClass:"flex flex-shrink-0 items-center px-2 md:space-x-12 md:px-4"},[t("BaseInput",{attrs:{type:"checkbox",value:a},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),t("ProductInfo",{attrs:{product:a}})],1)}),0),t("div",{staticClass:"pb-2 sm:pb-0"},[t("BaseButton",{attrs:{"display-type":"info",disabled:e.selected&&e.selected.length===0}},[e._v(" Add Selected Products to Wish List ")])],1)])])},G=[];const b={};var V=d(c,N,G,!1,Q,null,null,null);function Q(e){for(let s in b)this[s]=b[s]}const H=function(){return V.exports}(),u={};u.props={id:{key:"id",required:!0,type:String},bundle:{key:"bundle",required:!0,type:Array},isLoading:{key:"isLoading",required:!1,type:Boolean,default:!1}};u.setup=(e,s)=>{const t=e,a=p(!1),n=p(),l=p();B(()=>t.bundle,o=>{o&&(l.value=I(o))},{immediate:!0});function f(o){var r;n.value=(r=l.value)==null?void 0:r.find(y=>y.type===o),a.value=!0}function v(){a.value=!1}return{convertBundleType:S,isModalVisible:a,selected:n,bundleData:l,showModal:f,closeModal:v}};u.components=Object.assign({SkeletonLoader:z,BasicModal:T,BundleInfo:H},u.components);var J=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("SkeletonLoader",{attrs:{"is-loading":e.isLoading},scopedSlots:e._u([{key:"loading",fn:function(){return[t("div",{staticClass:"flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4"},e._l(3,function(a){return t("div",{key:a,staticClass:"flex flex-1 flex-col space-y-10 rounded-lg bg-white px-8 py-6"},[t("div",{staticClass:"mx-auto h-6 w-36 rounded-lg bg-gray-300"}),t("div",{staticClass:"space-y-4"},[t("div",{staticClass:"w-5-6 mx-auto h-3 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-4/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-3/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-5/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-4/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-3/6 rounded-lg bg-gray-300"}),t("div",{staticClass:"mx-auto h-3 w-4/6 rounded-lg bg-gray-300"})]),t("div",{staticClass:"h-11 w-full rounded-full bg-gray-300"})])}),0)]},proxy:!0},{key:"content",fn:function(){return[e.bundleData?t("div",[e.selected?t("BasicModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal},scopedSlots:e._u([{key:"body",fn:function(){return[t("BundleInfo",{attrs:{id:e.id,bundle:e.selected}})]},proxy:!0}],null,!1,2366232261)}):e._e(),t("ul",{staticClass:"grid gap-8 xl:grid-cols-3"},e._l(e.bundleData,function(a){return t("li",{key:a.id?a.id:a.type},[t("BaseSimpleCard",{staticClass:"flex h-full flex-col items-center justify-between space-y-8 p-4 sm:px-6 sm:py-5"},[t("BaseTypography",{staticClass:"text-center capitalize",attrs:{component:"h3",variant:"h5"}},[e._v(" "+e._s(e.convertBundleType(a.type))+" Bundle ")]),t("BaseTypography",{staticClass:"text-center text-gray-500",attrs:{component:"p",variant:"p1"}},[e._v(" "+e._s(a.description)+" ")]),t("BaseButton",{staticClass:"whitespace-nowrap",attrs:{type:"button"},on:{click:function(n){return e.showModal(a.type)}}},[e._v(" View the Bundle ")])],1)],1)}),0)],1):e._e()]},proxy:!0}])})},K=[];const C={};var X=d(u,J,K,!1,Y,null,null,null);function Y(e){for(let s in C)this[s]=C[s]}const oe=function(){return X.exports}(),m={};m.props={cyberScore:{key:"cyberScore",required:!0,type:Number}};m.setup=(e,s)=>{const t=e,a=_(()=>new URLSearchParams({needleRotationInDegrees:String(t.cyberScore*180)}));return{url:_(()=>`${$}/generated-images/gauge-chart?${a.value}`)}};var Z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("img",{staticClass:"h-auto w-52 sm:w-64",attrs:{src:e.url,alt:`Cyber Score: ${e.cyberScore}`}})},ee=[];const w={};var te=d(m,Z,ee,!1,se,null,null,null);function se(e){for(let s in w)this[s]=w[s]}const ie=function(){return te.exports}();export{oe as B,ie as G};