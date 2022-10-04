import{aT as b,aE as C,ai as $,aP as v,aQ as _,d as y,aS as A,br as T,n as x,aq as B,b_ as k,r as Q,bk as q,aG as w}from"./index.c5897af8.js";import{A as F,T as P}from"./AppTanStackTable.c1ec335a.js";import{c as j}from"./createOnChangeFn.6c41eff7.js";import{u as D}from"./createSimpleTable.b82dc20a.js";import"./magnifying-glass.b7cbe8fe.js";import"./chevron-left.0808b01b.js";import"./TransitionExpand.03f4f6e9.js";import"./chevron-up.736f4142.js";const f={create(e){const s=b();return C(t=>v.post(`${_}/companies/${e.value}/notes`,t).then(a=>a.data),{onSuccess(){s.invalidateQueries(["companies",e,"notes"],{exact:!0})}})},delete(e){const s=b();return C(t=>v.delete(`${_}/companies/${e.value}/notes/${t.value}`).then(a=>a.data),{onSuccess(){s.invalidateQueries(["companies",e,"notes"],{exact:!0})}})},list(e){return $(["companies",e,"notes"],()=>v.get(`${_}/companies/${e.value}/notes`).then(s=>s.data))}},c={};c.props={value:{key:"value",required:!0,type:Array}};c.setup=(e,s)=>{const t=e,a=s.emit,o=y(()=>t.value),r=j(),l=[r.accessor("createdAt",{header:()=>"Created At",cell:n=>A(T,{props:{value:n.getValue(),format:"date"}}),enableColumnFilter:!1}),r.accessor(n=>n.user.email,{id:"user",header:()=>"Analyst",enableColumnFilter:!1}),r.accessor("text",{header:()=>"Note",enableColumnFilter:!1}),r.display({id:"actions",header:"Actions",cell:({row:n})=>A(P,{props:{actions:[{id:"delete",action(){if(n.original){const{id:d}=n.original;a("delete",d)}}}]}})})];return{instance:D(o,l)}};c.components=Object.assign({AppTanStackTable:F},c.components);var E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("AppTanStackTable",{attrs:{table:e.instance}})},M=[];const S={};var R=x(c,E,M,!1,U,null,null,null);function U(e){for(let s in S)this[s]=S[s]}const V=function(){return R.exports}(),u={};u.setup=(e,s)=>{const t=k("id"),a=f.list(t),o=Q(),r=q(),l=y(()=>{if(r.user){const{id:i,email:m}=r.user;return{id:i,email:m}}}),p=w(),n=f.create(t);async function d(){o.value&&l.value&&await n.mutateAsync({user:l.value,text:o.value})&&p.success("Note created.")}const h=f.delete(t);async function N(i){const m=y(()=>i);await h.mutateAsync(m),p.success("Note(s) removed.")}return{notesQuery:a,note:o,createNote:d,deleteNote:N}};u.components=Object.assign({AnalystNotesTable:V,PlusSvg:B},u.components);var z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"space-y-6"},[t("BaseTablePageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Analyst Notes")]},proxy:!0},{key:"table",fn:function(){return[t("BaseVueQuery",{attrs:{query:e.notesQuery},scopedSlots:e._u([{key:"success",fn:function(a){var o=a.data;return[t("AnalystNotesTable",{attrs:{value:o},on:{delete:e.deleteNote}})]}}])})]},proxy:!0}])}),t("BaseSimpleCard",{staticClass:"divide-y"},[t("BaseTypography",{staticClass:"p-4",attrs:{variant:"subtitle3",component:"h3"}},[e._v(" Add Note ")]),t("form",{staticClass:"divide-y",on:{submit:function(a){return a.preventDefault(),e.createNote.apply(null,arguments)}}},[t("BaseLabel",{staticClass:"grid p-4 lg:grid-cols-2 lg:items-center"},[e._v(" Note "),t("BaseTextarea",{staticClass:"w-full resize-none",attrs:{required:"",rows:"4"},model:{value:e.note,callback:function(a){e.note=a},expression:"note"}})],1),t("div",{staticClass:"p-4"},[t("BaseButton",{staticClass:"space-x-2"},[t("PlusSvg",{staticClass:"w-5"}),t("span",[e._v("Note")])],1)],1)],1)],1)],1)},H=[];const g={};var L=x(u,z,H,!1,O,null,null,null);function O(e){for(let s in g)this[s]=g[s]}const ee=function(){return L.exports}();export{ee as default};