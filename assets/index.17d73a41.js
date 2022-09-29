import{b0 as C,aC as S,d as T,n as v,b_ as g,r as i,aB as h,aG as b}from"./index.e7f697eb.js";import{u}from"./useCompanyScorecardTemplates.b70d1b10.js";import{u as k}from"./useScorecardTemplates.0602f4de.js";const o={};o.props={value:{key:"value",required:!0,type:null},templates:{key:"templates",required:!0,type:Array},current:{key:"current",required:!1,type:String}};o.setup=(e,s)=>{const t=e,a=s.emit,r=S(t,a),n=T(()=>[{text:"",value:void 0},...t.templates.map(l=>({text:l.key,value:l}))]);return{proxy:r,templateOptions:n}};o.components=Object.assign({SimpleSelect:C},o.components);var B=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"flex flex-col divide-y"},[t("BaseLabel",{staticClass:"flex flex-col space-y-1 p-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0"},[t("span",[e._v("Select Template")]),t("div",{staticClass:"flex flex-col sm:col-span-2"},[t("SimpleSelect",{attrs:{options:e.templateOptions},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}})],1)]),e.current?t("div",{staticClass:"flex flex-col overflow-hidden p-4 lg:flex-row lg:space-x-2 lg:space-y-0"},[t("BaseTypography",{attrs:{variant:"p1",component:"p"}},[e._v(" Current Scorecard Template on File: ")]),t("span",{staticClass:"truncate text-gray-500"},[e._v(" "+e._s(e.current.split("/")[1])+" ")])],1):e._e()],1)},$=[];const m={};var j=v(o,B,$,!1,q,null,null,null);function q(e){for(let s in m)this[s]=m[s]}const w=function(){return j.exports}(),c={};c.setup=(e,s)=>{const t=g("id"),a=i({key:void 0,lastUpdated:void 0}),r=i(""),n=k.list(),y=u.read(t).data;h(()=>y.value,p=>{p&&(a.value={key:p,lastUpdated:void 0},r.value=p)},{immediate:!0});const _=u.update(t),f=b();async function x(){await _.mutateAsync(a.value),f.success("Template Updated")}return{copy:a,current:r,templates:n,saveTemplate:x}};c.components=Object.assign({CompanyTemplateInput:w},c.components);var O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{component:"h2",variant:"subtitle3"}},[e._v(" Scorecard Template ")]),t("BaseVueQuery",{attrs:{query:e.templates},scopedSlots:e._u([{key:"success",fn:function(a){var r=a.data;return[t("form",{staticClass:"divide-y",on:{submit:function(n){return n.preventDefault(),e.saveTemplate.apply(null,arguments)}}},[t("CompanyTemplateInput",{attrs:{templates:r,current:e.current},model:{value:e.copy,callback:function(n){e.copy=n},expression:"copy"}}),t("div",{staticClass:"p-4"},[t("div",{staticClass:"md:inline-flex"},[t("BaseButton",{staticClass:"w-full md:w-auto",attrs:{"display-type":"info"}},[e._v(" Save ")])],1)])],1)]}}])})],1)},U=[];const d={};var F=v(c,O,U,!1,Q,null,null,null);function Q(e){for(let s in d)this[s]=d[s]}const E=function(){return F.exports}();export{E as default};