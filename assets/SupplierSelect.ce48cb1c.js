import{b as c,r as p,n as a,aB as u}from"./index.8e466733.js";import{T as _}from"./TransitionExpand.dea167a3.js";import{T as f}from"./ToolTip.c396e034.js";import{O as m}from"./ObjectDisplay.a2b3ce01.js";const r={};r.setup=(e,n)=>({isShowing:p(!1)});r.components=Object.assign({ToggleButton:c,TransitionExpand:_},r.components);var v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"divide-y"},[t("ToggleButton",{scopedSlots:e._u([{key:"text",fn:function(){return[e._t("title")]},proxy:!0}],null,!0),model:{value:e.isShowing,callback:function(o){e.isShowing=o},expression:"isShowing"}}),t("TransitionExpand",[e.isShowing?t("div",[e._t("content")],2):e._e()])],1)},x=[];const l={};var d=a(r,v,x,!1,g,null,null,null);function g(e){for(let n in l)this[n]=l[n]}const k=function(){return d.exports}(),s={};s.props={value:{key:"value",required:!1,type:null},options:{key:"options",required:!0,type:Array}};s.setup=(e,n)=>{const t=e,o=n.emit;return{proxy:u(t,o)}};s.components=Object.assign({ToolTip:f,ObjectDisplay:m},s.components);var y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("BaseLabel",{staticClass:"flex flex-col p-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-1"},[t("div",{staticClass:"flex flex-row items-center space-x-1"},[t("span",[e._v("Supplier")]),e.value?t("ToolTip",[t("ObjectDisplay",{attrs:{value:e.value}})],1):e._e()],1),t("div",{staticClass:"flex flex-col lg:col-span-2"},[t("BaseSelect",{model:{value:e.proxy,callback:function(o){e.proxy=o},expression:"proxy"}},[t("option",{domProps:{value:null}}),e._l(e.options,function(o){return t("option",{key:o.id,domProps:{value:o}},[e._v(" "+e._s(o.name)+" ")])})],2)],1)])},S=[];const i={};var h=a(s,y,S,!1,T,null,null,null);function T(e){for(let n in i)this[n]=i[n]}const B=function(){return h.exports}();export{k as C,B as S};
