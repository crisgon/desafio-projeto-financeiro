import{f as c}from"./index-B5ZI-g0m.js";import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{u as d}from"./useTheme-BMTtUCFl.js";import{S as g}from"./Select-Db5BhOIU.js";import{M as a}from"./MenuItem-1O-I1bGE.js";import"./index-DRjF_FHU.js";import"./defaultTheme-mBhXcwn4.js";import"./createTheme-D1R654XF.js";import"./useTheme-P0WnTfFu.js";import"./useThemeWithoutDefault-B_QhZNng.js";import"./DefaultPropsProvider-W78wF1-E.js";import"./DefaultPropsProvider-CYvw4nxR.js";import"./Menu-Drp24wet.js";import"./index-oaErF0oH.js";import"./useSlot-Tb876F9z.js";import"./TransitionGroupContext-Cka3UA74.js";import"./Modal-DRx3aTF_.js";import"./utils-CIZV7SKa.js";import"./index-rX-Bn4lm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-C7ih_zxM.js";import"./Grow-BkuH-z7T.js";import"./ListContext-DW6S8im3.js";import"./utils-36DHnGhe.js";import"./useId-BsWED-Le.js";import"./createSvgIcon-DLCvc590.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-BNryu9bX.js";import"./GlobalStyles--lCH50OF.js";import"./ButtonBase-B-nenu63.js";function m({onChange:o,options:s,placeholder:p}){const u=d();return r.jsxs(g,{defaultValue:"none",onChange:e=>o(e),sx:{maxWidth:"355px"},children:[r.jsx(a,{value:"none",sx:{display:"none"},children:r.jsx("em",{children:p})}),s.map(e=>r.jsx(a,{value:e.value,sx:{"&:hover":{backgroundColor:u.palette.primary.light}},children:e.label},e.value))]})}m.__docgenInfo={description:"",methods:[],displayName:"Select",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: SelectChangeEvent) => void",signature:{arguments:[{type:{name:"SelectChangeEvent"},name:"e"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""}}};const J={title:"Components/Select",component:m,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:c()}},t={args:{options:[{value:"1",label:"Câmbio de Moeda"},{value:"2",label:"DOC/TED"},{value:"3",label:"Empréstimo e Financiamento"}],onChange:o=>{console.log(o.target.value)},placeholder:"Selecione o tipo de transação"}};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "1",
      label: "Câmbio de Moeda"
    }, {
      value: "2",
      label: "DOC/TED"
    }, {
      value: "3",
      label: "Empréstimo e Financiamento"
    }],
    onChange: e => {
      console.log(e.target.value);
    },
    placeholder: "Selecione o tipo de transação"
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const K=["Select"];export{t as Select,K as __namedExportsOrder,J as default};
