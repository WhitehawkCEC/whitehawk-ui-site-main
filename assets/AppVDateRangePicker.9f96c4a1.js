import{au as c,av as i,aB as l,aj as _,n as p}from"./index.0f72a133.js";const u=c(async()=>await i(()=>import("./date-picker.umd.min.e5d61fd8.js").then(t=>t.d),["assets/date-picker.umd.min.e5d61fd8.js","assets/index.0f72a133.js","assets/index.4a02ca80.css"])),m="modelValue",v="model-value-change",a={prop:m,event:v},n=_({inheritAttrs:!1,model:a});n.props={modelValue:{key:"modelValue",required:!1,type:null}};n.setup=(e,t)=>{const o=e,r=t.emit;return{proxy:l(o,r,a)}};n.components=Object.assign({VDatePicker:u},n.components);var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ClientOnly",[o("VDatePicker",e._g(e._b({attrs:{"is-range":"",value:e.$attrs.value},model:{value:e.proxy,callback:function(r){e.proxy=r},expression:"proxy"}},"VDatePicker",e.$attrs,!1),e.$listeners))],1)},f=[];const s={};var y=p(n,d,f,!1,x,"6b2c3974",null,null);function x(e){for(let t in s)this[t]=s[t]}const D=function(){return y.exports}();export{D as A};
