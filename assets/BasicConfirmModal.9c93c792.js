import{c as a,n as A,bJ as C}from"./index.1bdd2344.js";import{B as b}from"./BasicModal.2a2766b4.js";const m={};m.props={title:{key:"title",required:!1,type:String},itemsAffected:{key:"itemsAffected",required:!1,type:Array}};m.setup=(e,r)=>{const t=e;function n(f){return f.split(/(?=[A-Z])/).join(" ")}const c=a(()=>Boolean(t.title==="Preference Questionnaires")),o=a(()=>t.itemsAffected),d=a(()=>{if(t.title==="Preference Questionnaires"&&o.value)for(const f of o.value)return f.split(",")});return{formatTitle:n,checkForQuestionnaires:c,affectedQuestionnaires:d}};var B=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.itemsAffected&&e.itemsAffected.length>0?t("section",{staticClass:"space-y-2"},[e.title?t("BaseTypography",{staticClass:"text-gray-700 capitalize",attrs:{component:"h3",variant:"subtitle3"}},[e._v(" "+e._s(e.formatTitle(e.title))+" ")]):e._e(),e.checkForQuestionnaires?t("ul",{staticClass:"grid grid-cols-2 px-4 pb-6"},[t("div",{staticClass:"pb-2 flex justify-center text-gray-500"},[t("BaseTypography",{attrs:{variant:"p1"}},[e._v("Id")])],1),t("div",{staticClass:"pb-2 flex justify-center text-gray-500"},[t("BaseTypography",{attrs:{variant:"p1"}},[e._v("Name")])],1),e._l(e.affectedQuestionnaires,function(n){return t("li",{key:n,staticClass:"border text-gray-500 flex justify-center"},[t("BaseTypography",{attrs:{variant:"p1"}},[e._v(" "+e._s(n)+" ")])],1)})],2):t("ul",{staticClass:"grid grid-cols-2 gap-1 px-4"},e._l(e.itemsAffected,function(n){return t("li",{key:n},[t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"p1"}},[e._v(" "+e._s(n)+" ")])],1)}),0)],1):e._e()},j=[];const _={};var $=A(m,B,j,!1,w,null,null,null);function w(e){for(let r in _)this[r]=_[r]}const I=function(){return $.exports}(),u={};u.props={name:{key:"name",required:!1,type:String},message:{key:"message",required:!1,type:String},deletionRestrictionMessage:{key:"deletionRestrictionMessage",required:!1,type:String},type:{key:"type",required:!1,type:String},itemsAffected:{key:"itemsAffected",required:!1,type:null}};u.setup=(e,r)=>{const t=e,n=r.emit,c=a(()=>t.itemsAffected),o=a(()=>Array.isArray(c.value)),d=a(()=>t.type?t.type:""),f=a(()=>{var s;if(Array.isArray(t.itemsAffected)&&((s=t.itemsAffected)==null?void 0:s.length)>0||t.type==="Products")return!0}),v=a(()=>{var s;return((s=t.itemsAffected)==null?void 0:s.length)>0&&t.type==="Preference Questionnaires"}),h=a(()=>{const s=[];if(!o.value&&c.value instanceof Object)for(const i of Object.keys(c.value))s.push(i);return s}),x=a(()=>{if(!!t.itemsAffected){if(o.value)return c.value.map(s=>{if(s instanceof Object&&"name"in s){const{name:i}=s;return i}else if(s instanceof Object&&"preferenceId"in s){const{preferenceId:i,preferenceDescription:p}=s;return`
           ${i.value},
           ${p}
        `}else return s});{const s=new Map;for(const[i,p]of Object.entries(c.value)){const y=[];if(Array.isArray(p)){for(const l of p)if(l instanceof Object&&"name"in l){const{name:k}=l;y.push(k)}if(!s.has(i)){const l=[...new Set(y)];s.set(i,l)}}}return s}}});return{emit:n,isValueArray:o,preferenceQuestionnaires:d,checkItemsAffected:f,isView:v,keys:h,affectedItems:x}};u.components=Object.assign({BasicModal:b,WarningSvg:C,BasicItemsAffected:I},u.components);var S=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("BasicModal",{on:{close:function(n){return e.emit("close")}},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"flex flex-col space-y-8 p-2"},[t("div",{staticClass:"flex flex-col items-center justify-center space-y-2"},[t("div",{staticClass:"rounded-full bg-red-500 p-2"},[t("WarningSvg",{staticClass:"h-auto w-5 text-white"})],1),t("BaseTypography",{staticClass:"text-gray-500",attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.deletionRestrictionMessage?e.deletionRestrictionMessage:"Are you sure you want to delete")+" "),e.name?t("span",{staticClass:"text-red-500"},[e._v(e._s(e.name)+"?")]):e._e(),e.checkItemsAffected?t("span",[e._v(" "+e._s(e.message)+" ")]):e._e()])],1),t("div",{staticClass:"justify-start"},[e.isValueArray?t("BasicItemsAffected",{attrs:{"items-affected":e.affectedItems,title:`${e.preferenceQuestionnaires}`}}):t("div",{staticClass:"space-y-4"},e._l(e.keys,function(n){return t("div",{key:n},[t("BasicItemsAffected",{attrs:{title:n,"items-affected":e.affectedItems.get(n)}})],1)}),0)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isView,expression:"!isView"}],staticClass:"self-center mb-8 pb-4"},[t("BaseButton",{attrs:{"display-type":"danger",action:"secondary"},on:{click:function(n){return e.emit("delete")}}},[e._v(" Delete ")])],1)])]},proxy:!0}])})],1)},M=[];const g={};var Q=A(u,S,M,!1,q,null,null,null);function q(e){for(let r in g)this[r]=g[r]}const R=function(){return Q.exports}();export{R as B};
