import{$ as S,n as f,I as D,c as _,d as y,P as T,r as g,w as F}from"./index.70a21152.js";import{A as N,T as P}from"./AppTanStackTable.c2a94b9b.js";import{c as A}from"./createOnChangeFn.cbd95929.js";import{u as B}from"./createSimpleTable.f34cfc57.js";import{u as j}from"./useFilesDirectory.b03ae18c.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.605b7613.js";import"./chevron-up.736f4142.js";const c={};c.props={value:{key:"value",required:!1,type:String}};c.setup=(e,a)=>({});c.components=Object.assign({DateIsoStringDisplay:S},c.components);var w=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.value?t("div",{staticClass:"flex items-center space-x-1"},[t("DateIsoStringDisplay",{staticClass:"inline-flex items-center px-2 py-0.5 text-xs font-medium uppercase leading-4 tracking-widest",attrs:{value:e.value,format:"date"}})],1):e._e()},U=[];const x={};var k=f(c,w,U,!1,q,null,null,null);function q(e){for(let a in x)this[a]=x[a]}const z=function(){return k.exports}(),l={};l.props={value:{key:"value",required:!0,type:Array},directory:{key:"directory",required:!0,type:String}};l.setup=(e,a)=>{const t=e,n=D(),o=A(),u=_(()=>{const s=[];for(const i of t.value){const{key:r,lastUpdated:C}=i;if(!(r!=null&&r.endsWith(".pdf"))&&!(r!=null&&r.endsWith(".doc"))&&!(r!=null&&r.endsWith(".mp4")))continue;const $="/"+r;s.push({key:$,lastUpdated:C})}return s}),p=[o.accessor("key",{header:()=>"File Name",enableColumnFilter:!1}),o.accessor(s=>s==null?void 0:s.lastUpdated,{id:"lastUpdated",header:()=>"Last Updated",cell:s=>y(z,{props:{value:s.getValue(),format:"date"}}),enableColumnFilter:!1}),o.display({id:"actions",header:"Actions",cell:({row:s})=>y(P,{props:{actions:[{id:"edit",action(){var i;n.push(`/admin/file-upload/document/${encodeURIComponent(t.directory)}/${m((i=s.original)==null?void 0:i.key)}`)}}]}})})];function m(s){const i=s==null?void 0:s.split("/");if(i)return i[2]}const v=B(u,p);return{rows:u,instance:v}};l.components=Object.assign({AppTanStackTable:N},l.components);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.rows?t("div",[t("AppTanStackTable",{attrs:{table:e.instance}})],1):e._e()},R=[];const b={};var W=f(l,I,R,!1,E,null,null,null);function E(e){for(let a in b)this[a]=b[a]}const H=function(){return W.exports}(),d={};d.setup=(e,a)=>{const t=g(),n=g(!1),o=_(()=>{var s;return(s=t.value)==null?void 0:s.name}),u=j.read(o),p=_(()=>"/admin/file-upload/document/new");F(o,s=>{s&&(n.value=!0)});function m(s){return s.replaceAll("-"," ")}return{directories:t,toggleTable:n,directoryNames:o,getdirectoriesFiles:u,addDocumentUrl:p,sanitizedDirectory:m,directoriesName:[{name:"testFolder"},{name:"marketing"},{name:"scorecard-sample"},{name:"sontiq"},{name:"WhiteHawk-products-services"},{name:"WhiteHawk-Videos"}]}};d.components=Object.assign({PlusSvg:T,PagesDocumentsTable:H},d.components);var M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"space-y-2"},[t("div",[t("div",{staticClass:"mb-4 flex justify-between"},[t("BaseTypography",{staticClass:"px-1 pb-6",attrs:{component:"h2",variant:"h6"}},[e._v(" Pages Content Management ")]),t("div",[t("BaseButton",{staticClass:"space-x-1 space-y-2",attrs:{to:e.addDocumentUrl}},[t("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Content ")],1)],1)],1),t("BaseSimpleCard",{staticClass:"p-4"},[t("div",{staticClass:"divide-y divide-gray-300 border-t border-l border-r border-gray-300 bg-gray-100"},[t("BaseTypography",{staticClass:"p-4 text-gray-500",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Select Production Documents Directory "),t("span",{staticClass:"font-extrabold text-red-600"},[e._v(' (Note: All folders file change impact production environment except "TestFolder") ')])]),t("div",{staticClass:"p-4"},[t("BaseLabel",{staticClass:"flex flex-col lg:col-span-3"},[e._v(" Directories "),t("BaseSelect",{staticClass:"capitalize",model:{value:e.directories,callback:function(n){e.directories=n},expression:"directories"}},[t("option",{domProps:{value:null}}),e._l(e.directoriesName,function(n){return t("option",{key:n.name,domProps:{value:n}},[e._v(" "+e._s(e.sanitizedDirectory(n.name))+" ")])})],2)],1)],1)],1),e.toggleTable?t("div",[t("BaseVueQuery",{attrs:{query:e.getdirectoriesFiles},scopedSlots:e._u([{key:"success",fn:function(n){var o=n.data;return[t("div",{staticClass:"flex flex-col space-y-12"},[t("PagesDocumentsTable",{attrs:{value:o,directory:e.directoryNames}})],1)]}}],null,!1,1641520578)})],1):e._e()])],1)])},V=[];const h={};var O=f(d,M,V,!1,K,null,null,null);function K(e){for(let a in h)this[a]=h[a]}const se=function(){return O.exports}();export{se as default};
