import{r as n}from"./index.0c8230bc.js";function r(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(t){return typeof t}:r=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}function a(e){n(1,arguments);var o=Object.prototype.toString.call(e);return e instanceof Date||r(e)==="object"&&o==="[object Date]"?new Date(e.getTime()):typeof e=="number"||o==="[object Number]"?new Date(e):((typeof e=="string"||o==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}export{a as t};
