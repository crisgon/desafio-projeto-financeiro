var i=Object.defineProperty;var f=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c=(t,e,n)=>f(t,typeof e!="symbol"?e+"":e,n);import{r,a}from"./index-BP8_t0zE.js";const l=typeof window<"u"?r.useLayoutEffect:r.useEffect;function d(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function R(t){const e=r.useRef(t);return l(()=>{e.current=t}),r.useRef((...n)=>(0,e.current)(...n)).current}function T(...t){return r.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{d(n,e)})},t)}const o={};function E(t,e){const n=r.useRef(o);return n.current===o&&(n.current=t(e)),n}const h=[];function p(t){r.useEffect(t,h)}class s{constructor(){c(this,"currentId",null);c(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});c(this,"disposeEffect",()=>this.clear)}static create(){return new s}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function y(){const t=E(s.create).current;return p(t.disposeEffect),t}function w(t,e){if(t==null)return{};var n={};for(var u in t)if({}.hasOwnProperty.call(t,u)){if(e.includes(u))continue;n[u]=t[u]}return n}const x=a.createContext(null);export{x as T,w as _,y as a,l as b,E as c,R as d,d as s,T as u};
