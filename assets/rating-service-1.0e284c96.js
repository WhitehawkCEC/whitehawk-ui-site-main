import{P as a}from"./ParentPageWithTabbedMenuItems.557ac5c0.js";import{bZ as i,d as c,n as u}from"./index.9e932179.js";const t={};t.setup=(e,n)=>{const s=i("id");return{links:c(()=>{const r=`/admin/companies/${encodeURIComponent(s.value)}/business-rating/rating-service-1`;return[{to:`${r}`,name:"Targets"},{to:`${r}/settings`,name:"Settings"}]})}};t.components=Object.assign({ParentPageWithTabbedMenuItems:a},t.components);var m=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ParentPageWithTabbedMenuItems",{attrs:{value:e.links}})},_=[];const o={};var l=u(t,m,_,!1,p,null,null,null);function p(e){for(let n in o)this[n]=o[n]}const g=function(){return l.exports}();export{g as default};