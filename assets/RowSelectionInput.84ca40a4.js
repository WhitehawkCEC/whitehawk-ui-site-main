import{c as a,n as p}from"./index.d7842beb.js";const s={};s.props={table:{key:"table",required:!0,type:null}};s.setup=(e,t)=>{const r=e;return{proxy:a({get(){return r.table.getIsAllRowsSelected()},set(o){return r.table.toggleAllRowsSelected(o)}})}};var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseInput",{staticClass:"cursor-pointer",attrs:{type:"checkbox"},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},i=[];const l={};var x=p(s,_,i,!1,v,null,null,null);function v(e){for(let t in l)this[t]=l[t]}const g=function(){return x.exports}(),c={};c.props={row:{key:"row",required:!0,type:null}};c.setup=(e,t)=>{const r=e;return{proxy:a({get(){return r.row.getIsSelected()},set(o){return r.row.toggleSelected(o)}})}};var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseInput",{staticClass:"cursor-pointer",attrs:{type:"checkbox"},model:{value:e.proxy,callback:function(n){e.proxy=n},expression:"proxy"}})},f=[];const u={};var d=p(c,y,f,!1,m,null,null,null);function m(e){for(let t in u)this[t]=u[t]}const h=function(){return d.exports}();export{g as A,h as R};
