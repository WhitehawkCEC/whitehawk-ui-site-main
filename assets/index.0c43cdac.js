import{r as i,bF as u}from"./index.4d0c918d.js";import{t as g}from"./index.af6be564.js";function h(n,o){i(2,arguments);var t=g(n),r=u(o);if(isNaN(r))return new Date(NaN);if(!r)return t;var a=t.getDate(),e=new Date(t.getTime());e.setMonth(t.getMonth()+r+1,0);var s=e.getDate();return a>=s?e:(t.setFullYear(e.getFullYear(),e.getMonth(),a),t)}export{h as a};