import{t as r}from"./index.c4ca443c.js";import{am as n}from"./index.575adb5e.js";function g(m,e){n(2,arguments);var t=r(m).getTime(),i=r(e.start).getTime(),a=r(e.end).getTime();if(!(i<=a))throw new RangeError("Invalid interval");return t>=i&&t<=a}export{g as i};