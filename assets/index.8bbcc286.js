import{t as r}from"./index.a248017f.js";import{an as m}from"./index.06ea6359.js";function g(n,e){m(2,arguments);var t=r(n).getTime(),i=r(e.start).getTime(),a=r(e.end).getTime();if(!(i<=a))throw new RangeError("Invalid interval");return t>=i&&t<=a}export{g as i};