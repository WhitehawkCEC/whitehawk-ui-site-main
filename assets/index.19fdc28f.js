import{T as A}from"./trash.78f57a7a.js";import{bs as R,an as U,b as f,d as r,aP as E,aQ as L,aK as V,aF as j,az as K,n as M}from"./index.7eada971.js";import{D as $}from"./DirectorySelect.94901c13.js";import{P as O}from"./PageContentInput.47e04ced.js";import{u as Q}from"./useFilesDirectory.10b7b43a.js";import"./ToolTip.de341942.js";import"./ObjectDisplay.0678adbb.js";import"./document-plus.04e3d5d0.js";const m={};m.setup=(t,i)=>{const e=f(),a=r(()=>Boolean(e.value)&&o.value),o=f(),c=f(!1),C=f(!1),x=r(()=>c.value?o.value+"/"+c.value:o.value),b=r(()=>encodeURIComponent(x.value)),h=r(async()=>await E.post(`${L}/admin/files/directory/allFolders/files`,{nestedDirName:""}).then(s=>s.data)),D=r(()=>{var s;if(u.value)return((s=u==null?void 0:u.value)==null?void 0:s.length)>0}),u=r(()=>{const s=d.get(o.value);return[...new Set(s)]}),F=Q.create(b),S=V(),B=j();function w(s){return s.replaceAll("-"," ")}function k(s){const n=s.currentTarget;n.files&&n.files[0]&&(e.value=n.files[0])}K(o,s=>{s&&(C.value=!0)});function P(){e.value=void 0}const d=new Map;function I(s){const n=[];return s&&s.forEach(T=>{var v;const{key:z,lastUpdated:q}=T,l=z.split("/");if((l==null?void 0:l.length)>2){const p=l[0],y=d==null?void 0:d.get(p),g=l[1];y?y.push(g):d.set(p,[g])}if(((v=l[1])==null?void 0:v.length)===0){const p=l[0];n.push({key:p,lastUpdated:q})}}),[...new Set(n)]}async function N(){const s=new FormData;if(e.value)s.append("file",e.value),await F.mutateAsync(s),B.success("Successfully upload document."),S.push("/admin/file-upload");else throw new Error("Invalid Request")}return{fileInput:e,isValidForm:a,directories:o,subDirectories:c,getAllDirectories:h,childFoldersLength:D,allChildFolders:u,sanitizedDirectory:w,selectContent:k,clear:P,allRootFolders:I,addDocument:N}};m.components=Object.assign({BackButton:R,DirectorySelect:$,PageContentInput:O,PlusSvg:U,TrashSvg:A},m.components);var G=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"space-y-8"},[e("div",{staticClass:"flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"},[e("div",[e("BackButton",{attrs:{link:"/admin/file-upload"}})],1)]),e("BaseSimpleCard",{staticClass:"divide-y p-4"},[e("BaseTypography",{staticClass:"pb-4",attrs:{variant:"subtitle3",component:"h3"}},[t._v(" Upload Content ")]),e("div",{staticClass:"divide-gray-300 border-t border-l border-r border-gray-300 bg-gray-100"},[e("div",{staticClass:"divide-y divide-gray-300"},[e("BaseTypography",{staticClass:"lg: col-span-2 flex flex-col p-4 text-gray-500",attrs:{variant:"subtitle3",component:"h3"}},[e("span",[t._v(" Select Production Documents Directory "),e("span",{staticClass:"font-extrabold text-red-600"},[t._v(' (Note: All folders file change impact production environment except "TestFolder") ')])])]),e("div",{staticClass:"p-4"},[e("BasePromise",{attrs:{promise:t.getAllDirectories},scopedSlots:t._u([{key:"success",fn:function(a){var o=a.result;return[e("DirectorySelect",{attrs:{options:t.allRootFolders(o)},model:{value:t.directories,callback:function(c){t.directories=c},expression:"directories"}})]}}])})],1),t.childFoldersLength?e("div",{staticClass:"p-4"},[e("BaseLabel",{staticClass:"flex flex-col pb-4 lg:grid lg:grid-cols-3 lg:items-center"},[e("div",{staticClass:"flex flex-row items-center capitalize"},[t._v(" Select Sub Directory: ")]),e("BaseSelect",{staticClass:"flex flex-col capitalize lg:col-span-2",model:{value:t.subDirectories,callback:function(a){t.subDirectories=a},expression:"subDirectories"}},[e("option",{domProps:{value:null}}),t._l(t.allChildFolders,function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(t.sanitizedDirectory(a))+" ")])})],2)],1)],1):t._e()],1)]),e("form",{staticClass:"divide-y",attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.addDocument.apply(null,arguments)}}},[e("PageContentInput",{staticClass:"mt-4 border-t",on:{"select-file":function(a){return t.selectContent(a)}},model:{value:t.fileInput,callback:function(a){t.fileInput=a},expression:"fileInput"}}),e("div",{staticClass:"space-y-4 p-4 md:space-y-0 md:space-x-2"},[e("BaseButton",{staticClass:"space-x-1",attrs:{disabled:!t.isValidForm}},[e("PlusSvg",{staticClass:"w-5"}),e("span",[t._v("Document")])],1),e("BaseButton",{staticClass:"space-x-1",attrs:{disabled:!t.isValidForm,action:"secondary","display-type":"danger"},on:{click:t.clear}},[e("TrashSvg",{staticClass:"w-5"}),e("span",[t._v("Clear")])],1)],1)],1)],1)],1)},H=[];const _={};var J=M(m,G,H,!1,W,null,null,null);function W(t){for(let i in _)this[i]=_[i]}const le=function(){return J.exports}();export{le as default};