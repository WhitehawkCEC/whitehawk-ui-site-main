import{br as K,n as N,d as c,aS as z,aP as I,aQ as L,an as G,b,az as J,aF as X}from"./index.e627960d.js";import{B as Y}from"./BasicConfirmModal.02bcd316.js";import{D as Z}from"./DirectorySelect.78d02050.js";import{A as ee,T as te}from"./AppTanStackTable.9bda351a.js";import{c as se}from"./createOnChangeFn.7e56f0c4.js";import{F as ae}from"./FileSaver.min.d1d8f9ff.js";import{u as le}from"./createSimpleTable.7ef16907.js";import{u as U}from"./useFilesDirectory.d887e052.js";import"./BasicModal.3b76deee.js";import"./ToolTip.0f824417.js";import"./ObjectDisplay.f4d3d119.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-up.736f4142.js";const x={};x.props={value:{key:"value",required:!1,type:String}};x.setup=(e,n)=>({});x.components=Object.assign({DateIsoStringDisplay:K},x.components);var ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.value?t("div",{staticClass:"flex items-center space-x-1"},[t("DateIsoStringDisplay",{staticClass:"inline-flex items-center px-2 py-0.5 text-xs font-medium uppercase leading-4 tracking-widest",attrs:{value:e.value,format:"date"}})],1):e._e()},oe=[];const E={};var ie=N(x,ne,oe,!1,re,null,null,null);function re(e){for(let n in E)this[n]=E[n]}const ce=function(){return ie.exports}(),D={};D.props={value:{key:"value",required:!0,type:Array}};D.setup=(e,n)=>{const t=e,l=n.emit,i=se(),f=c(()=>{var r;const a=[];for(const u of t.value){const{key:o,lastUpdated:p}=u;if(!(o!=null&&o.endsWith(".pdf"))&&!(o!=null&&o.endsWith(".doc"))&&!(o!=null&&o.endsWith(".mp4")))continue;const d=o.split("/"),g=d?(r=d[2])==null?void 0:r.split("|"):"",h=c(()=>{var C,S,m,F;if(g){const y=(C=g[0])==null?void 0:C.split("-");return y?((S=y[1])==null?void 0:S.trim())+"/"+((m=y[2])==null?void 0:m.trim())+"/"+((F=y[0])==null?void 0:F.trim()):""}});d.length===2?a.push({key:o,lastUpdated:p}):a.push({key:d[1]+"/"+d[2],lastUpdated:p,published:h==null?void 0:h.value})}return a}),v=[i.accessor("key",{header:()=>"File Name",enableColumnFilter:!1}),i.accessor("published",{header:()=>"Published  Date",filterFn:"equals"}),i.accessor(a=>a==null?void 0:a.lastUpdated,{id:"lastUpdated",header:()=>"Last Updated",cell:a=>z(ce,{props:{value:a.getValue(),format:"date"}}),enableColumnFilter:!1}),i.display({id:"actions",header:"Actions",cell:({row:a})=>z(te,{props:{actions:[{id:"edit",to:`/admin/file-upload/document/${a.original.key}`},{id:"download",async action(){var p;const{data:r}=await I.get(`${L}/admin/files/directory/${a.original.key}`,{responseType:"blob"}),u=(p=a.original)==null?void 0:p.key,o=B(u);ae.exports.saveAs(r,o)}},{id:"archive",action(){l("archive",a.original)},isDisabled:c(()=>{const r=a.original.key.split("/");return!(r[0]=="financial-reports"||r[0]=="testFolder"||r[0]=="nested folder")})}]}})})];function B(a){const r=a==null?void 0:a.split("/");if(r)return r[1]}const P=le(f,v);return{rows:f,instance:P}};D.components=Object.assign({AppTanStackTable:ee},D.components);var ue=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.rows?t("div",[t("AppTanStackTable",{attrs:{table:e.instance}})],1):e._e()},de=[];const R={};var pe=N(D,ue,de,!1,fe,null,null,null);function fe(e){for(let n in R)this[n]=R[n]}const me=function(){return pe.exports}(),T={};T.setup=(e,n)=>{const t=b(),l=b(!1),i=b(!1),f=b(),v=c(()=>l.value?t.value+"/"+l.value:t.value),B=c(()=>encodeURIComponent(v==null?void 0:v.value)),P=c(()=>U.list(B)),a=c(async()=>await I.post(`${L}/admin/files/directory/allFolders/files`,{nestedDirName:""}).then(s=>s.data)),r=c(()=>{var s;if(u.value)return((s=u==null?void 0:u.value)==null?void 0:s.length)>0}),u=c(()=>{const s=m.get(t.value);return[...new Set(s)]}),o=c(()=>{var s;return(s=f.value)==null?void 0:s.key.split("/")}),p=c(()=>{var s;return(s=o.value)==null?void 0:s[0]}),d=c(()=>{var s;return(s=o.value)==null?void 0:s[1]}),g=c(()=>t.value!==p.value?p.value?t.value+"/"+p.value:t.value:l.value?t.value+"/"+l.value:t.value),h=U.delete(g,d);J(v,s=>{s&&u.value.length===0?i.value=!0:i.value=!1});function C(s){s&&(f.value=s),A.value=!0}function S(s){return s.replaceAll("-"," ")}const m=new Map;function F(s){const $=[];return s&&s.forEach(Q=>{var M;const{key:W,lastUpdated:H}=Q,_=W.split("/");if((_==null?void 0:_.length)>2){const k=_[0],q=m==null?void 0:m.get(k),j=_[1];q?q.push(j):m.set(k,[j])}if(((M=_[1])==null?void 0:M.length)===0){const k=_[0];$.push({key:k,lastUpdated:H})}}),[...new Set($)]}const y=X();async function O(){if(g.value&&d.value)await h.mutateAsync(),w(),y.success(`Archived ${d.value} successfully`);else throw new Error("Invalid Request");window.location.reload()}const A=b(!1);function w(){A.value=!1}return{directories:t,subDirectories:l,toggleTable:i,selected:f,directoryName:v,getdirectoriesFiles:P,getAllDirectories:a,childFoldersLength:r,allChildFolders:u,fileName:d,setPayload:C,sanitizedDirectory:S,allRootFolders:F,deleteDocument:O,isModalVisible:A,closeModal:w}};T.components=Object.assign({PlusSvg:G,DirectorySelect:Z,PagesDocumentsTable:me,BasicConfirmModal:Y},T.components);var ve=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"space-y-2"},[t("div",[t("div",{staticClass:"mb-4 flex justify-between"},[t("BaseTypography",{staticClass:"px-1 pb-6",attrs:{component:"h2",variant:"h6"}},[e._v(" Pages Content Management ")]),t("div",[t("BaseButton",{staticClass:"space-x-1 space-y-2",attrs:{to:"/admin/file-upload/document/new"}},[t("PlusSvg",{staticClass:"mr-1 w-5 xl:w-5"}),e._v(" Document ")],1)],1)],1),t("BaseSimpleCard",{staticClass:"p-4"},[t("div",{staticClass:"divide-y divide-gray-300 border-t border-l border-r border-gray-300 bg-gray-100"},[t("BaseTypography",{staticClass:"p-4 text-gray-500",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Select Production Documents Directory "),t("span",{staticClass:"font-extrabold text-red-600"},[e._v(' (Note: All folders file change impact production environment except "TestFolder") ')])]),t("div",[t("BasePromise",{attrs:{promise:e.getAllDirectories},scopedSlots:e._u([{key:"success",fn:function(l){var i=l.result;return[t("DirectorySelect",{attrs:{options:e.allRootFolders(i)},model:{value:e.directories,callback:function(f){e.directories=f},expression:"directories"}})]}}])})],1),e.childFoldersLength?t("div",{staticClass:"p-4"},[t("BaseLabel",{staticClass:"flex flex-col pb-4 lg:grid lg:grid-cols-3 lg:items-center"},[t("div",{staticClass:"flex flex-row items-center capitalize"},[e._v(" Select Sub Directory: ")]),t("BaseSelect",{staticClass:"flex flex-col capitalize lg:col-span-2",model:{value:e.subDirectories,callback:function(l){e.subDirectories=l},expression:"subDirectories"}},[t("option",{domProps:{value:null}}),e._l(e.allChildFolders,function(l){return t("option",{key:l,domProps:{value:l}},[e._v(" "+e._s(e.sanitizedDirectory(l))+" ")])})],2)],1),t("BaseVueQuery",{attrs:{query:e.getdirectoriesFiles},scopedSlots:e._u([{key:"success",fn:function(l){var i=l.data;return[t("div",{staticClass:"flex flex-col space-y-12"},[t("PagesDocumentsTable",{attrs:{value:i},on:{archive:e.setPayload}})],1)]}}],null,!1,954134757)})],1):e._e()],1),e.toggleTable?t("div",{staticClass:"mt-4"},[t("BaseVueQuery",{attrs:{query:e.getdirectoriesFiles},scopedSlots:e._u([{key:"success",fn:function(l){var i=l.data;return[t("div",{staticClass:"flex flex-col space-y-12"},[t("PagesDocumentsTable",{attrs:{value:i,name:e.directoryName}})],1)]}}],null,!1,2185955263)})],1):e._e(),e.isModalVisible&&e.selected?t("BasicConfirmModal",{attrs:{name:e.fileName},on:{delete:e.deleteDocument,close:e.closeModal}}):e._e()],1)],1)])},_e=[];const V={};var ye=N(T,ve,_e,!1,ge,null,null,null);function ge(e){for(let n in V)this[n]=V[n]}const we=function(){return ye.exports}();export{we as default};
