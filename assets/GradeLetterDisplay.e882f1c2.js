import{c as n,n as o}from"./index.d7842beb.js";const a={byGradeLetter(e){switch(e){case"A+":case"A":case"A-":return{label:"A",colors:"bg-green-100 text-green-700"};case"B+":case"B":case"B-":return{label:"B",colors:"bg-blue-100 text-blue-700"};case"C+":case"C":case"C-":return{label:"C",colors:"bg-yellow-100 text-yellow-700"};case"D+":case"D":case"D-":return{label:"D",colors:"bg-orange-100 text-orange-700"};case"F":return{label:"F",colors:"bg-red-100 text-red-700"};default:return{label:"N/A",colors:"bg-gray-100 text-gray-700"}}},byScore(e){return e>=91?this.byGradeLetter("A"):e>=81?this.byGradeLetter("B"):e>=71?this.byGradeLetter("C"):e>=61?this.byGradeLetter("D"):this.byGradeLetter("F")}},s={};s.props={grade:{key:"grade",required:!0,type:[String,Number]}};s.setup=(e,t)=>{const r=e;return{displayType:n(()=>typeof r.grade=="string"?a.byGradeLetter(r.grade):a.byScore(r.grade))}};var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"inline-flex shrink-0 grow-0 items-center rounded-full px-2 py-1",class:e.displayType.colors},[r("BaseTypography",{attrs:{variant:"subtitle3"}},[e._v(" "+e._s(e.displayType.label)+" ")])],1)},i=[];const l={};var u=o(s,c,i,!1,y,null,null,null);function y(e){for(let t in l)this[t]=l[t]}const d=function(){return u.exports}();export{d as G};
