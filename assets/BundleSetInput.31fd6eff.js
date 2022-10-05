import{D as q}from"./DynamicForm.ae78fcbe.js";import{aC as x,r as D,d as u,n as y,b0 as S,aq as I,bW as f}from"./index.2f8dadb3.js";import{T as j}from"./ToolTip.11c992ac.js";import{O as E}from"./ObjectDisplay.1f0fbfdc.js";const g={};g.props={value:{key:"value",required:!1,type:Array},options:{key:"options",required:!0,type:Array}};g.setup=(e,s)=>{const t=e,n=s.emit,r=x(t,n),c=D(!0),o=u({get(){return t.value},set(p){c?p&&c&&(r.value=p):r.value=[]}});return{confirm:c,selected:o}};var O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"space-y-4"},[t("BaseLabel",{staticClass:"flex items-center space-x-2"},[t("BaseInput",{attrs:{type:"checkbox"},model:{value:e.confirm,callback:function(n){e.confirm=n},expression:"confirm"}}),t("span",[e._v("Assign to companies?")])],1),e.confirm?t("BaseSelect",{staticClass:"w-full",attrs:{multiple:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},e._l(e.options,function(n){return t("option",{key:n.name,domProps:{value:n}},[e._v(" "+e._s(n.name)+" ")])}),0):e._e()],1)},F=[];const $={};var P=y(g,O,F,!1,M,null,null,null);function M(e){for(let s in $)this[s]=$[s]}const w=function(){return P.exports}(),B={};B.props={name:{key:"name",required:!0,type:String}};B.setup=(e,s)=>({});var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"inline-flex items-center whitespace-nowrap rounded bg-green-100 px-2 py-0.5 text-green-800"},[t("BaseTypography",{staticClass:"uppercase",attrs:{variant:"overline"}},[e._v(" "+e._s(e.name)+" ")])],1)},R=[];const C={};var L=y(B,N,R,!1,z,null,null,null);function z(e){for(let s in C)this[s]=C[s]}const V=function(){return L.exports}(),d={};d.props={value:{key:"value",required:!1,type:null},type:{key:"type",required:!0,type:String},options:{key:"options",required:!0,type:Array}};d.setup=(e,s)=>{const t=e,n=s.emit,r=x(t,n),c=u(()=>t.options.map(o=>{var p;return{key:(p=o.id)==null?void 0:p.value,text:o.name,value:o}}));return{proxy:r,formattedOptions:c}};d.components=Object.assign({ToolTip:j,ObjectDisplay:E,ProductCategoryBadge:V,SimpleSelect:S,PlusSvg:I},d.components);var W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseLabel",{staticClass:"space-y-1"},[t("div",{staticClass:"flex items-center space-x-1"},[t("span",[e._v(e._s(e.type))]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"space-y-2"},[e.value?t("div",{staticClass:"flex space-x-1"},e._l(e.value.productCategories,function(n){var r=n.name;return t("ProductCategoryBadge",{key:r,attrs:{name:r}})}),1):e._e(),t("div",{staticClass:"flex items-center space-x-4"},[t("SimpleSelect",{staticClass:"flex-1",attrs:{options:e.formattedOptions},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}}),e.formattedOptions.length===0?[t("BaseIcon",{staticClass:"space-x-1",attrs:{type:"button",size:"small",to:{path:"/admin/bundles/templates/new",query:{bundleType:e.type}}}},[t("PlusSvg",{staticClass:"w-5"})],1)]:e._e()],2)])])},G=[];const h={};var H=y(d,W,G,!1,J,null,null,null);function J(e){for(let s in h)this[s]=h[s]}const K=function(){return H.exports}(),_={};_.props={value:{key:"value",required:!1,type:Array},templates:{key:"templates",required:!1,type:Array}};_.setup=(e,s)=>{const t=e,n=s.emit,r=x(t,n),c=u(()=>{const a=new Map;if(t.templates)for(const l of t.templates){const m=l.bundleType,i=a.get(m);i?i.push(l):a.set(m,[l])}return a});function o(a,l,m){const i=[];return a&&i.push(a),l&&i.push(l),m&&i.push(m),i}const p=u({get(){var a;return(a=t.value)==null?void 0:a.find(l=>l.bundleType===f.BundleType.BASIC)},set(a){r.value=o(a,T.value,b.value)}}),T=u({get(){var a;return(a=t.value)==null?void 0:a.find(l=>l.bundleType===f.BundleType.BALANCED)},set(a){r.value=o(p.value,a,b.value)}}),b=u({get(){var a;return(a=t.value)==null?void 0:a.find(l=>l.bundleType===f.BundleType.ADVANCED)},set(a){r.value=o(p.value,T.value,a)}});return{BundleType:f.BundleType,mappedTemplates:c,essential:p,balanced:T,advanced:b}};_.components=Object.assign({BundleSetTemplateInput:K},_.components);var Q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-4"},[t("BundleSetTemplateInput",{attrs:{type:"Essential",options:e.mappedTemplates.get(e.BundleType.BASIC)||[]},model:{value:e.essential,callback:function(n){e.essential=n},expression:"essential"}}),t("BundleSetTemplateInput",{attrs:{type:"Balanced",options:e.mappedTemplates.get(e.BundleType.BALANCED)||[]},model:{value:e.balanced,callback:function(n){e.balanced=n},expression:"balanced"}}),t("BundleSetTemplateInput",{attrs:{type:"Premier",options:e.mappedTemplates.get(e.BundleType.ADVANCED)||[]},model:{value:e.advanced,callback:function(n){e.advanced=n},expression:"advanced"}})],1)},U=[];const k={};var X=y(_,Q,U,!1,Y,null,null,null);function Y(e){for(let s in k)this[s]=k[s]}const Z=function(){return X.exports}(),v={};v.props={value:{key:"value",required:!1,type:null,default:void 0},companies:{key:"companies",required:!0,type:Array},industries:{key:"industries",required:!0,type:Array},templates:{key:"templates",required:!0,type:Array}};v.setup=(e,s)=>{const t=e,n=s.emit,r=x(t,n),c=u(()=>[{name:"name",label:"Name",component:{is:"BaseInput",attrs:{required:!0}}},{name:"description",label:"Description",component:{is:"BaseTextarea",attrs:{required:!0}}},{name:"industries",label:"Industries",component:{is:S,attrs:{multiple:"",required:!0,options:[...t.industries.map(o=>({text:o.name,value:o}))]}}},{name:"assignedToCompanies",label:"Assign To Companies",component:{is:w,attrs:{options:t.companies}}},{name:"bundleTemplates",label:"Templates",component:{is:Z,attrs:{required:!0,templates:t.templates}}}]);return{proxy:r,schema:c}};v.components=Object.assign({DynamicForm:q},v.components);var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("DynamicForm",{attrs:{schema:e.schema},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},te=[];const A={};var se=y(v,ee,te,!1,ne,null,null,null);function ne(e){for(let s in A)this[s]=A[s]}const ce=function(){return se.exports}();export{ce as B};