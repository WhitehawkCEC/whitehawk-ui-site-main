import{t as r}from"./index.0c39b6d0.js";import{r as n}from"./index.7eada971.js";function g(m,e){n(2,arguments);var t=r(m).getTime(),i=r(e.start).getTime(),a=r(e.end).getTime();if(!(i<=a))throw new RangeError("Invalid interval");return t>=i&&t<=a}export{g as i};