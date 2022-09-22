function s(t){return"Attributes"in t}function c(t,r){const n=s(t)?t.Attributes:t.UserAttributes,e=n==null?void 0:n.find(({Name:i})=>i===r);return e==null?void 0:e.Value}export{c as e};
