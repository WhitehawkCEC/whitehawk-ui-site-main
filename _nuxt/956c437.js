(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1025:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,y=data.class,h=data.staticClass,style=data.style,w=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,O=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[y,h],style:[style,w],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},m)},O),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z","clip-rule":"evenodd"}})]))}}},1026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LicenseUsage=t.LicenseTypeMapLicenseUsage=t.LicenseTypeMapQuantities=t.LicenseBatchUsage=t.AggregateLicenseUsage=void 0;const r=n(468),o=n(468),l=n(468),c=n(468),d=n(468),f=n(476),y=n(488);class h extends d.MessageType{constructor(){super("whitehawk.proto.scorecard_licensing.v1.AggregateLicenseUsage",[{no:1,name:"annual",kind:"message",T:()=>t.LicenseUsage},{no:2,name:"one_time",kind:"message",T:()=>t.LicenseUsage},{no:3,name:"validity",kind:"message",oneof:"validityMaybe",T:()=>y.DateRange}])}create(e){const t={validityMaybe:{oneofKind:void 0}};return globalThis.Object.defineProperty(t,c.MESSAGE_TYPE,{enumerable:!1,value:this}),void 0!==e&&(0,l.reflectionMergePartial)(this,t,e),t}internalBinaryRead(e,n,r,l){let c=null!=l?l:this.create(),d=e.pos+n;for(;e.pos<d;){let[n,l]=e.tag();switch(n){case 1:c.annual=t.LicenseUsage.internalBinaryRead(e,e.uint32(),r,c.annual);break;case 2:c.oneTime=t.LicenseUsage.internalBinaryRead(e,e.uint32(),r,c.oneTime);break;case 3:c.validityMaybe={oneofKind:"validity",validity:y.DateRange.internalBinaryRead(e,e.uint32(),r,c.validityMaybe.validity)};break;default:let u=r.readUnknownField;if("throw"===u)throw new globalThis.Error(`Unknown field ${n} (wire type ${l}) for ${this.typeName}`);let d=e.skip(l);!1!==u&&(!0===u?o.UnknownFieldHandler.onRead:u)(this.typeName,c,n,l,d)}}return c}internalBinaryWrite(e,n,l){e.annual&&t.LicenseUsage.internalBinaryWrite(e.annual,n.tag(1,r.WireType.LengthDelimited).fork(),l).join(),e.oneTime&&t.LicenseUsage.internalBinaryWrite(e.oneTime,n.tag(2,r.WireType.LengthDelimited).fork(),l).join(),"validity"===e.validityMaybe.oneofKind&&y.DateRange.internalBinaryWrite(e.validityMaybe.validity,n.tag(3,r.WireType.LengthDelimited).fork(),l).join();let u=l.writeUnknownFields;return!1!==u&&(1==u?o.UnknownFieldHandler.onWrite:u)(this.typeName,e,n),n}}t.AggregateLicenseUsage=new h;class w extends d.MessageType{constructor(){super("whitehawk.proto.scorecard_licensing.v1.LicenseBatchUsage",[{no:1,name:"id",kind:"message",T:()=>f.Ulid},{no:2,name:"validity",kind:"message",T:()=>y.DateRange},{no:3,name:"counts",kind:"message",T:()=>t.LicenseTypeMapLicenseUsage}])}create(e){const t={};return globalThis.Object.defineProperty(t,c.MESSAGE_TYPE,{enumerable:!1,value:this}),void 0!==e&&(0,l.reflectionMergePartial)(this,t,e),t}internalBinaryRead(e,n,r,l){let c=null!=l?l:this.create(),d=e.pos+n;for(;e.pos<d;){let[n,l]=e.tag();switch(n){case 1:c.id=f.Ulid.internalBinaryRead(e,e.uint32(),r,c.id);break;case 2:c.validity=y.DateRange.internalBinaryRead(e,e.uint32(),r,c.validity);break;case 3:c.counts=t.LicenseTypeMapLicenseUsage.internalBinaryRead(e,e.uint32(),r,c.counts);break;default:let u=r.readUnknownField;if("throw"===u)throw new globalThis.Error(`Unknown field ${n} (wire type ${l}) for ${this.typeName}`);let d=e.skip(l);!1!==u&&(!0===u?o.UnknownFieldHandler.onRead:u)(this.typeName,c,n,l,d)}}return c}internalBinaryWrite(e,n,l){e.id&&f.Ulid.internalBinaryWrite(e.id,n.tag(1,r.WireType.LengthDelimited).fork(),l).join(),e.validity&&y.DateRange.internalBinaryWrite(e.validity,n.tag(2,r.WireType.LengthDelimited).fork(),l).join(),e.counts&&t.LicenseTypeMapLicenseUsage.internalBinaryWrite(e.counts,n.tag(3,r.WireType.LengthDelimited).fork(),l).join();let u=l.writeUnknownFields;return!1!==u&&(1==u?o.UnknownFieldHandler.onWrite:u)(this.typeName,e,n),n}}t.LicenseBatchUsage=new w;class v extends d.MessageType{constructor(){super("whitehawk.proto.scorecard_licensing.v1.LicenseTypeMapQuantities",[{no:1,name:"annual",kind:"scalar",T:5},{no:2,name:"one_time",kind:"scalar",T:5}])}create(e){const t={annual:0,oneTime:0};return globalThis.Object.defineProperty(t,c.MESSAGE_TYPE,{enumerable:!1,value:this}),void 0!==e&&(0,l.reflectionMergePartial)(this,t,e),t}internalBinaryRead(e,t,n,r){let l=null!=r?r:this.create(),c=e.pos+t;for(;e.pos<c;){let[t,r]=e.tag();switch(t){case 1:l.annual=e.int32();break;case 2:l.oneTime=e.int32();break;default:let u=n.readUnknownField;if("throw"===u)throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);let c=e.skip(r);!1!==u&&(!0===u?o.UnknownFieldHandler.onRead:u)(this.typeName,l,t,r,c)}}return l}internalBinaryWrite(e,t,n){0!==e.annual&&t.tag(1,r.WireType.Varint).int32(e.annual),0!==e.oneTime&&t.tag(2,r.WireType.Varint).int32(e.oneTime);let u=n.writeUnknownFields;return!1!==u&&(1==u?o.UnknownFieldHandler.onWrite:u)(this.typeName,e,t),t}}t.LicenseTypeMapQuantities=new v;class m extends d.MessageType{constructor(){super("whitehawk.proto.scorecard_licensing.v1.LicenseTypeMapLicenseUsage",[{no:1,name:"annual",kind:"message",T:()=>t.LicenseUsage},{no:2,name:"one_time",kind:"message",T:()=>t.LicenseUsage}])}create(e){const t={};return globalThis.Object.defineProperty(t,c.MESSAGE_TYPE,{enumerable:!1,value:this}),void 0!==e&&(0,l.reflectionMergePartial)(this,t,e),t}internalBinaryRead(e,n,r,l){let c=null!=l?l:this.create(),d=e.pos+n;for(;e.pos<d;){let[n,l]=e.tag();switch(n){case 1:c.annual=t.LicenseUsage.internalBinaryRead(e,e.uint32(),r,c.annual);break;case 2:c.oneTime=t.LicenseUsage.internalBinaryRead(e,e.uint32(),r,c.oneTime);break;default:let u=r.readUnknownField;if("throw"===u)throw new globalThis.Error(`Unknown field ${n} (wire type ${l}) for ${this.typeName}`);let d=e.skip(l);!1!==u&&(!0===u?o.UnknownFieldHandler.onRead:u)(this.typeName,c,n,l,d)}}return c}internalBinaryWrite(e,n,l){e.annual&&t.LicenseUsage.internalBinaryWrite(e.annual,n.tag(1,r.WireType.LengthDelimited).fork(),l).join(),e.oneTime&&t.LicenseUsage.internalBinaryWrite(e.oneTime,n.tag(2,r.WireType.LengthDelimited).fork(),l).join();let u=l.writeUnknownFields;return!1!==u&&(1==u?o.UnknownFieldHandler.onWrite:u)(this.typeName,e,n),n}}t.LicenseTypeMapLicenseUsage=new m;class O extends d.MessageType{constructor(){super("whitehawk.proto.scorecard_licensing.v1.LicenseUsage",[{no:1,name:"quantity",kind:"scalar",T:5},{no:2,name:"available",kind:"scalar",T:5},{no:3,name:"used",kind:"scalar",T:5}])}create(e){const t={quantity:0,available:0,used:0};return globalThis.Object.defineProperty(t,c.MESSAGE_TYPE,{enumerable:!1,value:this}),void 0!==e&&(0,l.reflectionMergePartial)(this,t,e),t}internalBinaryRead(e,t,n,r){let l=null!=r?r:this.create(),c=e.pos+t;for(;e.pos<c;){let[t,r]=e.tag();switch(t){case 1:l.quantity=e.int32();break;case 2:l.available=e.int32();break;case 3:l.used=e.int32();break;default:let u=n.readUnknownField;if("throw"===u)throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);let c=e.skip(r);!1!==u&&(!0===u?o.UnknownFieldHandler.onRead:u)(this.typeName,l,t,r,c)}}return l}internalBinaryWrite(e,t,n){0!==e.quantity&&t.tag(1,r.WireType.Varint).int32(e.quantity),0!==e.available&&t.tag(2,r.WireType.Varint).int32(e.available),0!==e.used&&t.tag(3,r.WireType.Varint).int32(e.used);let u=n.writeUnknownFields;return!1!==u&&(1==u?o.UnknownFieldHandler.onWrite:u)(this.typeName,e,t),t}}t.LicenseUsage=new O},470:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},471:function(e,t,n){var r=n(490);e.exports=function(source,e){if(null==source)return{};var t,i,n=r(source,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(source,t)&&(n[t]=source[t])}return n},e.exports.__esModule=!0,e.exports.default=e.exports},486:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,"a",(function(){return r}))},490:function(e,t){e.exports=function(source,e){if(null==source)return{};var t,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(n[t]=source[t]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="spinner",o=[],l="f110",c="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z";t.definition={prefix:"fas",iconName:r,icon:[512,512,o,l,c]},t.faSpinner=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=o,t.unicode=l,t.svgPathData=c,t.aliases=o},498:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,y=data.class,h=data.staticClass,style=data.style,w=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,O=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[y,h],style:[style,w],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},m)},O),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"}})]))}}},502:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,"a",(function(){return r}))},524:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l}));Math.pow(10,8);var r=6e4,o=36e5,l=1e3},632:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(524),o=n(486),l=n(502);function c(e,t){var n;Object(o.a)(1,arguments);var r=Object(l.a)(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var c,d=w(e);if(d.date){var f=v(d.date,r);c=m(f.restDateString,f.year)}if(!c||isNaN(c.getTime()))return new Date(NaN);var y,h=c.getTime(),time=0;if(d.time&&(time=T(d.time),isNaN(time)))return new Date(NaN);if(!d.timezone){var O=new Date(h+time),k=new Date(0);return k.setFullYear(O.getUTCFullYear(),O.getUTCMonth(),O.getUTCDate()),k.setHours(O.getUTCHours(),O.getUTCMinutes(),O.getUTCSeconds(),O.getUTCMilliseconds()),k}return y=j(d.timezone),isNaN(y)?new Date(NaN):new Date(h+time+y)}var d={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,y=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,h=/^([+-])(\d{2})(?::?(\d{2}))?$/;function w(e){var t,n={},r=e.split(d.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],d.timeZoneDelimiter.test(n.date)&&(n.date=e.split(d.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=d.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function v(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,l=r[2]?parseInt(r[2]):null;return{year:null===l?o:100*l,restDateString:e.slice((r[1]||r[2]).length)}}function m(e,t){if(null===t)return new Date(NaN);var n=e.match(f);if(!n)return new Date(NaN);var r=!!n[4],o=O(n[1]),l=O(n[2])-1,c=O(n[3]),d=O(n[4]),y=O(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,y)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=r.getUTCDay()||7,l=7*(t-1)+n+1-o;return r.setUTCDate(r.getUTCDate()+l),r}(t,d,y):new Date(NaN);var h=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(U[t]||(D(e)?29:28))}(t,l,c)&&function(e,t){return t>=1&&t<=(D(e)?366:365)}(t,o)?(h.setUTCFullYear(t,l,Math.max(o,c)),h):new Date(NaN)}function O(e){return e?parseInt(e):1}function T(e){var t=e.match(y);if(!t)return NaN;var n=k(t[1]),o=k(t[2]),l=k(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,o,l)?n*r.a+o*r.b+1e3*l:NaN}function k(e){return e&&parseFloat(e.replace(",","."))||0}function j(e){if("Z"===e)return 0;var t=e.match(h);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),l=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,l)?n*(o*r.a+l*r.b):NaN}var U=[31,null,31,30,31,30,31,31,30,31,30,31];function D(e){return e%400==0||e%4==0&&e%100!=0}},719:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,y=data.class,h=data.staticClass,style=data.style,w=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,O=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[y,h],style:[style,w],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},m)},O),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z","clip-rule":"evenodd"}})]))}}},915:function(e,t,n){n(47),n(38),n(46),n(24),n(63),n(39),n(64);var r=n(470),o=n(471),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}n(121),e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),d=t.children,f=void 0===d?[]:d,y=data.class,h=data.staticClass,style=data.style,w=data.staticStyle,v=data.attrs,m=void 0===v?{}:v,O=o(data,l);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){r(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[y,h],style:[style,w],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},m)},O),f.concat([n("path",{attrs:{"fill-rule":"evenodd",d:"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z","clip-rule":"evenodd"}})]))}}}}]);