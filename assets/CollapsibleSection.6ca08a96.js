import{T as r}from"./ToggleButton.1ceb0fe4.js";import{T as a}from"./TransitionExpand.011f84e2.js";import{r as l,n as c}from"./index.d7842beb.js";const o={};o.props={value:{key:"value",required:!1,type:Boolean,default:!1}};o.setup=(n,e)=>({isShowing:l(!1)});o.components=Object.assign({ToggleButton:r,TransitionExpand:a},o.components);var u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"divide-y"},[t("ToggleButton",{scopedSlots:n._u([{key:"text",fn:function(){return[n._t("title")]},proxy:!0}],null,!0),model:{value:n.isShowing,callback:function(i){n.isShowing=i},expression:"isShowing"}}),t("TransitionExpand",[n.isShowing?t("div",[n._t("content")],2):n._e()])],1)},_=[];const s={};var p=c(o,u,_,!1,f,null,null,null);function f(n){for(let e in s)this[e]=s[e]}const g=function(){return p.exports}();export{g as C};
