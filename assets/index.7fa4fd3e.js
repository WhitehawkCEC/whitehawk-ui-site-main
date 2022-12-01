import{am as v,bG as O}from"./index.575adb5e.js";import{t as b}from"./index.c4ca443c.js";import{a as u}from"./index.7a54c9f6.js";import{g as te}from"./index.87e44ac4.js";function ae(n,t){v(2,arguments);var e=b(n).getTime(),a=O(t);return new Date(e+a)}var re={};function N(){return re}function Y(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Y=function(e){return typeof e}:Y=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(n)}function ne(n){return v(1,arguments),n instanceof Date||Y(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ie(n){if(v(1,arguments),!ne(n)&&typeof n!="number")return!1;var t=b(n);return!isNaN(Number(t))}function oe(n,t){v(2,arguments);var e=O(t);return ae(n,-e)}var ue=864e5;function se(n){v(1,arguments);var t=b(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=e-a;return Math.floor(r/ue)+1}function E(n){v(1,arguments);var t=1,e=b(n),a=e.getUTCDay(),r=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function B(n){v(1,arguments);var t=b(n),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var r=E(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=r.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function de(n){v(1,arguments);var t=B(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=E(e);return a}var le=6048e5;function ce(n){v(1,arguments);var t=b(n),e=E(t).getTime()-de(t).getTime();return Math.round(e/le)+1}function $(n,t){var e,a,r,i,o,s,l,d;v(1,arguments);var f=N(),c=O((e=(a=(r=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&r!==void 0?r:f.weekStartsOn)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=b(n),m=h.getUTCDay(),w=(m<c?7:0)+m-c;return h.setUTCDate(h.getUTCDate()-w),h.setUTCHours(0,0,0,0),h}function V(n,t){var e,a,r,i,o,s,l,d;v(1,arguments);var f=b(n),c=f.getUTCFullYear(),h=N(),m=O((e=(a=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&a!==void 0?a:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,m),w.setUTCHours(0,0,0,0);var D=$(w,t),p=new Date(0);p.setUTCFullYear(c,0,m),p.setUTCHours(0,0,0,0);var P=$(p,t);return f.getTime()>=D.getTime()?c+1:f.getTime()>=P.getTime()?c:c-1}function fe(n,t){var e,a,r,i,o,s,l,d;v(1,arguments);var f=N(),c=O((e=(a=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:f.firstWeekContainsDate)!==null&&a!==void 0?a:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=V(n,t),m=new Date(0);m.setUTCFullYear(h,0,c),m.setUTCHours(0,0,0,0);var w=$(m,t);return w}var me=6048e5;function he(n,t){v(1,arguments);var e=b(n),a=$(e,t).getTime()-fe(e,t).getTime();return Math.round(a/me)+1}var ve={y:function(t,e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return u(e==="yy"?r%100:r,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):u(a+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,r=t.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,a-3));return u(i,e.length)}};const T=ve;var M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ge={G:function(t,e,a){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var r=t.getUTCFullYear(),i=r>0?r:1-r;return a.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,a,r){var i=V(t,r),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var a=B(t);return u(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return u(a,e.length)},Q:function(t,e,a){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,a){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return u(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,a){var r=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,a){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,a,r){var i=he(t,r);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,a){var r=ce(t);return e==="Io"?a.ordinalNumber(r,{unit:"week"}):u(r,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,a){var r=se(t);return e==="Do"?a.ordinalNumber(r,{unit:"dayOfYear"}):u(r,e.length)},E:function(t,e,a){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,a,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var r=t.getUTCDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,a){var r=t.getUTCHours(),i=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var r=t.getUTCHours(),i;switch(r===12?i=M.noon:r===0?i=M.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var r=t.getUTCHours(),i;switch(r>=17?i=M.evening:r>=12?i=M.afternoon:r>=4?i=M.morning:i=M.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return T.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,a){var r=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},k:function(t,e,a){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return G(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return G(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,e,a,r){var i=r._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,a,r){var i=r._originalDate||t,o=i.getTime();return u(o,e.length)}};function X(n,t){var e=n>0?"-":"+",a=Math.abs(n),r=Math.floor(a/60),i=a%60;if(i===0)return e+String(r);var o=t||"";return e+String(r)+o+u(i,2)}function G(n,t){if(n%60===0){var e=n>0?"-":"+";return e+u(Math.abs(n)/60,2)}return C(n,t)}function C(n,t){var e=t||"",a=n>0?"-":"+",r=Math.abs(n),i=u(Math.floor(r/60),2),o=u(r%60,2);return a+i+e+o}const we=ge;var I=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},j=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},be=function(t,e){var a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return I(t,e);var o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",I(r,e)).replace("{{time}}",j(i,e))},ye={p:j,P:be};const Te=ye;var pe=["D","DD"],Ce=["YY","YYYY"];function Oe(n){return pe.indexOf(n)!==-1}function Me(n){return Ce.indexOf(n)!==-1}function A(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var De={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=function(t,e,a){var r,i=De[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};const ke=Pe;function Q(n){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):n.defaultWidth,a=n.formats[e]||n.formats[n.defaultWidth];return a}}var We={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Se={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ue={date:Q({formats:We,defaultWidth:"full"}),time:Q({formats:xe,defaultWidth:"full"}),dateTime:Q({formats:Se,defaultWidth:"full"})};const _e=Ue;var Ye={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ee=function(t,e,a,r){return Ye[t]};const $e=Ee;function x(n){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",r;if(a==="formatting"&&n.formattingValues){var i=n.defaultFormattingWidth||n.defaultWidth,o=e!=null&&e.width?String(e.width):i;r=n.formattingValues[o]||n.formattingValues[i]}else{var s=n.defaultWidth,l=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[l]||n.values[s]}var d=n.argumentCallback?n.argumentCallback(t):t;return r[d]}}var Ne={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Le={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},He={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qe=function(t,e){var a=Number(t),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Xe={ordinalNumber:Qe,era:x({values:Ne,defaultWidth:"wide"}),quarter:x({values:qe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:x({values:Fe,defaultWidth:"wide"}),day:x({values:Le,defaultWidth:"wide"}),dayPeriod:x({values:He,defaultWidth:"wide",formattingValues:Re,defaultFormattingWidth:"wide"})};const Ge=Xe;function S(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,r=a&&n.matchPatterns[a]||n.matchPatterns[n.defaultMatchWidth],i=t.match(r);if(!i)return null;var o=i[0],s=a&&n.parsePatterns[a]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(s)?Ae(s,function(c){return c.test(o)}):Ie(s,function(c){return c.test(o)}),d;d=n.valueCallback?n.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var f=t.slice(o.length);return{value:d,rest:f}}}function Ie(n,t){for(var e in n)if(n.hasOwnProperty(e)&&t(n[e]))return e}function Ae(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e}function Be(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(n.matchPattern);if(!a)return null;var r=a[0],i=t.match(n.parsePattern);if(!i)return null;var o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(r.length);return{value:o,rest:s}}}var Ve=/^(\d+)(th|st|nd|rd)?/i,je=/\d+/i,Je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ke={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ze={any:[/1/i,/2/i,/3/i,/4/i]},et={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},at={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},it={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:Be({matchPattern:Ve,parsePattern:je,valueCallback:function(t){return parseInt(t,10)}}),era:S({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:S({matchPatterns:Ke,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any"}),day:S({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:nt,defaultMatchWidth:"any",parsePatterns:it,defaultParseWidth:"any"})};const ut=ot;var st={code:"en-US",formatDistance:ke,formatLong:_e,formatRelative:$e,localize:Ge,match:ut,options:{weekStartsOn:0,firstWeekContainsDate:1}};const dt=st;var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,mt=/''/g,ht=/[a-zA-Z]/;function Tt(n,t,e){var a,r,i,o,s,l,d,f,c,h,m,w,D,p,P,q,F,L;v(2,arguments);var J=String(t),k=N(),W=(a=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:k.locale)!==null&&a!==void 0?a:dt,H=O((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:k.firstWeekContainsDate)!==null&&o!==void 0?o:(c=k.locale)===null||c===void 0||(h=c.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=O((m=(w=(D=(p=e==null?void 0:e.weekStartsOn)!==null&&p!==void 0?p:e==null||(P=e.locale)===null||P===void 0||(q=P.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&D!==void 0?D:k.weekStartsOn)!==null&&w!==void 0?w:(F=k.locale)===null||F===void 0||(L=F.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var U=b(n);if(!ie(U))throw new RangeError("Invalid time value");var z=te(U),K=oe(U,z),Z={firstWeekContainsDate:H,weekStartsOn:R,locale:W,_originalDate:U},ee=J.match(ct).map(function(g){var y=g[0];if(y==="p"||y==="P"){var _=Te[y];return _(g,W.formatLong)}return g}).join("").match(lt).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return vt(g);var _=we[y];if(_)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Me(g)&&A(g,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Oe(g)&&A(g,t,String(n)),_(K,g,W.localize,Z);if(y.match(ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return ee}function vt(n){var t=n.match(ft);return t?t[1].replace(mt,"'"):n}export{ae as a,V as b,E as c,he as d,ce as e,Tt as f,N as g,dt as h,ie as i,Me as j,Oe as k,Te as l,oe as m,$ as s,A as t};