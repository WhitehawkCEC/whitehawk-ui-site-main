import{t as r}from"./index.ba0c1225.js";import{r as n}from"./index.9ff333f2.js";function g(m,e){n(2,arguments);var t=r(m).getTime(),i=r(e.start).getTime(),a=r(e.end).getTime();if(!(i<=a))throw new RangeError("Invalid interval");return t>=i&&t<=a}export{g as i};